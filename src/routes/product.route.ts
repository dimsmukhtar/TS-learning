import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validation/product.validation'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Product check success')
  return res.status(200).json({
    success: true,
    message: 'Success',
    data: [
      {
        id: 1,
        name: 'Samsung S20'
      }
    ]
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).json({
      success: false,
      message: error.details[0].message
    })
  }
  logger.info('Create product success')
  return res.status(200).json({
    success: true,
    message: 'Success add new product',
    data: value
  })
})
