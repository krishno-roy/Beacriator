import { useState } from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Home/>
    <Footer/>
   </div>
  )
}

export default App
