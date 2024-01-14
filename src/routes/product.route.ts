import { Router } from 'express'
import { createProduct, getAllProduct, getProductById } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getAllProduct)
ProductRouter.get('/:id', getProductById)
ProductRouter.post('/', createProduct)
