import { models } from '../../data/models'
import { Model, ModelDTO } from '../../utils/types'

/**
 * Repository to update a model from the collection with a specified ID
 * @param {number} modelId - ID for the model to update
 * @param {ModelDTO} modelData - Object with the model's propierties to update
 * @returns {Model}- Returns the model with the updated propierties
 */
export const updateModel = (modelId: number, modelData: ModelDTO): Model => {
  const modelIndex = models.findIndex(({ id }) => id === modelId)

  const modelToUpdate = models[modelIndex]
  modelToUpdate.name = modelData.name
  modelToUpdate.description = modelData.description
  modelToUpdate.modelFile = modelData.modelFile

  return modelToUpdate
}
