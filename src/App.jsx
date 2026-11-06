import { useState } from 'react'
import Info from './components/Info'
import './App.css'
import Status from './components/Status'
import Rating from './components/Rating'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Info />
    <Status />
    <Rating />
  </>
  )
}

export default App
