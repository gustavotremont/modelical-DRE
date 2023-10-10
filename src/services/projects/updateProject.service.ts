import { projectService } from '.'
import { projectRepository } from '../../repositories/projects'
import { Project } from '../../utils/types'
import { toNewProjectToUpdate } from '../../utils/validates'

/**
 * Service that handle the project's data and update the project with the specified ID
 * @param {number} projectId - ID from the project to update
 * @param {any} projectData - object with the propierties to handle for the update of the project with the specified ID
 * @returns {Project} - Returns the updated project
 */
export const updateProject = (projectId: number, projectData: any): Project => {
  const project = projectService.getProject(projectId)
  const newProjectData = toNewProjectToUpdate(projectData)

  const updatedProject = projectRepository.updateProject(
    project.id,
    newProjectData
  )

  return updatedProject
}
