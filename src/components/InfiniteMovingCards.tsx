import React, { useEffect, useState } from 'react'

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  iconColor: string
}

interface InfiniteMovingCardsProps {
  items: ServiceItem[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => {
          const Icon = item.icon
          const actualIndex = idx % items.length
          return (
            <li
              key={`${item.title}-${idx}`}
              className="relative w-[350px] max-w-full shrink-0 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:w-[450px] flex-shrink-0 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${item.color} dark:bg-gray-800 p-3 rounded-lg`}>
                    <Icon className={`w-7 h-7 ${item.iconColor} dark:text-white`} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-grow">{item.description}</p>
                <div className="text-3xl font-bold text-gray-200 dark:text-gray-700 absolute bottom-3 right-3">
                  {actualIndex + 1}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

