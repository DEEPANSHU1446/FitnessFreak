import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import img from "../images/ic.gif";

export default function Gym() {
  const [city, setcity] = useState({});
  const [gym,setGym]=useState({});
  const fetchCity = async () => {
    let result = await axios.get("https://devapi.wtfup.me/gym/places");
    setcity(result.data);
  };
   const getGym =async ()=>{
    let result = await axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
    setGym(result.data.data)
    // console.log(result.data.data)
  }
  useEffect(() => {
    fetchCity();
    getGym();
  }, []);

  return (
    <div>
      <div className="py-[5rem] px-[5rem] bg-gradient-to-r from-red-600 to-black  h-[39rem]">
        <div className="flex">
          <h1 className="pow text-[13rem] pb-2 text-5xl  text-center mt-[3rem] font-sans font-bold ">
            POWERED
          </h1>
          <h1 className="text-[13rem] font-sans font-bold  absolute bottom-[9rem] left-[60rem] text-red-600">
            GYM
          </h1>
        </div>
      </div>
      <div>
        <input
          className="border-2 rounded bg-transparent w-[90rem] ml-[2rem] mt-[2rem] h-[4rem] pl-[4rem] pt-[0.8rem] text-2xl"
          placeholder="search gym name here.."
        ></input>
        <div className="flex items-center absolute top-[43rem] ">
          <i className="fa-solid fa-magnifying-glass absolute left-[3rem] text-2xl  text-gray-400"></i>
          <div className="flex items-center ">
            <i className="fa-solid fa-location-dot  absolute left-[80rem] text-2xl  bg-red-600 rounded w-[3rem] h-[2.5rem] flex items-center justify-center"></i>
          </div>
        </div>
        <button className="bg-red-600 rounded text-2xl  absolute right-[5rem] bottom-[2.4rem] w-[5rem] h-[2.4rem]">
          search
        </button>
      </div>

      <div className="flex py-[2.5rem]">

      <div className="text-3xl pl-[2rem] flex flex-col gap-[1rem]">
        <div>
          <h1 className="text-5xl font-sans pb-[3rem]">Filters</h1>
        </div>
        <p>Location</p>
        <div>
          <i className="fa-solid fa-magnifying-glass absolute left-[2.4rem] pt-1 text-2xl text-gray-300"></i>
          <input
            className=" px-[2.3rem] w-[23.7rem] h-[3rem] text-2xl  bg-gray-800 rounded border-2 border-gray-400"
            placeholder="Enter location"
            />
        </div>
        <h1>Price</h1>
        <div className="flex space-x-4 ">
          <input
            className="  h-[3rem] text-2xl  w-[6rem]  bg-gray-800  px-[1rem] border-2 border-gray-400 rounded"
            placeholder="Min"
            />
          <input
            className="  h-[3rem] text-2xl w-[6rem]  bg-gray-800  px-[1rem] border-2 border-gray-400 rounded"
            placeholder="Max"
            />
        </div>
        <h1>Cities</h1>
        <select
          name="city"
          className="bg-gray-800 w-[23.7rem]  h-[3rem] text-2xl  border-2 border-gray-400 rounded h-[2.5rem]"
        >
          <option defaultValue> select city</option>
          {Object.entries(city).map((v, i) =>
            Object.entries(v[1]).map((va, ind) => (
              <option value={v} key={ind}>
                {va[1].city}
              </option>
            ))
            )}
        </select>
      </div>
      <div className=" ml-[3rem]">
      {Object.entries(gym).map((v,i)=>(
        <div  className="  bg-transparent bg-gradient-to-r from-gray-800  w-[65rem]   rounded h-[15rem]  text-3xl mb-[2rem]"> 
        <div className="flex flex-col items-center   "> 
          <h2 className="mt-[1rem]">{v[1].gym_name}</h2>
          <h2 className="mt-[1rem]">★★★★★</h2>
          <h2 className="mt-[1rem]">{v[1].address1}, {v[1].address2}</h2>
        <div className="flex gap-[1.4rem] ">
          <i className="fa-solid fa-location-arrow text-[#277B30] mt-[1rem]"></i>
          <h3 className="mt-[1rem] ">{v[1].duration_text} || {v[1].distance_text}</h3>
        </div>
          <button className="absolute right-[1rem] mt-[10rem] bg-red-500 rounded w-[7rem] text-2xl">Book Now</button>
    
        </div>
      </div>
      ))} 
      </div>
      </div>
    </div>
  );
}
