import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Knowledge from './components/Knowledge/Knowledge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <Knowledge></Knowledge>
    </div>
  )
}

export default App
