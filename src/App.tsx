import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SchedulePage from './pages/SchedulePage'
import ContactPage from './pages/ContactPage'
// import FloatingButtons from './components/FloatingButtons' // Temporarily hidden for testing

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Router>
      <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        {/* FloatingButtons temporarily hidden for testing */}
        {/* <FloatingButtons /> */}
      </div>
    </Router>
  )
}

export default App

