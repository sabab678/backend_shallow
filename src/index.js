// // require ('dotenv').config({path:'./.env'})

import dotenv from "dotenv"
dotenv.config({path:'./.env'})


import mongoose, { connect } from "mongoose";

import {DB_name} from "./constants.js"

import express from "express"
import connectDB from "./db/index.js";





connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`http://localhost:${process.env.PORT}`)

    })
}

)
.catch((error)=>{
    console.log("DB connection Fail:",error)

})
















// /*

// (async()=>{

//     try 
//         {
//             await mongoose.connect(  `${process.env.MONGODB_URI}/${DB_name}`)
//             app.on('error',(error)=>{
//                 console.log("Error:",error)
//                 throw error
//             })


//             app.listen(process.env.PORT, ()=>{
//                 console.log(`http://localhost:${process.env.PORT}`)

//             })

//         }
//     catch(error){
//         console.log("error:", error)
//     }

// })()


// */



