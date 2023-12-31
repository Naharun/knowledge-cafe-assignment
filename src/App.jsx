import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from './components/Answer/Answer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <Knowledge></Knowledge>
      <br></br>
      <Answer></Answer>
      <ToastContainer />
    </div>
  )
}

export default App
