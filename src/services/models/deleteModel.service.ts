import { modelServices } from '.'
import { modelRepository } from '../../repositories/models'

/**
 * Service to delete a model with a specified ID
 * @param {number} modelId - ID for the model to delete
 */
export const deleteModel = (modelId: number): void => {
  const model = modelServices.getModel(modelId)
  modelRepository.deleteModel(model.id)
}
