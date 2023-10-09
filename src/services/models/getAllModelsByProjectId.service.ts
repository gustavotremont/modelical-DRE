import { projectService } from '../projects'
import { modelRepository } from '../../repositories/models'
import { Project } from '../../utils/types'

/**
 * Service to returns all models from a project with a specified ID
 * @param {number} projectId ID from the project that owns the models
 * @returns {Project[]} Returns an array of models
 */
export const getAllModelsByProjectId = (projectId: number): Project[] => {
  const project = projectService.getProject(projectId)
  const modelList = modelRepository.getAllModels(project.id)
  return modelList
}
