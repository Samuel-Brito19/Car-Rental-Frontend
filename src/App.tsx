import ComponentCar from './pages/AvailableCars'
import { CarsArray } from './pages/AvailableCars/array'
import './styles/global.css'

function App() {
  return (
  
    <ComponentCar CarsImages={CarsArray} />

  )
}

export default App
