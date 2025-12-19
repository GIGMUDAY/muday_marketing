import { Mail, TrendingUp, Code, FileSearch, Users, Calendar, FileText, Palette, Share2 } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import MagicBento from './MagicBento'

const Services = () => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  const services = [
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Our email marketing campaigns are tailored to build meaningful relationships with your audience. We create targeted and engaging email content that drives conversions and enhances brand loyalty, turning casual readers into long-term customers.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'As digital marketing specialists, we design custom strategies that increase your brand\'s online presence. From SEO to paid advertising, our campaigns are built to attract, engage, and convert your target audience across all digital channels.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'If you have an idea that can have a digital solution that can be realized by a web or a mobile application software, we provide custom website and app development for our clients that is backed with the latest cutting-edge technologies.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: FileSearch,
      title: 'Marketing Research',
      description: 'Data drives our decisions. We conduct thorough market research to understand your audience, competitors, and industry trends. This research forms the foundation for crafting marketing strategies that deliver the best possible outcomes for your business.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: Users,
      title: 'Influence Marketing',
      description: 'Through strategic partnerships with influencers, we amplify your brand\'s reach to a larger audience. We collaborate with influencers who align with your brand values, ensuring authentic and impactful promotions that resonate with their followers.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: Calendar,
      title: 'Production & Event Planning',
      description: 'We manage all aspects of your marketing events, from concept creation to flawless execution. Whether it\'s product launches, corporate events, or brand activations, we bring your vision to life, ensuring everything runs smoothly and generates maximum impact.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Our content marketing team creates engaging, value-driven content that attracts and retains customers. Through blogs, videos, and other forms of media, we ensure your brand consistently delivers content that builds trust and positions you as an authority in your industry.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: Palette,
      title: 'Branding & Graphic Design',
      description: 'Your brand is your identity. We develop comprehensive branding strategies that reflect your core values and resonate with your target market. From logo design to brand messaging, we help you stand out in a crowded market. A great brand identity is not only the one by which people recognize you but also something to which people can relate themselves. Your company logo, business card, a website all should tell the story about your brand.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'We manage your social media platforms with creativity and strategy, helping you connect with your audience, build a community, and drive engagement. Our social media campaigns are designed to increase your visibility and grow your brand\'s influence online. Our goal is to produce content that users will share with their social network to help a company increase brand exposure and broaden customer reach. We do this by providing boosting services, content creation, and an outstanding social media look and design.',
      color: 'bg-gray-100',
      iconColor: 'text-black',
    },
  ]

  return (
    <section id="services" className="services-section relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: What Do We Do? */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              What Do We Do?
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
              All your digital<br />
              needs, in one<br />
              place
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
              From design to SEO, we deliver<br />
              your digital desires without a<br />
              beat miss. Take a look at what<br />
              we can do for you
            </p>
          </div>
        </div>

        {/* Services Cards - MagicBento */}
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={15}
          glowColor="132, 0, 255"
          cards={services.map(service => ({
            // color will be set via CSS based on theme
            title: service.title,
            description: service.description,
            label: service.title.split(' ')[0] // Use first word as label
          }))}
        />
      </div>
    </section>
  )
}

export default Services

