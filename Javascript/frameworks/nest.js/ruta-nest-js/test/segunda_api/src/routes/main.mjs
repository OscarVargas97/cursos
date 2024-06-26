import { Router } from 'express'
import { homeRouter } from './home.mjs'
import { movieRouter } from './movies.mjs'

export const mainRouter = Router()

mainRouter.use('/', homeRouter)
mainRouter.use('/movies', movieRouter)
