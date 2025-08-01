'use client';

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
const SmoothScrollProvider = ({children}: { children: React.ReactNode}) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      infinite: false,
    });
    
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy()
    }
  }, []);
  return <>{children}</>
}

export default SmoothScrollProvider;