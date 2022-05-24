const jwt = require('jsonwebtoken')
const User = require('../models/User')

//Gestion des roles avec de Middlewares
const requiereAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.JWT, (err, decodedToken) => {
      if (err) {
        console.error(err.message)
        res.redirect('/login')
      } else {
        console.log(decodedToken)
        next()
      }
    })
  } else {
    res.redirect('/login')
  }
}


const requiereAdmin = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.JWT, (err, decodedToken) => {
      if (err) {
        console.error(err.message)
        res.redirect('/login')
      } else if(token.isAdmin === true) {
        next()
      }
    })
  } else {
    res.redirect('/login')
  }
}


// Volver a mirar que hace el locals
const checkUser = (req, res, next)=> {
  const token = req.cookies.jwt

  if(token){
    jwt.verify(token, process.env.JWT, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null
        next()
      } else {
        let user = await User.findById(decodedToken.id)
        res.locals.user = user
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
}


module.exports = { requiereAuth, checkUser, requiereAdmin }
