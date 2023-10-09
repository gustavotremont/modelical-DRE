import { Model, RequestError } from '../../utils/types'
import { modelRepository } from '../../repositories/models/index'

export const getModel = (modelId: number): Model => {
  const model = modelRepository.getModel(modelId)
  if (model === undefined) {
    throw new RequestError({
      message: 'The model does not exist, try with another id'
    })
  }
  return model
}
