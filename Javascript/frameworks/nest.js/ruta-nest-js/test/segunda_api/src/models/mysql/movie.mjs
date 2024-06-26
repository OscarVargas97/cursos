import { UUID } from 'mongodb'
import { db } from '../../config/mysql.mjs'

export class MovieModel {
  static async getAll ({ inGenre }) {
    if (inGenre) {
      const [genre] = await db.query(
        'SELECT id FROM genre WHERE LOWER(name) = LOWER(?)', [inGenre]
      )
      const [{ id }] = genre
      const [movies] = await db.query(
        'SELECT title, year, director, poster, rate, BIN_TO_UUID(id) FROM moviesdb.movie_genre JOIN movie ON movie_genre.movie_id = movie.id WHERE movie_genre.genre_id = ? ORDER BY title;', [id]
      )
      return movies
    }
    const [movies] = await db.query(
      'SELECT title, year, director, poster, rate, BIN_TO_UUID(id) id  FROM movie'
    )
    return movies
  }

  static async getById ({ id }) {
    const [movie] = await db.query(
      'SELECT title, year, director, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?)',
      [id]
    )
    return movie[0]
  }

  static async create ({ input }) {
    const [uuidResult] = await db.query('SELECT UUID() as uuid')
    const [{ uuid }] = uuidResult
    const {
      genre: genreInput,
      title,
      year,
      duration,
      director,
      rate,
      poster
    } = input
    try {
      await db.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate
        ) VALUES(UUID_TO_BIN(?),?,?,?,?,?,?);`,
        [uuid, title, year, director, duration, poster, rate]
      )
    } catch (e) {
      throw new Error('Error al insertar la película')
      // enviar información a un servicio interno
    }

    const [movies] = await db.query(
      `SELECT title, year, director, poster, rate, BIN_TO_UUID(id) id 
      FROM movie
      WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    )
    return movies[0]
  }

  static async delete ({ id }) {
    return await db.query(
      'DELETE FROM movie WHERE id = UUID_TO_BIN(?)',
      [id]
    )
  }

  static async update (id, input) {
    const [movie] = await db.query(
      `SELECT title, year, director, poster, rate, BIN_TO_UUID(id) id 
      FROM movie
      WHERE id = UUID_TO_BIN(?);`,
      [id]
    )
    const editMovie = { ...movie[0], ...input }
    try {
      await db.query(
        `UPDATE movie 
        SET title = ?, year = ?, director = ?, poster = ?, rate = ? 
        WHERE id = UUID_TO_BIN(?);`,
        [editMovie.title, editMovie.year, editMovie.director, editMovie.poster, editMovie.rate, id]
      )
      return (editMovie)
    } catch (error) {
      throw new Error('Error al actualizar la película')
    }
  }
}
