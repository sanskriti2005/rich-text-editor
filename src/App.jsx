import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TipTap from './components/TipTapEditor'
import VariableForms from './components/VariableForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TipTap/>
      <VariableForms/>
    </>
  )
}

export default App
