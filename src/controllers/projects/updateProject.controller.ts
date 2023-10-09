import { Request, Response } from 'express'

export const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { id } = req.params
  // const updatedProject = await projectServices.updateProject(id, req.body)
  // res.status(200).json(updatedProject)
}
