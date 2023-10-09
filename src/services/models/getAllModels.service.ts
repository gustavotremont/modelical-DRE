import { modelRepository } from '../../repositories/models'
import { Model } from '../../utils/types'

/**
 * Service to returns all the models
 * @returns {Model[]} - Return an array of models
 */
export const getAllModels = (): Model[] => {
  const modelList = modelRepository.getAllModels()
  return modelList
}
