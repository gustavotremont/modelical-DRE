import { describe, expect, test } from '@jest/globals'
import { createModel } from '../createModel.repository'
import { models } from '../../../data/models'
import { ModelToCreateDTO } from '../../../utils/types'
import { getAllModels } from '../getAllModels.repository'

describe('createModel Repository', () => {
  test('return the correct created model', () => {
    const projectId = 1
    const modelData: ModelToCreateDTO = {
      name: 'string',
      description: 'string',
      modelFile: 'string'
    }
    expect(createModel(modelData, projectId)).toBe(models[models.length - 1])
  })
  test('return the correct created model in the projects models', () => {
    const projectId = 100
    const modelData: ModelToCreateDTO = {
      name: 'string',
      description: 'string',
      modelFile: 'string'
    }
    expect(createModel(modelData, projectId)).toBe(
      getAllModels(projectId).find(({ name }) => name === modelData.name)
    )
  })
})
