import {useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"

const ResetPass = () => {
    const [password, Setpassword] = useState('')
    const {token} = useParams()

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4005/auth/resetPassword/'+token, {
            password
        }).then(res => {
            if(res.data.status){
                navigate('/login')
            }
            console.log(res.data)
        }).catch(err => console.log(err)
        )
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
              <input type="password" onChange={(e) => Setpassword(e.target.value)} placeholder="••••••••••••"/>
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