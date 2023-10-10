import { describe, expect, test } from '@jest/globals'
import { getAllModels } from '../getAllModels.service'
import { models } from '../../../data/models'

describe('getAllModels Service', () => {
  test('return the model collection', () => {
    expect(getAllModels()).toBe(models)
  })
})
