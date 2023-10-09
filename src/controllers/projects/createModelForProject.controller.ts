import { Request, Response } from 'express'

export const createModelForProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { id } = req.params
  // const project = await projectServices.createModelForProject(id, req.body)
  // res.status(200).json(project)
}
