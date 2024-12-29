import { useState, useEffect } from 'react';

export const useScrollPosition = (effect, deps, ref) => {
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = { x: window.scrollX, y: window.scrollY };
      setScrollPos(newScrollPos);
      effect({ prevPos: scrollPos, currPos: newScrollPos });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos, effect, ...deps]);

  return scrollPos;
};
