import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { Model } from '../../utils/types'
import { handleError } from '../../utils/handleError'

/**
 * Controller to handle request for get all models
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const getAllModels = (req: Request, res: Response): void => {
  try {
    const modelList: Model[] = modelServices.getAllModels()
    res.status(200).json(modelList)
  } catch (error) {
    handleError(error, res)
  }
}
