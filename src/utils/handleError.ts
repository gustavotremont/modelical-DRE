import { RequestError } from './types'
import { Response } from 'express'

export const handleError = (error: unknown, res: Response): void => {
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
