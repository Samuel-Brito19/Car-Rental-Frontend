import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ComponentCar from './pages/AvailableCars'
import { CarsArray } from './pages/AvailableCars/array'
import Login from './pages/Login'
import './styles/global.css'
import Register from './pages/Register'
import { RentInputs } from './pages/RentInputs'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/home',
      element: <ComponentCar CarsImages={CarsArray}/>
    },
    {
      path: '/rent',
      element: <RentInputs/>
    },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
