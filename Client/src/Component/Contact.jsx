import { Link } from "react-router-dom"
import { useState } from 'react'
import Axios from 'axios';

const Contact = () => {

    Axios.defaults.withCredentials = true;
    const handleLogout = () =>{
        Axios.get('https://locahost:4005/auth/logout')
        .then(res => {
            if(res.data.status){
                window.location.href = '/'
            }
        }).catch(error => {
            console.log(error)
        })
    }
    const [isOpen, setisOpen] = useState(false)
    const toggleBtn = () => {
        setisOpen(!isOpen)
    }
    return(
    <div >
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
                <h2 className='mt-4 p-[10px] px-[15px] rounded-lg bg-orange-700'><a href="#BOOK">Booking</a></h2>
            </div>

            {isOpen && (
            <div className='toggleMenu'>
                <div><Link to={'/home'}>Home</Link></div>
                <div><Link to={''}>About</Link></div>
                <div><Link to={'/findDoctor'}>Find Doctor</Link></div>
                {/* <div onClick={navToogle}><Link to={''}>Pharmacy 👆</Link></div> */}
                {/* {nav && (
                <>
                    <div><Link to={''}>Drug</Link></div> <hr />
                    <div><Link to={''}>Injection</Link></div> <hr />
                </>
                )} */}
                <div><Link to={'/blog'}>Blog</Link></div>
                <div><Link to={''}>Contact</Link></div>
                <div><Link to={'/dashboard'}>Profile</Link></div>
                <div onClick={handleLogout}><Link to={'/'}>Logout</Link></div>
            </div>
            )}
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 bg-blue-200 items-center pt-10 h-[90vh]">
            <div className="m-3 ">
                <h1 className="text-2xl md:text-6xl font-semibold text-center text-blue-gray-800">Contact Us</h1>
                <p className="text-center text-xl text-gray-100">Kindly reach us to get the fastest response and treatment</p>
            </div>
            <div className="m-3 mb-0">
                <img src="https://html.laralink.com/prohealth/assets/img/contact/banner_img.png" alt="" />
            </div>
        </main>

        <section className="grid justify-cener py-10 bg-white mx-64 p-4 rounded-2xl shadow-xl formSection translate-y-[-20%]">
            <form className="shadow-none myForm" action="">
                <main className="flex contactPage">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="rounded-x" type="text" placeholder="Akinola Femi" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="rounded-x" type="email" placeholder="femi@gmail.com" required/>
                    </div>
                </main>
                <div>
                    <label htmlFor="subject">Subject</label> <br />
                    <input className="rounded-x" type="text" placeholder="Your subject" required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <input className="min-h-40 md:min-h-56 rounded-xl" type="text" placeholder="Your message here"/>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-xl">Submit</button>
                </div>
            </form>
        </section>

            <h1 className="text-5xl text-blue-gray-600 font-semibold text-center my-20">Find Us Here</h1>
            <div className="section1">
      <div className="box1">
          <i className="fa-solid fa-phone"></i>
          <div>
            <h1 className='text-4xl font-semibold'>Phone</h1>
            <p className='text-2xl font-semibold'>123-456-7890</p>
          </div>
        </div>

        <div className="box1">
            <i className="fa-regular fa-envelope"></i>
            <div>
            <h1 className='text-4xl font-semibold'>Email</h1>
            <p className='text-2xl font-semibold'>femi@.com</p>
          </div>
        </div>

        <div className="box1">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <h1 className='text-4xl font-semibold'>Location</h1>
            <p className='text-2xl font-semibold'>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
        <div>
            <div className="flex justify-center items-center m-8 mb-24">
                <iframe className="w-[900px] h-[300px] md:h-[450px] rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.05799277902!2d3.286783939062486!3d6.5372376532632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1730705719682!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
            <form className='shadow-none' action="">
              <input className='w-auto p-1' type="text" placeholder='Subscribe'/> <br />
              <button className='border-1 rounded-lg bg-orange-900 text-white px-9 shadow-xl'>Submit</button>
            </form>
          </div>
        </main>
        <article className='footerArticle'>
          <div>
                <p>Follow Us</p>
                <div><i className="fa-brands fa-square-facebook text-2xl"></i></div>
                <div><i className="fa-brands fa-youtube text-2xl"></i></div>
                <div><i className="fa-brands fa-linkedin text-2xl"></i></div>
                <div><i className="fa-brands fa-instagram text-2xl"></i></div>
                <div><i className="fa-brands fa-linkedin text-2xl"></i></div>
          </div>
          <div>
            <p>Copyright © {dateTime } Health Care developed by <b>Femi</b>. All rights reserved.</p>
          </div>
        </article>
      </footer>
    </div>)
}
const dateTime = new Date().getFullYear()
export default Contact