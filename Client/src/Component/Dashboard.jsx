// import { useEffect, useState } from 'react';
// import { Carousel, Typography, Button } from "@material-tailwind/react";
// import '../index.css';
import Axios from 'axios'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const dashboard = () =>{
   const navigate = useNavigate()
  useEffect(() => {
    Axios.get('/http://localhost:4005/auth/verify')
    .then(res => {
      if(res.data.status){
        console.log('successful')
      }
      else{
        navigate('/dashboard')
      }
    }).catch(error => {
      console.log(error)
    })
  },[])
  return(
      <div className="bg-blue-500 flex flex-col items-center justify-center h-screen">
        <h1 className='text-white text-4xl'>Welcome to Dashboard</h1>
        <p className='text-2xl text-white'>Something amazing is coming 🚶‍♀️🚶‍♂️</p>
        <p className='text-brown-900 font-semibold'>Click to go back to<Link to={'/home'}> home page</Link></p>
      </div>
  )
}
export default dashboard