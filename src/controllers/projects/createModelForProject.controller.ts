import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { handleError } from '../../utils/handleError'
import { Model } from '../../utils/types'

/**
 * Controller to handle request for add a new model to a project
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const createModelForProject = (req: Request, res: Response): void => {
  try {
    const { id: projectId } = req.params
    const model: Model = modelServices.createModel(
      req.body,
      parseInt(projectId)
    )
    res.status(201).json(model)
  } catch (error) {
    handleError(error, res)
  }
  //
}
