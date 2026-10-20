import React from 'react';

interface RestaurantLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const RestaurantLogo: React.FC<RestaurantLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
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

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`font-black tracking-tight text-white uppercase font-sans ${current.text}`}>
          BM KING <span className="text-amber-500">KEBAB</span>
        </span>
      </div>
      {showSubtitle && (
        <span className={`text-slate-400 font-semibold uppercase mt-1 ${current.sub}`}>
          Łódź · Sacharowa 45A
        </span>
      )}
    </div>
  );
};
