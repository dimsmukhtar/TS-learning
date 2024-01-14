import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import { ProductInterface } from '../interface/product.interface'

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

export const createProductToDB = async (payload: ProductInterface) => {
  return await productModel
    .create(payload)
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Error service createProductToDB')
      logger.error(error)
    })
}
