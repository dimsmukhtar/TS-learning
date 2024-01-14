import 'dotenv/config'
const { DB_URL } = process.env

if (!DB_URL) {
  throw new Error('Database connection string is undefined!')
}

const CONFIG = {
  db: process.env.DB_URL
}

export default CONFIG
