import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import ProductInterface from '../types/product.type'

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Error service getProductFromDB')
      logger.error(error)
    })
}

export const addProductToDB = async (payload: ProductInterface) => {
  return await productModel.create(payload)
}

export const getProductByIdFromDB = async (id: string) => {
  return await productModel.findOne({ product_id: id })
}

export const updateProductById = async (id: string, payload: ProductInterface) => {
  const result = await productModel.findOneAndUpdate(
    {
      product_id: id
    },
    {
      $set: payload
    }
  )
  return result
}

export const deleteProductById = async (id: string) => {
  const result = await productModel.findOneAndDelete({
    product_id: id
  })
  return result
}
