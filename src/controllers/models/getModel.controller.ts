import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { Model } from '../../utils/types'
import { handleError } from '../../utils/handleError'

/**
 * Controller to handle request for get a specified model
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const getModel = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const model: Model = modelServices.getModel(parseInt(id))
    res.status(200).json(model)
  } catch (error) {
    handleError(error, res)
  }
}
