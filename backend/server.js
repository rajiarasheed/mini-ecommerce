
// App configuration

const express=require('express')
const cors=require('cors')
require("dotenv").config()
const connectDB=require('./config/mongodb.js')
const ProductRoutes=require('./routes/ProductRoutes.js')

const app=express()


// middlewares
app.use(express.json())
app.use(cors())

connectDB()

// routes
app.get('/',(req,res)=>{
    res.send("API is running")
})

// product routes
app.use('/products',ProductRoutes)

// 404 Error Handler
app.use((req,res)=>{
    res.send(404).json({message:"Route not found"})
})

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log("server running")
)