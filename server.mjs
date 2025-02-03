// Deployed to https://mern-backend-0cco.onrender.com/

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.mjs';
import happRoutes from './routes/happRoutes.mjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//DB
connectDB();
//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use('/api/happs', happRoutes);
app.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
