import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()

const PORT: number = 3000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'Hello world'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
