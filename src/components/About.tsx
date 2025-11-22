import { motion } from 'framer-motion'
import { FiHeart, FiUsers, FiStar, FiSun } from 'react-icons/fi'

const About = () => {
  const purposes = [
    {
      icon: <FiUsers className="text-2xl" />,
      text: 'To bring families together through meditation and positive vibrations',
    },
    {
      icon: <FiHeart className="text-2xl" />,
      text: 'To spread peace, healing, and divine energy across the world',
    },
    {
      icon: <FiStar className="text-2xl" />,
      text: 'To help every soul rediscover their true Satyugi nature — pure, loving, peaceful, and powerful',
    },
    {
      icon: <FiSun className="text-2xl" />,
      text: 'To create a global network of souls who live by love, respect, and unity',
    },
  ]

  return (
    <section id="about" className="section-container bg-white/30">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          About Us
        </h2>
        <p className="text-2xl text-gray-700 font-medium">
          A Circle of Love and Light
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="card text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              {/* Logo image */}
              <img 
                src="/Logo.jpeg" 
                alt="One World One Family Logo"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-xl animate-radiate border-2 border-white"
              />
              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-40 blur-md animate-pulse"></div>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The <span className="font-semibold gradient-text">One World One Family Meditation Group</span> was born from a simple yet powerful realization — that every soul on this earth is part of one divine family.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            When we meditate together, our thoughts of peace, love, and unity spread like light — touching hearts, healing relationships, and restoring harmony in homes and in the world.
          </p>
        </div>
      </motion.div>

      {/* Founder's Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-orange-700 mb-2">
                Our Founder's Message
              </h3>
              {/* <p className="text-xl font-semibold gradient-text">Gitanjali Arora</p> */}
              <p className="text-gray-600">Spiritual Teacher & Meditation Guide</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center mb-8">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text italic mb-6">
                "Every soul is a point of light, radiating love and peace."
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text italic mb-6">
                "When we meditate together, we heal together and make this world a heaven."
              </div>
            </blockquote>

            <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-8"></div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I am a spiritual teacher and meditation guide. My journey began with a deep desire to bring families closer — not just in words, but in vibrations.
              </p>
              <p>
                Through daily meditation, blessings, and forgiveness practices, I have witnessed how relationships heal, minds calm, and hearts open.
              </p>
              <p className="text-xl font-medium text-orange-700">
                This group is not an organization — it's a sacred family of souls who come together to remember the truth: We are all children of one Supreme Soul, radiating love and light.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Purpose */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="text-center mb-10">
          <h3 className="text-3xl font-display font-bold gradient-text mb-4">
            Our Purpose
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {purposes.map((purpose, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-300/50">
                  {purpose.icon}
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  {purpose.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Practice */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-3xl opacity-20 transform scale-105"></div>
          
          {/* Content */}
          <div className="relative glass-effect rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-display font-bold gradient-text mb-6">
              Our Practice
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Every day, we connect online for collective meditation.
              </p>
              <p>
                Each session begins with self-connection, followed by sending blessings to our families, friends, and the world.
              </p>
              <p className="font-medium text-orange-700">
                No rituals. No religion. Just silence, light, and love.
              </p>
              <p className="text-xl font-display font-semibold gradient-text pt-4">
                Together, we are creating a new vibration on Earth — a vibration of One World, One Family.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center gap-4 mt-8">
              <span className="text-3xl animate-float" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '0.5s' }}>💫</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '1s' }}>🕊️</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '1.5s' }}>✨</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

