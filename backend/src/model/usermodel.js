const mongoose = require ("mongoose")
const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    phone:Number,
    referalCode:String,
    code:Number,
    verified:{
        type:String,
        default:false
    }
})

module.exports= mongoose.model('user',userSchema)