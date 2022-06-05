const router = require('express').Router()
const {
  createOrder,
  getOrder,
  getUserOrders,
  payOrder,
} = require('../controllers/order')

router.route('/').post(createOrder)
router.route('/mine').get(getUserOrders)
router.route('/:id').get(getOrder)
router.route('/:id/pay').put(payOrder)

module.exports = router
