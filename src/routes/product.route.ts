import { Router } from 'express'
import { createProduct, getAllProduct, getProductById, updateProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getAllProduct)
ProductRouter.get('/:id', getProductById)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:id', updateProduct)
