import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>value is:{counter}</h1>
      <button onClick={addValue}>add 1</button>
      <br /><br />
      <button onClick={removeValue}>remove 1</button>
    </>
  )
}

export default App
