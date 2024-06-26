import mysql from 'mysql2/promise'
import { loadEnvFile } from '../utils/utils.mjs'

loadEnvFile('src/.env')
const password = process.env.DBPASSWORD ?? 'password'
const host = process.env.DBHOST ?? 'localhost'
const user = process.env.DBUSER ?? 'root'
const database = process.env.DBNAME ?? 'test'
const port = process.env.DBPORT ?? 3000

const config = {
  host,
  user,
  database,
  port,
  password
}
export const db = await mysql.createConnection(config)
