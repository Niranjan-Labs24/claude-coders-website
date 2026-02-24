'use client';

import { usePathname } from 'next/navigation';
import type { FC } from 'react';

const GlobalDotAccent: FC = () => {
  const pathname = usePathname();
  
  // Show on main listings, but hide on detail pages and pricing
  if (
    pathname === '/pricing' || 
    pathname.startsWith('/blogs/')
  ) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[800px] max-w-7xl"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at center 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center 30%, black, transparent 80%)',
        }}
      />
    </div>
  );
};

export default GlobalDotAccent;
