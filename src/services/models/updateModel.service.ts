import { modelRepository } from '../../repositories/models'
import { modelServices } from '.'
import { Model } from '../../utils/types'
import { toNewModelToUpdate } from '../../utils/validates'

/**
 * Service that handle the model's data and update the model with the specified ID
 * @param {number} modelId - ID from the model to update
 * @param {any} modelData - object with the propierties to handle for the update of the model with the specified ID
 * @returns {Model} - Returns the updated model
 */
export const updateModel = (modelId: number, modelData: any): Model => {
  const model = modelServices.getModel(modelId)
  const newModelData = toNewModelToUpdate(modelData)
  const updatedModel = modelRepository.updateModel(model.id, newModelData)

  return updatedModel
}
