/* eslint-disable @typescript-eslint/comma-dangle */
import { createModelForProject } from './createModelForProject.controller'
import { createProject } from './createProject.controller'
import { deleteProject } from './deleteProject.controller'
import { getAllModelsFromProject } from './getAllModelsFromProject.controller'
import { getAllProjects } from './getAllProjects.controller'
import { getProject } from './getProject.controller'
import { updateProject } from './updateProject.controller'

export const projectController = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getAllModelsFromProject,
  createModelForProject
}
