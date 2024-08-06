// require('dotenv').config({path: './env'})

import dotenv from "dotenv";


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
/*
First Approch (Not Bad can use)
;( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error", (err) => {
            console.log("ERROR", err);
            throw err
        })
        app.listen(process.env.PORT, () =>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    }catch(err){
        console.error("ERROR", err)
        throw err
    }
})()
    */

// Better Approch

connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log("Server is running at port : ", process.env.PORT)
//     })
// })
// .catch((err) => {
//     console.log("MongoDB ConnectionFailed !!! ", err)
// })

