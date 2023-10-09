import { Request, Response } from 'express'
import { projectService } from '../../services/projects'
import { handleError } from '../../utils/handleError'

export const deleteProject = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    projectService.deleteProject(parseInt(id))
    res.status(200).json({ message: 'porject deleted succesful' })
  } catch (error) {
    handleError(error, res)
  }
}
