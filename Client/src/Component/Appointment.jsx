// import React from 'react'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
 

const Appointment = () => {
  const handleSubmit = (index) => {
    index.preventDefault()
    index.target.reset()
  }
  return (
    <div>
        <div>
          <h2 className='m-5 mt-0 text-3xl font-semibold'>BOOK AN</h2>
          <h1 className='m-4 mt-0 text-blue-900 text-3xl font-semibold'>Appointment</h1>
        </div>
        <section className='appointment flex justify-center gap-20'>
          <form className='shadow-none m-0 p-0' onSubmit={handleSubmit} action="">
            <div>
              <section className='appointInput'>
                <main className='name flex'>
                  <div>
                    <label htmlFor="name">Name</label> <br />
                    <input className='w-auto border-blue-500 p-3' type="text" placeholder='John Doe'/>
                  </div>
                  <div className=''>
                    <label htmlFor="Phone">Phone Number</label> <br />
                    <input className='w-auto border-blue-500 p-3' type="number" placeholder='(234)-812876271'/>
                  </div>
                </main>
                <div>
                  <label htmlFor="Medical">Medical Record Number</label> <br />
                  <input className='w-[99.5%] border-blue-500 p-3' type="number" placeholder='232-627-7262'/>
                </div>
                <div className='date flex'>
                  <main>
                    <label htmlFor="preferred">Preferred Date</label> <br />
                    <input className='w-auto border-blue-500 p-3' type="datetime-local" placeholder='08-10-2024'/>
                  </main>
                  <main>
                    <label htmlFor="preferred">Preferred Time</label> <br />
                    <input className='w-[223px] border-blue-500 p-3' type="time" placeholder='10:00am'/>
                  </main>
                </div>
              </section>
              <p className='m-4 text-2xl font-medium'>Reason for Visit</p>
              <div className=''>
                <input className='w-8' type="radio"  name='reason'/>
                <label htmlFor="pediatric">Routine Checkup</label>
                <input className='w-8' type="radio"  name='reason'/>
                <label className='capitalize' htmlFor="patient">New paitent visit</label>
              </div>
              <div>
                <input type="radio" className='w-8' name='reason'/>
                <label htmlFor="Specific">Specific Concern</label>
              </div>
              <p className='m-4 text-2xl font-medium'>Department</p>
              <div className='md:flex flex-wrap'>
                <input className='w-8' type="radio"  name='department'/>
                <label htmlFor="pediatric">Pediatric</label>
                <input className='w-8' type="radio"  name='department'/>
                <label htmlFor="opsteric">Obstetrics and Gynecology</label> <br />
                <input className='w-8' type="radio"  name='department'/>
                <label htmlFor="opsteric">Cardiology</label>
              </div>
              <div>
                <input className='w-8' type="radio" name='department'/>
                <label htmlFor="neurology">Neurology</label>
              </div>
              </div>
              
              <div>
                <Popover
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <PopoverHandler>
                    <Button type="submit"className='bg-blue-900'>Submit</Button>
                  </PopoverHandler>
                  <PopoverContent>
                    Thanks for booking <b/>appointment with us.
                  </PopoverContent>
                </Popover>
            </div>
          </form>

          <div className="appoint ">
            <div>
              <img className='w-[100%] rounded-xl h-[fit-content] md:h-[80vh] ' src="https://html.laralink.com/prohealth/assets/img/home_1/appointment.jpeg" alt="doctor appointment" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Appointment