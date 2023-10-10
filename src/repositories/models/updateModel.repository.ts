import { models } from '../../data/models'
import { Model, ModelToUpdateDTO } from '../../utils/types'

/**
 * Repository to update a model from the collection with a specified ID
 * @param {number} modelId - ID for the model to update
 * @param {ModelToUpdateDTO} modelData - Object with the model's propierties to update
 * @returns {Model}- Returns the model with the updated propierties
 */
export const updateModel = (
  modelId: number,
  modelData: ModelToUpdateDTO
): Model => {
  const modelIndex = models.findIndex(({ id }) => id === modelId)

  const modelToUpdate = models[modelIndex]

  if ('name' in modelData && modelData.name !== undefined) {
    modelToUpdate.name = modelData.name
  }
  if ('description' in modelData && modelData.description !== undefined) {
    modelToUpdate.description = modelData.description
  }
  if ('modelFile' in modelData && modelData.modelFile !== undefined) {
    modelToUpdate.modelFile = modelData.modelFile
  }

  return modelToUpdate
}
