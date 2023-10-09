import { projectService } from '.'
import { projectRepository } from '../../repositories/projects'

export const deleteProject = (projectId: number): void => {
  const project = projectService.getProject(projectId)
  projectRepository.deleteProject(project.id)
}
