import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
const Forgotpass = () => {
    const [email, Setemail] = useState('')

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4005/auth/forgot-password', {
            email
        }).then(res => {
            if(res.data.status){
              alert('Check your email for reset password link')
              navigate('/')
            }
        }).catch(err => console.log(err)
        )
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
            <p className="pForget">Remember your password? <Link to={'/'}>Login</Link></p> 
          </form>
        </div>
      </div>
    </main>
  )
}

export default Forgotpass