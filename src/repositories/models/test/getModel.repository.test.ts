import { describe, expect, test } from '@jest/globals'
import { getModel } from '../getModel.repository'
import { models } from '../../../data/models'

describe('getModel Repository', () => {
  test('return the correct model correspond to the specified ID', () => {
    const modelId = 2
    expect(getModel(modelId)).toBe(models[modelId - 1])
  })
  test('return a undefined when do not find a model with a specifid ID', () => {
    const modelId = 100
    expect(getModel(modelId)).toBe(undefined)
  })
})
