import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    size: {
      type: String
    }
  },
  { timestamps: true }
) // timestamp true maka akan ditambahkan createdAt dan updatedAt seperti sequelize

const productModel = mongoose.model('Product', productSchema)

export default productModel
