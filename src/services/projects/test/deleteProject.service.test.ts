import { describe, expect, test } from '@jest/globals'
import { deleteProject } from '../deleteProject.service'
import { getAllProjects } from '../getAllProjects.service'
import { RequestError } from '../../../utils/types'

describe('deleteProject Service', () => {
  test('the project was delete succesful', () => {
    const projectId = 2
    deleteProject(projectId)

    expect(getAllProjects().find(({ id }) => id === projectId)).toBe(undefined)
  })
  test('should throw a error when the project id does not exist in the project collection', () => {
    expect.assertions(2)
    try {
      deleteProject(100)
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
