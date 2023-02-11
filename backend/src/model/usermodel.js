const mongoose = require ("mongoose")
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    referalCode:String,
    code:Number,
    verified:{
        type:String,
        default:false
    }
})

module.exports= mongoose.model('user',userSchema)