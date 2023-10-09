import { Request, Response } from 'express'
import { Project } from '../../utils/types'
import { projectService } from '../../services/projects'
import { handleError } from '../../utils/handleError'

export const getAllProjects = (req: Request, res: Response): void => {
  try {
    const projectList: Project[] = projectService.getAllProjects()
    res.status(200).json(projectList)
  } catch (error) {
    handleError(error, res)
  }

  //
}
