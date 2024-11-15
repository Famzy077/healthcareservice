import { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Blogs from './BlogData'
const Blog = () => {
  const dateTime = new Date().getFullYear()
    Axios.defaults.withCredentials = true
    const handleLogout = () => {
        Axios.get('https://healthcareservice-server.vercel.app/auth/logout')
        .then(res => {
            if(res.data.status){
                window.location.href = '/'
                console.log(res.data.status)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    const [isOpen, setisOpen] = useState(false)
    // const [nav, setNav] = useState(false)
    const toggleBtn = () => {
        setisOpen(!isOpen) 
    }
    // const navToogle = () => {
    //     setNav(!nav)
    // }

  return (
    <div>
        <header className='header'>
        <menu>
          <h1><span className='text-brown'>Health</span>Care</h1>
          <div className="menu">
          <i className='fa-solid fa-bars' onClick={toggleBtn}></i>
          </div>
        </menu>
        <nav>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/findDoctor'}>Find Doctor</Link></li>
            <div className='userIcon'>
            {/* <li>Pharmacy
              <ul className='drop-down'>
                <li><Link>Drug</Link></li>
                <li><Link>Injection</Link></li>
                <li><Link>Treatment</Link></li>
              </ul>
            </li> */}
            </div>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <div className='userIcon'>
              <li ><i className='fa-solid fa-user'></i>
              <ul className='drop-down'>
                <li><Link to={'/dashboard'}>Profile</Link></li>
                <li onClick={handleLogout}><Link to={'/'}>Logout</Link></li>
                <li><Link>Bookmark</Link></li>
              </ul>
            </li>
            </div>
          </ul>
        </nav>
          <div className='booking'>
          <h2 className='mt-4 p-[10px] px-[15px] rounded-lg bg-orange-700'><Link to={'/contact'}>Booking</Link></h2>
          </div>

        {isOpen && (
          <div className='toggleMenu'>
            <div><Link to={'/home'}>Home</Link></div>
            <div><Link to={'/about'}>About</Link></div>
            <div><Link to={'/findDoctor'}>Find Doctor</Link></div>
            {/* <div onClick={navToogle}><Link to={''}>Pharmacy 👆</Link></div>
            {nav && (
              <>
                <div><Link to={''}>Drug</Link></div> <hr />
                <div><Link to={''}>Injection</Link></div> <hr />
              </>
            )} */}
            <div><Link to={'/blog'}>Blog</Link></div>
            <div><Link to={'/contact'}>Contact</Link></div>
            <div><Link to={'/dashboard'}>Profile</Link></div>
            <div onClick={handleLogout}><Link to={'/'}>Logout</Link></div>
          </div>
        )}
        </header>

        <div>
            <h1 className='text-2xl md:text-5xl font-bold m-10 text-blue-900'>Psychology and Life Style</h1>
        </div>

        <main>
            <Blogs/>
        </main>

        <div className="arrow-top text-end relative my-10 mx-2">
        <a href="#top" className="text-3xl text-blue-900 font-bold items-center p-5 bg-gray-100 shadow-xl h-[50px] w-[50px] rounded-full"><i className="fa-solid fa-arrow-up"></i></a>
      </div>
      
      <footer className=''>
        <main className='footer grid p-10 bg-blue-400 text-white leading-10 text-xl'>
          <div className="footer-content">
            <h1 className='m-4 font-bold text-2xl'>Healthcare Medical Center</h1>
            <div>
              <p>123 Anywhere St., Any City 12345</p>
              <p>123-456-7890</p>
              <p>hellocallcenter@gmail.com</p>
            </div>
          </div>
          <div>
            <p><Link to={''}>About Us</Link></p>
            <p><Link to={''}>Departments</Link></p>
            <p><Link to={''}>Doctors</Link></p>
            <p><Link to={''}>Timetable</Link></p>
            <p><Link to={''}>Appointment</Link></p>
            <p><Link to={''}>Testimonials</Link></p>
          </div>
          <div>
            <p><Link to={''}>Blog</Link></p>
            <p><Link to={''}>Contact Us</Link></p>
            <p><Link to={''}>FAQs</Link></p>
            <p><Link to={''}>Privacy Policy</Link></p>
            <p><Link to={''}>Terms and Conditions</Link></p>
          </div>
          <div>
            <h2>Be Our Subscribers</h2>
            <p>To get the latest news about health from our experts</p>
            <form className='shadow-none' onSubmit={handleSubmit} action="">
              <input className='w-auto p-1' required type="email" placeholder='Subscribe'/> <br />
              <button className='border-1 rounded-lg bg-orange-900 text-white px-9 shadow-xl'>Submit</button>
            </form>
          </div>
        </main>
        <article className='footerArticle'>
          <div>
          <p>Follow Us</p>
            <div><i className="fa-brands fa-square-facebook"></i></div>
            <div><i className="fa-brands fa-youtube"></i></div>
            <div><i className="fa-brands fa-linkedin"></i></div>
            <div><i className="fa-brands fa-instagram"></i></div>
            <div><i className="fa-brands fa-linkedin"></i></div>
          </div>
          <div>
            <p>Copyright © {dateTime } Health Care developed by <b>Femi</b>. All rights reserved.</p>
          </div>
        </article>
      </footer>
    </div>
  )
}

const handleSubmit = (index) => {
  index.preventDefault()
  index.target.reset()
    alert('Thanks for subscribed')
}

export default Blog