const router = require('express').Router()
const { isAuth } = require('../middlewares/isAuth')
const {
  createOrder,
  getOrder,
  getUserOrders,
  payOrder,
} = require('../controllers/order')

router.route('/').post(isAuth, createOrder)
router.route('/:userId').get( isAuth, getUserOrders)
router.route('/:id').get(isAuth, getOrder)
router.route('/:id/pay').put(isAuth, payOrder)

module.exports = router
