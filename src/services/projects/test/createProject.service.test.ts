import { describe, expect, test } from '@jest/globals'
import { createProject } from '../createProject.service'
import { projects } from '../../../data/projects'
import { ProjectDTO, RequestError } from '../../../utils/types'

const projectData: ProjectDTO = {
  name: 'string',
  description: 'string'
}

describe('createProject Service', () => {
  test('return the correct created project', () => {
    expect(createProject(projectData)).toBe(projects[projects.length - 1])
  })
  test('should throw a error when the project data is incorrect', () => {
    expect.assertions(2)
    try {
      createProject({ name: '', description: 1 })
    } catch (e) {
      expect(e).toBeInstanceOf(RequestError)
      if (e instanceof RequestError) {
        expect(e.message).toBe('Incorrect type or missing field')
      }
    }
  })
})
