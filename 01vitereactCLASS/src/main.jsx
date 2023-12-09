import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp ()
{
  return(
    <div>
      <h2>This is abhisek</h2>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>
  
  
)
