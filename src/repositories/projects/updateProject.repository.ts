import { projects } from '../../data/projects'
import { Project, ProjectToUpdateDTO } from '../../utils/types'

/**
 * Repository to update a projecto from the collection with a specified ID
 * @param {number} projectlId - ID for the project to update
 * @param {ProjectToUpdateDTO} projectData - Object with the project's propierties to update
 * @returns {Project} - Returns the project with the updated propierties
 */
export const updateProject = (
  projectlId: number,
  projectData: ProjectToUpdateDTO
): Project => {
  const projectIndex = projects.findIndex(({ id }) => id === projectlId)
  const projectToUpdate = projects[projectIndex]

  if ('name' in projectData && projectData.name !== undefined) {
    projectToUpdate.name = projectData.name
  }
  if ('description' in projectData && projectData.description !== undefined) {
    projectToUpdate.description = projectData.description
  }

  return projectToUpdate
}
