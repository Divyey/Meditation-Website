import { FiHeart, FiMail, FiMessageCircle } from 'react-icons/fi'

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

            {/* Contact */}
            <div>
              <h4 className="text-lg font-display font-bold text-gray-800 mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
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

