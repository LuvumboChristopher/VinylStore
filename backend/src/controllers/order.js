const Order = require('../models/Order')
const asyncWrapper = require('../middlewares/asyncWrapper');

module.exports.createOrder = asyncWrapper(async (req, res) => {
    console.log(req.body.orderItems)
    console.log(req.body.orderItems)
    try {
        const newOrder = new Order({
            orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.body.user._id,
          });
          
          const order = await newOrder.save();
          res.status(201).send({ message: 'New Order Created', order });
    } catch (err) {
        console.error(err)
    }
    
  
  })