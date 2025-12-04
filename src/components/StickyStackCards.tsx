import React from 'react';
import './StickyStackCards.css';

export interface StickyStackCardProps {
  children: React.ReactNode;
  index: number;
}

export interface StickyStackCardsProps {
  children: React.ReactNode[];
  className?: string;
}

const StickyStackCard: React.FC<StickyStackCardProps> = ({ children, index }) => {
  return (
    <section className="sticky-card-section">
      <div className="sticky-card">
        {children}
      </div>
    </section>
  );
};

const StickyStackCards: React.FC<StickyStackCardsProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`sticky-stack-container ${className}`}>
      {children.map((child, index) => (
        <StickyStackCard key={index} index={index}>
          {child}
        </StickyStackCard>
      ))}
    </div>
  );
};

export default StickyStackCards;

