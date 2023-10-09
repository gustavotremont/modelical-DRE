import { projectService } from '.'
import { projectRepository } from '../../repositories/projects'

/**
 * Service to delete a project with a specified ID
 * @param {number} projectId ID for the project to delete
 */
export const deleteProject = (projectId: number): void => {
  const project = projectService.getProject(projectId)
  projectRepository.deleteProject(project.id)
}
