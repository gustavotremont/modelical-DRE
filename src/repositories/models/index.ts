import { createModel } from './createModel.repository'
import { deleteModel } from './deleteModel.repository'
import { getAllModels } from './getAllModels.repository'
import { getModel } from './getModel.repository'
import { updateModel } from './updateModel.repository'

export const modelRepository = {
  createModel,
  getModel,
  getAllModels,
  updateModel,
  deleteModel
}
