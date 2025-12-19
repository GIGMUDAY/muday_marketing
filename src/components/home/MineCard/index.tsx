import React, { useRef, useEffect, useState } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';

interface CardProps {
  i: number;
  title: string;
  details: string[];
  description: string;
  src: string;
  url: string;
  color: string;
  textcolor: string;
  left: boolean;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ 
  i, 
  title, 
  src, 
  left, 
  details, 
  color, 
  progress, 
  range, 
  targetScale,
  description: _description,
  url: _url,
  textcolor: _textcolor
}) => {
  const container = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="h-[100vh] items-center justify-center top-0 flex sticky"
    >
      <motion.div
        style={{ 
          ...(isDark ? {} : { backgroundColor: color }), 
          scale, 
          top: `calc(-5vh + ${i * 25}px)` 
        }}
        className="flex flex-col relative top-4 h-[650px] w-full lg:w-[1200px] p-[5px] md:p-[50px] border-t-[0.5px] border-solid border-black dark:border-zinc-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white"
      >
        <div 
          className={`flex flex-col md:flex-row ${left ? "" : "md:flex-row-reverse"} h-full mt-[20px] gap-[50px]`}
        >
          <div className="w-full basis-2/5 relative flex flex-col items-center justify-center">
            <h2 className="font-bold text-3xl md:text-5xl pb-8 text-center md:text-left text-black dark:text-white">
              {title}
            </h2>
            <ul className="text-base text-center md:text-left text-black dark:text-white space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="pb-2 text-black dark:text-white flex items-start gap-2">
                  <span className="text-black dark:text-white mt-1.5 flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full basis-3/5 h-full rounded-[10px] overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <img
                className="w-full h-full object-cover"
                src={src.startsWith('/') ? src : `/images/${src}`}
                alt={title || "Card image"}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;