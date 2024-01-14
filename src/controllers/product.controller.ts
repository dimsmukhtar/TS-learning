import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { addProductToDB, getProductByIdFromDB, getProductFromDB } from '../services/product.service'

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).json({
      success: false,
      message: error.details[0].message
    })
  }

  try {
    await addProductToDB(value)
    logger.info('Create product success')
    return res.status(201).json({
      success: true,
      message: 'Success add new product'
    })
  } catch (error) {
    logger.error('ERR = product - create', error)
    return res.status(422).json({
      success: false,
      message: error
    })
  }
}

export const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
  const products: any = await getProductFromDB()
  logger.info('Success get all product')
  return res.status(200).json({
    success: true,
    message: 'Success',
    data: products
  })
}

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  if (id) {
    const product = await getProductByIdFromDB(id)
    logger.info('Success get product by id')
    return res.status(200).json({
      success: true,
      message: 'Success get product by id',
      data: product
    })
  } else {
    const products: any = await getProductFromDB()
    logger.info('Success get all product')
    return res.status(200).json({
      success: true,
      message: 'Success get all producs',
      data: products
    })
  }
}
