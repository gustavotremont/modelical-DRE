import { describe, expect, test } from '@jest/globals'
import { createModel } from '../createModel.service'
import { models } from '../../../data/models'
import { ModelDTO, RequestError } from '../../../utils/types'

const projectId = 1
const modelData: ModelDTO = {
  name: 'string',
  description: 'string',
  modelFile: 'string'
}

describe('createModel Service', () => {
  test('return the correct created model', () => {
    expect(createModel(modelData, projectId)).toBe(models[models.length - 1])
  })
  test('should throw a error when the projectId does not exist in the project collection', () => {
    expect.assertions(2)
    try {
      createModel(modelData, 100)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe(
          'The project does not exist, try with another id'
        )
      }
    }
  })
  test('should throw a error when the model data is incorrect', () => {
    expect.assertions(2)
    try {
      createModel({ name: '', description: 1 }, projectId)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('Incorrect type or missing field')
      }
    }
  })
})
