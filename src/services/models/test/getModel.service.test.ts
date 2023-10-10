import { describe, expect, test } from '@jest/globals'
import { getModel } from '../getModel.service'
import { models } from '../../../data/models'
import { RequestError } from '../../../utils/types'

const modelId = 5

describe('getModel Service', () => {
  test('return the correct model', () => {
    expect(getModel(modelId)).toBe(models[modelId - 1])
  })
  test('should throw a error when the model id does not exist in the model collection', () => {
    expect.assertions(2)
    try {
      getModel(100)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('The model does not exist, try with another id')
      }
    }
  })
})
