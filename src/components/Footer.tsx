import { FiHeart } from 'react-icons/fi'
// import { FiMail, FiMessageCircle } from 'react-icons/fi' // Temporarily unused

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="section-container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12">
                  <img 
                    src="/Logo.jpeg" 
                    alt="One World One Family Logo"
                    className="absolute inset-0 w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                  />
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-30 blur-sm"></div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold gradient-text">
                    One World One Family
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Creating a world of peace, love, and connection through daily meditation and blessings.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    Meditation Schedule
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    What We Offer
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact - TEMPORARILY HIDDEN FOR TESTING */}
            <div>
              <h4 className="text-lg font-display font-bold text-gray-800 mb-4">Connect With Us</h4>
              <div className="space-y-3">
                {/* <a
                  href="mailto:oneworldonefamilymeditation@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  <FiMail className="text-xl" />
                  <span className="break-all">oneworldonefamilymeditation@gmail.com</span>
                </a>
                <a
                  href="tel:+919845498989"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  <FiMessageCircle className="text-xl" />
                  <span>+91 98454 98989</span>
                </a>
                <a
                  href="https://www.youtube.com/@OneWorldOneFamilyMeditation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube Channel</span>
                </a> */}
                <p className="text-gray-500 italic">Contact information temporarily hidden for testing</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} One World One Family.</span>
              <span>Made with</span>
              <FiHeart className="text-orange-500 inline animate-pulse" />
              <span>for global peace and unity</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              All souls are welcome. Free. Pure. Universal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

