const express = require('express')
const router = express.Router()
const user= require("./controller/usercontroler")
router.post("/register",user.addUser)
router.post("/login",user.login)
router.post("/verify",user.verifyOtp)

module.exports=router;