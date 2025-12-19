import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface ContentItem {
  title: string
  description: string
  content: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
  number?: string
  image?: string
  features?: string[]
}

interface StickyScrollProps {
  content: ContentItem[]
  contentClassName?: string
}

interface ScrollItemProps {
  item: ContentItem
  index: number
  totalItems: number
  scrollYProgress: MotionValue<number>
}

const ScrollTextItem = ({ item, index, totalItems, scrollYProgress }: ScrollItemProps) => {
  const cardLength = 1 / totalItems
  const cardStart = index * cardLength
  const cardEnd = cardStart + cardLength

  const textOpacity = useTransform(
    scrollYProgress,
    [
      cardStart - cardLength * 0.5,
      cardStart,
      cardEnd,
      cardEnd + cardLength * 0.5,
    ],
    index === 0 ? [1, 1, 1, 0.3] : [0.3, 1, 1, 0.3]
  )

  const textY = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [50, 0]
  )

  const Icon = item.icon

  return (
    <motion.div
      className="mb-20 lg:mb-40"
      style={{ opacity: textOpacity, y: textY }}
    >
      <div className="flex items-center gap-4 mb-3">
        {item.number && (
          <span className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {item.number}
          </span>
        )}
        {Icon && (
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-black dark:text-white" />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          {item.title}
        </h2>
      </div>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {item.description}
      </p>
      {item.features && item.features.length > 0 && (
        <ul className="space-y-2">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="text-black dark:text-white mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

const ScrollImageItem = ({ item, index, totalItems, scrollYProgress }: ScrollItemProps) => {
  const cardLength = 1 / totalItems
  const cardStart = index * cardLength
  const cardEnd = cardStart + cardLength

  const imageScale = useTransform(
    scrollYProgress,
    [
      cardStart - cardLength * 0.5,
      cardStart,
      cardEnd,
      cardEnd + cardLength * 0.5,
    ],
    [0.8, 1, 1, 0.8]
  )

  const imageOpacity = useTransform(
    scrollYProgress,
    [
      cardStart - cardLength * 0.5,
      cardStart,
      cardEnd,
      cardEnd + cardLength * 0.5,
    ],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
  )

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden"
      style={{
        scale: imageScale,
        opacity: imageOpacity,
      }}
    >
      {item.content}
    </motion.div>
  )
}

export const StickyScroll = ({ content, contentClassName }: StickyScrollProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={ref} className="relative w-full">
      <div className="grid lg:grid-cols-2 gap-10 px-4">
        {/* Left side - Text content */}
        <div className="lg:py-20">
          {content.map((item, index) => (
            <ScrollTextItem
              key={item.title}
              item={item}
              index={index}
              totalItems={content.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Right side - Sticky content */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center">
          <div className={cn('w-full h-[400px] lg:h-[600px] rounded-lg relative', contentClassName)}>
            {content.map((item, index) => (
              <ScrollImageItem
                key={`content-${index}`}
                item={item}
                index={index}
                totalItems={content.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

