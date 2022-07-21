const express = require('express')
const connectDB = require('./db/connect')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const products = require('./routes/product')
const orders = require('./routes/order')
const auth = require('./routes/auth')
const user = require('./routes/user')

const port = process.env.PORT || 5000
const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/v1/products', products)
app.use('/api/v1/orders', orders)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', user)

app.get('/api/v1/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

// Demarage du server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
