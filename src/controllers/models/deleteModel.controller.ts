import { Request, Response } from 'express'
import { RequestError } from '../../utils/types'
import { modelServices } from '../../services/models'

export const deleteModel = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    modelServices.deleteModel(parseInt(id))
    res.status(200).json({ message: 'Model deleted succesful' })
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
