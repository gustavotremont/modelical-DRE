import { projectRepository } from '../../repositories/projects'
import { Project } from '../../utils/types'

/**
 * Service to returns all the projects
 * @returns {Project[]} Return an array of projects
 */
export const getAllProjects = (): Project[] => {
  const projectList = projectRepository.getAllProjects()
  return projectList
}
