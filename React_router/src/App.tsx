import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Header />
      <Home />
      <About/>
      <Footer/>
      
    </>
  )
}

export default App
