import {useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const ResetPass = () => {
    const [password, Setpassword] = useState('')
    const {token} = useParams()

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://healthcareservice-server.vercel.app/auth/resetPassword/'+token, {
            password
        }).then(res => {
            if(res.data.status){
                navigate('/')
            }
            console.log(res.data)
      }).catch(err => {
        console.log(err)
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
      <div className="contain formDiv">
      <div className="main-wrap">
        <div className="headText">
            <h1>Reset Password</h1>
        </div>
        <form action="" onSubmit={HandleSubmit}>
          <div>
              <label htmlFor="pass">Password:</label>
              <input type={type} value={password} onChange={(e) => Setpassword(e.target.value)} placeholder="••••••••••••"/>
              <span className='flex justify-center items-center relative' onClick={handleToggle}>
                <Icon class="absolute mb-20 ml-44 md:ml-56" icon={icon} size={25}/>
              </span>
          </div>
          <div className="btn">
            <input type="submit" value='Reset Password'/>
          </div>
          {/* <p className="pForget">Remember your password? <Link to={'/login'}>Login</Link></p>  */}
        </form>
      </div>
    </div>
    </main>
  )
}

export default ResetPass