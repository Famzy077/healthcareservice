import express from 'express'
import dotenv from 'dotenv'
// import connectDb from '../config/DbConnect.js';
import mongoose from "mongoose";
import router from '../routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()


const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_KEY)
        console.log(`Connected to the data base successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(error, 'Mongodb is not connect to database');
        process.exit(1)
    }
}

// Connect To DataBase
connectDb()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', router);
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})