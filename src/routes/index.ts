import { Express } from 'express'
import { projectRoutes } from './projects.route'
import { modelRoutes } from './models.route'

export const routes = (app: Express): void => {
  app.use('/api/projects', projectRoutes)
  app.use('/api/models', modelRoutes)

  app.use('*', (_req, res) => {
    res.status(404).json({
      message: 'invalid endpoint'
    })
  })
}
