import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Product check success')
  res.status(200).json({
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
  logger.info('Create product success')
  res.status(200).json({
    success: true,
    message: 'Success add new product',
    data: req.body
  })
})
