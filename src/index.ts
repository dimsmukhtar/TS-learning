import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { routes } from './routes'
import { logger } from './utils/logger'

// connect to MongoDB
import './utils/connectToDB'

const app: Application = express()

const PORT: number = 3000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*')

  // Pass to next layer of middleware
  next()
})
routes(app)

app.listen(PORT, () => {
  logger.info(`Server is running on port: ${PORT}`)
})
