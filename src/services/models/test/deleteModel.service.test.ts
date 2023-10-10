import { describe, expect, test } from '@jest/globals'
import { deleteModel } from '../deleteModel.service'
import { getAllModels } from '../getAllModels.service'
import { RequestError } from '../../../utils/types'

describe('deleteModel Service', () => {
  test('the model was delete succesful', () => {
    const modelId = 5
    deleteModel(modelId)

    expect(getAllModels().find(({ id }) => id === modelId)).toBe(undefined)
  })
  test('should throw a error when the model id does not exist in the models collection', () => {
    expect.assertions(2)
    try {
      deleteModel(100)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('The model does not exist, try with another id')
      }
    }
  })
})
