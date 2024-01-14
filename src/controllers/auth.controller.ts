import { Request, Response, NextFunction } from 'express'
import { registerUserValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { hashing } from '../utils/hasing'
import { createUser } from '../services/auth.service'

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  req.body.user_id = uuidv4()
  const { error, value } = registerUserValidation(req.body)
  if (error) {
    logger.error('ERR = auth - register', error.details[0].message)
    return res.status(422).json({
      success: false,
      message: error.details[0].message
    })
  }
  try {
    value.password = `${hashing(value.password)}`

    await createUser(value)
    logger.info('Register user: Success')
    return res.status(201).json({
      success: true,
      message: 'Success register user'
    })
  } catch (error) {
    logger.error('ERR Server = auth - register', error)
    return res.status(422).json({
      success: false,
      message: error
    })
  }
}
