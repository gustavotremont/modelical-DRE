import { deleteModel } from './deleteModel.service'
import { getAllModels } from './getAllModels.service'
import { getModel } from './getModel.service'
import { updateModel } from './updateModel.service'

export const modelServices = {
  getAllModels,
  getModel,
  updateModel,
  deleteModel
}
