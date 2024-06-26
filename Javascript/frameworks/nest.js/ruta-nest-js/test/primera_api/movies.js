const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    message: 'Title is required',
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
    minLength: 1,
    maxLenght: 255
  }),
  year: z.number().int().min(1888).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().int().min(0).max(10).nullable().default(null),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Animation', 'Biography', 'Crime', 'Drama', 'Fantasy', 'Romance', 'Sci-Fi']),
    {
      required_error: 'Genre is required',
      invalid_type_error: 'Genre must be an array of strings'
    }
  )
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = { validateMovie, validatePartialMovie }
