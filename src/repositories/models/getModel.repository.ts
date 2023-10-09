import { models } from '../../data/models'
import { Model } from '../../utils/types'

/**
 * Repository that return a model from the collection with a specified ID
 * @param {number} modelId - ID for the model to return
 * @returns {Model | undefined} - return a model or an undefined, in case there isn't a model with the specified ID
 */
export const getModel = (modelId: number): Model | undefined => {
  return models.find(({ id }) => id === modelId)
}
