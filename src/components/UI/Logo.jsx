import React from 'react';

const Logo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={`${sizes[size] || sizes.md} text-indigo-600`} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 38C9.514 38 2 30.486 2 20S9.514 2 20 2s18 7.514 18 18-7.514 18-18 18z" 
          fill="currentColor"
        />
        <path 
          d="M26 12l-6 16-6-16h4l4 10 4-10h4z" 
          fill="currentColor"
        />
        <circle cx="20" cy="10" r="2" fill="currentColor" />
        <circle cx="20" cy="30" r="2" fill="currentColor" />
      </svg>
      <span className={`ml-2 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${textSizes[size] || textSizes.md}`}>
        VPeakFit
      </span>
    </div>
  );
};

export default Logo;
