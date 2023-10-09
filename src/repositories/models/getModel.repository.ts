import { models } from '../../data/models'
import { Model } from '../../utils/types'

export const getModel = (modelId: number): Model | undefined => {
  return models.find(({ id }) => id === modelId)
}
