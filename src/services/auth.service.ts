import UserInterface from '../types/user.type'
import userModel from '../models/user.model'

export const createUser = async (payload: UserInterface) => {
  return await userModel.create(payload)
}
