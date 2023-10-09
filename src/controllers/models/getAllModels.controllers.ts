import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { Model } from '../../utils/types'
import { handleError } from '../../utils/handleError'

export const getAllModels = (req: Request, res: Response): void => {
  try {
    const modelList: Model[] = modelServices.getAllModels()
    res.status(200).json(modelList)
  } catch (error) {
    handleError(error, res)
  }
}
