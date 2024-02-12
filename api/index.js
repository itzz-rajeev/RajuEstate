import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
})
 

app.listen(3000, () => console.log('Server running on port 3000'));