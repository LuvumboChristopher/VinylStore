const handleErrors = (err) => {
  let errors = { email: '', password: '' }

  if (err.message === "L'adresse mail ne pas enregistré") {
    errors.email = "L'adresse mail ne pas enregistré"
  }

  if (err.message === 'Mot de passe incorrect') {
    errors.password = 'Mot de passe incorrect'
  }

  if (err.message.includes('Please enter an email')) {
    errors.email = 'Veuillez entrer une adresse e-mail'
  }

  if (err.message.includes('Please enter a valid password')) {
    errors.password = 'Veuillez entrer un mot de passe valide'
  }

  if (err.message.includes('Please enter a password')) {
    errors.password = 'Veuillez entrer un mot de passe'
  }

  if (err.message.includes('Please enter a valid email')) {
    errors.email = 'Veuillez saisir une adresse électronique valide'
  }

  if (err.code === 11000) {
    errors.email = 'Cet email est déjà enregistré'
    return errors
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }

  return errors
}

module.exports = handleErrors
