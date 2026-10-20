import React from 'react';

interface RestaurantLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export const RestaurantLogo: React.FC<RestaurantLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
  variant = 'light',
}) => {
  const sizeClasses = {
    sm: {
      text: 'text-lg',
      sub: 'text-[9px] tracking-widest',
    },
    md: {
      text: 'text-xl md:text-2xl',
      sub: 'text-[10px] tracking-widest',
    },
    lg: {
      text: 'text-2xl md:text-3xl',
      sub: 'text-xs tracking-wider',
    },
    xl: {
      text: 'text-3xl md:text-4xl',
      sub: 'text-xs tracking-widest',
    },
  };

  const current = sizeClasses[size];
  const textColor = variant === 'dark' ? 'text-white' : 'text-stone-900';
  const subColor = variant === 'dark' ? 'text-stone-400' : 'text-stone-500';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`font-black tracking-tight ${textColor} uppercase font-sans ${current.text}`}>
          BM KING <span className="text-amber-600">KEBAB</span>
        </span>
      </div>
      {showSubtitle && (
        <span className={`${subColor} font-semibold uppercase mt-1 ${current.sub}`}>
          Łódź · Sacharowa 45A
        </span>
      )}
    </div>
  );
};
