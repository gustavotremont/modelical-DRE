/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import { projectController } from '../controllers/projects'

export const projectRoutes: Router = express.Router()
// Returns an array of all projects in the collection.
projectRoutes.get('/', projectController.getAllProjects)
// Returns the project with the specified ID.
projectRoutes.get('/:id', projectController.getProject)
// Add a new project
projectRoutes.post('/', projectController.createProject)
// Update an existing project with the specified ID.
projectRoutes.put('/:id', projectController.updateProject)
// Deletes the project with the specified ID.
projectRoutes.delete('/:id', projectController.deleteProject)
// Returns an array of all models belonging to the project with the specified ID.
projectRoutes.get('/models', projectController.getAllModelsFromProject)
// Add a new model to a project
projectRoutes.post('/models/:id', projectController.createModelForProject)
