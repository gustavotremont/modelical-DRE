import { describe, expect, test } from '@jest/globals'
import { getAllModelsByProjectId } from '../getAllModelsByProjectId.service'
import { models } from '../../../data/models'
import { RequestError } from '../../../utils/types'

const projectId = 1

describe('getAllModelsByProjectId Service', () => {
  test('return the correct model collection from the project id', () => {
    const expectedModels = models.filter(
      (model) => model.projectId === projectId
    )

    expect(getAllModelsByProjectId(projectId)).toStrictEqual(expectedModels)
  })
  test('should throw a error when the projectId does not exist in the project collection', () => {
    expect.assertions(2)
    try {
      getAllModelsByProjectId(100)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe(
          'The project does not exist, try with another id'
        )
      }
    }
  })
})
