const jwt = require('jsonwebtoken')

const isAuth = async(req, res, next) => {
  const authorization = await req.headers.authorization
  if(authorization) {
    const token = await authorization.slice(7, authorization.length)
    jwt.verify(token, process.env.JWT, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' })
      } else {
        req.token = decode
        next()
      }
    })
  } else {
    res.status(401).send({ message: 'No Token' })
  }
}

module.exports = isAuth
