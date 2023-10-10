import { describe, expect, test } from '@jest/globals'
import { updateModel } from '../updateModel.repository'
import { ModelToCreateDTO } from '../../../utils/types'
import { models } from '../../../data/models'

describe('updateModel Repository', () => {
  test('return the correct updated model', () => {
    const modelId = 5
    const modelData: ModelToCreateDTO = {
      name: 'string',
      description: 'string',
      modelFile: 'string'
    }
    expect(updateModel(modelId, modelData)).toBe(models[modelId - 1])
  })
})
