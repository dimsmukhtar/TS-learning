import express, { Application } from 'express'
import { routes } from './routes'

const app: Application = express()

const PORT: number = 3000

routes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
