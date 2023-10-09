import { models } from '../../data/models'
import { Model, ModelDTO } from '../../utils/types'

export const updateModel = (modelId: number, modelData: ModelDTO): Model => {
  const modelIndex = models.findIndex(({ id }) => id === modelId)

  const modelToUpdate = models[modelIndex]
  modelToUpdate.name = modelData.name
  modelToUpdate.description = modelData.description
  modelToUpdate.modelFile = modelData.modelFile

  return modelToUpdate
}
