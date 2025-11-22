import { motion } from 'framer-motion'
// import { FiMail, FiPhone } from 'react-icons/fi' // Temporarily unused

const JoinFamily = () => {

  return (
    <section id="join" className="section-container bg-white/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          Join Our Global Family
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with us instantly through WhatsApp or join our live meditation sessions. It's free, pure, and open to all souls.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Email Card - TEMPORARILY HIDDEN FOR TESTING */}
          {/* <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
              <FiMail />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
              Email Us
            </h3>
            <a 
              href="mailto:oneworldonefamilymeditation@gmail.com"
              className="text-orange-600 hover:text-orange-700 font-medium break-all"
            >
              oneworldonefamilymeditation@gmail.com
            </a>
          </div> */}

          {/* Phone Card - TEMPORARILY HIDDEN FOR TESTING */}
          {/* <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
              <FiPhone />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
              Call Us
            </h3>
            <a 
              href="tel:+919845498989"
              className="text-blue-600 hover:text-blue-700 font-medium text-xl"
            >
              +91 98454 98989
            </a>
          </div> */}
        </motion.div>

        {/* Join Links with Real Branding - TEMPORARILY HIDDEN FOR TESTING */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://chat.whatsapp.com/ICgXcGslMfz1vGmIuAWZbe"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#25D366] flex items-center justify-center text-white text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                WhatsApp Group
              </h3>
              <p className="text-gray-600 mb-6">
                Join our meditation community, receive daily reminders, and connect with fellow souls
              </p>
              <span className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-lg group-hover:gap-3 transition-all">
                Join Group <span>→</span>
              </span>
            </a>

            <a
              href="https://meet.google.com/cuk-myze-tva"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-100">
                <svg viewBox="0 0 87.5 72" className="w-14 h-14">
                  <path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"/>
                  <path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z"/>
                  <path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z"/>
                  <path fill="#2684fc" d="M20.5 20.5H0v31h20.5z"/>
                  <path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z"/>
                  <path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                Live Meditation
              </h3>
              <p className="text-gray-600 mb-6">
                Join our live video sessions for guided meditation and spiritual connection
              </p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg group-hover:gap-3 transition-all">
                Join Meeting <span>→</span>
              </span>
            </a>
          </div>
        </motion.div> */}
        <div className="text-center text-gray-500 italic py-8">
          Join links temporarily hidden for testing
        </div>
      </div>
    </section>
  )
}

export default JoinFamily

