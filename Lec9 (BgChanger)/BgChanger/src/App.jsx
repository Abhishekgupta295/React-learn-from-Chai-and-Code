import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setcolor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  '>
        <div className='fixed flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'red'}} onClick={ () => setcolor("red")  }> RED
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'blue'}} onClick={ () => setcolor("blue")  }> BLUE
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'green'}} onClick={ () => setcolor("green")  }> GREEN
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'grey'}} onClick={ () => setcolor("grey")  }> GREY
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'pink'}} onClick={ () => setcolor("pink")  }> PINK
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'yellow'}} onClick={ () => setcolor("yellow")  }> YELLOW
          </button>
          <button className=' outline-none px-4 py-2 rounded-full text-white shadow-lg '
           style={{ backgroundColor : 'orange'}} onClick={ () => setcolor("orange")  }> ORANGE
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default App
