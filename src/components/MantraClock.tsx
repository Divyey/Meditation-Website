import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'

// 60 unique mantras - one for each minute (0-59)
const mantras = [
  "Om Shanti - Peace be with you, peace be with all",
  "I am a point of light, radiating love and peace",
  "When I change, the world around me changes",
  "I am a child of the Supreme Soul, pure and powerful",
  "Every breath I take connects me to the divine source",
  "I radiate peace, love, and healing to all beings",
  "I am one with the universal family of souls",
  "My thoughts create vibrations of harmony and unity",
  "I am a Satyugi soul, living in truth and purity",
  "I send blessings to my family, friends, and the world",
  "I am a lighthouse of peace in the ocean of life",
  "Every moment I choose love over fear, peace over conflict",
  "I am connected to the infinite source of divine energy",
  "I heal relationships through forgiveness and understanding",
  "I am a channel of divine light and positive vibrations",
  "My meditation creates a circle of peace around the world",
  "I am grateful for this moment of connection and stillness",
  "I radiate golden light of compassion and kindness",
  "I am part of one world, one family, one consciousness",
  "I transform pain into peace, separation into togetherness",
  "I am a peaceful warrior, spreading harmony everywhere",
  "My heart is open to receive and give unconditional love",
  "I am a bridge between heaven and earth, spirit and matter",
  "I remember my true nature - pure, loving, and divine",
  "I am a beacon of hope, lighting the path for others",
  "I create unity by seeing the divine in every soul",
  "I am free from the past, present in the now, hopeful for the future",
  "I send healing vibrations to heal the world",
  "I am a vessel of peace, filled with divine wisdom",
  "I radiate the energy of one world, one family",
  "I am connected to all souls through the thread of love",
  "I transform negative energy into positive vibrations",
  "I am a mirror of the Supreme Soul, reflecting pure light",
  "I create harmony by living in truth and authenticity",
  "I am a guardian of peace, protecting the sacred space within",
  "I send blessings to heal all relationships and families",
  "I am a channel of divine grace, receiving and giving freely",
  "I radiate the golden rays of the morning sun of peace",
  "I am one with the universal consciousness, beyond boundaries",
  "I create a vibration of unity that touches every heart",
  "I am a student of silence, learning the language of the soul",
  "I transform fear into faith, doubt into certainty",
  "I am a point of light in the darkness, showing the way",
  "I send peace to all corners of the earth through my meditation",
  "I am a co-creator of heaven on earth, one thought at a time",
  "I radiate the energy of forgiveness, healing all wounds",
  "I am connected to the eternal source of love and light",
  "I create unity by recognizing the divine in all beings",
  "I am a peaceful presence, calming the storms of life",
  "I send healing energy to restore harmony in families",
  "I am a messenger of peace, spreading the word of love",
  "I transform separation into connection, division into unity",
  "I am a lighthouse of truth, guiding souls to their purpose",
  "I radiate the vibration of one world, one family, one love",
  "I am a bridge of understanding, connecting hearts across the globe",
  "I create peace by being peace, love by being love",
  "I am a channel of divine blessings, receiving and sharing",
  "I send positive vibrations to heal the collective consciousness",
  "I am a point of light radiating the energy of Satyug",
  "I transform the world by transforming myself first",
  "I am one with all souls, united in the divine family",
  "I create heaven on earth through daily meditation and blessings",
]

const MantraClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentMantra, setCurrentMantra] = useState('')

  useEffect(() => {
    // Update time and mantra immediately
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now)
      const minute = now.getMinutes()
      setCurrentMantra(mantras[minute])
    }

    // Update immediately
    updateTime()

    // Update every second to catch minute changes
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  return (
    <section id="mantra-clock" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="card text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FiClock className="text-4xl text-orange-600 animate-glow-pulse" />
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
              Divine Mantra of the Minute
            </h2>
          </div>

          <div className="space-y-6">
            {/* Time Display */}
            <motion.div
              key={currentTime.getMinutes()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-6xl font-display font-bold text-orange-700 mb-4"
            >
              {formatTime(currentTime)}
            </motion.div>

            {/* Mantra Display */}
            <motion.div
              key={currentTime.getMinutes()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-lg text-gray-600 font-medium">
                TIME : {formatTime(currentTime)} | Mantra
              </div>
              <div className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic px-4">
                "{currentMantra}"
              </div>
            </motion.div>

            {/* Info Text */}
            <p className="text-sm text-gray-500 mt-6 pt-6 border-t border-orange-200">
              Each minute brings a new divine message. The mantra changes every 60 seconds, 
              creating a unique identifier for each moment in time.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MantraClock

