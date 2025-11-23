import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'

// 60 unique mantras - one for each minute (0-59)
// Each mantra is 4 sentences, inspired by traditional mantras like Gayatri and Ganesha
const mantras = [
  "Om Shanti, Om Shanti, Om Shanti. May peace be with me, may peace be with my family, may peace be with all beings. I am a point of light, radiating divine peace and love. Through this meditation, I create harmony in the world.",
  
  "I invoke the Supreme Light, the source of all wisdom and truth. May this divine light illuminate my consciousness and guide my path. I am one with the eternal source of knowledge and understanding. Let this light shine through me to bless all souls.",
  
  "I honor the divine presence within me, the pure soul that I am. This soul is eternal, peaceful, and filled with infinite love. I connect with the Supreme Soul, the source of all creation. Together, we create a world of peace, harmony, and unity.",
  
  "I am a child of the Supreme, born from pure consciousness and light. My true nature is peace, love, and divine power. I remember my original state of purity and truth. Through this remembrance, I restore my divine qualities.",
  
  "Every breath I take is a connection to the divine source of life. With each inhale, I receive peace, love, and healing energy. With each exhale, I release all negativity and pain. I am breathing in the essence of the Supreme Soul.",
  
  "I radiate peace, love, and healing vibrations to all beings. My thoughts of peace touch every heart across the globe. My meditation creates a circle of light that connects all souls. Together, we form one world, one family, united in love.",
  
  "I am one with the universal family of souls, beyond all boundaries. There is no separation between me and any other being. We are all children of one Supreme Father, one divine source. In this unity, I find my true identity and purpose.",
  
  "My thoughts create vibrations of harmony and unity in the world. Every positive thought I think sends healing energy to all souls. I choose thoughts of love, peace, and compassion. These thoughts transform the collective consciousness of humanity.",
  
  "I am a Satyugi soul, living in truth, purity, and divine love. I remember the golden age when all souls lived in harmony. I carry the light of truth within me, shining brightly. Through my actions, I help restore the age of truth on earth.",
  
  "I send blessings to my family, friends, and all beings in the world. May they receive peace, happiness, and divine protection. May all relationships be healed through the power of love. May every family experience harmony, understanding, and unity.",
  
  "I am a lighthouse of peace in the ocean of life's challenges. My light guides others who are lost in darkness and confusion. I stand firm in my truth, radiating peace and stability. Through my presence, I create a safe harbor for all souls.",
  
  "Every moment I choose love over fear, peace over conflict, truth over illusion. I recognize that fear is temporary, but love is eternal. I choose to respond with compassion instead of anger. In every choice, I align with the divine will.",
  
  "I am connected to the infinite source of divine energy and power. This connection gives me strength to face any challenge in life. I draw upon this unlimited source of wisdom and guidance. Through this connection, I become an instrument of divine will.",
  
  "I heal relationships through forgiveness, understanding, and unconditional love. I release all past hurts and grievances that block my heart. I see the divine in every person, regardless of our differences. Through forgiveness, I restore harmony in all my relationships.",
  
  "I am a channel of divine light and positive vibrations. The Supreme Soul flows through me, touching everyone I meet. I allow this divine energy to work through me for the highest good. I am a clear vessel, free from ego and selfish desires.",
  
  "My meditation creates a circle of peace that expands around the world. Each moment of silence sends waves of healing to all beings. I visualize this circle growing, touching every continent and nation. Through collective meditation, we create a new vibration on earth.",
  
  "I am grateful for this moment of connection and stillness. Gratitude opens my heart to receive more blessings from the divine. I appreciate the gift of life, breath, and consciousness. In gratitude, I find peace, contentment, and joy.",
  
  "I radiate golden light of compassion and kindness to all beings. This golden light heals wounds, soothes pain, and brings comfort. It flows from my heart, touching every soul I encounter. Through this light, I become a source of healing and love.",
  
  "I am part of one world, one family, one consciousness, one divine source. There are no boundaries of religion, nationality, or belief that separate us. We are all connected through the thread of divine love. In this unity, I find my true home and belonging.",
  
  "I transform pain into peace, separation into togetherness, fear into faith. Every challenge is an opportunity to grow closer to the divine. I see the divine plan in every experience, even the difficult ones. Through transformation, I become a more powerful instrument of peace.",
  
  "I am a peaceful warrior, spreading harmony everywhere I go. I fight not with weapons, but with love, truth, and compassion. My strength comes from my connection to the Supreme Soul. I stand firm in peace, even when surrounded by conflict.",
  
  "My heart is open to receive and give unconditional love. I remove all barriers that prevent love from flowing freely. I love without expectation, without condition, without judgment. Through this open heart, I experience the true nature of the divine.",
  
  "I am a bridge between heaven and earth, spirit and matter, divine and human. I bring the qualities of heaven into my daily life on earth. I live in the world but remain connected to the spiritual realm. Through this balance, I create harmony in all aspects of my life.",
  
  "I remember my true nature - pure, loving, peaceful, and powerful. This remembrance awakens my divine qualities that have been dormant. I am not this body, these thoughts, or these emotions. I am an eternal soul, a point of light, a child of God.",
  
  "I am a beacon of hope, lighting the path for others who seek truth. My light shines brightly, dispelling darkness and confusion. I guide others not through words alone, but through my example. Through my light, I help others find their own inner light.",
  
  "I create unity by seeing the divine in every soul I encounter. I look beyond the outer appearance to the inner essence. Every person is a child of God, worthy of love and respect. Through this vision, I break down all barriers of separation.",
  
  "I am free from the past, present in the now, hopeful for the future. I release all regrets and resentments that bind me to the past. I live fully in this present moment, where peace resides. I move forward with faith, knowing the future is in divine hands.",
  
  "I send healing vibrations to heal the world, one soul at a time. These vibrations travel across space and time, touching all who need healing. I visualize the world becoming more peaceful, loving, and harmonious. Through my intention, I contribute to global healing and transformation.",
  
  "I am a vessel of peace, filled with divine wisdom and understanding. I empty myself of ego, pride, and selfish desires. I allow the Supreme Soul to fill me with pure qualities. Through this emptying and filling, I become a perfect instrument.",
  
  "I radiate the energy of one world, one family, one love, one truth. This energy unites all souls, regardless of their background or beliefs. I see beyond differences to the common essence we all share. Through this vision, I help create the reality of one world family.",
  
  "I am connected to all souls through the thread of divine love. This thread cannot be broken, no matter how far apart we may seem. I feel the presence of my spiritual family around the world. Through this connection, I am never alone, always supported and loved.",
  
  "I transform negative energy into positive vibrations through the power of my thoughts. I do not absorb negativity, but transmute it into light. Every challenge becomes an opportunity for growth and transformation. Through this alchemy, I become a source of positive energy.",
  
  "I am a mirror of the Supreme Soul, reflecting pure light and love. I polish this mirror daily through meditation, removing all dust of negativity. When I am clear, others can see the divine reflected in me. Through this reflection, I help others remember their own divinity.",
  
  "I create harmony by living in truth and authenticity in every moment. I speak truth with love, act with integrity, and live with purpose. I align my words, thoughts, and actions with divine principles. Through this alignment, I create harmony within myself and around me.",
  
  "I am a guardian of peace, protecting the sacred space within my heart. I do not allow negativity, anger, or fear to enter this sacred space. I maintain this inner peace through constant remembrance of the divine. Through this protection, I become a fortress of peace and love.",
  
  "I send blessings to heal all relationships and families in the world. May every family experience love, understanding, and harmony. May all conflicts be resolved through the power of forgiveness. May every home become a temple of peace and divine love.",
  
  "I am a channel of divine grace, receiving and sharing freely with all. I do not hoard blessings, but allow them to flow through me. I receive with gratitude and give with joy, without attachment. Through this flow, I experience the abundance of divine grace.",
  
  "I radiate the golden rays of the morning sun of peace and truth. These rays dispel the darkness of ignorance and awaken consciousness. I am like the sun, constant and reliable, always shining. Through these rays, I bring light and warmth to all souls.",
  
  "I am one with the universal consciousness, beyond all boundaries and limitations. I transcend the small self to experience the infinite self. In this unity, I find freedom from all suffering and limitation. Through this realization, I experience true liberation and peace.",
  
  "I create a vibration of unity that touches every heart across the globe. This vibration resonates with the natural frequency of love and peace. It spreads like ripples in water, touching souls far and near. Through this vibration, I contribute to the awakening of humanity.",
  
  "I am a student of silence, learning the language of the soul and the divine. In silence, I hear the whispers of wisdom and guidance. I learn to listen not just with my ears, but with my heart. Through this learning, I become wise and attuned to divine will.",
  
  "I transform fear into faith, doubt into certainty, weakness into strength. I recognize that fear is an illusion created by the ego. I replace every fearful thought with faith in the divine plan. Through this transformation, I become fearless and powerful.",
  
  "I am a point of light in the darkness, showing the way to others. My light may be small, but it is steady and constant. I do not need to be a great light, just a true one. Through this steady light, I help others find their way home.",
  
  "I send peace to all corners of the earth through my meditation and intention. I visualize peace spreading like a gentle wave across all continents. I see conflicts resolving, hearts opening, and love flowing. Through this visualization, I help manifest peace on earth.",
  
  "I am a co-creator of heaven on earth, one thought at a time. Every positive thought I think adds to the collective consciousness of peace. I choose thoughts that uplift, heal, and transform. Through these thoughts, I help create the reality of heaven on earth.",
  
  "I radiate the energy of forgiveness, healing all wounds in my heart and others. I forgive myself for all mistakes and shortcomings. I forgive others for any harm they may have caused me. Through forgiveness, I free myself and others from the chains of the past.",
  
  "I am connected to the eternal source of love and light, the Supreme Soul. This connection is unbreakable, constant, and always available to me. I can access this source at any moment through meditation. Through this connection, I experience infinite love and unlimited power.",
  
  "I create unity by recognizing the divine in all beings, without exception. I see God in every person, regardless of their actions or beliefs. I honor the divine spark that exists in every soul. Through this recognition, I create unity where there was separation.",
  
  "I am a peaceful presence, calming the storms of life with my inner stillness. When chaos surrounds me, I remain centered in my peace. My calm presence has a ripple effect, calming others around me. Through this presence, I become an anchor of peace in the world.",
  
  "I send healing energy to restore harmony in families and relationships. I visualize families coming together in love and understanding. I see conflicts resolving and hearts opening to forgiveness. Through this healing energy, I help restore the sacred bond of family.",
  
  "I am a messenger of peace, spreading the word of love and unity. I carry this message not just in words, but in my actions. I live the message of peace, love, and oneness. Through this living message, I inspire others to remember their true nature.",
  
  "I transform separation into connection, division into unity, conflict into harmony. I see beyond the illusion of separation to the truth of oneness. I bridge gaps between people, cultures, and beliefs. Through this transformation, I help create a world of unity and peace.",
  
  "I am a lighthouse of truth, guiding souls to their purpose and their home. My light shines steadily, never wavering, always pointing the way. I help others navigate through the storms of life. Through this guidance, I help souls find their way back to the divine.",
  
  "I radiate the vibration of one world, one family, one love, one truth. This vibration is the natural frequency of the universe itself. I align myself with this frequency through meditation and remembrance. Through this alignment, I become a living expression of unity.",
  
  "I am a bridge of understanding, connecting hearts across the globe. I help people see beyond their differences to their common humanity. I create connections where there were barriers and walls. Through this bridge, I help build the foundation of one world family.",
  
  "I create peace by being peace, love by being love, light by being light. I do not try to create these qualities, I simply embody them. When I am peace, peace naturally flows from me. Through this being, I become a source of these divine qualities.",
  
  "I am a channel of divine blessings, receiving and sharing with all beings. I do not block the flow of blessings with ego or attachment. I allow blessings to flow through me to all who need them. Through this channel, I experience the joy of giving and receiving.",
  
  "I send positive vibrations to heal the collective consciousness of humanity. These vibrations raise the frequency of human consciousness. I see humanity awakening to truth, love, and unity. Through these vibrations, I help accelerate the evolution of consciousness.",
  
  "I am a point of light radiating the energy of Satyug, the golden age. I carry within me the memory and the promise of the golden age. I help restore the qualities of truth, peace, and love. Through this energy, I contribute to the return of the golden age.",
  
  "I transform the world by transforming myself first, one quality at a time. I do not wait for others to change, I begin with myself. Every positive change in me creates a ripple effect in the world. Through this transformation, I become an agent of global change.",
  
  "I am one with all souls, united in the divine family of the Supreme Soul. There is no 'other' - we are all one, all connected. I feel this unity in my heart, not just understand it in my mind. Through this unity, I experience true love and belonging.",
  
  "I create heaven on earth through daily meditation, blessings, and pure intentions. Heaven is not a place to go, but a state to create. I create this state through my thoughts, words, and actions. Through this creation, I help manifest heaven on earth for all beings.",
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
              key={`time-${currentTime.getMinutes()}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-6xl font-display font-bold text-orange-700 mb-4"
            >
              {formatTime(currentTime)}
            </motion.div>

            {/* Mantra Display */}
            <motion.div
              key={`mantra-${currentTime.getMinutes()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-lg text-gray-600 font-medium">
                TIME : {formatTime(currentTime)} | Mantra
              </div>
              <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic px-4 py-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                <div className="space-y-2">
                  {currentMantra.split('. ').filter(s => s.trim()).map((sentence, idx) => (
                    <p key={idx} className="text-gray-700">
                      {sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
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

