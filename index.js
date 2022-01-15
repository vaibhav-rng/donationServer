const express = require("express")
const cors =require("cors")
const app =express()
require("./connection/conn")
const review = require("./models/reviewmodel")

const port = 3001

app.use(cors())
app.use(express.json())


app.post("/donation",async(req,res)=>{
try{
     const mName =req.body.mName
     const bName =req.body.bName
     const dosage =req.body.dosage
     const quantity=req.body.quantity
     const eDate=req.body.eDate

     const rpost =  new review({mName,bName,dosage,quantity,eDate})
     await rpost.save()
}
catch(err){
  res.send(err)
}
})

app.get("/donation",async(req,res)=>{
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