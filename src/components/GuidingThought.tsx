import { motion } from 'framer-motion'
import { FiFeather } from 'react-icons/fi'

const GuidingThought = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Background gradient blob */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 rounded-3xl blur-3xl opacity-20 transform scale-105"></div>
          
          {/* Content card */}
          <div className="relative glass-effect rounded-3xl p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-white/10 shadow-xl animate-radiate flex items-center justify-center backdrop-blur-sm">
                  <FiFeather className="text-3xl text-orange-600" />
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-40 blur-md animate-pulse"></div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold gradient-text mb-8"
            >
              Our Guiding Thought
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <blockquote className="text-2xl md:text-3xl font-display font-semibold text-gray-800 leading-relaxed italic">
                "When I change, the world around me changes."
              </blockquote>
              
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
              
              <blockquote className="text-2xl md:text-3xl font-display font-semibold text-gray-800 leading-relaxed italic">
                "When we meditate together, the world heals together."
              </blockquote>
            </motion.div>

            {/* Decorative elements */}
            <div className="flex justify-center gap-3 mt-8">
              <span className="text-yellow-400 text-2xl animate-float" style={{ animationDelay: '0s' }}>✨</span>
              <span className="text-orange-400 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🌸</span>
              <span className="text-amber-400 text-2xl animate-float" style={{ animationDelay: '1s' }}>💫</span>
              <span className="text-yellow-500 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🕊️</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default GuidingThought

