import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import CountUp from './CountUp'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight"
            >
              Delivering your digital goals straight to your inbox{' '}
              <span className="text-black dark:text-white">without limits</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Stuck with digital services that don't pay off? We've got you covered with unlimited designs and content to drive real results, no sweat
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/251944750500" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-accent dark:hover:bg-gray-200 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </motion.a>
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats or Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: 20, suffix: '+', label: 'Websites redesigns' },
                { number: 50, suffix: 'k+', label: 'Copywriting', displayNumber: 50 },
                { number: 40, suffix: '+', label: 'Ad campaigns' },
                { number: 10, suffix: 'k+', label: 'Hours Dedicated', displayNumber: 10 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    <CountUp
                      from={0}
                      to={stat.displayNumber !== undefined ? stat.displayNumber : stat.number}
                      duration={1.5}
                      separator=","
                      direction="up"
                      className="inline"
                    />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero

