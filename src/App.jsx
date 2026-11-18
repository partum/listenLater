import { useState } from 'react'
import Info from './components/Info'
import './App.css'
import Status from './components/Status'
import Rating from './components/Rating'

function App() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState("none")

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (<div className="App m-auto w-lg">
    <Info />
    <Status albumStatus={status} statusChange={handleStatusChange} />
    {status === "listened" && <Rating />}
  </div>
  )
}

export default App
