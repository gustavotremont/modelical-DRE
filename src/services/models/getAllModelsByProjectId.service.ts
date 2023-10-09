import { projectService } from '../projects'
import { modelRepository } from '../../repositories/models'
import { Project } from '../../utils/types'

export const getAllModelsByProjectId = (projectId: number): Project[] => {
  const project = projectService.getProject(projectId)
  const modelList = modelRepository.getAllModels(project.id)
  return modelList
}
