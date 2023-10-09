import { Request, Response } from 'express'

export const getAllProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')

  // const projectList: Array = await projectServices.getAllProjects()
  // res.status(200).json(projectList)
}
