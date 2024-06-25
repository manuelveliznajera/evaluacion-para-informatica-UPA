// const express = require('express');
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import usersRoutes from "./routes/users.js";
import db from "./config/db.js";


const app = express();
const port = process.env.PORT || 3000;

async function connectDb(){
    try {    
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectDb();

app.use(bodyParser.json());
app.use(cors());



app.use('/api', usersRoutes );


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
