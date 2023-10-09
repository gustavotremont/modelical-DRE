import { Request, Response } from 'express'
import { RequestError } from '../../utils/types'
import { modelServices } from '../../services/models'

export const updateModel = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const updatedModel = modelServices.updateModel(parseInt(id), req.body)
    res.status(200).json(updatedModel)
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
