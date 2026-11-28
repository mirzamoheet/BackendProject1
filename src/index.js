import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./db/index.js"; 
dotenv.config();

let app = express();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

dataBaseConnection();