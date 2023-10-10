import { projectRepository } from '../../repositories/projects'
import { Project } from '../../utils/types'
import { toNewProjectToCreate } from '../../utils/validates'

/**
 * Service that handle the project's data and create the new project
 * @param {any} projectData - object with the propierties to handle for the creation of the new project
 * @returns {Project} - Return the created project
 */
export const createProject = (projectData: any): Project => {
  const newProject = toNewProjectToCreate(projectData)
  return projectRepository.createProject(newProject)
}
