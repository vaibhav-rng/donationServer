const mongoose = require("mongoose")

const reviewSchema =new mongoose.Schema({
        mName:String,
        bName:String,
        dosage:String,
        quantity:String,
        eDate:String
})

const Donation = new mongoose.model('Donation',reviewSchema)

module.exports = Donation