import { Request, Response } from 'express'
import { projectService } from '../../services/projects'
import { handleError } from '../../utils/handleError'
import { Project } from '../../utils/types'

/**
 * Controller to handle request for update a specified project
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
export const updateProject = (req: Request, res: Response): void => {
  try {
    const { id } = req.params
    const updatedProject: Project = projectService.updateProject(
      parseInt(id),
      req.body
    )
    res.status(200).json(updatedProject)
  } catch (error) {
    handleError(error, res)
  }
}
