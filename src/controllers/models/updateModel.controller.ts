import { Request, Response } from 'express'
import { Model } from '../../utils/types'
import { modelServices } from '../../services/models'
import { handleError } from '../../utils/handleError'

/**
 * Controller to handle request for update a model
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const updateModel = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const updatedModel: Model = modelServices.updateModel(
      parseInt(id),
      req.body
    )
    res.status(200).json(updatedModel)
  } catch (error) {
    handleError(error, res)
  }
}
