import express from "express"
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
 import authRoutes from "./routes/auth.route.js"






dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("mongodb connected successfully")})
.catch((err)=>{console.log(err)}) 

app.use(express.json())

app.listen(3000,()=>{
    console.log("server started")
})

app.use("/api/auth" , authRoutes)