import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import express from 'express';
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
})
app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));

app.use('/api/auth', authRouter);