// import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');


    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    const HandleSubmit = (e) => {
      e.preventDefault();
      Axios.post('https://healthcareservice-server.vercel.app/auth/login', {
        email,
        password
      })
      .then(res => {
        if (res.data.status) {
          navigate('/home');
        } else {
          setErrorMessage('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('An error occurred. Please try again later.');
      });
    }

  return (
      <main className='main' style={{backgroundImage: `url('https://media.gettyimages.com/id/693669855/photo/stethoscope-in-doctors-office.jpg?s=612x612&w=0&k=20&c=BuFbGXrssOgAqqtFcXPNmkTMM0D4h_SD9EfbZGGNE-4=')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="contain formDiv">
        <div className="main-wrap">
          <div className="headText">
              <h1>Welcome back</h1>
              <p>Please Login to your <span>HealthCare</span> account</p>
          </div>
          <form action="" onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email"/>
            </div>
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" onChange={(e) => Setpassword(e.target.value)} placeholder="••••••••••••"/>
            </div>
            <main className='forgetpass'>
              <Link to={'/forgot-password'}>Forgot password?</Link>
            </main>
            <div className="btn">
              <input type="submit" value='Login'/>
            </div>
            <p className='errorMsg'>{errorMessage}</p>
            <p>Or create account? <Link to={'/signup'}>Sigup</Link></p> 
          </form>
        </div>
      </div>
      </main>
  )
}

export default Login
