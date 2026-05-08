import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Shield, ShieldCheck, Heart, Users } from 'lucide-react';

export default function Home() {
  const cities = [
    ['Jacksonville', 'JAX · 30°N'],
    ['St. Augustine', 'SGJ · Historic'],
    ['Ponte Vedra', 'TPC · Coastal'],
    ['Amelia Island', 'FHB · Barrier'],
    ['Palm Coast', 'PCM · Flagler'],
    ['Daytona Beach', 'DAB · Volusia']
  ];

  const venues = ['Venue No. 1', 'Venue No. 2', 'Venue No. 3', 'Venue No. 4', 'Venue No. 5'];

  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="relative min-h-screen text-white overflow-hidden flex items-end pt-[200px] pb-24 md:pt-[160px]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/wedding-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(22,57,88,0.35)] via-[rgba(22,57,88,0.55)] to-[rgba(15,30,46,0.85)]" />
        </div>
        <div className="absolute top-[104px] md:top-[84px] left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-8 flex justify-between text-[11px] md:text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.78)] z-10">
          <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold mr-2.5 align-middle"></span>Northeast Florida · Est. 2026</span>
          <span className="hidden sm:inline">N° 001 — Home</span>
        </div>
        <Reveal className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="font-sans text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.7)] font-medium mb-7">Wedding-day specialists</div>
          <h1 className="font-serif text-[clamp(38px,5.6vw,76px)] leading-[1.02] max-w-[18ch] font-light text-white mb-0">Wedding-day care for your <em className="italic text-accent-gold-soft font-light">littlest guests</em> — two-legged and four.</h1>
          <p className="mt-7 max-w-[46ch] text-[rgba(255,255,255,0.88)] font-serif font-light text-[clamp(19px,1.6vw,22px)] leading-[1.5]">Trained, insured, wedding-day specialists serving the Northeast Florida wedding corridor — from St. Augustine to Amelia Island.</p>
          <div className="mt-11 flex gap-3.5 flex-wrap">
            <Button href="/contact" withArrow>Request a Quote</Button>
            <Button href="/services" variant="outline">See Services</Button>
          </div>
        </Reveal>
        <div className="absolute bottom-8 right-8 text-[11px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.7)] z-10 flex items-center gap-2.5 after:content-[''] after:w-10 after:h-px after:bg-[rgba(255,255,255,0.5)]">Scroll</div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ 01 — What we do</span>
            <span>Three quiet specialties</span>
          </Reveal>
          <Reveal className="mb-[72px] grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal">The wedding day, <em className="italic text-accent-gold">looked after.</em></h2>
            <p className="font-sans text-subtle text-base leading-[1.6] max-w-[48ch]">A small, deliberate menu of services for couples who hired us because they don't want to think about it. One team. One contract. One person on the radio.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-line-soft">
            <div className="p-9 md:p-12 border-b md:border-b-0 md:border-r border-line-soft transition-colors duration-[400ms] hover:bg-white">
              <div className="font-serif italic text-accent-gold text-lg mb-8 flex justify-between items-center"><span>I</span><span>—</span></div>
              <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] mb-3.5 text-charcoal">Aisle Sitters</h3>
              <p className="font-sans text-subtle text-[15px] leading-[1.65] mb-7">On-site, dedicated kids-room childcare during your ceremony and reception. Drop them off; we handle the rest.</p>
              <Link href="/services" className="text-xs tracking-[0.18em] uppercase text-charcoal border-b border-charcoal pb-1 inline-block transition-all duration-300 hover:text-accent-gold hover:border-accent-gold no-underline">Learn more →</Link>
            </div>
            <div className="p-9 md:p-12 border-b md:border-b-0 md:border-r border-line-soft transition-colors duration-[400ms] hover:bg-white">
              <div className="font-serif italic text-accent-gold text-lg mb-8 flex justify-between items-center"><span>II</span><span>—</span></div>
              <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] mb-3.5 text-charcoal">Pet of Honor</h3>
              <p className="font-sans text-subtle text-[15px] leading-[1.65] mb-7">A handler who picks up your pet, brings them for ceremony and photos, and gets them home safely.</p>
              <Link href="/services" className="text-xs tracking-[0.18em] uppercase text-charcoal border-b border-charcoal pb-1 inline-block transition-all duration-300 hover:text-accent-gold hover:border-accent-gold no-underline">Learn more →</Link>
            </div>
            <div className="p-9 md:p-12 transition-colors duration-[400ms] hover:bg-white">
              <div className="font-serif italic text-accent-gold text-lg mb-8 flex justify-between items-center"><span>III</span><span>—</span></div>
              <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] mb-3.5 text-charcoal">Wedding Weekend Care</h3>
              <p className="font-sans text-subtle text-[15px] leading-[1.65] mb-7">One contract, one team — rehearsal dinner sitting through Sunday brunch.</p>
              <Link href="/services" className="text-xs tracking-[0.18em] uppercase text-charcoal border-b border-charcoal pb-1 inline-block transition-all duration-300 hover:text-accent-gold hover:border-accent-gold no-underline">Learn more →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="pb-[clamp(72px,10vw,140px)] pt-0">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ 02 — Why couples and venues trust us</span>
            <span>Credentials over claims</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 bg-cream rounded-3xl p-1.5">
            <div className="p-7 md:p-9 border-b sm:border-b-0 sm:border-r border-[rgba(34,34,34,0.08)]">
              <div className="w-[38px] h-[38px] border border-brand-blue text-brand-blue rounded-full flex items-center justify-center mb-5.5">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">Insured</h4>
              <p className="font-sans text-sm text-subtle leading-[1.55]">$1M general liability + pet-care rider, COI for every venue.</p>
            </div>
            <div className="p-7 md:p-9 border-b md:border-b-0 md:border-r border-[rgba(34,34,34,0.08)]">
              <div className="w-[38px] h-[38px] border border-brand-blue text-brand-blue rounded-full flex items-center justify-center mb-5.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">Background-checked</h4>
              <p className="font-sans text-sm text-subtle leading-[1.55]">AHCA Level 2 fingerprint screening for every childcare team member.</p>
            </div>
            <div className="p-7 md:p-9 border-b sm:border-b-0 sm:border-r border-[rgba(34,34,34,0.08)]">
              <div className="w-[38px] h-[38px] border border-brand-blue text-brand-blue rounded-full flex items-center justify-center mb-5.5">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">CPR-certified</h4>
              <p className="font-sans text-sm text-subtle leading-[1.55]">Pediatric CPR &amp; First Aid for our childcare leads.</p>
            </div>
            <div className="p-7 md:p-9">
              <div className="w-[38px] h-[38px] border border-brand-blue text-brand-blue rounded-full flex items-center justify-center mb-5.5">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">Wedding-trained</h4>
              <p className="font-sans text-sm text-subtle leading-[1.55]">We work weddings — we run the kids' room, we coordinate with photographers, we don't improvise.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE */}
      <section className="py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ 03 — Where we work</span>
            <span>The Northeast Florida corridor</span>
          </Reveal>
          <Reveal className="mb-[72px] grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal">From <em className="italic text-accent-gold">St. Augustine</em> to <em className="italic text-accent-gold">Amelia Island.</em></h2>
            <p className="font-sans text-subtle text-base leading-[1.6] max-w-[48ch]">Premium venues across the Northeast Florida corridor. Travel beyond 25 miles is billed simply at $1.50/mile.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-line-soft">
            {cities.map(([n, c]) => (
              <div key={n} className="p-8 md:p-10 border-r border-b border-line-soft flex justify-between items-baseline transition-colors duration-[350ms] hover:bg-cream">
                <span className="font-serif text-[30px]">{n}</span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-subtle">{c}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LOGOS */}
      <section className="pb-[clamp(72px,10vw,140px)] pt-0">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ 04 — Trusted by</span>
            <span>Partner roster · 2026</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 border-y border-line-soft">
            {venues.map((v, i) => (
              <div key={i} className={`aspect-[5/3] border-b sm:border-b-0 border-r border-line-soft flex items-center justify-center relative text-subtle font-mono text-[10px] tracking-[0.22em] uppercase ${i === venues.length - 1 ? 'border-r-0 border-b-0' : ''}`}>
                <span className="absolute top-3.5 right-3.5 text-[9px] tracking-[0.2em] text-subtle">Coming soon</span>
                <span className="font-serif text-[22px] text-subtle tracking-normal normal-case italic">{v}</span>
              </div>
            ))}
          </Reveal>
          <p className="font-sans text-center mt-6 text-subtle text-[13px]">We are actively building our preferred-vendor relationships across Northeast Florida.</p>
        </div>
      </section>

      {/* CTA BAND */}
      <Reveal className="bg-cream text-center py-[140px] px-8">
        <span className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase block mb-8">— Let's talk —</span>
        <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] mx-auto font-light text-charcoal mb-9">Let's give your littlest guests their <em className="italic text-brand-blue">best wedding day.</em></h2>
        <Button href="/contact" withArrow>Request a Quote</Button>
      </Reveal>
    </div>
  );
}
