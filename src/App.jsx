import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2 className='m-auto text-center mt-20 text-blue-600 text-5xl bg-blue-300 pt-5 pb-5 rounded w-[400px]'>Hello World</h2>
    
    </>
  )
}

export default App
