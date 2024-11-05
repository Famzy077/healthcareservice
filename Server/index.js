import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/DbConnect.js';
import router from './routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
// let whiteList = ['https://vercel.com']
// const corsOptions = {
//     origin: function(origin, callback) {
//         if(whiteList.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Block by CORS'))
//         }
//     },
//     optionSuccessStatus: 200
// }
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'https://healthcareservice-client.vercel.app');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
   });

// Connected To DataBase
connectDb()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/auth', router);
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})
