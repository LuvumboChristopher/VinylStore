const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: Number,
      default: '',
      match: [/^((\+)33|0)[1-9](\d{2}){4}$/, 'Please enter a valid number'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      match: [
        /^.*(?=.{8,19})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
        'Le mot de passe doit comporter entre 8 et 19 lettres et doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial.',
      ],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user
    }
    throw Error('Mot de passe incorrect')
  }
  throw Error("L'adresse mail ne pas enregistré")
}

const User = mongoose.model('User', userSchema)

module.exports = User
