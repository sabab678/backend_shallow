
//-----------In this file i connect my mongoose with mongoDB----------


import mongoose from "mongoose";

import {DB_name} from "../constants.js"


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(  `${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`\nmongoDB is connected: ${connectionInstance.connection.host}`)

    }
    catch(error){
        console.log("mongoDB connection Error:", error);
        process.exit(1);
    }

}



export default connectDB;



