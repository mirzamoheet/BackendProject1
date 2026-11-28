import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
let dataBaseConnection = async()=>{
    try {
        let connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log(connectionInstance.connection.host, "DataBase connection SUCCESSFUL");
    } catch (error) {
        console.log("DataBase connection FAILED: ",error);
        throw error;
    }
}

export default dataBaseConnection;