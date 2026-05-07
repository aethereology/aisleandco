"use client";

import { useEffect, useRef } from 'react';

export function Reveal({ children, className = '', as: Component = 'div', ...props }: any) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in');
        observer.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`data-rev ${className}`} {...props}>
      {children}
    </Component>
  );
}
