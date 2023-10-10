import { describe, expect, test } from '@jest/globals'
import { getAllProjects } from '../getAllProjects.repository'
import { projects } from '../../../data/projects'

describe('getAllProjects Repository', () => {
  test('return the project collection', () => {
    expect(getAllProjects()).toBe(projects)
  })
})
