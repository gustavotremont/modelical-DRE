import { projects } from '../../data/projects'
import { Project } from '../../utils/types'

/**
 * Repository that return a project from the collection with a specified ID
 * @param {number} projectId - ID for the project to return
 * @returns {Project | undefined} - return a project or an undefined, in case there isn't a project with the specified ID
 */
export const getProject = (projectId: number): Project | undefined => {
  return projects.find(({ id }) => id === projectId)
}
