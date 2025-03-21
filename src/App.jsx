import { useState } from 'react'
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
