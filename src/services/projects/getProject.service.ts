import { projectRepository } from '../../repositories/projects'
import { Project, RequestError } from '../../utils/types'

/**
 * Service that return a project with a specified ID
 * @param {number} projectId - ID from the project
 * @returns {Project} - Returns a project with the specified ID
 */
export const getProject = (projectId: number): Project => {
  const project = projectRepository.getProject(projectId)
  if (project === undefined) {
    throw new RequestError({
      message: 'The project does not exist, try with another id',
      status: 404
    })
  }
  return project
}
