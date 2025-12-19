import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    'Content Marketing',
    'Branding & Design',
    'Search Engine Optimization',
    'Digital Marketing'
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Branding', href: '#branding' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Industries', href: '#industries' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Meet Our Team', href: '#team' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = (href: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsOpen(false)
    setServicesOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Side - Hamburger Menu Button */}
          <div className="flex items-center">
            <button
              className="relative z-50 p-2 text-black dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-current rounded transition-all"
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded transition-all"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded transition-all"
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>

          {/* Center - Logo and Company Name */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#home')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src="/Muday Marketing Logo Icon-10.png"
                alt="Muday Marketing Solutions Logo"
                className="h-8 md:h-10 w-auto"
              />
              <span className="text-lg md:text-xl font-bold text-black dark:text-white whitespace-nowrap">
                Muday Marketing Solutions
              </span>
            </motion.a>
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Hamburger Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-40"
              onClick={handleCloseMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold text-black dark:text-white">Menu</h2>
                  <button
                    onClick={handleCloseMenu}
                    className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              setServicesOpen(!servicesOpen)
                            }}
                            className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-2 pb-4">
                                  {services.map((service) => (
                                    <a
                                      key={service}
                                      href="#services"
                                      onClick={handleLinkClick('#services')}
                                      className="block py-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors border-l-2 border-transparent hover:border-black dark:hover:border-white pl-4"
                                    >
                                      {service}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={handleLinkClick(item.href)}
                          className="block py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors border-b border-gray-100 dark:border-gray-800"
                        >
                          {item.name}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="p-6 space-y-3 border-t border-gray-200 dark:border-gray-800">
                  <motion.a
                    href="#contact"
                    onClick={handleLinkClick('#contact')}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Contact Us
                  </motion.a>
                  <motion.a
                    href="https://wa.me/251944750500"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Buy Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar


