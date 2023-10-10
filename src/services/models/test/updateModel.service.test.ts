import { describe, expect, test } from '@jest/globals'
import { updateModel } from '../updateModel.service'
import { models } from '../../../data/models'
import { ModelToCreateDTO, RequestError } from '../../../utils/types'

const modelId = 5
const modelData: ModelToCreateDTO = {
  name: 'string',
  description: 'string',
  modelFile: 'string'
}

describe('updateModel Service', () => {
  test('return the correct updated model', () => {
    expect(updateModel(modelId, modelData)).toBe(models[modelId - 1])
  })
  test('should throw a error when the model id does not exist in the model collection', () => {
    expect.assertions(2)
    try {
      updateModel(100, modelData)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('The model does not exist, try with another id')
      }
    }
  })
  test('should throw a error when the model data is incorrect', () => {
    expect.assertions(2)
    try {
      updateModel(modelId, { name: '', description: 1 })
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('Incorrect type or missing field')
      }
    }
  })
})
