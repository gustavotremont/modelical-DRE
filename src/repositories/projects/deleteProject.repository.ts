import { projects } from '../../data/projects'

export const deleteProject = (projectId: number): void => {
  const modelIndex = projects.findIndex(({ id }) => id === projectId)

  projects.splice(modelIndex, 1)
}
