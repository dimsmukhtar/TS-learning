import Joi from 'joi'
import UserInterface from '../types/user.type'

export const registerUserValidation = (payload: UserInterface) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    name: Joi.string().required(),
    password: Joi.string().min(8).max(15).required(),
    role: Joi.string().allow('', null)
  })

  return schema.validate(payload)
}
