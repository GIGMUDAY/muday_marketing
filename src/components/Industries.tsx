import React, { useEffect } from 'react'
import { Eye, Users, TrendingUp, UserCheck, FileText, Settings } from 'lucide-react'
import { StickyScroll } from './StickyScroll'
import AOS from 'aos'

const Industries = () => {
  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])
  const industries = [
    {
      icon: Eye,
      title: 'Increase Visibility',
      description: 'Our digital marketing strategies are designed to enhance your brand\'s visibility across all platforms. We use cutting-edge techniques like SEO, social media marketing, and influencer partnerships to ensure that your brand stands out in a crowded market and reaches the right audience.',
      features: [],
      number: '1.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Grow Your Customer Base',
      description: 'Through a combination of targeted email marketing, social media engagement, and compelling content, we help you connect with new customers. Our goal is to attract, engage, and convert leads into loyal customers, growing your base and building long-term relationships.',
      features: [],
      number: '2.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Increase Sales',
      description: 'At the heart of everything we do is driving sales. Whether through digital advertising, optimized web design, or strategic content marketing, we focus on generating measurable revenue growth. Our campaigns are built to turn traffic into conversions and investment into profit.',
      features: [],
      number: '3.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: UserCheck,
      title: 'We\'re A True Partner',
      description: 'We see ourselves as more than just a marketing agency; we\'re your strategic partner. At Muday Marketing Solution, we\'re invested in your success and work alongside you to ensure your marketing aligns with your business goals. We thrive when you succeed.',
      features: [],
      number: '4.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: FileText,
      title: 'Monthly Reporting',
      description: 'Transparency is key. We provide detailed monthly reports on the performance of your campaigns, giving you clear insights into key metrics, growth, and areas of improvement. You\'ll always know how your investment is working for you.',
      features: [],
      number: '5.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Settings,
      title: 'Proprietary Processes',
      description: 'Our success is driven by proprietary processes refined through years of experience. From data-driven research to customized marketing strategies, we ensure our approach is tailored to your specific needs and optimized for maximum impact. This allows us to deliver consistent, high-quality results every time.',
      features: [],
      number: '6.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ]

  const content = industries.map((industry) => {
    const Icon = industry.icon
    return {
      title: industry.title,
      description: industry.description,
      features: industry.features,
      icon: Icon,
      number: industry.number,
      image: industry.image,
      content: (
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    }
  })

  return (
    <section id="industries" className="py-12 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: What benefits do you get? */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              What benefits do you get?
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
              Why Choose<br />
              Muday Marketing?
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
              Discover the advantages<br />
              of partnering with us<br />
              for your digital marketing needs
            </p>
          </div>
        </div>

        {/* StickyScroll Content Below */}
        {content && content.length > 0 && (
          <div>
            <StickyScroll content={content} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Industries
