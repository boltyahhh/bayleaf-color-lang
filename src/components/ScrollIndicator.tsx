import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetSection: string;
  text: string;
  theme?: 'light' | 'dark';
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  targetSection, 
  text,
  theme = 'dark'
}) => {
  const textColor = theme === 'light' ? 'text-white hover:text-spice-200' : 'text-gray-600 hover:text-spice-600';

  return (
    <div className="scroll-indicator-wrapper">
      <div className={`scroll-indicator ${textColor}`}>
        <div className="scroll-indicator-progress" />
      </div>
      <Link
        to={targetSection}
        spy={true}
        smooth={true}
        offset={-80}
        duration={800}
        className={`flex flex-col items-center cursor-pointer ${textColor}`}
      >
        <span className="scroll-text">{text}</span>
        <ChevronDown size={20} className="scroll-icon" />
      </Link>
    </div>
  );
};

export default ScrollIndicator;