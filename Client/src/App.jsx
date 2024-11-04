import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './Component/Signup'
import ErrorPage from './Component/ErrorPage'
import Login from './Component/Login'
import Home from './Component/Home'
import Forgotpass from './Component/Forgotpass'
import ResetPass from './Component/Resetpass'
import Dashboard from './Component/Dashboard'
import Department from './Component/Department'
import About from './Component/About'
import FindDoctor from './Component/FindDoctor'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/signup',
      element: <Signup/>
    }, 
    {
      path: '/',
      element: <Login/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/forgot-password',
      element: <Forgotpass/>
    },
    {
      path: '/resetPassword/:token',
      element: <ResetPass/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    },
    {
      path: '/department',
      element: <Department/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/findDoctor',
      element: <FindDoctor/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}
export default App