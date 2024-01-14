import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { getProductFromDB } from '../services/product.service'

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).json({
      success: false,
      message: error.details[0].message
    })
  }
  // const dataProductCreated = await createProductToDB(req.body)
  logger.info('Create product success')
  return res.status(200).json({
    success: true,
    message: 'Success add new product',
    data: value
  })
}

export const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getProductFromDB()
  logger.info('Product get all product')
  return res.status(200).json({
    success: true,
    message: 'Success',
    data: products
  })
}
