import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  
  let addvalue = () => { 
    // console.log("Value added guyz!!", Math.random()); 
    if(counter < 20) 
    {setcounter(counter + 1)}
    else
    { 
      console.log("clicked", counter)
      
    }
  }

  let removevalue = () => {
    setcounter(counter - 1)
  }
  // let counter = 15
  return (
    <>
      <h1>Chai and React !</h1>
      <h2>Counter Value : {counter} </h2>
      <button class = "buttoncol" onClick={addvalue}>ADD VALUE</button>
      <br></br>
      <br></br>
      <button class = "buttoncol" onClick={removevalue}>DEC VALUE</button>
    </>
  )
}

export default App
