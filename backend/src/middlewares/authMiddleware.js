const jwt = require('jsonwebtoken')

//Gestion des roles avec de Middlewares
const requiereAuth = (req, res, next) => {
  const authorization = req.headers.authorization

  if (authorization) {

    const token = authorization.slice(7, authorization.length)
    
    jwt.verify(token, process.env.JWT, (err, decodedToken) => {
      if (err) {
        res.status(401).send({ message: 'invalid token'})
      } else {
        next()
      }
    })
  } 
}

module.exports = { requiereAuth }
