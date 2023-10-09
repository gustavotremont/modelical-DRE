import { models } from '../../data/models'
import { Model, ModelDTO } from '../../utils/types'

export const createModel = (modelData: ModelDTO, projectId: number): Model => {
  const newId =
    models.reduce(function (acc, cur) {
      if (acc < cur.id) return (acc = cur.id)
      return acc
    }, 0) + 1

  const newModel = {
    id: newId,
    ...modelData,
    projectId
  }
  models.push(newModel)

  return newModel
}
