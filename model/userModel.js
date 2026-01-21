// 1.Import mongoose
const mongoose = require ('mongoose')

// 2.Creare schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        default:""
    },
    role:{
        type:String,
        required:true,
        default:"user"
    }
})

//3. Assign to mongoDB Atlas
const users = mongoose.model("users",userSchema)
// 4.Also Export
module.exports = users