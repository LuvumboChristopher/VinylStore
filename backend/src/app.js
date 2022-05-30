const express = require('express')
const connectDB = require('./db/connect')
const { checkUser } = require('./middlewares/authMiddleware')
const products = require('./routes/product')
const orders = require('./routes/order')
const auth = require('./routes/auth')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()



let corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use('/api/v1/products', products)
app.use('/api/v1/orders', orders)
app.use('/api/v1/auth', auth)

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

