import { Request, Response } from 'express'
import { projectService } from '../../services/projects'
import { handleError } from '../../utils/handleError'
import { Project } from '../../utils/types'

export const createProject = (req: Request, res: Response): void => {
  try {
    const { body } = req
    const project: Project = projectService.createProject(body)
    res.status(201).json(project)
  } catch (error) {
    handleError(error, res)
  }
}
