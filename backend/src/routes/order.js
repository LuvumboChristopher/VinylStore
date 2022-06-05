const router = require('express').Router()
const {createOrder} = require('../controllers/order')
const { requiereAuth } = require('../middlewares/authMiddleware')

router.post('/', requiereAuth, createOrder)

module.exports = router
 