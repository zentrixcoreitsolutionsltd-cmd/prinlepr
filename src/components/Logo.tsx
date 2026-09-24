import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto'; // 'light' = for dark/navy backgrounds, 'dark' = for light/white backgrounds
  layout?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  layout = 'horizontal',
  size = 'md',
}) => {
  const isLight = theme === 'light'; // true on dark backgrounds like footer

  // Size styling
  const emblemSize =
    size === 'sm'
      ? 'w-7 h-7 text-xs'
      : size === 'lg'
      ? 'w-11 h-11 text-lg'
      : size === 'xl'
      ? 'w-14 h-14 text-2xl'
      : 'w-9 h-9 text-sm';

  const brandTitleSize =
    size === 'sm'
      ? 'text-[11px]'
      : size === 'lg'
      ? 'text-base'
      : size === 'xl'
      ? 'text-lg'
      : 'text-[13px]';

  const brandSubSize =
    size === 'sm'
      ? 'text-[8px]'
      : size === 'lg'
      ? 'text-[10px]'
      : size === 'xl'
      ? 'text-xs'
      : 'text-[9px]';

  const titleColor = isLight ? 'text-white' : 'text-[#0d2137]';
  const subColor = isLight ? 'text-[#d89e28]' : 'text-[#d89e28]';

  if (layout === 'stacked') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-2 select-none ${className}`}
        role="img"
        aria-label="Prinle PR Solutions Ltd"
      >
        <div className={`flex items-center justify-center font-black tracking-tighter bg-[#0d2137] text-white border-2 border-[#d89e28] shadow-xs ${emblemSize}`}>
          <span className="text-[#d89e28]">P</span>
          <span className="text-white">R</span>
        </div>
        <div className="mt-2 flex flex-col items-center text-center leading-tight">
          <span className={`font-black tracking-wider uppercase ${brandTitleSize} ${titleColor}`}>
            PRINLE PR
          </span>
          <span className={`font-bold tracking-widest uppercase mt-0.5 ${brandSubSize} ${subColor}`}>
            SOLUTIONS LTD
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      role="img"
      aria-label="Prinle PR Solutions Ltd"
    >
      <div className={`flex items-center justify-center font-black tracking-tight shrink-0 bg-[#0d2137] text-white border-2 border-[#d89e28] shadow-xs ${emblemSize}`}>
        <span className="text-[#d89e28]">P</span>
        <span className="text-white">R</span>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-black tracking-[0.08em] uppercase ${brandTitleSize} ${titleColor}`}>
          PRINLE PR SOLUTIONS
        </span>
        <span className={`font-bold tracking-[0.22em] uppercase mt-1 ${brandSubSize} ${subColor}`}>
          STRATEGIC COMMUNICATIONS &bull; LTD
        </span>
      </div>
    </div>
  );
};
