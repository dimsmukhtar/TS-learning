import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import {
  addProductToDB,
  getProductByIdFromDB,
  getProductFromDB,
  updateProductById,
  deleteProductById
} from '../services/product.service'

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

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { error, value } = updateProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - update', error.details[0].message)
    return res.status(422).json({
      success: false,
      message: error.details[0].message
    })
  }
  try {
    const result = await updateProductById(id, value)
    if (result) {
      logger.info('Success update by id')
      return res.status(200).json({
        success: true,
        message: 'Success update product by id'
      })
    } else {
      logger.error('Data not found')
      return res.status(404).json({
        success: false,
        message: 'Data not found'
      })
    }
  } catch (error) {
    logger.error('ERR = product - update', error)
    return res.status(422).json({
      success: false,
      message: error
    })
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const result = await deleteProductById(id)
    if (result) {
      logger.info('Success delete by id')
      return res.status(200).json({
        success: true,
        message: 'Success delete product by id'
      })
    } else {
      logger.error('Data not found')
      return res.status(404).json({
        success: false,
        message: 'Data not found'
      })
    }
  } catch (error) {
    logger.error('ERR = product - delete', error)
    return res.status(422).json({
      success: false,
      message: error
    })
  }
}
