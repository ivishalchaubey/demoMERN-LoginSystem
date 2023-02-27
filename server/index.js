import express from 'express';
import configDB from './database/db.js';
import Route from './router/route.js';
import cors from 'cors'

const app = express();
const PORT = 5000

// Routes called...
app.use(cors())
app.use(express.json())
app.use('/',Route)
// Databse connection
configDB();

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`);
})