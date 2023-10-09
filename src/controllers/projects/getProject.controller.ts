import { Request, Response } from 'express'
import { projectService } from '../../services/projects'
import { handleError } from '../../utils/handleError'
import { Project } from '../../utils/types'

export const getProject = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const project: Project = projectService.getProject(parseInt(id))
    res.status(200).json(project)
  } catch (error) {
    handleError(error, res)
  }
}
