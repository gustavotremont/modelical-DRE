import { projects } from '../../data/projects'
import { Project } from '../../utils/types'

/**
 * Repository that return an array of all the projects in the collection
 * @returns {Project[]} - Returns an array of project
 */
export const getAllProjects = (): Project[] => {
  return projects
}
