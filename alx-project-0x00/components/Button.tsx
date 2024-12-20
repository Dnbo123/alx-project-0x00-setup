import React from 'react';

interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md', onClick }) => {
  // Define styles for sizes and shapes
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-md',
    large: 'py-3 px-6 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  const baseStyles = 'bg-blue-500 text-white font-bold hover:bg-blue-700 transition duration-300';

  return (
    <button
      className={`${baseStyles} ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;