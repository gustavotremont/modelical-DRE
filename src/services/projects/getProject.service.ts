import { projectRepository } from '../../repositories/projects'
import { Project, RequestError } from '../../utils/types'

export const getProject = (projectId: number): Project => {
  const project = projectRepository.getProject(projectId)
  if (project === undefined) {
    throw new RequestError({
      message: 'The project does not exist, try with another id'
    })
  }
  return project
}
