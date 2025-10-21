import { motion } from 'framer-motion'
import { FiHeart, FiStar, FiUsers, FiZap, FiSmile } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      icon: <FiStar className="text-3xl" />,
      text: 'Peaceful connection with the Supreme Source',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <FiHeart className="text-3xl" />,
      text: 'Healing of emotional pain and relationships',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FiZap className="text-3xl" />,
      text: 'Deep self-awareness and inner strength',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: <FiUsers className="text-3xl" />,
      text: 'Family harmony and soul unity',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: <FiSmile className="text-3xl" />,
      text: 'Global togetherness through collective meditation',
      color: 'from-orange-400 to-yellow-500',
    },
  ]

  return (
    <section id="experience" className="section-container bg-white/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          What You Will Experience
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our meditation sessions and discover the transformative power of collective consciousness
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card group cursor-default"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
              {experience.icon}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              ✨ {experience.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="glass-effect rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-display font-bold text-orange-700 mb-6">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Our mission is to awaken the inner peace, love, and divinity within every soul through simple daily meditations.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            We guide individuals and families to heal relationships, radiate positive energy, and reconnect with the Supreme Source — creating a vibration of unity, purity, and well-being across the world.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Through morning and evening meditations, blessings, and collective intentions, we strive to transform pain into peace, separation into togetherness, and fear into faith — one family at a time.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

