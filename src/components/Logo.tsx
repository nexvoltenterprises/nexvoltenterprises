import React from 'react';

export interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  variant = 'dark',
  className = '',
  width = 160,
  height = 40,
}: LogoProps) {
  const isLight = variant === 'light';

  // variant === 'light': For dark backgrounds (e.g. Premium Black #0B0B0D footer)
  // variant === 'dark': For light backgrounds (e.g. Light sections)
  const primaryColor = isLight ? '#FFFFFF' : '#FFFFFF';
  const subtextColor = isLight ? '#C7C7C7' : '#C7C7C7';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175 44"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Nexvolt Enterprises"
    >
      <defs>
        {/* Metallic Gold gradient with Light Gold highlight */}
        <linearGradient id={`boltGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D675" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8932C" />
        </linearGradient>
      </defs>

      {/* NEXVOLT wordmark typography */}
      <g fill={primaryColor}>
        {/* N */}
        <polygon points="4,27 4,7 8.5,7 18.2,21.5 18.2,7 22,7 22,27 17.5,27 7.8,12.5 7.8,27" />

        {/* E */}
        <polygon points="26,27 26,7 41,7 41,10.8 30.2,10.8 30.2,15 39.5,15 39.5,18.8 30.2,18.8 30.2,23.2 41.5,23.2 41.5,27" />

        {/* X */}
        <polygon points="44.5,7 49,7 54,14.6 59,7 63.5,7 56.5,17 64,27 59.5,27 54,19.2 48.5,27 44,27 51.5,17" />

        {/* V - Left arm */}
        <polygon points="67.5,7 72,7 77.2,24 73,24" />

        {/* O */}
        <path
          d="M103,7 C109.5,7 114,11.5 114,17 C114,22.5 109.5,27 103,27 C96.5,27 92,22.5 92,17 C92,11.5 96.5,7 103,7 Z M103,10.8 C98.8,10.8 96.2,13.5 96.2,17 C96.2,20.5 98.8,23.2 103,23.2 C107.2,23.2 109.8,20.5 109.8,17 C109.8,13.5 107.2,10.8 103,10.8 Z"
          fillRule="evenodd"
        />

        {/* L */}
        <polygon points="118,7 122.2,7 122.2,23.2 132,23.2 132,27 118,27" />

        {/* T */}
        <polygon points="135,7 150,7 150,10.8 144.6,10.8 144.6,27 140.4,27 140.4,10.8 135,10.8" />
      </g>

      {/* V - Right arm integrated with dynamic electric lightning bolt in Metallic Gold (#D4AF37) */}
      <polygon
        points="87,7 82.5,7 75.5,17 80.5,17 74.5,27 81.5,15.5 77.5,15.5"
        fill={`url(#boltGradient-${variant})`}
      />

      {/* Subtle Energy Spark Accent */}
      <circle cx="87.5" cy="6" r="1.5" fill="#F2D675" />

      {/* ENTERPRISES subtext in lighter weight modern typography */}
      <text
        x="4.5"
        y="40"
        fill={subtextColor}
        fontFamily="var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.45em"
      >
        ENTERPRISES
      </text>
    </svg>
  );
}
