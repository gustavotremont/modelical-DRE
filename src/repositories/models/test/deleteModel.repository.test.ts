import { describe, expect, test } from '@jest/globals'
import { deleteModel } from '../deleteModel.repository'
import { getAllModels } from '../getAllModels.repository'

describe('deleteModel Repository', () => {
  test('the model was delete succesful', () => {
    const modelId = 5
    deleteModel(modelId)

    expect(getAllModels().find(({ id }) => id === modelId)).toBe(undefined)
  })
  test('any model is not delete if the model id is incorrect', () => {
    const modelId = 100
    const beforeDeleteLength: number = getAllModels().length
    deleteModel(modelId)

    const afterDeleteLength: number = getAllModels().length

    expect(afterDeleteLength).toBe(beforeDeleteLength)
  })
})
