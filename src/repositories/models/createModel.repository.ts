import { models } from '../../data/models'
import { Model, ModelDTO } from '../../utils/types'

/**
 * Repository that add a new Model to a project
 * @param {ModelDTO} modelData - Object with the propierties to create the project
 * @param {Number} projectId - ID for the project to create a new model
 * @returns {Model} - Returns the new created model
 */
export const createModel = (modelData: ModelDTO, projectId: number): Model => {
  const newId =
    models.reduce(function (acc, cur) {
      if (acc < cur.id) return (acc = cur.id)
      return acc
    }, 0) + 1

  const newModel = {
    id: newId,
    ...modelData,
    projectId
  }
  models.push(newModel)

  return newModel
}
