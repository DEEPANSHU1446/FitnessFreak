import React from 'react'
import img from "../images/fit.jpg"

export default function Home() {
  return (
    <div >
        <img src={img} alt="loading.." className='w-full relative'/>
       <div className='flex justify-items-center absolute top-80 ' >
       <h1 className= 'ml-40 text-white text-[90px] tracking-wide'>MAKING INDIA FIT <br/>ON <span className='type text-amber-500 animate-pulse'>BUDGET</span></h1></div> 
    </div>
  )
}
