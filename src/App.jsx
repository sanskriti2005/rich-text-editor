import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TipTap from './components/TipTap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TipTap/>
    </>
  )
}

export default App
