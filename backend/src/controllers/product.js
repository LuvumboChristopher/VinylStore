const Product = require('../models/Product')
const asyncWrapper = require('../utils/asyncWrapper')

module.exports.getAllProducts = asyncWrapper(async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch(err){
      res.status(500).send({ message: err.messagge})
  }
})

module.exports.getProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID  } = req.params
  const product = await Product.find({ _id: productID })
  if (!product) {
    return next(createCustomError(`No product with id : ${productID}`, 404))
  }
  res.status(200).json(product[0])
})

module.exports.createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({ product })
})

module.exports.updateProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params

  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!product) {
    return next(createCustomError(`No product with id : ${productID}`, 404))
  }

  res.status(200).json({ product })
})

module.exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOneAndDelete({ _id: productID })
  if (!product) {
    return next(createCustomError(`No product with id : ${productID}`, 404))
  }
  res.status(200).json({ product })
})
