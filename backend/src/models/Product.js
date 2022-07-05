const mongoose = require('mongoose')

const genreShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
)

const productsShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'must provide a title'],
      unique: true,
    },
    author: {
      type: String,
      required: [true, 'must provide an author'],
    },
    year: {
      type: Number,
      required: [true, 'must provide a year'],
    },
    genre: [
      {
        genreName: {
          type: String,
          require: true,
        },
      },
    ],
    price: {
      type: Number,
      required: [true, 'must provide an price'],
    },
    img: {
      type: String,
      required: [true, 'must provide an image'],
    },
    description: {
      type: String,
      required: [true, 'must provide a description'],
    },
    stock: {
      type: Number,
      required: [true, 'must provide a description'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productsShema)
