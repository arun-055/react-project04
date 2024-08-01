import { useState,useCallback } from 'react'

import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const[special,setSpecial] = useState("boy")
  const handler = ()=> {
   setCount(count +1)
  }
   const getSpecial= useCallback(()=>{
      return "Boy " + count
    },
     [count],
   )
   

  return (
    <> 
    <Navbar special={"good"} getSpecial={getSpecial}/>
    
    <div>
      <button onClick={handler}>Counter  {count}</button>
    </div>
    </>
   
   
  )
}

export default App
