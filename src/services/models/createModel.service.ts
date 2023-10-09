import { modelRepository } from '../../repositories/models'
import { Model } from '../../utils/types'
import { toNewModel } from '../../utils/validates'

export const createModel = (modelData: any, projectId: number): Model => {
  const newModel = toNewModel(modelData)
  return modelRepository.createModel(newModel, projectId)
}
