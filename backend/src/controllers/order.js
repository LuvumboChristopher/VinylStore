const Order = require('../models/Order')
const asyncWrapper = require('../utils/asyncWrapper')

module.exports.createOrder = asyncWrapper( async (req, res, next) => {
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.userId,
    })

    const order = await newOrder.save()
    res.status(201).send({ message: 'New Order Created', order })
  } catch (err) {
    console.log(err)
  }
})

module.exports.getOrder = asyncWrapper(async (req, res, next) => {
  const order = await Order.find({ _id: req.userId })
  if (!order) {
    return res.status(404).json({message: 'No orders'})
  }
  res.status(200).json(order[0])
})

module.exports.payOrder = asyncWrapper(async (req, res, next) => {
  const order = await Order.find({ user: req.userId })
  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    }

    const updatedOrder = await order.save()
    res.send({ message: 'Order Paid', order: updatedOrder })
  } else {
    res.status(404).send({ message: 'Order Not Found' })
  }
})

module.exports.getUserOrders  = asyncWrapper(async (req, res, next) => {
  try {
    const orders = await Order.find({})
      res.status(200).json(orders)
  } catch(err){
    res.status(404).json({messagge:'Not found'})
  }
})
