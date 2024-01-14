import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health check success')
  res.status(200).json({
    success: true,
    message: 'Success'
  })
})
