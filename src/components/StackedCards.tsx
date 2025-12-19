import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './StackedCards.css';

export interface StackedCardProps {
  children: React.ReactNode;
  index: number;
}

export interface StackedCardsProps {
  children: React.ReactNode[];
  className?: string;
  cardGap?: number;
  scaleFactor?: number;
  rotationFactor?: number;
}

const StackedCard: React.FC<StackedCardProps> = ({ children, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const baseY = index * 30;
  const baseScale = 1 - index * 0.05;
  const baseZIndex = 10 - index;

  return (
    <motion.div
      ref={cardRef}
      className="stacked-card"
      initial={{ 
        y: baseY, 
        scale: baseScale, 
        opacity: index === 0 ? 1 : 0.8,
        zIndex: baseZIndex 
      }}
      animate={{
        y: isHovered ? -20 : baseY,
        scale: isHovered ? 1.05 : baseScale,
        zIndex: isHovered ? 20 : baseZIndex,
      }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

const StackedCards: React.FC<StackedCardsProps> = ({
  children,
  className = '',
  cardGap: _cardGap = 30,
  scaleFactor: _scaleFactor = 0.95,
  rotationFactor: _rotationFactor = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`stacked-cards-container ${className}`}>
      {children.map((child, index) => (
        <StackedCard key={index} index={index}>
          {child}
        </StackedCard>
      ))}
    </div>
  );
};

export default StackedCards;

