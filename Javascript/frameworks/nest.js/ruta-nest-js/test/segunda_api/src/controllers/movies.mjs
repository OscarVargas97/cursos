import { validateMovie, validatePartialMovie } from '../validates/movies.mjs'

export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.movieModel.getAll({ inGenre: genre })
    res.json(movies)
  }

  create = async (req, res) => {
    const result = validateMovie(req.body)
    if (result.error) {
      return res.status(422).json({ errors: JSON.parse(result.error.message) })
    }
    const newMovie = await this.movieModel.create({ input: result.data })
    res.status(201).json(newMovie)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const movie = await this.movieModel.getById({ id })
    if (movie) {
      return res.json(movie)
    }
    res.status(404).json({ message: 'Movie not found' })
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.movieModel.delete({ id })
    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    return res.json({ message: 'Movie deleted' })
  }

  edit = async (req, res) => {
    const result = validatePartialMovie(req.body)
    if (result.error) {
      return res.status(422).json({ errors: JSON.parse(result.error.message) })
    }
    const { id } = req.params
    const updateMovie = await this.movieModel.update(id, result.data)
    return res.json(updateMovie)
  }
}
