import { Router } from 'express'

import { registerUser } from '../controllers/auth.controller'

export const UserRouter: Router = Router()

UserRouter.post('/register', registerUser)
