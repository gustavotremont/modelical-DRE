import { Request, Response } from 'express'

export const getAllModelsFromProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { id } = req.params
  // const projectList: Array = await projectServices.getAllModelsFromProject(id)
  // res.status(200).json(projectList)
}
