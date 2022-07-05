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
    errors.email = 'Veuillez entrer une adresse e-mail'
  }

  if (err.message.includes('Please enter a password')) {
    errors.password = 'Veuillez entrer un mot de passe'
  }

  if (err.message.includes('Please enter a valid email')) {
    errors.email = 'Veuillez entrer une adresse électronique valide'
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

const maxAge = 3 * 24 * 60 * 60
const createToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT, {
    expiresIn: maxAge,
  })
}

// Controlllers
module.exports.signup = async (req, res) => {
  const { email, password } = req.body

  try {
    await User.create({ email, password })
    res.status(201)
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    const token = createToken(user._id, user.isAdmin)

    res
      .cookie('jwt', token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(200)
      .json({
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin
      })

  } catch (err) {
    console.error(err)
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

module.exports.logout = async (req, res) => {
  return res
    .clearCookie('jwt')
    .status(200)
    .json({ message: 'Successfully logged out 😏 🍀' })
}

module.exports.protected = async (req, res) => {
  return res.json({ userId: req.userId, userIsAdmin: req.userIsAdmin })
}
