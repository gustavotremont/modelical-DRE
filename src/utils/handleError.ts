import { RequestError } from './types'
import { Response } from 'express'

/**
 * Function to handle throw errors in the express api
 * @param {unknown} error error that can be throw for the express api, or an other error unknown
 * @param {Response} res Express response
 */
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
