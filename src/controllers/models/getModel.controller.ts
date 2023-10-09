import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { RequestError } from '../../utils/types'

export const getModel = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const model = modelServices.getModel(parseInt(id))
    res.status(200).json(model)
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
