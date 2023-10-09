import { projectService } from '.'
import { projectRepository } from '../../repositories/projects'
import { Project, ProjectDTO } from '../../utils/types'

export const updateProject = (
  projectId: number,
  projectData: ProjectDTO
): Project => {
  const project = projectService.getProject(projectId)

  const updatedProject = projectRepository.updateProject(
    project.id,
    projectData
  )

  return updatedProject
}
