import express from "express"
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
 
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("mongodb connected successfully")})
.catch((err)=>{console.log(err)}) 



app.listen(3000,()=>{
    console.log("server started")
})