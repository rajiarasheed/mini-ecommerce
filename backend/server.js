
// App configuration

const express=require('express')
const cors=require('cors')
require("dotenv").config()
const connectDB=require('./config/mongodb.js')

const app=express()


// middlewares
app.use(express.json())
app.use(cors())

connectDB()

// api endpoints
app.get('/',(req,res)=>{
    res.send("Hello")
})

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log("server running")
)