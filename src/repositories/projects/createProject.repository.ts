import { projects } from '../../data/projects'
import { Project, ProjectDTO } from '../../utils/types'

export const createProject = (projectData: ProjectDTO): Project => {
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
