import { projects } from '../../data/projects'
import { Project } from '../../utils/types'

export const getProject = (projectId: number): Project | undefined => {
  return projects.find(({ id }) => id === projectId)
}
