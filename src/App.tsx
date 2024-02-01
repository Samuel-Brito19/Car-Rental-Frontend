import ComponentCar from './components/Car'
import { CarsArray } from './components/Car/array'
import './styles/global.css'

function App() {
  return (
  
    <ComponentCar CarsImages={CarsArray} />

  )
}

export default App
