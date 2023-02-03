import React from 'react'
import gimg from "../images/google.png"
import aimg from "../images/app.jpeg"
export default function Footer() {
  return (
    <div className=' text-white my-20 flex justify-between items-center'>
      <div className='ml-48  text-3xl'>
      <i className="fa-brands fa-instagram mr-10 cursor-pointer hover:text-red-500"></i>
      <i className="fa-brands fa-facebook mr-10 cursor-pointer hover:text-blue-800"></i>
      <i className="fa-brands fa-linkedin mr-10 cursor-pointer hover:text-sky-600"></i>
      </div>
      <div className ="flex items-center mr-56">
      <img src={gimg} alt="me yaha hu" className='h-24 cursor-pointer'/>
      <img src={aimg} alt="me bhi yaha hu "className="rounded-lg border-2 border-gray-400 h-16 w-52 cursor-pointer"/>
      </div>
    </div>
  )
}
