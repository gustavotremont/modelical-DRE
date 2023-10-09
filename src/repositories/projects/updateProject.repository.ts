import { projects } from '../../data/projects'
import { Project, ProjectDTO } from '../../utils/types'

/**
 * Repository to update a projecto from the collection with a specified ID
 * @param {number} projectlId - ID for the project to update
 * @param {ProjectDTO} projectData - Object with the project's propierties to update
 * @returns {Project} - Returns the project with the updated propierties
 */
export const updateProject = (
  projectlId: number,
  projectData: ProjectDTO
): Project => {
  const projectIndex = projects.findIndex(({ id }) => id === projectlId)

  const projectToUpdate = projects[projectIndex]
  projectToUpdate.name = projectData.name
  projectToUpdate.description = projectData.description

  return projectToUpdate
}
