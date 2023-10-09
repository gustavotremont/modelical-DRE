import { modelServices } from '.'
import { modelRepository } from '../../repositories/models'

export const deleteModel = (modelId: number): void => {
  const model = modelServices.getModel(modelId)
  modelRepository.deleteModel(model.id)
}
