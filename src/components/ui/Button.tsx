import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-normal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs tracking-[1.5px]',
    md: 'px-5 py-3 text-sm tracking-[1.6px]',
    lg: 'px-6 py-4 text-base tracking-[1.9px]',
  }

  const variantStyles = {
    primary: 'bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'bg-transparent border border-primary-800 text-primary-800 hover:bg-primary-50 focus:ring-primary-500',
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
