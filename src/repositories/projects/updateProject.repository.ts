import { projects } from '../../data/projects'
import { Project, ProjectDTO } from '../../utils/types'

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
