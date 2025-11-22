import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements - Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto">
              {/* Logo image */}
              <img 
                src="/Logo.jpeg" 
                alt="One World One Family Logo"
                className="w-full h-full rounded-full object-cover shadow-xl animate-float border-4 border-white"
              />
              {/* Subtle glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-20 blur-md"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6"
          >
            One World One Family
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-700 font-medium mb-12 flex items-center justify-center gap-3 flex-wrap"
          >
            <span>Be Blessed</span>
            <span className="text-orange-500">•</span>
            <span>Bless Your Family</span>
            <span className="text-orange-500">•</span>
            <span>Heal Every Relationship</span>
          </motion.p>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <FiHeart className="text-orange-500 text-3xl flex-shrink-0 mt-1 animate-glow-pulse" />
              <div className="text-left">
                <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">
                  Welcome, Divine Soul
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You are not here by chance — you are part of a growing family of light spreading peace, love, and healing vibrations across the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold gradient-text">One World One Family</span>, we believe that when even one person meditates with pure intention, the whole world receives a blessing. Together, we create a circle of peace that connects hearts, heals relationships, and restores harmony to families and humanity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-orange-700 mb-6 text-center">
                Experience Our Meditation
              </h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/Hqr6Af65enA"
              title="One World One Family Meditation - Experience Our Guided Meditation Session"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Join us in this beautiful meditation journey
              </p>
              {/* YouTube Channel Link - TEMPORARILY HIDDEN FOR TESTING */}
              {/* <div className="text-center mt-4">
                <a
                  href="https://www.youtube.com/@OneWorldOneFamilyMeditation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe to Our YouTube Channel
                </a>
              </div> */}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-xl font-display font-bold text-orange-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed italic">
              "To create a world where every soul feels loved, valued, and connected — beyond boundaries of family, faith, and nation — through the power of daily meditation, blessings, and pure vibrations. We envision One World, One Family — living in peace, harmony, and truth, as Satyugi souls once again."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* <a 
              href="https://meet.google.com/cuk-myze-tva"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Live Meditation
            </a> */}
            <a href="#schedule" className="btn-secondary">
              View Schedule
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

