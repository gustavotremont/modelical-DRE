import { Request, Response } from 'express'

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('hello')
  // const { id } = req.params
  // await projectServices.deleteProject(id)
  // res.status(200).json({ message: porject deleted succesful })
}
