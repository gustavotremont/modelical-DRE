import { describe, expect, test } from '@jest/globals'
import { getAllModels } from '../getAllModels.repository'
import { models } from '../../../data/models'

describe('getAllModels Repository', () => {
  test('return the model collection', () => {
    expect(getAllModels()).toBe(models)
  })
})
