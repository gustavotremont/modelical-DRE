import { models } from '../../data/models'
import { Model, RequestError } from '../../utils/types'

export const getModel = (modelId: number): Model => {
  const model = models.find(({ id }) => id === modelId)
  if (model == null) {
    throw new RequestError({
      message: 'The model does not exist, try with another id'
    })
  }
  return model
}
