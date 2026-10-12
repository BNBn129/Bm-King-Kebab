import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 56 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        aria-label="BM King Kebab Official Logo"
      >
        {/* Pitch Black Circular Badge */}
        <circle cx="120" cy="120" r="114" fill="#030304" stroke="#ffffff" strokeWidth="3.5" />

        <defs>
          {/* Flame Gradients */}
          <linearGradient id="flameGradLeft" x1="45" y1="175" x2="85" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="40%" stopColor="#ea580c" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>

          <linearGradient id="flameGradRight" x1="195" y1="175" x2="155" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="40%" stopColor="#ea580c" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>

          {/* Curved Text Path along the bottom inner circle */}
          <path
            id="logoArcPath"
            d="M 38,155 A 86,86 0 0,0 202,155"
            fill="none"
          />
        </defs>

        {/* Left Roaring Flame */}
        <path
          d="M 68,142 C 48,126 50,92 72,70 C 74,84 80,92 88,97 C 92,82 89,68 83,54 C 103,72 101,108 87,134 C 79,149 71,146 68,142 Z"
          fill="url(#flameGradLeft)"
        />

        {/* Right Roaring Flame */}
        <path
          d="M 172,142 C 192,126 190,92 168,70 C 166,84 160,92 152,97 C 148,82 151,68 157,54 C 137,72 139,108 153,134 C 161,149 169,146 172,142 Z"
          fill="url(#flameGradRight)"
        />

        {/* Doner Spit Top Metal Rod */}
        <rect x="116" y="32" width="8" height="20" rx="2" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />

        {/* Red Kebab Rotisserie Meat Shape */}
        <path
          d="M 94,52 C 110,48 130,48 146,52 C 156,70 152,96 144,124 C 137,140 127,150 120,156 C 113,150 103,140 96,124 C 88,96 84,70 94,52 Z"
          fill="#c01515"
        />

        {/* Horizontal Meat Slice Grooves */}
        <path d="M 93,65 Q 120,72 147,65" stroke="#171717" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 91,82 Q 120,89 149,82" stroke="#171717" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 95,103 Q 120,110 145,103" stroke="#171717" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 103,124 Q 120,130 137,124" stroke="#171717" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* Bottom spit cone */}
        <polygon points="117,154 123,154 120,163" fill="#991b1b" />

        {/* Crisp Center "BM" Letters */}
        <text
          x="120"
          y="108"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
          fontSize="46"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          BM
        </text>

        {/* Curved "BM KinG KEBAB" Text in Golden Yellow */}
        <text fill="#f59e0b" fontSize="21" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2">
          <textPath href="#logoArcPath" startOffset="50%" textAnchor="middle">
            BM KinG KEBAB
          </textPath>
        </text>
      </svg>
    </div>
  );
};
