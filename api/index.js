import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import listingRouter from './routes/listing.routes.js';
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use(cookieParser());

// Define your routes before error handling middleware
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
