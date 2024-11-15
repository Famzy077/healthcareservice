// import React from 'react'
import { useState } from 'react'
import './Form.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Signup = () => {
  const [username, Setusername] = useState('')
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')

  const navigate = useNavigate()
  const HandleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:4005/auth/signup', {
      username,
      email,
      password
    })
    .then(res =>{
      if(res.data.status){
        navigate('/') 
      }
    })
    .catch(err => {
      console.error(err)
    })
  }
  return (
    <main className='main' style={{backgroundImage: `url('https://media.gettyimages.com/id/693669855/photo/stethoscope-in-doctors-office.jpg?s=612x612&w=0&k=20&c=BuFbGXrssOgAqqtFcXPNmkTMM0D4h_SD9EfbZGGNE-4=')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="contain">
        <div className="main-wrap">
          <div className="headText">
              <h1>Welcome to <span>HealthCare</span></h1>
              <p>please sign up to continue</p>
          </div>
          <form action="" onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="fname">User Name:</label>
              <input type="text" onChange={(e) => Setusername(e.target.value)} placeholder="Enter your user name" required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email" required/>
            </div>
            <div className="special">
              <label htmlFor="gender">Gender:</label> <br/>
              <label className="labe_ mx-2" htmlFor="male">Male</label>
              <input type="radio" name="gender"/>
              <label className="labe_ mx-2" htmlFor="female">Female</label>
              <input type="radio" name="gender"/>
            </div>
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" onChange={(e) => Setpassword(e.target.value)} required placeholder="••••••••••••"/>
            </div>
            <div className="special">
              <label className='link m-2' htmlFor="terms"><Link to={''}>Terms and Condition</Link></label>
              <input type="checkbox" required/>
            </div>
            <div className="btn">
              <input type="submit"/>
            </div>
            <p>Have an account? <Link to={'/'}>Login</Link></p> 
          </form>
        </div>
      </div>
    </main>
  )
}

export default Signup
