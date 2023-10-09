import { Request, Response } from 'express'

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { body } = req
  // const project = await projectServices.createProject(body)
  // res.status(200).json(project)
}
