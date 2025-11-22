import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Experience from './components/Experience'
import GuidingThought from './components/GuidingThought'
import JoinFamily from './components/JoinFamily'
import MantraClock from './components/MantraClock'
import Footer from './components/Footer'
// import FloatingButtons from './components/FloatingButtons' // Temporarily hidden for testing

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <MantraClock />
        <About />
        <Schedule />
        <Experience />
        <GuidingThought />
        <JoinFamily />
      </main>
      <Footer />
      {/* FloatingButtons temporarily hidden for testing */}
      {/* <FloatingButtons /> */}
    </div>
  )
}

export default App

