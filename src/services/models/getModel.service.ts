import { Model } from '../../utils/types'
import { modelRepository } from '../../repositories/models/index'

export const getModel = (modelId: number): Model => {
  return modelRepository.getModel(modelId)
}
