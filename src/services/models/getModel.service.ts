import { Model, RequestError } from '../../utils/types'
import { modelRepository } from '../../repositories/models/index'

/**
 * Service that return a model with a specified ID
 * @param {number} modelId - ID from the model
 * @returns {Model} - Returns a model with the specified ID
 */
export const getModel = (modelId: number): Model => {
  const model = modelRepository.getModel(modelId)
  if (model === undefined) {
    throw new RequestError({
      message: 'The model does not exist, try with another id',
      status: 404
    })
  }
  return model
}
