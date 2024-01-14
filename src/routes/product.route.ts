import { Router } from 'express'
import { createProduct, getAllProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getAllProduct)
ProductRouter.post('/', createProduct)
