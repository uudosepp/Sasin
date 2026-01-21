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
  const baseStyles = 'px-8 py-3 font-light transition-all duration-300 ease-out tracking-wide cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md',
    outline: 'border border-foreground/20 text-foreground hover:border-primary hover:text-primary',
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