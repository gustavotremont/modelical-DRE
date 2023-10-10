import { projects } from '../../data/projects'
import { Project, ProjectToCreateDTO } from '../../utils/types'

/**
 * Repository that add a new Project to the collection
 * @param {ProjectToCreateDTO} projectData - Object with the propierties to create the project
 * @returns {Project} - Returns the new created project
 */
export const createProject = (projectData: ProjectToCreateDTO): Project => {
  const newId =
    projects.reduce(function (acc, cur) {
      if (acc < cur.id) return (acc = cur.id)
      return acc
    }, 0) + 1

  const newProject = {
    id: newId,
    ...projectData
  }
  projects.push(newProject)

  return newProject
}
