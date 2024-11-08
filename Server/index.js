import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/DbConnect.js';
import router from './routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

// Connected To DataBase
connectDb()

const corsOptions = {
    origin: 'https://healthcareservice-client.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials if needed
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use('/auth', router);
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})
