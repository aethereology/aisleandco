"use client";

import { useEffect, useRef } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: any;
  delay?: number;
  direction?: Direction;
  [key: string]: any;
}

export function Reveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  direction = 'up',
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (delay > 0) {
          const timer = setTimeout(() => el.classList.add('in'), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
        el.classList.add('in');
        observer.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Component
      ref={ref}
      className={`data-rev ${className}`}
      data-direction={direction}
      {...props}
    >
      {children}
    </Component>
  );
}
