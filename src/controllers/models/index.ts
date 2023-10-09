/* eslint-disable @typescript-eslint/comma-dangle */
import { deleteModel } from './deleteModel.controller'
import { getAllModels } from './getAllModels.controller'
import { getModel } from './getModel.controller'
import { updateModel } from './updateModel.controller'

export const modelController = {
  getAllModels,
  getModel,
  updateModel,
  deleteModel
}
