import { describe, expect, test } from '@jest/globals'
import { createProject } from '../createProject.repository'
import { ProjectDTO } from '../../../utils/types'
import { getAllProjects } from '../getAllProjects.repository'

describe('createProject Repository', () => {
  test('return the correct created project', () => {
    const projectData: ProjectDTO = {
      name: 'string',
      description: 'string'
    }

    const projects = getAllProjects()
    expect(createProject(projectData)).toBe(projects[projects.length - 1])
  })
})
