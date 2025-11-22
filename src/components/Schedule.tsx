import { motion } from 'framer-motion'
import { FiSunrise, FiMoon, FiClock, FiGlobe } from 'react-icons/fi'

const Schedule = () => {
  const scheduleItems = [
    {
      icon: <FiSunrise className="text-4xl" />,
      title: 'Morning Meditation',
      time: '5:50 AM – 6:20 AM IST',
      description: 'Start your day with peace, gratitude, and divine connection',
      gradient: 'from-orange-400 to-yellow-500',
    },
    {
      icon: <FiMoon className="text-4xl" />,
      title: 'Evening Meditation',
      time: '9:50 PM – 10:20 PM IST',
      description: 'End your day with healing, blessings, and inner calm',
      gradient: 'from-purple-600 to-blue-600',
    },
  ]

  return (
    <section id="schedule" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <FiClock className="text-4xl text-orange-600 animate-glow-pulse" />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          Daily Meditation Schedule
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us from anywhere in the world. Connect your heart, bring your family in thought, and radiate pure vibrations of peace, love, and unity.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {scheduleItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="card group"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <FiClock className="text-orange-600" />
              <p className="text-xl font-semibold text-orange-700">
                {item.time}
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>


      {/* Spiritual Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="glass-effect rounded-2xl p-8 text-center bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg">
            <span>🕉️</span>
          </div>
          <h3 className="text-xl font-display font-bold text-orange-700 mb-4">
            The Power of Divine Connection
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "When we start our day with meditation, we have God's strength and blessing to lead the day. When we end our day with God's remembrance and start our day with God's remembrance, it is considered to have meditated for 8 hours."
          </p>
        </div>
      </motion.div>

      {/* Join Session Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="card max-w-3xl mx-auto text-center bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200"
      >
        <FiGlobe className="text-5xl text-orange-600 mx-auto mb-4 animate-float" />
        <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
          Join From Anywhere in the World
        </h3>
        <p className="text-gray-700 mb-6">
          Our meditation sessions are open to all souls seeking peace, healing, and connection. Click below to join the live session.
        </p>
        {/* Google Meet Link - TEMPORARILY HIDDEN FOR TESTING */}
        {/* <a
          href="https://meet.google.com/cuk-myze-tva"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Join Live Meditation (Google Meet)
        </a> */}
        <div className="text-gray-500 italic">
          Join link temporarily hidden for testing
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Morning: 5:50 AM – 6:20 AM IST | Evening: 9:50 PM – 10:20 PM IST
        </p>
      </motion.div>
    </section>
  )
}

export default Schedule

