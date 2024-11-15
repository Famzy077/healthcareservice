// import React from 'react'
import { useState } from 'react'
import './Form.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Signup = () => {

  const [username, Setusername] = useState('')
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')
  
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);


  const navigate = useNavigate()
  const HandleSubmit = (e) => {
    e.preventDefault()
    Axios.post('https://healthcareservice-server.vercel.app/auth/signup', {
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

  const handleToggle = () => {
    if (type==='password'){
      setIcon(eye);
      setType('text')
    } else {
        setIcon(eyeOff)
        setType('password')
    }
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
              <label htmlFor="fname">Full Name:</label>
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
              <input type={type} value={password} onChange={(e) => Setpassword(e.target.value)} required placeholder="••••••••••••"/>
              <span className='flex justify-center items-center relative' onClick={handleToggle}>
                <Icon class="absolute mb-20 ml-44 md:ml-56" icon={icon} size={25}/>
              </span>
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
