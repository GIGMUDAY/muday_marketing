import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AOS from 'aos'
import { Check, X } from 'lucide-react'
import ElectricBorder from './ElectricBorder'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])

  const pricingPlans = [
    {
      name: 'LITE',
      price: 'Contact for pricing',
      description: 'Perfect for small businesses getting started with digital marketing.',
      features: [
        { text: 'SMM management', included: true },
        { text: 'Email Marketing Management', included: false },
        { text: 'SMS marketing management', included: false },
        { text: 'Online advertising management', included: true },
        { text: 'SEO management', included: true },
        { text: 'Content Marketing Management', included: true },
        { text: 'Influencer Marketing Strategy and management', included: false },
        { text: 'Free Account setup', included: true },
        { text: 'Original Content Creation', included: true },
        { text: 'SM Calendar Organization', included: true },
        { text: '8 Graphics development and Posts Per Month', included: true },
        { text: '5 Video development and Posts Per Month', included: true },
        { text: '10,000 SMS per month / SMS sender ID', included: false },
        { text: 'Performance Reporting', included: true },
        { text: 'Monitoring & Responding', included: true },
      ],
    },
    {
      name: 'PLUS',
      price: 'Contact for pricing',
      description: 'Ideal for growing businesses that need comprehensive marketing solutions.',
      features: [
        { text: 'SMM management', included: true },
        { text: 'Email Marketing Management', included: false },
        { text: 'SMS marketing management', included: false },
        { text: 'Online advertising management', included: true },
        { text: 'SEO management', included: true },
        { text: 'Content Marketing Management', included: true },
        { text: 'Influencer Marketing Strategy and management', included: true },
        { text: 'Free Account setup', included: true },
        { text: 'Original Content Creation', included: true },
        { text: 'SM Calendar Organization', included: true },
        { text: '15 Graphics development and Posts Per Month', included: true },
        { text: '8 Video development and Posts Per Month', included: true },
        { text: '10,000 SMS per month / SMS sender ID', included: true },
        { text: 'Performance Reporting', included: true },
        { text: 'Monitoring & Responding', included: true },
      ],
    },
    {
      name: 'PLATINUM',
      price: 'Contact for pricing',
      description: 'Complete marketing solution for established businesses seeking maximum impact.',
      features: [
        { text: 'SMM management', included: true },
        { text: 'Email Marketing Management', included: true },
        { text: 'SMS marketing management', included: true },
        { text: 'Online advertising management', included: true },
        { text: 'SEO management', included: true },
        { text: 'Content Marketing Management', included: true },
        { text: 'Influencer Marketing Strategy and management', included: true },
        { text: 'Free Account setup', included: true },
        { text: 'Original Content Creation', included: true },
        { text: 'SM Calendar Organization', included: true },
        { text: '15 Graphics development and Posts Per Month', included: true },
        { text: '8 Video development and Posts Per Month', included: true },
        { text: '10,000 SMS per month / SMS sender ID', included: true },
        { text: 'Performance Reporting', included: true },
        { text: 'Monitoring & Responding', included: true },
      ],
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: Plan & Packages */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Plan & Packages
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
              Plans that Line<br />
              up with Your<br />
              Needs
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
              We specialize in everything<br />
              from wild designs to SEO that<br />
              drives results, delivering<br />
              solutions that build your brand,<br />
              brick by brick
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${index === 1 ? 'scale-105' : ''}`}
            >
              <ElectricBorder
                color={index === 1 ? '#000000' : '#333333'}
                speed={1}
                chaos={1}
                thickness={2}
                className="rounded-lg"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 h-full">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2">{plan.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-black dark:text-white mb-6">{plan.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600 line-through'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="https://wa.me/251944750500"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors block text-center"
                  >
                    Buy Now
                  </motion.a>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing


