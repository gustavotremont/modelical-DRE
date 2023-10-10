import { projects } from '../../data/projects'

/**
 * Repository that delete a project from the collection with a specified ID
 * @param {number} projectId - ID for the project to delete
 */
export const deleteProject = (projectId: number): void => {
  const modelIndex = projects.findIndex(({ id }) => id === projectId)

  if (modelIndex >= 0) {
    projects.splice(modelIndex, 1)
  }
}
