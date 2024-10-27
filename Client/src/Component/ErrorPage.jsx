import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className=' bg-blue-500 w-screen h-screen h[98%] place-content-center'>
      <div className='text-center '>
        <h1 className='text-white text-2xl'>Opps!!<span className='text-5xl font-bold text-black'> 404</span> Page Not Found</h1>
        <p className='text-white'>Go Back To <Link className='underline' to={'/home'}>Home Page 👈</Link></p>
      </div>
    </main>
  )
}

export default ErrorPage