import { describe, expect, test } from '@jest/globals'
import { getProject } from '../getProject.service'
import { projects } from '../../../data/projects'
import { RequestError } from '../../../utils/types'

const projectId = 3

describe('getProject Service', () => {
  test('return the correct project', () => {
    expect(getProject(projectId)).toBe(projects[projectId - 1])
  })
  test('should throw a error when the project id does not exist in the project collection', () => {
    expect.assertions(2)
    try {
      getProject(100)
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
