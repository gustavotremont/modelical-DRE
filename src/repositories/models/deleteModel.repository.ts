import { models } from '../../data/models'

export const deleteModel = (modelId: number): void => {
  const modelIndex = models.findIndex(({ id }) => id === modelId)

  models.splice(modelIndex, 1)
}
