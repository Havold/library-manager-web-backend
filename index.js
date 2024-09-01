import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import booksRoute from './routes/books.js'
import usersRoute from './routes/users.js'

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB');
    } catch (error) {
        throw error;
    }
}

const PORT = process.env.PORT || 3030;

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!');
})

// Middlewares
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/books', booksRoute)
app.use('/api/users', usersRoute)

// Error handling
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || 'Something went wrong!';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    })
})

app.listen(PORT, () => {
    connect();
    console.log('Server is running on port: ', PORT)
})