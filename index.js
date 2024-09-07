import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import studentRoute from './routes/students.js'
import teacherRoute from './routes/teachers.js'
import classRoute from './routes/classes.js'
import usersRoute from './routes/users.js'
import cookieParser from 'cookie-parser';

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
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/students', studentRoute)
app.use('/api/teachers', teacherRoute)
app.use('/api/classes', classRoute)
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