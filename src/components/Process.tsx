import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AOS from 'aos'

const Process = () => {
  const ref = useRef(null)

  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Pick Your Plan',
      description: 'Find the perfect plan that feels just right for your brand- simple, flexible, & made to help you grow.',
    },
    {
      number: 2,
      title: 'Submit Your Request',
      description: 'Got an idea? Tell us—we\'ll start working within 48 hours',
    },
    {
      number: 3,
      title: 'Revise & Approve',
      description: 'Get your designs shortly. Need changes? We\'ll perfect them until you\'re thrilled',
    },
  ]

  return (
    <section id="process" ref={ref} className="py-12 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: Process */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Process
            </h2>
          </div>

          {/* Center-Left: Large Headline */}
          <div className="flex items-center justify-start pt-20 pb-16">
            <h3
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-[1.1]"
              style={{ fontFamily: '"Urbanist", serif' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Our Workflow<br />
              Blueprint
            </h3>
          </div>

          {/* Bottom-Right: Description */}
          <div className="absolute bottom-4 right-0 text-right max-w-sm">
            <p
              className="text-sm text-black dark:text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Chaos? Not here. We have a<br />
              system that gets the work done<br />
              in the right way, right time, and<br />
              with the right results. Here is<br />
              how we do it
            </p>
          </div>
        </div>

        {/* Desktop View - Staircase Layout with Dashed Lines */}
        <div className="hidden lg:block relative max-w-6xl mx-auto" style={{ minHeight: '500px' }}>
          <div className="relative flex items-start justify-between">
            {steps.map((step, index) => {
              const stepRef = useRef(null)
              const stepInView = useInView(stepRef, { once: false, margin: '-150px' })
              // Staircase effect: each step is lower than the previous
              const topOffset = index * 80 // Step 1: 0px, Step 2: 80px, Step 3: 160px

              return (
                <div key={index} className="flex-1 flex flex-col items-start relative" style={{ paddingTop: `${topOffset}px` }}>
                  <div className="flex items-center w-full relative">
                    {/* Step Circle */}
                    <motion.div
                      ref={stepRef}
                      initial={{ scale: 0 }}
                      animate={stepInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
                      className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 z-10 relative"
                    >
                      <span className="text-white text-2xl font-bold">{step.number}</span>
                    </motion.div>

                    {/* Dashed Line connecting to next step - Only shows for steps 1 and 2, not 3 */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute"
                        style={{
                          left: '4rem', // Start after the circle (64px)
                          top: '50%',
                          right: '0',
                          height: '2px',
                          borderTop: '2px dashed #9ca3af',
                          transform: 'translateY(-50%)',
                          zIndex: 1,
                        }}
                      />
                    )}
                  </div>

                  {/* Content Below Circle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="mt-8 max-w-xs"
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                      {step.title}
                    </h4>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tablet & Mobile View - Vertical Layout */}
        <div className="lg:hidden max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const stepRef = useRef(null)
            const stepInView = useInView(stepRef, { once: false, margin: '-100px' })

            return (
              <motion.div
                key={index}
                ref={stepRef}
                initial={{ opacity: 0, y: 30 }}
                animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={stepInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
                    className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center mb-4"
                  >
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </motion.div>

                  {/* Dashed Line (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={stepInView ? { height: '60px' } : { height: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="w-0.5 h-16 border-l-2 border-dashed border-gray-400 mb-4"
                    />
                  )}

                  {/* Content */}
                  <div className="text-center">
                    <motion.h4
                      initial={{ opacity: 0 }}
                      animate={stepInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="text-2xl font-bold text-black dark:text-white mb-3"
                    >
                      {step.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={stepInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process

