import '../index.css'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { Button } from "@material-tailwind/react";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Login = () => {

    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);



    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    const HandleSubmit = (e) => {
      e.preventDefault();
      Axios.post('https://healthcareservice-server.vercel.app/auth/login', {
        email,
        password
      })

      // fetch({
        //   method: 'POST',
        //   url: "http://localhost:4005//auth/login",
        //   headers: {'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials': 'true' , Accept:'application/json'},
        //   data:{
        //     country:localStorage.getItem('locale')
        //   }
        // })
      .then(res => {
        if (res.data.status) {
          navigate('/home');
        } if(res.data.status !== res.data.status){
          setErrorMessage(`user not registered`)
        }
        else {
          setErrorMessage('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('An error occurred. Please try again later.');
      });
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
              <input type={type} value={password} onChange={(e) => Setpassword(e.target.value)} placeholder="••••••••••••"/>
              <span className='flex justify-center items-center relative' onClick={handleToggle}>
                <Icon class="absolute mb-20 ml-44 md:ml-56" icon={icon} size={25}/>
              </span>
            </div>
            <main className='forgetpass'>
              <Link to={'/forgot-password'}>Forgot password?</Link>
            </main>
            <div className="btn">
              <input type="submit" value='Login'/>
              {/* <div className='cursor-pointer'>
                
                <Button  type='submit' loading={true}>Login</Button>
              </div> */}

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
