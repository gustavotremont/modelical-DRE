import { RequestError } from './types'
import { Response } from 'express'

export const handleError = (error: unknown, res: Response): void => {
  if (error instanceof RequestError) {
    res.status(error.status).json({
      message: error.message
    })
  } else {
    res.status(400).json({
      message: 'unkown error'
    })
  }
}
