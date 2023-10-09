import { createModel } from './createModel.service'
import { deleteModel } from './deleteModel.service'
import { getAllModels } from './getAllModels.service'
import { getAllModelsByProjectId } from './getAllModelsByProjectId.service'
import { getModel } from './getModel.service'
import { updateModel } from './updateModel.service'

export const modelServices = {
  createModel,
  getAllModels,
  getModel,
  getAllModelsByProjectId,
  updateModel,
  deleteModel
}
