const userModel =require("../model/usermodel")


const nodemailer = require('nodemailer'); // npm install nodemailer 


// Generate OTP function
function generateOTP() { 
    // Declare a digits variable  
    // which stores all digits  
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
}  

function sendMail(email,code){
    let transporter = nodemailer.createTransport({

        service: 'outlook',
        
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS, // Enter your gmail password here 
        }, 
    });

    let mailOptions = {
        
        from: process.env.MAIL, // Enter your gmail address here 
        
        to: email,

        subject: 'OTP Verification',

        text: `Your one time password is ${code }` // This is the body of the email message 
        
    };    
    transporter.sendMail(mailOptions, function (error, info) {
        
        if (error) {
            console.log(error);
            // res.status(400).json({ msg: "Error sending OTP" });
        } else {
            console.log('Email sent successfully');
            // res.status(200).json({ msg: "OTP sent successfully" });
        }        
    }); 
}
const addUser =async (req,res)=>{
    try{
    
    let {email} = req.body;
    let checkEmail= await userModel.findOne( {email} )
    if(checkEmail){
        if(checkEmail.verified==true){
        return res.status(400).json("Email already register")
        }else{
            let code=generateOTP()
            sendMail(email,code)
            let updata= await userModel.findOneAndUpdate(email,{code:code},{new:true})
            return res.status(200).json(updata)
        }
    }
    // Generate a random 4 digit OTP 
    req.body.code =generateOTP();
    sendMail(email,req.body.code)
    // Send the OTP to the user's email address 
    let saveOtp = await userModel.create(req.body)  
    return res.status(201).send(saveOtp)
}
catch(error){
    res.status(500).send(error.message)

}}
//genetrating and verifying of otp with nodemailer?
 let login =async (req,res)=>{
    try {
        let data =req.body.email
        let findUser= await userModel.findOne({data})
        if(!findUser){
            return res.status(200).json("email is not registered")
        }
        let code = generateOTP()
        findUser.code=code
        findUser.save()
        return res.status(200).json(findUser)
    } catch (error) {
    res.status(500).send(error.message)
        
    }
 }
 let verifyOtp=async (req, res) => {  
try
   { let userOtp = req.body.otp; 
      // Get the OTP entered by the user from the request body  
     let verifiedOtp= await userModel.findOne({ $and: [{email:req.body.email}, {code:userOtp}] })
     console.log(userOtp)
      if(verifiedOtp){
       verifiedOtp.code=null,
       verifiedOtp.verified=true
       verifiedOtp.save()
       res.send("verified")
      }else{
        res.status(400).send("otp is incorrect")
      }}
      catch(error){
        res.status(500).send(error.message)
      }
}


module.exports={addUser,verifyOtp,login}