import express, { json } from 'express'
// import { mainRouter } from './routes/main.mjs'
import { corsMiddleware } from './middleware/cors.mjs'
import { loadEnvFile } from './utils/utils.mjs'
import { createMovieRouter } from './routes/movies.mjs'

export const createApp = ({ movieModel }) => {
  const app = express()
  loadEnvFile('src/.env')
  const port = process.env.PORT ?? 3000
  app.disable('x-powered-by')
  app.use(json())
  app.use(corsMiddleware())
  app.use('/movies', createMovieRouter(movieModel))
  app.listen(port, () => {
    console.log(`Server listening on port localhost:${port}`)
  })
}
