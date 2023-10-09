import { models } from '../../data/models'

/**
 * Repository that delete a model from the collection with a specified ID
 * @param {number} modelId - ID for the model to delete
 */
export const deleteModel = (modelId: number): void => {
  const modelIndex = models.findIndex(({ id }) => id === modelId)

  models.splice(modelIndex, 1)
}
