import { models } from '../../data/models'
import { Model } from '../../utils/types'

export const getAllModels = (projectId = 0): Model[] => {
  if (projectId > 0) {
    return models.filter((model) => model.projectId === projectId)
  }

  return models
}
