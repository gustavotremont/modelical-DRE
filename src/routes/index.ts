import { Express } from 'express'
import { projectRoutes } from './projects.routes'
import { modelRoutes } from './models.route'

export const routes = (app: Express): void => {
  app.use('/api/project', projectRoutes)
  app.use('/api/model', modelRoutes)
}
