'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When route changes, briefly show the bar then hide
    setLoading(true);
    setProgress(30);

    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => setProgress(100), 300);
    const t3 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#FF7A59] transition-all duration-300 ease-out rounded-r-full shadow-[0_0_8px_rgba(255,122,89,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
