const mongoose = require("mongoose")

const reviewSchema =new mongoose.Schema({
    username:String,
    reviewarea:String,
    rating:Number 
})

const Review = new mongoose.model('Review',reviewSchema)

module.exports = Review