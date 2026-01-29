const mongoose = require ('mongoose')

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
     email:{
        type:String,
        requires:true
    },
     message:{
        type:String,
        requires:true
    },
     status:{
        type:String,
        requires:true,
        default:'pending'
    }
})

const feedbacks = mongoose.model("feedbacks",feedbackSchema)
module.exports = feedbacks