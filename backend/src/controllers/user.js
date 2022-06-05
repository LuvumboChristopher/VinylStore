const User = require('../models/User')
const asyncWrapper = require('../middlewares/asyncWrapper')

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


// Controlllers
module.exports.updateUser = asyncWrapper(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8)
    }

    const updatedUser = await user.save()
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    })
  } else {
    res.status(404).send({ message: 'User not found' })
  }
})

