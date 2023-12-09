import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  
 let myObj = {
   name : "Abhishek",
   age : 21
 }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind bhai aagya!!!</h1>
      <Cards username = "Abhishek" btntext = "mangoshake"/>
      <Cards username = "Ayush" btntext = "jaamun"/>

    </>
  )
}

export default App
