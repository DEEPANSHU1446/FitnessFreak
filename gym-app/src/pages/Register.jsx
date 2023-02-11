import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {  toast } from 'react-toastify';

export default function Register() {

  let[data,setData]=useState({
    userName:"",
    email:"",
    phone:"",
    referalCode:""
  })
  const [error, setError] = useState(null);
  const handleChange = (e)=>{
  setData((prev)=>({
   ...prev,[e.target.name]:e.target.value
  }));
  }
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault()   
    try {
     let response= await axios.post("http://localhost:8800/register",data)
      if (response.status === 200) {
        console.log(response.status)
        localStorage.setItem("email", response.data.email);
        toast.success(response.data.message);
      navigate("/otp");}
    } catch (error) {
      setError(error.response.data);
    }
  }


  return (
    <div className="object-cover">
      <img className="h-[130vh] relative w-[100vw]" src="https://wallpaperaccess.com/full/1244688.jpg" alt=""/>
    <div className="flex justify-between w-[70vw] flex-col  ml-[15rem] text-2xl h-[60vh] mt-[3rem] backdrop-opacity-10 backdrop-invert bg-white/10 absolute top-[130px]">
      <div className="text-5xl m-[3rem] ">
        <h1>Register</h1>
      </div>
      <div className="flex justify-center items-center flex-col absolute bottom-[4rem] left-[74px] ">
        <div className="flex justify-between items-center flex-col gap-[1rem] ">
          <div className="flex justify-between gap-[2rem]">
            <input className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem]" placeholder="Enter full name" onChange={handleChange} name="userName" />
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] "  type="email" name="email" onChange={handleChange} placeholder="Email Id" />
          </div>
          <div className="flex justify-between gap-[2rem]">
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] "  type="number" name="phone" onChange={handleChange} placeholder="Mobilenumber" />
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] " type="text" name="referalCode" onChange={handleChange} placeholder="Referal code (optional)" />
          </div>
          <div className="">
            <button className="bg-red-600 w-[28vw] h-[3rem] " onClick={handleSubmit}>
              <Link to="/otp">send OTP</Link></button>
          </div>
        </div>
        {error && <p>{error}</p>}
        <div>
          <p className="mt-[3rem]">
            Already have an account?
            <Link to="/login">
              <button className="text-red-600 font-bold">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
