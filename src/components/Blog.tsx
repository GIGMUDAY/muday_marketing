import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const blogPosts = [
    {
      title: '20 Digital Marketing Trends and Predictions for 2025',
      link: '#',
    },
    {
      title: 'How Google Ads Can Grow Your Business in 2025',
      link: '#',
    },
  ]

  return (
    <section id="blog" ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-4">
            Blogs/Writings
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Content that Pulls & Definitely Sells
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We create words that connect, engage, and convert—whether it\'s a blog, website, or social media post
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="text-2xl font-bold text-black dark:text-white mb-4">{post.title}</h4>
              <motion.a
                href={post.link}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-black dark:text-white font-semibold hover:underline"
              >
                Know More Details <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-black dark:border-white text-black dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            View All
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

