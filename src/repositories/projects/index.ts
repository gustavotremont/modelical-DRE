import { deleteProject } from './deleteProject.repository'
import { getAllProjects } from './getAllProjects.repository'
import { getProject } from './getProject.repository'
import { updateProject } from './updateProject.repository'
import { createProject } from './createProject.repository'

export const projectRepository = {
  createProject,
  getProject,
  getAllProjects,
  updateProject,
  deleteProject
}
