// import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import '../index.css'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect,useState } from 'react'
import { Reviews } from './Review';
import BlogPost from './BlogPost';
import Department from './Department';
import Appointment from './Appointment';
import Comment from './Comment';
import Axios from 'axios'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [activeindex, setActiveIndex] = useState(0)
  const totalSlides = 3; // Number of slides

  const dateTime = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (totalSlides));
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const toggleBtn = () => {
    setIsOpen(!isOpen)
  }

  // const [nav, setNav] = useState(false)
  // const navToogle = () => {
  //   setNav(!nav)
  // }
  // const navigate = useNavigate()
  Axios.defaults.withCredentials = true;
  const handleLogout = () => {
    Axios.get('https://healthcareservice-server.vercel.app/auth/logout')
    .then(res => {
      if(res.data.status){
        window.location.href = '/'
        // navigate('/')
      }
    }).catch(error => {
      console.log(error)
    })
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


      <Carousel className='caro' activeindex={activeindex}>
        <div className="relative w-full">
          <img
             src="https://img.freepik.com/free-photo/doctor-hospital-room-standing-near-bed-wearing-face-mask-scrubs_9975-22905.jpg?t=st=1729694947~exp=1729698547~hmac=6ddf541bf6b04c3531dc54d30976e293048400ac31dbbb4423c9b859f3e3dc28&w=826"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Your Partner in Health and Wellness
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts
              </Typography>
              <div className="flex justify-center gap-2 mb-8">
                <Button size="lg" color="white">
                  <Link to={'/blog'}>Explore</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-full">
        <img
          src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We are committed to providing you with the best treatment
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/blog'}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              We believe everyone should have easy  access to best treatment
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a cl quality
              
              
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/contact'}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>

    <div className="section1">
      <div className="box1">
          <i className="fa-solid fa-phone"></i>
          <div>
            <h1 className='text-4xl font-semibold'>Hotline</h1>
            <p className='text-2xl font-semibold'>123-456-7890</p>
          </div>
        </div>

        <div className="box1">
          <i className="fa-solid fa-truck-medical"></i>
          <div>
            <h1 className='text-4xl font-semibold'>Ambulance</h1>
            <p className='text-2xl font-semibold'>2345-456-7890</p>
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

      <div className="section2">
        <h1 className='text-center m-10 text-4xl font-bold text-blue-gray-900'>Our Values</h1>
        <div className="section02">
          <div className="border p-12 rounded-2xl shadow-xl">
            <div className='box flex text-center'>
              <i className="fa-solid fa-hand-holding-heart text-4xl"></i>
              <h1 className='text-center text-4xl m-5'>Compassion</h1>
            </div>
            <p className='text-blue-gray-500'>We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.</p>
          </div>
          <div className="border p-12 rounded-2xl shadow-xl">
            <div className='box flex text-center'>
              <i className="fa-regular fa-lightbulb text-4xl"></i>
              <h1 className='h1-T text-center text-4xl m-5'>Excellence</h1>
            </div>

            <p className='text-blue-gray-500'>We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.</p>
          </div>
          <div className="border p-12 rounded-2xl shadow-xl">
            <div className='box flex text-center'>
              <i className="fa-solid fa-hands-asl-interpreting text-4xl"></i>
              <h1 className='text-center text-4xl m-5'>Integrity</h1>
            </div>
            <p className='text-blue-gray-500'>We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient&apos;s interests first & provide best solution.</p>
          </div>
        </div>
        
        <div className="section02 sect">
          <div className="border p-12 rounded-2xl shadow-xl">
            <div className='box flex items-center text-center'>
              <i className="fa-regular fa-handshake text-4xl"></i>
              <h1 className='text-center text-4xl m-5'>Respect</h1>
            </div>
            <p>We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.</p>
          </div>
          <div className="border p-12 rounded-2xl shadow-xl">
            <div className='box flex items-center text-center'>
            <i className="fa-solid fa-people-group text-4xl"></i>
              <h1 className='text-center text-4xl m-5'>Teamwork</h1>
            </div>
            <p>We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.</p>
          </div>
        </div>
      </div>

      <div className="section3 items-center">
        <div>
          <div className="animate">
            <img className='quality w-[150px] h-[150px] md:w-[auto md:h-[auto]]' src="https://html.laralink.com/prohealth/assets/img/home_1/about_mini.svg" alt="" />
            <img className='verify w-[50px] h-[50px] md:w-[auto] md:h-[auto]' src="https://html.laralink.com/prohealth/assets/img/icons/tick.svg" alt="" />
          </div>
          <img src="https://html.laralink.com/prohealth/assets/img/home_1/about.png" alt="pro-health" />
        </div>
        <div>
          <div className="box">
            <h1 className='text-5xl font-bold m-5'>About Us</h1>
            <p className='text-blue-500 text-3xl font-bold'>HealthCare</p>
          </div>
          <div className="arrorBox">
            <div className="flex gap-8">
              <i className='fa-solid fa-arrow-right text-blue-600 text-4xl'></i>
              <p className='text-blue-gray-500 text-2xl capitalize'>HealthCare is a team of experienced medical professionals</p>
            </div>
            <p className='text-black'>Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.</p>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="box rounded-lg text-center p-10 place-content-center">
          <h1 className='text-5xl font-bold text-white'>Department</h1>
        </div>
        <div className='boxDepartment'>
          <Department/>
        </div>
      </div>

      <div className="section5">
        <h1 className='text-blue-900 font-bold text-4xl m-5'>Awards</h1>
        <div className="awardBox grid md:grid-cols-2">
          <div className="award p-10  border rounded-xl ">
            <div className="box flex place-content-start h-20 items-center m-5 gap-5">
              <img className='rounded-3xl h-24 w-24' src="https://html.laralink.com/prohealth/assets/img/icons/award.svg" alt="Malcolm Baldrige" />
              <h2 className='md:text-xl font-semibold text-gray-700'>Malcolm Baldrige National Quality Award</h2>
            </div>
            <p className='text-gray-600'>This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.</p>
          </div>
          
          <div className="award award p-10 shadow-2xl border rounded-xl">
            <div className="box flex place-content-start h-20 items-center m-5 gap-5">
              <img className='rounded-3xl h-24 w-24' src="https://html.laralink.com/prohealth/assets/img/icons/award.svg" alt="Malcolm Baldrige" />
              <h2 className='md:text-xl font-semibold text-gray-700'>HIMSS Davies Award</h2>
            </div>
            <p className='text-gray-600'>This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.</p>
          </div>

          <div className="award p-10 shadow-2xl border rounded-xl">
            <div className="box flex place-content-start h-20 items-center m-5 gap-5">
              <img className='rounded-3xl h-24 w-24' src="https://html.laralink.com/prohealth/assets/img/icons/award.svg" alt="Malcolm Baldrige" />
              <h2 className='md:text-xl font-semibold text-gray-700'>Healthgrades National’s Best Hospital</h2>
            </div>
            <p className='text-gray-600'>This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.</p>
          </div>
          
          <div className="award p-10 shadow-2xl border rounded-xl">
            <div className="box flex gap-5 place-content-start h-20 items-center m-5">
              <img className='rounded-3xl h-24 w-24' src="https://html.laralink.com/prohealth/assets/img/icons/award.svg" alt="alcolm Baldrige National Quality Award" />
              <h2 className='md:text-xl font-semibold text-gray-700'>Joint Commission Gold Seal of Approval</h2>
            </div>
            <p className='text-gray-600'>This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.</p>
          </div>
        </div>
      </div>

      <div className="section6">
        <h1 className='text-4xl text-blue-900 text-center font-bold'>Some Reviews</h1>
        <h2 className='text-blue-700 text-center font-semibold text-3xl'>Of our clients</h2>
        <div className="reviewBox">
          <Reviews/>
        </div>
      </div>

      <div className="section7 border-2 rounded-2xl grid md:grid-cols-2">
        <div>
          <h1 className='text-4xl text-white font-bold'>Don’t Let Your Health Take a Backseat!</h1>
          <p className='text-gray-800 text-2xl font-semibold'>Schedule an appointment with one of our experienced medical professionals today!</p>
        </div>
        <div>
          <img className='pb-10' src="https://html.laralink.com/prohealth/assets/img/home_1/cta_img.png" alt="" />
        {/* <h1 className='bookTransform'>Booking</h1> */}
        </div>
      </div>

      <div className="section8">
        <BlogPost BlogPost={BlogPost}/>
      </div>

      <div id='BOOK' className="section9 m-10">
        <Appointment Appointment={Appointment}/>
      </div>

      <div className="section10">
        <Comment/>
      </div>

      <div className="section11 grid md:grid-cols-4 gap-10 justify-center m-10 mt-32 mb-32">
        <div>
          <img className='m-4' src="https://html.laralink.com/prohealth/assets/img/brand_1.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_2.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_3.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_4.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_5.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_6.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_7.png" alt="" />
        </div>
        <div>
          <img src="https://html.laralink.com/prohealth/assets/img/brand_8.png" alt="" />
        </div>
      </div>

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
              <input required className='w-auto p-1' type="email" placeholder='Subscribe'/> <br />
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
export default Home