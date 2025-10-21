import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Experience', href: '#experience' },
    { name: 'Join Us', href: '#join' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              {/* Logo image */}
              <img 
                src="/Logo.jpeg" 
                alt="One World One Family Logo"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white"
              />
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-30 blur-sm group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold gradient-text">
                One World One Family
              </h1>
              <p className="text-xs text-gray-600">Meditation & Healing</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#join"
              className="btn-primary text-sm py-2 px-6"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="block btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

