import { Router, Request, Response, NextFunction } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
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
