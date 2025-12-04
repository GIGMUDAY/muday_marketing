import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect } from 'react'

interface ContainerScrollProps {
  titleComponent: ReactNode
  children: ReactNode
}

const ContainerScroll = ({ titleComponent, children }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[50rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header scrollYProgress={scrollYProgress} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export default ContainerScroll

const Header = ({ scrollYProgress, titleComponent }: { scrollYProgress: any; titleComponent: ReactNode }) => {
  const translate = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div
      style={{
        translateY: translate,
        opacity,
      }}
      className="div max-w-2xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

const Card = ({
  rotate,
  scale,
  translate: _translate,
  children,
}: {
  rotate: any
  scale: any
  translate: any
  children: ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004d, 0 37px 37px #0000004d, -0px 0px 0px #0000004d',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-6 md:p-8 bg-white rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  )
}

