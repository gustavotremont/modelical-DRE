import { models } from '../../data/models'
import { Model } from '../../utils/types'

/**
 * Repository that return an array of all the models in the collection, or an Array of models from a project if a specified ID is provided
 * @param {number} projectId - Optional ID from a project, to get all models for that specified project
 * @returns {Model[]} - Returns an array of project
 */
export const getAllModels = (projectId = 0): Model[] => {
  if (projectId > 0) {
    return models.filter((model) => model.projectId === projectId)
  }

  return models
}
