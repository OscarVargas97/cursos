import { Router } from 'express'
import { MovieModel } from '../models/mysql/movie.mjs'
import { MovieController } from '../controllers/movies.mjs'

export const createMovieRouter = ({ movieModel }) => {
  const movieRouter = Router()
  const movieController = new MovieController({ movieModel: MovieModel })
  movieRouter.get('/', movieController.getAll)
  movieRouter.get('/:id', movieController.getById)
  movieRouter.post('/', movieController.create)
  movieRouter.delete('/:id', movieController.delete)
  movieRouter.patch('/:id', movieController.edit)
  return movieRouter
}
