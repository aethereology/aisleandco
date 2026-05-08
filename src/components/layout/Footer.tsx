import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-[rgba(255,255,255,0.78)] pt-14 sm:pt-20 pb-8 mt-auto">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-9 lg:gap-12 pb-[60px] border-b border-[rgba(255,255,255,0.12)]">
          <div>
            <div className="mb-5">
              <Logo size="lg" variant="light" withTagline />
            </div>
            <p className="font-sans max-w-[34ch] text-sm leading-[1.65] text-[rgba(255,255,255,0.65)]">
              Wedding-day care for your littlest guests — two-legged and four. Northeast Florida.
            </p>
            <div className="flex gap-[14px] mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-[rgba(255,255,255,0.18)] rounded-full inline-flex items-center justify-center transition-all duration-[350ms] hover:border-accent-gold hover:text-accent-gold hover:-translate-y-[2px] hover:shadow-[0_8px_18px_rgba(201,168,106,0.18)]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 border border-[rgba(255,255,255,0.18)] rounded-full inline-flex items-center justify-center transition-all duration-[350ms] hover:border-accent-gold hover:text-accent-gold hover:-translate-y-[2px] hover:shadow-[0_8px_18px_rgba(201,168,106,0.18)]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="10" x2="8" y2="17"/><circle cx="8" cy="7" r=".8" fill="currentColor"/><path d="M12 17v-4a2 2 0 1 1 4 0v4"/><line x1="12" y1="10" x2="12" y2="17"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.55)] font-medium m-0 mb-[18px] flex items-center gap-2.5 before:content-[''] before:w-3 before:h-px before:bg-accent-gold">Explore</h5>
            <ul className="list-none p-0 m-0 grid gap-2.5 font-sans text-sm">
              <li><Link href="/services" className="transition-colors duration-[250ms] hover:text-accent-gold">Services</Link></li>
              <li><Link href="/about" className="transition-colors duration-[250ms] hover:text-accent-gold">About</Link></li>
              <li><Link href="/for-vendors" className="transition-colors duration-[250ms] hover:text-accent-gold">For Vendors</Link></li>
              <li><Link href="/contact" className="transition-colors duration-[250ms] hover:text-accent-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.55)] font-medium m-0 mb-[18px] flex items-center gap-2.5 before:content-[''] before:w-3 before:h-px before:bg-accent-gold">Service area</h5>
            <ul className="list-none p-0 m-0 grid gap-2.5 font-sans text-sm">
              <li>Jacksonville</li>
              <li>St. Augustine</li>
              <li>Ponte Vedra</li>
              <li>Amelia Island</li>
              <li>Palm Coast · Daytona</li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.55)] font-medium m-0 mb-[18px] flex items-center gap-2.5 before:content-[''] before:w-3 before:h-px before:bg-accent-gold">Get in touch</h5>
            <ul className="list-none p-0 m-0 grid gap-2.5 font-sans text-sm">
              <li><a href="mailto:hello@aisleand.co" className="transition-colors duration-[250ms] hover:text-accent-gold">hello@aisleand.co</a></li>
              <li>Replies within 24 hours</li>
              <li><Link href="/contact" className="transition-colors duration-[250ms] hover:text-accent-gold">Request a quote →</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-7 flex justify-between items-center flex-wrap gap-4 font-sans text-xs text-[rgba(255,255,255,0.5)] tracking-[0.04em]">
          <span>© {new Date().getFullYear()} Aisle &amp; Co.</span>
          <span className="flex gap-6">
            <Link href="#" className="transition-colors duration-[250ms] hover:text-accent-gold">Privacy</Link>
            <Link href="#" className="transition-colors duration-[250ms] hover:text-accent-gold">Terms</Link>
            <Link href="#" className="transition-colors duration-[250ms] hover:text-accent-gold">COI on request</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
