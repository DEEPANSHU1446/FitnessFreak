import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import img from "../images/logg.jpeg"


export default function Login() {
// const[check,setCheck]=useState("Number")
// const changeHandle=()=>{
// setCheck("email")
// }
  return (
    <div className='flex justify-around '>
     

      <div className='text-white flex flex-col justify-center items-center border-4 border-red-500  w-[35vw] h-[55vh]  gap-[2rem] mt-[9rem] ml-[12rem]'>
        <h1 className='text-5xl'>WELCOME BACK</h1>
        <input className='w-[20vw] h-[6vh] bg-transparent border-2 border-gray-600 px-[1rem]' type="email" placeholder='enter your email'/>
       <div className='flex flex-col text-xl gap-[0.5rem] w-[20vw] '>
         <button className=' bg-red-500 h-[6vh] hover:bg-black hover:border-2 border-red-500'>sent OTP</button>
        <button className='border-2 border-red-500 h-[6vh] hover:bg-white hover:text-black hover:border-white'>Login with Email</button></div>
        <h1 className='text-2xl'>dont have account ? <Link to="/register"><button className='text-red-500'>Register</button></Link></h1>

      </div>

      <div >
      <img src="https://i.pinimg.com/originals/ec/ce/a9/eccea9430cec88b3e3cebf0f185b91be.png" alt="ha kya" className='h-[55vh] mt-[9rem] mr-[9rem]' />
      </div>
    </div>
  )
}
