import { modelRepository } from '../../repositories/models'
import { Model } from '../../utils/types'
import { toNewModel } from '../../utils/validates'

/**
 * Service that handle the model's data and create the new model
 * @param {any} modelData - object with the propierties to handle for the creation of the new model
 * @param {number} projectId - ID for the project that owns the model
 * @returns {Model} - Return the created model
 */
export const createModel = (modelData: any, projectId: number): Model => {
  const newModel = toNewModel(modelData)
  return modelRepository.createModel(newModel, projectId)
}
