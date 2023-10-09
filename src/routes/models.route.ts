/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import { modelController } from '../controllers/models'

export const modelRoutes: Router = express.Router()
// Returns an array of all models in the collection.
modelRoutes.get('/', modelController.getAllModels)
// Returns the model with the specified ID.
modelRoutes.get('/:id', modelController.getModel)
// Update an existing model
modelRoutes.put('/:id', modelController.updateModel)
// Deletes the model with the specified ID.
modelRoutes.delete('/:id', modelController.deleteModel)
