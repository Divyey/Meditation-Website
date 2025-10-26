import { useState } from 'react'
import { FiCalendar, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const FloatingButtons = () => {
  const [showMeetOptions, setShowMeetOptions] = useState(false)

  const addToGoogleCalendar = () => {
    // Morning meditation event
    const morningEvent = {
      text: 'One World One Family - Morning Meditation',
      dates: '20250101T001500Z/20250101T004500Z', // 5:45 AM - 6:15 AM IST (UTC)
      details: 'Join our daily morning meditation session for peace, healing, and divine connection.\\n\\nJoin here: https://meet.google.com/cuk-myze-tva',
      location: 'Online - Google Meet',
      recur: 'RRULE:FREQ=DAILY',
    }

    // Evening meditation event
    const eveningEvent = {
      text: 'One World One Family - Evening Meditation',
      dates: '20250101T161500Z/20250101T164500Z', // 9:45 PM - 10:15 PM IST (UTC)
      details: 'Join our daily evening meditation session for peace, healing, and divine connection.\\n\\nJoin here: https://meet.google.com/cuk-myze-tva',
      location: 'Online - Google Meet',
      recur: 'RRULE:FREQ=DAILY',
    }

    // Create morning event URL
    const morningUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(morningEvent.text)}&dates=${morningEvent.dates}&details=${encodeURIComponent(morningEvent.details)}&location=${encodeURIComponent(morningEvent.location)}&recur=${encodeURIComponent(morningEvent.recur)}`
    
    // Open morning event (user can add evening event separately)
    window.open(morningUrl, '_blank')
    
    // Optional: Show alert to add evening session too
    setTimeout(() => {
      if (window.confirm('Would you like to add the Evening Meditation session to your calendar as well?')) {
        const eveningUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eveningEvent.text)}&dates=${eveningEvent.dates}&details=${encodeURIComponent(eveningEvent.details)}&location=${encodeURIComponent(eveningEvent.location)}&recur=${encodeURIComponent(eveningEvent.recur)}`
        window.open(eveningUrl, '_blank')
      }
    }, 500)
  }

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* Additional buttons when Meet is clicked */}
        <AnimatePresence>
          {showMeetOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 items-end"
            >
              {/* Add to Calendar Button */}
              <motion.button
                onClick={addToGoogleCalendar}
                className="flex items-center gap-3 bg-white text-orange-600 px-4 py-3 rounded-full shadow-lg border-2 border-orange-300"
                aria-label="Add to Google Calendar"
              >
                <span className="text-sm font-semibold hidden sm:block">Add to Calendar</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                  <FiCalendar className="text-lg" />
                </div>
              </motion.button>

              {/* Join Google Meet Button */}
              <motion.a
                href="https://meet.google.com/cuk-myze-tva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-700 px-4 py-3 rounded-full shadow-lg border border-gray-200"
                aria-label="Join Google Meet"
              >
                <span className="text-sm font-semibold hidden sm:block">Join Meditation</span>
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <svg viewBox="0 0 87.5 72" className="w-7 h-7">
                    <path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"/>
                    <path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z"/>
                    <path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z"/>
                    <path fill="#2684fc" d="M20.5 20.5H0v31h20.5z"/>
                    <path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z"/>
                    <path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z"/>
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Buttons */}
        <div className="flex flex-col gap-3">
          {/* WhatsApp Group Button */}
          <a
            href="https://chat.whatsapp.com/ICgXcGslMfz1vGmIuAWZbe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg"
            aria-label="Join WhatsApp Group"
            style={{ boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-9 sm:h-9">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>

          {/* Google Meet / Calendar Toggle Button */}
          <button
            onClick={() => setShowMeetOptions(!showMeetOptions)}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg ${
              showMeetOptions
                ? 'bg-gray-700'
                : 'bg-white border-2 border-gray-200'
            }`}
            aria-label={showMeetOptions ? 'Close options' : 'Meditation options'}
          >
            {showMeetOptions ? (
              <FiX className="text-2xl sm:text-3xl text-white" />
            ) : (
              <svg viewBox="0 0 87.5 72" className="w-8 h-8 sm:w-10 sm:h-10">
                <path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"/>
                <path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z"/>
                <path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z"/>
                <path fill="#2684fc" d="M20.5 20.5H0v31h20.5z"/>
                <path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z"/>
                <path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop when options are open (mobile) */}
      <AnimatePresence>
        {showMeetOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMeetOptions(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingButtons

