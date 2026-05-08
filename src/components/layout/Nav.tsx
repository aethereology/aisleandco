"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
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
          <Link href="/" className="font-serif text-[26px] tracking-[0.02em] font-medium inline-flex items-center gap-2.5 no-underline text-inherit">
            <span>Aisle</span><span className="italic text-accent-gold font-normal">&amp;</span><span>Co.</span>
          </Link>
          <nav className="hidden lg:flex gap-9">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`font-sans text-[13px] tracking-[0.06em] no-underline relative py-1.5 transition-opacity duration-[250ms] ${active ? 'opacity-100 after:content-[""] after:absolute after:left-1/2 after:-bottom-0.5 after:w-1 after:h-1 after:bg-accent-gold after:rounded-full after:-translate-x-1/2' : 'opacity-[0.82] hover:opacity-100'}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3.5">
            <div className="hidden lg:block">
              <Button href="/contact" withArrow>Request a Quote</Button>
            </div>
            <button className="lg:hidden w-10 h-10 flex items-center justify-center border border-line rounded-full" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <Menu className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-paper z-[60] flex flex-col py-7 px-5 sm:px-8 transition-opacity duration-[350ms] ease ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif text-[26px] tracking-[0.02em] font-medium inline-flex items-center gap-2.5 no-underline text-inherit" onClick={() => setMobileOpen(false)}>
            <span>Aisle</span><span className="italic text-accent-gold font-normal">&amp;</span><span>Co.</span>
          </Link>
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
