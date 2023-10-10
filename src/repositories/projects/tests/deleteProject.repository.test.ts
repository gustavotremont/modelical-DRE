import { describe, expect, test } from '@jest/globals'
import { deleteProject } from '../deleteProject.repository'
import { getAllProjects } from '../getAllProjects.repository'

describe('deleteProject Repository', () => {
  test('the project was delete succesful', () => {
    const projectId = 2
    deleteProject(projectId)

    expect(getAllProjects().find(({ id }) => id === projectId)).toBe(undefined)
  })
  test('any project is not delete if the project id is incorrect', () => {
    const projectId = 100
    const beforeDeleteLength: number = getAllProjects().length
    deleteProject(projectId)

    const afterDeleteLength: number = getAllProjects().length

    expect(afterDeleteLength).toBe(beforeDeleteLength)
  })
})
