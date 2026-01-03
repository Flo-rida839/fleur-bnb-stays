"use client";

import { ReactNode } from 'react';
import { Check, X, AlertCircle, Info, Star } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 hover:shadow-lg',
    outline: 'border-2 border-teal-600 text-teal-700 hover:bg-teal-50 hover:border-teal-700',
    gold: 'bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold hover:shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface BadgeProps {
  children: ReactNode;
  variant?: 'teal' | 'gold' | 'green' | 'gray';
}

export const Badge = ({ children, variant = 'teal' }: BadgeProps) => {
  const variantClasses = {
    teal: 'bg-teal-100 text-teal-800',
    gold: 'bg-gold/10 text-gold-dark',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

interface AlertProps {
  children: ReactNode;
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
}

export const Alert = ({ children, type = 'info', title }: AlertProps) => {
  const typeConfig = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: <Check className="w-5 h-5 text-green-600" />,
      text: 'text-green-800',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: <X className="w-5 h-5 text-red-600" />,
      text: 'text-red-800',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: <AlertCircle className="w-5 h-5 text-yellow-600" />,
      text: 'text-yellow-800',
    },
    info: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: <Info className="w-5 h-5 text-teal-600" />,
      text: 'text-teal-800',
    },
  };

  const config = typeConfig[type];

  return (
    <div className={`${config.bg} ${config.border} border rounded-xl p-4`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">{config.icon}</div>
        <div>
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className={config.text}>{children}</div>
        </div>
      </div>
    </div>
  );
};

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const Rating = ({ value, max = 5, size = 'md' }: RatingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} ${index < value ? 'fill-gold text-gold' : 'fill-gray-300 text-gray-300'}`}
        />
      ))}
      <span className="ml-2 font-semibold text-teal-800">{value.toFixed(1)}</span>
    </div>
  );
};

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  premium?: boolean;
}

export const FeatureItem = ({ icon, title, description, premium = false }: FeatureItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className={`p-3 rounded-xl ${premium ? 'bg-gradient-to-br from-gold to-gold-dark text-white' : 'bg-teal-100 text-teal-600'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-teal-900">{title}</h3>
          {premium && (
            <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">
              PREMIUM
            </span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  center?: boolean;
}

export const SectionHeader = ({ title, subtitle, highlight, center = false }: SectionHeaderProps) => {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      {highlight && (
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-gold/20 rounded-full px-6 py-2 mb-4">
          <span className="font-semibold text-teal-800">{highlight}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">
        {title}
        {highlight && <span className="font-cursive text-gold"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};