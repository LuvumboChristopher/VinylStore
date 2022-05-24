const User = require('../models/User')
const jwt = require('jsonwebtoken')

// Gestion des erreurs lies a la authetification
const handleErrors = (err) => {
  let errors = { email: '', password: '' }

  // incorrect email
  if (err.message === "L'adresse mail ne pas enregistré") {
    errors.email = "L'adresse mail ne pas enregistré"
  }

  // incorrect password
  if (err.message === 'Mot de passe incorrect') {
    errors.password = 'Mot de passe incorrect'
  }

  if (err.message.includes('Please enter an email')) {
    errors.email = 'Please enter an email'
  }

  if (err.message.includes('Please enter a password')) {
    errors.password = 'Please enter a password'
    console.log('hey')
  }

  if (err.message.includes('Please enter a valid email')) {
    errors.email = 'Please enter a valid email'
  }

  if (err.code === 11000) {
    errors.email = 'Cet email est déjà enregistré'
    return errors
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }

  return errors
}

// Creation de JWT
const createToken = (user) => {
  return jwt.sign({ ...user }, process.env.JWT, {
    expiresIn: '30d',
  })
}

// Controlllers
module.exports.signup = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.create({ email, password })
    const token = createToken(user)
    // Envoie de JWT via les Cookies
    res.cookie('jwt', token, { httpOnly: true })
    res.status(201).json({ user: user._id })
  } catch (err) {
    // Envoi des erreurs au client
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    // Creation du token du nouveau utilisateur
    const token = createToken(user)
    res.cookie('jwt', token, { httpOnly: true })
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token,
    })
  } catch (err) {
    // Envoi des erreurs au client
    const errors = handleErrors(err)
    res.status(400).json({errors})
  }
}
