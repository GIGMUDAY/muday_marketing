import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AOS from 'aos'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()

    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleFormSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData)
    console.log('Form submitted:', data)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" ref={ref} className="section-commen turnYourVision bg-black dark:bg-black" style={{ backgroundColor: '' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[60vh] mb-16">
          {/* Top-Left: Get in touch */}
          <div className="absolute top-0 left-0">
            <h2
              className="text-xs font-normal text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '21px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Get in touch
            </h2>
          </div>

          {/* Center-Left: Large Headline */}
          <div className="flex items-center justify-start pt-16 pb-12">
            <h3
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
              style={{ fontFamily: '"Urbanist", serif' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Your Growth = Our Goal.<br />
              Have a complex project?
            </h3>
          </div>

          {/* Bottom-Right: Description */}
          <div className="absolute bottom-0 right-0 text-right max-w-sm">
            <p
              className="text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '21px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We're all in when it comes to<br />
              helping you break through<br />
              barriers and hit new milestones.<br />
              Your success is our mission, and<br />
              we've got your back every step<br />
              of the way
            </p>
          </div>
        </div>

        {/* Calendly Calendar - Centered with White Background on Yellow */}
        <div className="flex flex-col justify-center items-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl"
            style={{ minHeight: '700px', padding: '0' }}
          >
            <div
              className="calendly-inline-widget bg-white dark:bg-gray-900"
              data-url="https://calendly.com/gig-invest-marketing/30min"
              style={{
                minWidth: '320px',
                height: '700px',
                width: '100%',
                // backgroundColor: '#ffffff' // Let CSS handle it
              }}
            />
          </motion.div>

          {/* Email below calendar on yellow background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6"
          >
            <a
              href="mailto:contact@mudaymarketing.com"
              className="text-white hover:underline transition-colors text-lg font-semibold"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              contact@mudaymarketing.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

