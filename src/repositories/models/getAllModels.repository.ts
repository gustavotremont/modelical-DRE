import { models } from '../../data/models'
import { Model } from '../../utils/types'

export const getAllModels = (): Model[] => {
  return models
}
