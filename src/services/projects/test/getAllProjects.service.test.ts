import { describe, expect, test } from '@jest/globals'
import { getAllProjects } from '../getAllProjects.service'
import { projects } from '../../../data/projects'

describe('getAllProjects Service', () => {
  test('return the project collection', () => {
    expect(getAllProjects()).toBe(projects)
  })
})
