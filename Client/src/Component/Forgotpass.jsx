import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
const Forgotpass = () => {
    const [email, Setemail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://healthcareservice-server.vercel.app/auth/forgot-password', {
            email
        }).then(res => {
            if(res.data.status){
              alert('Check your email for reset password link')
              navigate('/')
            }if(!res.data.status === res.data.status){
              setErrorMsg('Please this email is not registered')
            }
        }).catch(err => {
          console.log(err)
          setErrorMsg('Please try again later an error occur')
        })
    }
  return (
    <main className='main' style={{backgroundImage: `url('https://media.gettyimages.com/id/693669855/photo/stethoscope-in-doctors-office.jpg?s=612x612&w=0&k=20&c=BuFbGXrssOgAqqtFcXPNmkTMM0D4h_SD9EfbZGGNE-4=')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="contain formDiv">
        <div className="main-wrap">
          <div className="headText">
              <h1>Forgot Password</h1>
          </div>
          <form action="" onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email"/>
            </div>
            <div className="btn">
              <input type="submit" value='Forgot Password'/>
            </div>
            <p style={{color: 'red'}}>{errorMsg}</p>
            <p className="pForget">Remember your password? <Link to={'/'}>Login</Link></p> 
          </form>
        </div>
      </div>
    </main>
  )
}

export default Forgotpass