import { Request, Response } from 'express'

export const getProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { id } = req.params
  // const project = await projectServices.getProject(id)
  // res.status(200).json(project)
}
