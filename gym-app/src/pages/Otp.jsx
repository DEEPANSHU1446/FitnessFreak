import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from "axios"
// import { ToastContainer, toast } from 'react-toastify';

export const Otp = () => {
  let email=localStorage.email
  let [otp,setOtp]=useState({
email:email,
otp:""
  })
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
  try {
    await axios.post("http://localhost:8800/verify",otp)
    navigate("/gym")
  } catch (error) {
  // toast.error(error.response.message);
  setError(error.response.data);
  }
  }
  const handleChange= (e)=>{
     setOtp(
      (pre)=>(
        {...pre,[e.target.name]:e.target.value}
        ))
  }
  return (
    <>
    <section>
      <div className="form_data ">
        <div className="form_heading ">
          <h1>Please Enter Your OTP Here</h1>
        </div>
        <form>
          <div className="form_input text-black">
            <h1>OTP</h1>
            <input type="text" name="otp" id="" onChange={handleChange} placeholder='Enter Your OTP' />
          </div>
         {/* <Link to="/gym">  */}
         <button className='btn' onClick={LoginUser}>Submit</button>
         {/* </Link> */}
        </form>
      </div>
      {error && <p>{error}</p>}

      {/* <ToastContainer /> */}

    </section>
  </>
  )
}
