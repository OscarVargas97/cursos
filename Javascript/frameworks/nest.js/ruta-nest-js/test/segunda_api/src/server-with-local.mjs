import { createApp } from './index.mjs'
import { MovieModel } from './models/mongodb/movie.mjs'

createApp({ movieModel: MovieModel })
