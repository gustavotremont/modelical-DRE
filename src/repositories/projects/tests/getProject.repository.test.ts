import { describe, expect, test } from '@jest/globals'
import { getProject } from '../getProject.repository'
import { projects } from '../../../data/projects'

describe('getProject Repository', () => {
  test('return the correct project correspond to the specified ID', () => {
    const projectId = 2
    expect(getProject(projectId)).toBe(projects[projectId - 1])
  })
  test('return a undefined when do not find a project with a specifid ID', () => {
    const projectId = 100
    expect(getProject(projectId)).toBe(undefined)
  })
})
