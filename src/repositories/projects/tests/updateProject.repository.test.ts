import { describe, expect, test } from '@jest/globals'
import { updateProject } from '../updateProject.repository'
import { ProjectDTO } from '../../../utils/types'
import { projects } from '../../../data/projects'

describe('updateProject Repository', () => {
  test('return the correct updated project', () => {
    const projectId = 3
    const projectData: ProjectDTO = {
      name: 'string',
      description: 'string'
    }
    expect(updateProject(projectId, projectData)).toBe(projects[projectId - 1])
  })
})
