import { projectRepository } from '../../repositories/projects'
import { Project } from '../../utils/types'

export const getAllProjects = (): Project[] => {
  const projectList = projectRepository.getAllProjects()
  return projectList
}
