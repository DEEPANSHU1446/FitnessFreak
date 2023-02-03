import React from "react";
import { Link } from "react-router-dom";
// 
export default function Register() {
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
            <input className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem]" placeholder="Enter full name" />
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] "  type="email" placeholder="Email Id" />
          </div>
          <div className="flex justify-between gap-[2rem]">
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] "  type="number" placeholder="Mobilenumber" />
            <input  className="w-[28rem] h-[3rem]  bg-transparent bg-gradient-to-r from-black pl-[1rem] " type="text" placeholder="Referal code (optional)" />
          </div>
          <div className="">
            <button className="bg-red-600 w-[28vw] h-[3rem] ">send OTP</button>
          </div>
        </div>
        <div>
          <p className="mt-[3rem]">
            Already have an account?
            <Link to="/login">
              {" "}
              <button className="text-red-600 font-bold">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
