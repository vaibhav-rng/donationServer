const express = require("express")
const cors =require("cors")
const app =express()
require("./connection/conn")
const review = require("./models/reviewmodel")

const port = 3001

app.use(cors())
app.use(express.json())


app.post("/review",async(req,res)=>{
try{
     const username =req.body.username
     const reviewarea =req.body.reviewarea
     const rating =req.body.rating

     const rpost =  new review({username:username,reviewarea:reviewarea,rating:rating})
     await rpost.save()
}
catch(err){
  res.send(err)
}
})

app.get("/review",async(req,res)=>{
    try{
       const rget = await review.find()
        res.send(rget)
    }
    catch(err){
      res.send(err)
    }
    })

app.listen(port,()=>{
    console.log(`connected to ${port}`)
})