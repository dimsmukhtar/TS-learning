import Joi from 'joi'
import { ProductInterface } from '../interface/product.interface'

export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    size: Joi.string().required()
  })

  return schema.validate(payload)
}
