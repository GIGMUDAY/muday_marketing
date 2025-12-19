import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Industries from './components/Industries'
import Process from './components/Process'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Slider from './components/home/slider'
import Gallery from './components/Gallery'
import Branding from './components/Branding'
import Portfolio from './components/Portfolio'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black relative">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Branding />
      <Pricing />
      <Industries />
      <Process />
      <Slider />
      <Gallery />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
