import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { Model, RequestError } from '../../utils/types'

export const getAllModels = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const modelList: Model[] = modelServices.getAllModels()
    res.status(200).json(modelList)
  } catch (error) {
    if (error instanceof RequestError) {
      res.status(404).json({
        message: error.message
      })
    } else {
      res.status(404).json({
        message: 'unkown error'
      })
    }
  }
}
