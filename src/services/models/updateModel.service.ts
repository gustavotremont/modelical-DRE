import { modelRepository } from '../../repositories/models'
import { modelServices } from '.'
import { Model, ModelDTO } from '../../utils/types'

export const updateModel = (modelId: number, modelData: ModelDTO): Model => {
  const model = modelServices.getModel(modelId)

  const updatedModel = modelRepository.updateModel(model.id, modelData)

  return updatedModel
}
