import { createProject } from './createProject.service'
import { deleteProject } from './deleteProject.service'
import { getAllProjects } from './getAllProjects.service'
import { getProject } from './getProject.service'
import { updateProject } from './updateProject.service'

export const projectService = {
  createProject,
  getProject,
  getAllProjects,
  deleteProject,
  updateProject
}
