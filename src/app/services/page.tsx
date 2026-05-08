import { Placeholder } from '@/components/ui/Placeholder';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';

export default function Services() {
  const faqs = [
    { q: 'How far in advance should we book?', a: 'We recommend booking when you book your venue. October Saturdays in St. Augustine sell out 6+ months ahead.' },
    { q: 'Are you insured?', a: 'Yes — $1M general liability with a pet-care rider. We name your venue as additional insured on the COI.' },
    { q: 'What’s your cancellation policy?', a: 'More than 60 days out we keep 25%; 30–60 days, 50%; under 30 days, 100%. Hurricane / venue closure equals a date-transfer credit.' },
    { q: 'Do you provide everything?', a: 'Yes — activity kits, supplies, water, treats, even a portable nap zone if needed. You don’t bring a thing.' },
    { q: 'Where do you serve?', a: 'All of Northeast Florida: Jacksonville, St. Augustine, Ponte Vedra, Amelia Island, Palm Coast, Daytona Beach. Travel beyond 25 miles from venue is $1.50/mile.' }
  ];

  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="pt-[160px] pb-16">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">N° 002 — Services</Reveal>
          <Reveal className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-end">
            <h1 className="font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] max-w-[14ch] font-light text-charcoal m-0">Three services. <em className="italic text-accent-gold">One team.</em></h1>
            <p className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-[#3a3a3a] font-light max-w-[48ch]">Built deliberately for the rhythm of a wedding day — drop-off through last dance, pickup through pillow.</p>
          </Reveal>
        </div>
      </section>

      <section className="pt-6 pb-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          {/* AISLE SITTERS */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-20 items-center py-15">
            <Placeholder text="Placeholder · Kids' room at venue" className="aspect-[4/5] rounded-md w-full" />
            <div className="order-first md:order-last">
              <div className="flex items-center gap-3.5 text-accent-gold font-serif italic text-lg mb-4 before:content-[''] before:w-9 before:h-px before:bg-accent-gold">Service One</div>
              <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] text-charcoal mb-6 font-light">Aisle Sitters.</h2>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.7] mb-9 max-w-[54ch]">A dedicated kids' room (or zone) at the venue, staffed by Aisle &amp; Co. sitters from cocktail hour through reception end. Parents drop off, sitters take over, parents enjoy the reception.</p>
              
              <h4 className="text-[13px] tracking-[0.18em] uppercase text-brand-blue font-sans font-semibold mb-[18px]">What's included</h4>
              <ul className="list-none p-0 m-0 mb-9 grid gap-3.5">
                {[
                  "Dedicated lead sitter as parent point of contact",
                  "Branded activity kit per child",
                  "Movie / iPad station and quiet wind-down zone",
                  "Parent text check-ins every 60–90 minutes",
                  "Coordination with catering for kids' meals"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3.5 text-[15px] text-[#3a3a3a] leading-[1.55] before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent-gold before:rounded-full before:mt-[9px] before:shrink-0">{item}</li>
                ))}
              </ul>

              <h4 className="text-[13px] tracking-[0.18em] uppercase text-brand-blue font-sans font-semibold mb-[18px]">Sitter ratios</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-9">
                <div className="p-[18px] border border-line-soft rounded-[14px] bg-white">
                  <div className="font-mono text-[11px] text-subtle tracking-[0.1em] mb-1.5">Ages 0–2</div>
                  <div className="font-serif text-[32px] text-brand-blue">1 : 2</div>
                </div>
                <div className="p-[18px] border border-line-soft rounded-[14px] bg-white">
                  <div className="font-mono text-[11px] text-subtle tracking-[0.1em] mb-1.5">Ages 3–6</div>
                  <div className="font-serif text-[32px] text-brand-blue">1 : 4</div>
                </div>
                <div className="p-[18px] border border-line-soft rounded-[14px] bg-white">
                  <div className="font-mono text-[11px] text-subtle tracking-[0.1em] mb-1.5">Ages 7–12</div>
                  <div className="font-serif text-[32px] text-brand-blue">1 : 6</div>
                </div>
              </div>

              <div className="py-5 border-y border-line-soft flex justify-between items-baseline text-sm text-subtle mb-9">
                <span>Starts at <strong className="font-serif font-medium text-charcoal text-[20px]">$390</strong> · 4-hr min, 1 sitter</span>
                <span>Typical 8-kid event $800–1,000</span>
              </div>
              <Button href="/contact" variant="outline-dark" withArrow>Inquire about Aisle Sitters</Button>
            </div>
          </Reveal>

          {/* PET OF HONOR */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-10 md:gap-20 items-center py-[60px]">
            <div>
              <div className="flex items-center gap-3.5 text-accent-gold font-serif italic text-lg mb-4 before:content-[''] before:w-9 before:h-px before:bg-accent-gold">Service Two</div>
              <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] text-charcoal mb-6 font-light">Pet of Honor.</h2>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.7] mb-9 max-w-[54ch]">A dedicated, insured handler picks up your pet, brings them for ceremony and photos, and returns them home before the reception starts. Hands-free, stress-free.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-9">
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Standard</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$475</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Pickup, ceremony attendance, photos, return home, supplies.</p>
                </div>
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Premium</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$695</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Standard + reception cameo, grooming touchup, custom collar/leash.</p>
                </div>
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Weekend</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$1,275</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Friday rehearsal + Saturday ceremony/photos + Friday &amp; Saturday overnight pet sitting.</p>
                </div>
              </div>
              <Button href="/contact" variant="outline-dark" withArrow>Inquire about Pet of Honor</Button>
            </div>
            <Placeholder text="Placeholder · Well-dressed dog, ceremony" className="aspect-[4/5] rounded-md w-full" />
          </Reveal>

          {/* WEEKEND CARE */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-20 items-center py-[60px]">
            <Placeholder text="Placeholder · Coastal venue, late afternoon" isBlue className="aspect-[4/5] rounded-md w-full" />
            <div className="order-first md:order-last">
              <div className="flex items-center gap-3.5 text-accent-gold font-serif italic text-lg mb-4 before:content-[''] before:w-9 before:h-px before:bg-accent-gold">Service Three</div>
              <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] text-charcoal mb-6 font-light">Wedding Weekend Care.</h2>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.7] mb-9 max-w-[54ch]">For destination couples whose families fly in Thursday and stay through Sunday brunch. One contract, one team, one point of contact.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-9">
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Starter</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$1,500–2,000</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Rehearsal dinner sitting + 6-hour wedding-day childcare.</p>
                </div>
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Signature</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$2,000–2,800</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Starter + Pet of Honor Standard + Sunday brunch sitting.</p>
                </div>
                <div className="p-6 bg-white border border-line-soft rounded-[18px] transition-all duration-[350ms] hover:shadow-md hover:-translate-y-[2px]">
                  <div className="font-serif text-[22px] mb-1.5">Concierge</div>
                  <div className="font-mono text-xs text-accent-gold tracking-[0.1em] mb-[14px]">$2,800–3,500+</div>
                  <p className="text-[13px] text-subtle leading-[1.55]">Signature + Premium Pet + extended hours + dedicated coordinator.</p>
                </div>
              </div>
              <Button href="/contact" variant="outline-dark" withArrow>Inquire about Weekend Care</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — Frequently asked</span>
            <span>Plain answers</span>
          </Reveal>
          <Reveal className="mb-12 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal m-0">Questions, <em className="italic text-accent-gold">answered honestly.</em></h2>
            <p className="text-subtle text-base leading-[1.6] max-w-[48ch]">If you don't see yours here, write us — a real human reads every email and replies within 24 hours.</p>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
