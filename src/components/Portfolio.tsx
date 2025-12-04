import { useEffect } from 'react'
import AOS from 'aos'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'Al Nujoom Domestic Worker',
      category: 'Social Media Marketing Specialist',
      bulletPoints: [
        'Consulted with clients on business issues and developed innovative proposals.',
        'Consulted with clients on business issues and developed innovative, high-impact proposals.',
      ],
      image: '/AlNujoomDomesticWorker.jpg',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      title: 'NISIR IT SOLUTIONS',
      category: 'Social Media Marketing Specialist',
      description: 'NISIR IT SOLUTIONS, Ethiopia. Experienced and Skilled in Content Creation and innovative design solutions. Strong professional background in developing creative strategies that enhance brand visibility and drive audience engagement.',
      image: '/nisir-it-solutuins.jpg',
      bgColor: 'bg-teal-600',
      textColor: 'text-white',
    },
    {
      title: 'Careall Foreign Employment Agency',
      category: 'Digital Marketing Manager',
      bulletPoints: [
        'Consulted with clients on business issues and developed innovative proposals.',
        'Consulted with clients on business issues and developed innovative, high-impact proposals.',
      ],
      image: '/careall.jpg',
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
    },
    {
      title: 'Sebez Training and Consultancy services',
      category: 'Marketing Consultant',
      bulletPoints: [
        'Consulted with clients on business issues and developed innovative proposals.',
        'Consulted with clients on business issues and developed innovative, high-impact proposals.',
      ],
      image: '/sebez.jpg',
      bgColor: 'bg-orange-600',
      textColor: 'text-white',
    },
    {
      title: 'Asham promotion and event organization',
      category: 'Event Coordinator',
      bulletPoints: [
        'Coordinated schedules and timelines for events.',
        'Managed event logistics and operations.',
        'Developed and distributed event surveys to gather feedback and assess event success.',
        'Developed detailed event reports, documenting all aspects of each event.',
      ],
      image: '/asham.jpg',
      bgColor: 'bg-indigo-600',
      textColor: 'text-white',
    },
    {
      title: 'ETrainCon',
      category: 'Marketing & Digital Marketing',
      bulletPoints: [
        'SEO & SEM',
        'Content creation',
        'CRM management',
        'Lead generation & nurture',
        'Campaign performance tracking & reporting',
        'Marketing analytic',
      ],
      image: '/etraincon.jpg',
      bgColor: 'bg-pink-600',
      textColor: 'text-white',
    },
    {
      title: 'PavePath Design',
      category: 'Marketing Director & Digital Specialist',
      description: 'Led integrated digital campaigns across email, social media, branding, content marketing, and website experiences for diverse clients. Applied strong market research and event-planning skills to design campaigns that delivered clear, measurable results. Increased brand visibility and high-quality lead generation by managing both internal and client-facing marketing programs. Developed strategic marketing plans that blended digital tactics with print campaigns and targeted word-of-mouth activation. Collaborated closely with designers and creatives to produce compelling visual assets, brand stories, and communication tools for key promotional launches.',
      bulletPoints: [
        'Led integrated digital campaigns across email, social media, branding, content marketing, and website experiences for diverse clients.',
        'Applied strong market research and event-planning skills to design campaigns that delivered clear, measurable results.',
        'Increased brand visibility and high-quality lead generation by managing both internal and client-facing marketing programs.',
        'Developed strategic marketing plans that blended digital tactics with print campaigns and targeted word-of-mouth activation.',
        'Collaborated closely with designers and creatives to produce compelling visual assets, brand stories, and communication tools for key promotional launches.',
      ],
      image: '/pave-path.jpg',
      bgColor: 'bg-cyan-600',
      textColor: 'text-white',
    },
  ]

  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])

  return (
    <section id="portfolio" className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: Our Portfolio */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Our Portfolio
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
              Our Best Works<br />
              of All Time
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
              Check out our portfolios to get<br />
              to know our work better
            </p>
          </div>
        </div>

        {/* Case Studies - ScrollStack Animation */}
        <div className="mt-20">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={150}
            itemScale={0.02}
            itemStackDistance={25}
            stackPosition="25%"
            scaleEndPosition="15%"
            baseScale={0.9}
            rotationAmount={0}
            blurAmount={0}
          >
            {caseStudies.map((study, index) => (
              <ScrollStackItem key={index}>
                <article className="grid md:grid-cols-[1.5fr_1fr] gap-0 rounded-lg overflow-hidden shadow-lg">
                  {/* Left Panel - Colored Background with Text */}
                  <div className={`${study.bgColor} ${study.textColor} p-8 md:p-12 flex flex-col justify-between relative`}>
                    {/* Badge */}
                    <div className="mb-8">
                      <span className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {study.title}
                      </span>
                    </div>

                    {/* Heading */}
                    <div className="mb-6">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        {study.category === 'Social Media Marketing Specialist' ? (
                          <>
                            Social Media<br />Marketing<br />Specialist
                          </>
                        ) : study.category === 'Digital Marketing Manager' ? (
                          <>
                            Digital Marketing<br />Manager
                          </>
                        ) : study.category === 'Marketing Consultant' ? (
                          <>
                            Marketing<br />Consultant
                          </>
                        ) : study.category === 'Event Coordinator' ? (
                          <>
                            Event<br />Coordinator
                          </>
                        ) : study.category === 'Marketing & Digital Marketing' ? (
                          <>
                            Marketing &<br />Digital Marketing
                          </>
                        ) : study.category === 'Marketing Director & Digital Specialist' ? (
                          <>
                            Marketing Director &<br />Digital Specialist
                          </>
                        ) : study.category === 'E-commerce Growth' ? (
                          <>
                            E-commerce<br />Growth
                          </>
                        ) : (
                          study.category
                        )}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="max-w-xl">
                      {study.bulletPoints ? (
                        <ul className="space-y-3 text-base md:text-lg leading-relaxed opacity-90">
                          {study.bulletPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-base md:text-lg leading-relaxed opacity-90">
                          {study.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Panel - Image */}
                  <div className="relative min-h-[400px] md:min-h-[700px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-12 md:p-20">
                    <img
                      src={study.image}
                      alt={study.category}
                      className="object-contain"
                      style={{ 
                        maxHeight: '100%', 
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        padding: '20px'
                      }}
                    />
                  </div>
                </article>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

