import { Request, Response } from 'express'
import { modelServices } from '../../services/models'
import { handleError } from '../../utils/handleError'

export const deleteModel = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    modelServices.deleteModel(parseInt(id))
    res.status(200).json({ message: 'Model deleted succesful' })
  } catch (error) {
    handleError(error, res)
  }
}
