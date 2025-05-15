'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const useScrollToSection= (sectionId: string)=> {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = () => {
    if (pathname !== '/') {
      // If not on home page, navigate with hash
      router.push(`/#${sectionId}`);
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (window.location.hash === `#${sectionId}`) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [sectionId]);

  return scrollToSection;
}

export default useScrollToSection;