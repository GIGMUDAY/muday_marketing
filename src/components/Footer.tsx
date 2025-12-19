import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const services = [
    'Content Marketing',
    'Branding & Design',
    'Search Engine Optimization',
    'Digital Marketing',
  ]

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12" style={{ fontFamily: '"Urbanist", serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <img
                src="/Muday Marketing main-Logo-09.png"
                alt="Muday Marketing Solutions Logo"
                className="h-10 w-auto"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-300 text-sm"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '21px' }}
            >
              the best digital marketing agency, offering marketing services such as SEO, PPC, Website Development, SMM, Web Design
            </motion.p>
          </div>

          {/* Services */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4 text-black dark:text-white"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Services
            </motion.h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                >
                  <a
                    href="#services"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                    style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4 text-black dark:text-white"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <a
                  href="mailto:contact@mudaymarketing.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Mail className="w-4 h-4" />
                  contact@mudaymarketing.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <a
                  href="tel:+251944750500"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Phone className="w-4 h-4" />
                  09 44 750 500
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a
                  href="tel:+251944001595"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Phone className="w-4 h-4" />
                  09 44 00 15 95
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <a
                  href="tel:+16503092685"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Phone className="w-4 h-4" />
                  +1 650 309 2685
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="pt-2"
              >
                <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm" style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}>
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="mb-1">
                      <span className="font-semibold">Ethiopia</span><br />
                      Addis Ababa
                    </div>
                    <div>
                      <span className="font-semibold">USA</span><br />
                      San Francisco, California
                    </div>
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4 text-black dark:text-white"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Follow Us
            </motion.h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <a
                  href="https://t.me/mudayMarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <a
                  href="https://facebook.com/mudaymarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a
                  href="https://www.tiktok.com/@mudaymarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <a
                  href="https://www.youtube.com/@Mudaymarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <a
                  href="https://www.instagram.com/mudaymarketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <a
                  href="https://www.linkedin.com/company/muday-diigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
                  style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4 text-black dark:text-white"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Stay In Touch
            </motion.h4>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for subscribing!')
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-black dark:text-white placeholder-gray-500"
                style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg font-semibold hover:bg-accent dark:hover:bg-gray-200 transition-colors"
                style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-gray-300 dark:border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left" style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}>
              Muday Marketing Solutions - Top Marketing Company
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm" style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}>
              © 2025 Copyrights By Muday Marketing Solutions All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
              >
                Privacy Policy
              </a>
              <span className="text-gray-600 dark:text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
              >
                Terms & Condition
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


