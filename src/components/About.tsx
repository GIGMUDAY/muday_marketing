import { useEffect } from 'react'
import AOS from 'aos'
import CountUp from './CountUp'

const About = () => {
  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])

  const stats = [
    { number: 20, suffix: '+', label: 'Websites', sublabel: 'redesigns' },
    { number: 50, suffix: 'k+', label: 'Copywriting' },
    { number: 40, suffix: '+', label: 'Ad campaigns' },
    { number: 10, suffix: 'k+', label: 'Hours', sublabel: 'Dedicated' },
  ]

  return (
    <section id="about" className="section-commen were-here bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: Get to Know Us */}
          <div className="absolute top-0 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '21px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Get to Know Us
            </h2>
          </div>

          {/* Center-Left: Large Headline */}
          <div className="flex items-center justify-start pt-16 pb-12">
            <h3
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-[1.1]"
              style={{ fontFamily: '"Urbanist", serif' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              How We Make It<br />
              Work, Every Time
            </h3>
          </div>

          {/* Bottom-Right: Description */}
          <div className="absolute bottom-0 right-0 text-right max-w-sm">
            <p
              className="text-black dark:text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '21px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We are your missing marketing<br />
              piece in the jigsaw puzzle. Big<br />
              dreams don't need big budgets—<br />
              just big ideas. With years of<br />
              experience under our belt, we turn<br />
              'meh' into 'wow' and results into<br />
              reality. Ready to hit the ground<br />
              running with unlimited solutions?<br />
              Let's go!
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h3
            className="text-3xl font-bold text-center text-black dark:text-white mb-12"
            style={{ fontFamily: '"Urbanist", serif' }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Our Stats Say It All
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: '"Urbanist", serif' }}>
                  <CountUp
                    from={0}
                    to={stat.number}
                    duration={2}
                    separator=","
                    direction="up"
                    className="inline"
                  />
                  <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-black dark:text-white">
                  {stat.label}
                  {stat.sublabel && (
                    <>
                      <br />
                      {stat.sublabel}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

