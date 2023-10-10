import { describe, expect, test } from '@jest/globals'
import { updateProject } from '../updateProject.service'
import { projects } from '../../../data/projects'
import { ProjectDTO, RequestError } from '../../../utils/types'

const projectId = 1
const projectData: ProjectDTO = {
  name: 'string',
  description: 'string'
}

describe('updateProject Service', () => {
  test('return the correct updated project', () => {
    expect(updateProject(projectId, projectData)).toBe(projects[projectId - 1])
  })
  test('should throw a error when the project id does not exist in the project collection', () => {
    expect.assertions(2)
    try {
      updateProject(100, projectData)
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe(
          'The project does not exist, try with another id'
        )
      }
    }
  })
  test('should throw a error when the project data is incorrect', () => {
    expect.assertions(2)
    try {
      updateProject(projectId, { name: '', description: 1 })
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('Incorrect type or missing field')
      }
    }
  })
})
