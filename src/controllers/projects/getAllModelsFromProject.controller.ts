import { Request, Response } from 'express'
import { Project } from '../../utils/types'
import { modelServices } from '../../services/models'
import { handleError } from '../../utils/handleError'

/**
 * Controller to handle request for gets all models from a specified project
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const getAllModelsFromProject = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const modelListByProjectId: Project[] =
      modelServices.getAllModelsByProjectId(parseInt(id))
    res.status(200).json(modelListByProjectId)
  } catch (error) {
    handleError(error, res)
  }
  //
}
