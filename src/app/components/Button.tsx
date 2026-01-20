import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
