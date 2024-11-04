import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import './About.css'
import Gallery from './Gallery';


// Renderer callback with condition


const About = () => {
  
  Axios.defaults.withCredentials = true;
  const handleLogout = () => {
    Axios.get('http://localhost:4005/auth/logout')
    .then(res => {
      if(res.data.status){
        window.location.href = '/'
        // navigate('/')
      }
    }).catch(error => {
      console.log(error)
    })
  }
  

    const [isOpen, setisOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const toggleBtn = () => {
        setisOpen(!isOpen) 
    }
    const navToogle = () => {
        setNav(!nav)
    }
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
            <h2 className='mt-4 p-[10px] px-[15px] rounded-lg bg-orange-700'><a href="#BOOK">Booking</a></h2>
          </div>

        {isOpen && (
          <div className='toggleMenu'>
            <div><Link to={'/home'}>Home</Link></div>
            <div><Link to={'/about'}>About</Link></div>
            <div><Link to={'/findDoctor'}>Find Doctor</Link></div>
            {/* <div onClick={navToogle}><Link to={''}>Pharmacy 👆</Link></div> */}
            {/* {nav && (
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
        
      <div className="section1 grid md:grid-cols-2 items-center bg-blue-400 m-0 rounded-none">
        <div className='p-3'>
            <img src="https://html.laralink.com/prohealth/assets/img/about/banner_img.png" alt="About-Page" />
        </div>
        <main>
            <h1 className='text-4xl font-semibold text-white'>Welcome to ProHealth Medical & Healthcare Center Your Partner in Health and Wellness</h1>
            <p className='text-blue-900 text-xl'>Your Partner in Health and Wellness</p>
        </main>
      </div>
      
      <main className='p-16 helvatic gap-5 my-[40px]'>
        <div className='p-3 place-content-center'>
            <p className='text-2xl text-blue-900'>SERVICES</p>
            <h1 className=' provide text-5xl text-blue-800 font-semibold'>Provides Our Best Services</h1>
        </div>
        <div className='service p-5 border rounded-xl'>
            <div>
                <i className="fa-solid fa-calendar-days text-white text-center place-content-center text-3xl w-[50px] rounded-full bg-blue-700 h-[50px]"></i>
            </div>
            <h3 className='text-blue-900 text-2xl font-semibold my-3'>Diagnostic testing</h3>
            <p className='text-xl text-gray-600'>Blood tests, imaging studies, and other tests to diagnose health conditions</p>
            <div className='text-end '>
                <i className="fa-solid fa-arrow-right text-right text-white p-1 text-2xl bg-blue-700 w-[70px] iconSection"></i>
            </div>
        </div>
        <div className='service  p-5 border rounded-xl'>
            <div>
                <i className="fa-solid fa-calendar-days text-white text-center place-content-center text-3xl w-[50px] rounded-full bg-blue-700 h-[50px]"></i>
            </div>
            <h3 className='text-blue-900 text-2xl font-semibold my-3'>Diagnostic testing</h3>
            <p className='text-xl text-gray-600'>Blood tests, imaging studies, and other tests to diagnose health conditions</p>
            <div className='text-end '>
                <i className="fa-solid fa-arrow-right text-right text-white p-1 text-2xl bg-blue-700 w-[70px] iconSection"></i>
            </div>
        </div>
        <div className='service  p-5 border rounded-xl'>
            <div>
                <i className="fa-solid fa-calendar-days text-white text-center place-content-center text-3xl w-[50px] rounded-full bg-blue-700 h-[50px]"></i>
            </div>
            <h3 className='text-blue-900 text-2xl font-semibold my-3'>Preventive care</h3>
            <p className='text-xl text-gray-600'>Annual checkups, immunizations, and health screenings care preventive outcomes</p>
            <div className='text-end '>
                <i className="fa-solid fa-arrow-right text-right text-white p-1 text-2xl bg-blue-700 w-[70px] iconSection"></i>
            </div>
        </div>
        <div className='service  p-5 border rounded-xl'>
            <div>
                <i className="fa-solid fa-calendar-days text-white text-center place-content-center text-3xl w-[50px] rounded-full bg-blue-700 h-[50px]"></i>
            </div>
            <h3 className='text-blue-900 text-2xl font-semibold my-3'>Treatment for acute and chronic conditions</h3>
            <p className='text-xl text-gray-600'>Medication management, disease management, and other treatments </p>
            <div className='text-end '>
                <i className="fa-solid fa-arrow-right text-right text-white p-1 text-2xl bg-blue-700 w-[70px] iconSection"></i>
            </div>
        </div>
        <div className='service  p-5 border rounded-xl'>
            <div>
                <i className="fa-solid fa-calendar-days text-white text-center place-content-center text-3xl w-[50px] rounded-full bg-blue-700 h-[50px]"></i>
            </div>
            <h3 className='text-blue-900 text-2xl font-semibold my-3'>Mental health services</h3>
            <p className='text-xl text-gray-600'>Counseling, therapy, and other services to help patients manage mental health conditions</p>
            <div className='text-end '>
                <i className="fa-solid fa-arrow-right text-right text-white p-1 text-2xl bg-blue-700 w-[70px] iconSection"></i>
            </div>
        </div>
      </main>
      
      <div className='choose m-24'>
        <div className="imageBox w-[100%]  flex justify-center">
            <img className='rounded-2xl w-[100%] object-fill' src="https://html.laralink.com/prohealth/assets/img/about/why_choose_us.jpeg" alt="Why-choose us" />
        </div>
        <main className='w-[100%] place-content-center'>
          <h1 className='text-center text-5xl font-semibold text-blue-900 py-6 chooseUs'>Why Choose Us</h1>
          <div className='flex chooseBox  gap-5'>
            <div className='my-2'>
                <div>
                  <img className='bg-blue-700 w-[50px] h-[50px] rounded-full p-2' src="https://html.laralink.com/prohealth/assets/img/icons/professional.svg" alt="svg" />
                </div>
                <h1 className='text-blue-900 text-2xl font-semibold my-3'>Experienced Medical Professionals</h1>
                <p className='text-gray-700'>Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients.</p>
            </div>
            <div className='my-2'>
              <div >
                <img className='bg-blue-700 w-[50px] h-[50px] rounded-full p-2'  src="https://html.laralink.com/prohealth/assets/img/icons/comprehensive.svg" alt="service" />
              </div>
                <h1 className='text-blue-900 text-2xl font-semibold my-3'>Comprehensive Services</h1>
                <p  className='text-gray-700'>We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.</p>
            </div>
          </div>
          <div className='flex chooseBox gap-5'>
            <div>
              <div>
                <img className='bg-blue-700 w-[50px] h-[50px] rounded-full p-2'  src="https://html.laralink.com/prohealth/assets/img/icons/patient.svg" alt="approach" />
              </div>
              <h1 className='text-blue-900 text-2xl font-semibold my-3'>Patient-centered Approach</h1>
              <p  className='text-gray-700'>We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.</p>
            </div>
            <div>
              <div>
                <img className='bg-blue-700 w-[50px] h-[50px] rounded-full p-2'  src="https://html.laralink.com/prohealth/assets/img/icons/facilities.svg" alt="" />
              </div>
              <h1 className='text-blue-900 text-2xl font-semibold my-3'>State-of-the-art Facilities</h1>
              <p  className='text-gray-700'>Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible. </p>
            </div>
          </div>
        </main>
      </div>

      <main className='count justify-center rounded-2xl text-white m-16'>
        <div>
          <h1 className='font-semibold text-5xl text-center'>20+</h1>
          <p className='text-[16px]'>Years of experience</p>
        </div>
        <div>
          <h1 className='font-semibold text-5xl text-center'>95%</h1>
          <p className='text-[16px]'>Patient satisfaction rating</p>
        </div>
        <div>
          <h1 className='font-semibold text-5xl text-center'>5000+</h1>
          <p className='text-[16px]'>Patients served annually</p>
        </div>
        <div>
          <h1 className='font-semibold text-5xl text-center'>10+</h1>
          <p className='text-[16px]'>Healthcare providers on staff</p>
        </div>
        <div>
          <h1 className='font-semibold text-5xl text-center'>20+</h1>
          <p className='text-[16px]'>Convenient locations in the area</p>
        </div>
      </main>
      
      <div>
        <h3 className='text-3xl text-center text-blue-700 mt-16'>MEET OUR</h3>
        <h1 className='text-center text-5xl font-semibold text-blue-900 meetExpert my-10'>Experts Doctor</h1>
        <article className='grid expertBox'>
          <div className='expert p-2'>
            <div className='flex justify-center'>
              <img className='relative bottom' src="https://html.laralink.com/prohealth/assets/img/about/doctor_1.png" alt="profile picture" />
            </div>
            <h1 className='text-center text-3xl font-semibold my-3 text-blue-gray-500'>Dr. James Lee, MD</h1>
            <p className='text-center text-2xl text-blue-800 my-2'>Head of Cardiologist</p>
            <p className='text-center text-[18px] text-gray-700'>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>
            <div className='flex justify-center gap-10 mt-4'>
              <i className='fa-brands fa-square-facebook text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full'></i>
              <i className="fa-brands fa-linkedin text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
              <i className="fa-brands fa-x text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
            </div>
          </div>
          
          <div className='expert p-2'>
            <div className='flex justify-center'>
              <img className='relative bottom' src="https://html.laralink.com/prohealth/assets/img/about/doctor_3.png" alt="profile picture" />
            </div>
            <h1 className='text-center text-3xl font-semibold my-3 text-blue-gray-500'>Dr. James Lee, MD</h1>
            <p className='text-center text-2xl text-blue-800 my-2'>Head of Cardiologist</p>
            <p className='text-center text-[18px] text-gray-700'>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>
            <div className='flex justify-center gap-10 mt-4'>
              <i className='fa-brands fa-square-facebook text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full'></i>
              <i className="fa-brands fa-linkedin text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
              <i className="fa-brands fa-x text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
            </div>
          </div>

          <div className='expert p-2'>
            <div className='flex justify-center'>
              <img className='relative bottom' src="https://html.laralink.com/prohealth/assets/img/about/doctor_2.png" alt="profile picture" />
            </div>
            <h1 className='text-center text-3xl font-semibold my-3 text-blue-gray-500'>Dr. James Lee, MD</h1>
            <p className='text-center text-2xl text-blue-800 my-2'>Head of Cardiologist</p>
            <p className='text-center text-[18px] text-gray-700'>With expertise in managing complex heart conditions and performing advanced cardiac procedures</p>
            <div className='flex justify-center gap-10 mt-4'>
              <i className='fa-brands fa-square-facebook text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full'></i>
              <i className="fa-brands fa-linkedin text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
              <i className="fa-brands fa-x text-white bg-blue-700 text-2xl text-center place-content-center h-[50px] w-[50px] rounded-full"></i>
            </div>
          </div>
        </article>
      </div>

      <section>
        <div className='text-center mt-10'>
          <h1 className='text-5xl text-blue-900 font-semibold'>Gallery</h1>
        </div>
        <Gallery/>
      </section>

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
            <form className='shadow-none' action="">
              <input className='w-auto p-1' type="text" placeholder='Subscribe'/> <br />
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
const dateTime = new Date().getFullYear()

export default About