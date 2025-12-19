import { useEffect } from 'react'
import AOS from 'aos'

const About = () => {
  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh()
  }, [])

  return (
    <section id="about" className="section-commen were-here bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-10 items-end min-h-[60vh]">
          <div className="space-y-6">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px', lineHeight: '18px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Get to Know Us
            </h2>
            <h3
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white leading-[1.05]"
              style={{ fontFamily: '"Urbanist", serif' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              How We Make It<br />
              Work, Every Time
            </h3>
          </div>

          <div className="text-right md:pl-8 md:border-l md:border-gray-200 dark:md:border-gray-800">
            <p
              className="text-sm text-black dark:text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px', lineHeight: '20px' }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We have an exceptional track record of delivering digital marketing services that empower
              businesses to thrive, even in the most competitive markets. At Muday Marketing Solutions, we
              craft strategies that consistently drive success, helping brands achieve their goals and
              outpace the competition on a global scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
