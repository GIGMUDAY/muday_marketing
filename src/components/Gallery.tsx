import { motion } from 'framer-motion'
import ExpandableGallery from './ExpandableGallery'

const Gallery = () => {
  const heroShots = [
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
      title: 'Brand Campaign Shoot',
      description: 'Story-driven visuals crafted for a nationwide launch.',
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
      title: 'Social Media Day',
      description: 'Live content sprint delivering agile, on-brand posts.',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop',
      title: 'Performance Review',
      description: 'Full-funnel analytics review with optimization insights.',
    },
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
      title: 'Client Workshop',
      description: 'Co-creation session aligning teams on KPIs and messaging.',
    },
  ]

  const detailShots = [
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
      title: 'Paid Media',
      description: 'Iterating on ad creative with rapid A/B testing.',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop',
      title: 'SEO & Content',
      description: 'Long-form content pillars paired with technical SEO.',
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop',
      title: 'Team Sync',
      description: 'Weekly standups to keep delivery and growth in lockstep.',
    },
    {
      src: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1400&auto=format&fit=crop',
      title: 'Design System',
      description: 'Building reusable design blocks for faster launches.',
    },
  ]

  return (
    <section id="gallery" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[40vh] mb-12">
          <div className="absolute top-0 left-0">
            <p
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
            >
              Gallery
            </p>
          </div>
          <div className="flex items-center justify-start pt-10 pb-6">
            <h3
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1]"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Work that Speaks<br />
              for Itself
            </h3>
          </div>
          <div className="absolute bottom-0 right-0 text-right max-w-sm">
            <p
              className="text-sm text-black dark:text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
            >
              A quick tour of the campaigns, shoots, and brand moments we craft.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ExpandableGallery images={heroShots} className="rounded-2xl overflow-hidden" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ExpandableGallery images={detailShots} className="rounded-2xl overflow-hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
