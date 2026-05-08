"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressRef.current.style.width = `${Math.min(pct, 100)}%`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/for-vendors', label: 'For Venues & Planners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[450ms] ease border-b border-transparent ${scrolled ? 'bg-[rgba(251,248,242,0.78)] backdrop-blur-[14px] backdrop-saturate-[140%] border-line-soft py-[14px]' : 'py-[22px]'}`}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          <Logo size="md" variant="dark" />
          <nav className="hidden lg:flex gap-9">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`font-sans text-[13px] tracking-[0.06em] no-underline relative py-1.5 transition-all duration-[250ms] after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-accent-gold after:origin-left after:transition-transform after:duration-[450ms] ${active ? 'opacity-100 after:scale-x-100' : 'opacity-[0.82] hover:opacity-100 after:scale-x-0 hover:after:scale-x-100'}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3.5">
            <div className="hidden lg:block">
              <Button href="/contact" withArrow>Request a Quote</Button>
            </div>
            <button className="lg:hidden w-10 h-10 flex items-center justify-center border border-line rounded-full transition-colors hover:bg-cream" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <Menu className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>
        <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-paper z-[60] flex flex-col py-7 px-5 sm:px-8 transition-opacity duration-[350ms] ease ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center">
          <Logo size="md" variant="dark" onClick={() => setMobileOpen(false)} />
          <button className="w-10 h-10 flex items-center justify-center border border-line rounded-full" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X className="w-3.5 h-3.5" strokeWidth={1.6} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center gap-[18px] font-serif text-[42px] leading-[1.1]">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-charcoal transition-colors duration-300 hover:text-accent-gold" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="pt-6 border-t border-line-soft flex justify-between items-center text-xs text-subtle">
          <span>hello@aisleand.co</span>
          <Button href="/contact" className="!px-5 !py-3 !text-xs">Request a Quote</Button>
        </div>
      </div>
    </>
  );
}
