import { projects } from '../../data/projects'
import { Project } from '../../utils/types'

export const getAllProjects = (): Project[] => {
  return projects
}
