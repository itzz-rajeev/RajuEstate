import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import listingRouter from './routes/listing.routes.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

const app = express()
dotenv.config()

// CORS for cross-origin cookies and fetch
app.use(cors({
  origin: 'https://rajuestate.onrender.com',
  credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.error('❌ MongoDB connection error:', error.message))

app.get('/', (req, res) => {
  res.send('Hello from Backend')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

// Error Handler
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

// PORT should be dynamic for Render
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
