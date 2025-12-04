import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null)
  const animationCompletedRef = useRef(false)
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    }
  }, [])

  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded) return

    const el = ref.current

    // Manual text splitting
    const splitText = () => {
      // Clear existing content
      const originalText = el.textContent || text
      el.innerHTML = ''

      if (splitType === 'chars' || splitType === 'words, chars') {
        // Split into characters
        const chars = originalText.split('')
        chars.forEach((char, index) => {
          const span = document.createElement('span')
          span.className = 'split-char'
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          el.appendChild(span)
        })
      } else if (splitType === 'words') {
        // Split into words
        const words = originalText.split(/(\s+)/)
        words.forEach((word, index) => {
          if (word.trim()) {
            const span = document.createElement('span')
            span.className = 'split-word'
            span.textContent = word
            span.style.display = 'inline-block'
            span.style.marginRight = '0.25em'
            el.appendChild(span)
          } else if (word) {
            el.appendChild(document.createTextNode(word))
          }
        })
      } else if (splitType === 'lines') {
        // Split into lines (basic implementation)
        const words = originalText.split(/(\s+)/)
        let currentLine = document.createElement('span')
        currentLine.className = 'split-line'
        currentLine.style.display = 'block'
        el.appendChild(currentLine)

        words.forEach((word) => {
          if (word.trim()) {
            const span = document.createElement('span')
            span.textContent = word
            span.style.display = 'inline'
            currentLine.appendChild(span)
            currentLine.appendChild(document.createTextNode(' '))
          }
        })
      }
    }

    splitText()

    const startPct = (1 - threshold) * 100
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
    const sign =
      marginValue === 0
        ? ''
        : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`
    const start = `top ${startPct}%${sign}`

    let targets: Element[] = []
    if (splitType === 'chars' || splitType === 'words, chars') {
      targets = Array.from(el.querySelectorAll('.split-char'))
    } else if (splitType === 'words') {
      targets = Array.from(el.querySelectorAll('.split-word'))
    } else if (splitType === 'lines') {
      targets = Array.from(el.querySelectorAll('.split-line'))
    }

    if (targets.length === 0) return

    const animation = gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
          fastScrollEnd: true,
          anticipatePin: 0.4,
        },
        onComplete: () => {
          animationCompletedRef.current = true
          onLetterAnimationComplete?.()
        },
        willChange: 'transform, opacity',
        force3D: true,
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
      animation.kill()
    }
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    JSON.stringify(from),
    JSON.stringify(to),
    threshold,
    rootMargin,
    fontsLoaded,
    onLetterAnimationComplete,
  ])

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity',
    }

    const classes = `split-parent ${className}`

    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h1>
        )
      case 'h2':
        return (
          <h2 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h2>
        )
      case 'h3':
        return (
          <h3 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h3>
        )
      case 'h4':
        return (
          <h4 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h4>
        )
      case 'h5':
        return (
          <h5 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h5>
        )
      case 'h6':
        return (
          <h6 ref={ref as React.Ref<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h6>
        )
      case 'div':
        return (
          <div ref={ref as React.Ref<HTMLDivElement>} style={style} className={classes}>
            {text}
          </div>
        )
      case 'span':
        return (
          <span ref={ref as React.Ref<HTMLSpanElement>} style={style} className={classes}>
            {text}
          </span>
        )
      default:
        return (
          <p ref={ref as React.Ref<HTMLParagraphElement>} style={style} className={classes}>
            {text}
          </p>
        )
    }
  }

  return renderTag()
}

export default SplitText

