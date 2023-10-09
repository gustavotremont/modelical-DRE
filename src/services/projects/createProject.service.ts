import { projectRepository } from '../../repositories/projects'
import { Project } from '../../utils/types'
import { toNewProject } from '../../utils/validates'

export const createProject = (projectData: any): Project => {
  const newProject = toNewProject(projectData)
  return projectRepository.createProject(newProject)
}
