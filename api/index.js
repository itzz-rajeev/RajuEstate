import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import listingRouter from './routes/listing.routes.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.error('MongoDB connection error:'))

// const __dirname = path.resolve()
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/client/dist')))
//   app.get('*', (req, res) => {
//     res.sendFile()
//   })
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running...')
//  })
//}

app.use(express.json())
app.use(cookieParser())
app.get('/', (req, res) => {
  res.send('Hello')
})
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

// app.use(express.static(path.join(__dirname, '/client/dist')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

app.use((err, req, res, next) => {
  console.error(err.stack)
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message
  })
})

app.listen(4000, () => console.log('Server running on port 4000'))
