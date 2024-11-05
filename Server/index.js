import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/DbConnect.js';
import router from './routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

const cors = require('cors');
const express = require('express');
const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Local dev
  'https://healthcareservice-client-pl6pbjrgt-akinola-femis-projects.vercel.app' // Vercel production
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};



app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'https://healthcareservice-client.vercel.app');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
   });

// Connected To DataBase
connectDb()

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use('/auth', router);
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})
