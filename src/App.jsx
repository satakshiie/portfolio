import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Welcome/>
    <AboutMe/>
    </>
  )
}

export default App
