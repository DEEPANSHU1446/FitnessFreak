import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [datas, setData] = useState({
    email: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let val= await axios.post("http://localhost:8800/login", datas);
      setData(val.data)
      
      console.log(val.data);
      navigate("/otp");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="flex justify-around ">
      <div className="text-white flex flex-col justify-center items-center border-4 border-red-500  w-[35vw] h-[55vh]  gap-[2rem] mt-[9rem] ml-[12rem]">
        <h1 className="text-5xl">WELCOME BACK</h1>
        <input
          className="w-[20vw] h-[6vh] bg-transparent border-2 border-gray-600 px-[1rem]"
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
        />
        <div className="flex flex-col text-xl gap-[0.5rem]  ">
       <Link to="/otp">
            <button
              className=" bg-red-500 h-[6vh] w-[20vw] hover:bg-black hover:border-2 border-red-500"
              onClick={handleSubmit}
            >
              sent OTP
            </button>
    </Link>
          {/* <button className='border-2 border-red-500 h-[6vh] hover:bg-white hover:text-black hover:border-white'>Login with Email</button> */}
        </div>
      {error && <p className="text-red-600 text-xl">{error}</p>}
        <h1 className="text-2xl">
          dont have account ?{" "}
          <Link to="/register">
            <button className="text-red-500">Register</button>
          </Link>
        </h1>
      </div>

      <div>
        <img
          src="https://i.pinimg.com/originals/ec/ce/a9/eccea9430cec88b3e3cebf0f185b91be.png"
          alt="ha kya"
          className="h-[55vh] mt-[9rem] mr-[9rem]"
        />
      </div>
    </div>
  );
}
