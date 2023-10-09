import { modelRepository } from '../../repositories/models'
import { Model } from '../../utils/types'

export const getAllModels = (): Model[] => {
  const modelList = modelRepository.getAllModels()
  return modelList
}
