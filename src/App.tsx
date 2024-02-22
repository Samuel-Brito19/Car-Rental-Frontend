import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ComponentCar from './pages/AvailableCars'
import { CarsArray } from './pages/AvailableCars/array'
import Login from './pages/Login'
import './styles/global.css'
import Register from './pages/Register'
import BasicDatePicker from './pages/RentInputs'
import { MyRents } from './pages/MyRents'
import CarDetails from './pages/CarDetails'

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
      path: '/input',
      element: <BasicDatePicker/>
    },
    {
      path: '/myrents',
      element: <MyRents/>
    },
    {
      path: '/cardetails',
      element: <CarDetails/>
    },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
