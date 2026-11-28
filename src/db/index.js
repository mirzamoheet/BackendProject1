import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

let dataBaseConnection = async () =>{
    try {
        let connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log("Database connection successful", connectionInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}

export default dataBaseConnection;