import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dataBaseConnection from "./db/index.js";
let app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT}`);
})


dataBaseConnection() 
