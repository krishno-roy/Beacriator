import { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Footer/>
   </div>
  )
}

export default App
