import { Reveal } from '@/components/ui/Reveal';
import { VendorForm } from './VendorForm';

export default function ForVendors() {
  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="pt-[160px] pb-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">N° 004 — For Venues & Planners</Reveal>
          <Reveal className="mt-6 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-16 items-end">
            <h1 className="font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] max-w-[18ch] font-light text-charcoal">Make your couples' day easier. <em className="italic text-accent-gold">Get on the right side of the kids' room conversation.</em></h1>
            <p className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-body font-light max-w-[46ch]">Aisle & Co. is the wedding-day care partner for premium venues and planners across Northeast Florida.</p>
          </Reveal>
        </div>
      </section>

      <section className="pt-0 pb-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — Why partner with us</span>
            <span>Four reasons, plainly</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line-soft">
            {[
              ['/01', 'Insured to your standard.', '$1M GL, pet rider, COI naming your venue as additional insured.'],
              ['/02', 'Single point of contact.', 'One operator for kids and pets. No chasing multiple vendors the week of.'],
              ['/03', 'Coordinated with your timeline.', 'Pre-event call, T-3 brief, on-site 60 minutes before guests arrive.'],
              ['/04', 'Branded for your couple.', 'Optional co-branded "Family-Friendly Wedding" insert for your welcome packet.']
            ].map(([num, title, desc]) => (
              <div key={num} className="group relative p-8 md:p-12 border-r border-b border-line-soft transition-colors duration-[400ms] hover:bg-cream/40 overflow-hidden">
                <span className="gold-line top-0" />
                <div className="font-mono text-accent-gold text-[11px] tracking-[0.18em] mb-5.5 transition-all duration-[450ms] group-hover:tracking-[0.24em]">{num}</div>
                <h3 className="font-serif text-[26px] mb-3 max-w-[18ch] text-charcoal transition-colors duration-300 group-hover:text-brand-blue">{title}</h3>
                <p className="font-sans text-subtle text-[15px] leading-[1.65] max-w-[46ch]">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="mb-[72px] grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal">What we <em className="italic text-accent-gold">provide</em> partners.</h2>
            <p className="text-subtle text-base leading-[1.6] max-w-[48ch]">Materials and rituals to make recommending us as easy as forwarding an email.</p>
          </Reveal>
          <Reveal>
            <ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-9">
              {[
                ['Sample COI', 'PDF, ready to attach to your vendor packet'],
                ['Vendor packet PDF', 'Pricing, timeline, and process at a glance'],
                ['Planner referral commission', 'We pay on every booked weekend'],
                ['Quarterly planner brunch', 'Standing invitation. Real coffee, no slide deck.']
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4 text-base items-start py-4 border-b border-line-soft">
                  <span className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="5 12 10 17 19 8"/></svg>
                  </span>
                  <span><strong className="font-medium">{t}.</strong> <span className="text-subtle">{d}.</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <Reveal className="mb-10 text-left">
            <span className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">— Request the packet —</span>
            <h2 className="mt-4 font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] font-light text-charcoal">Request a <em className="italic text-brand-blue">Vendor Packet.</em></h2>
            <p className="mt-4 text-subtle text-base leading-[1.6] max-w-[48ch]">Pricing, sample COI, sample timeline, and the planner referral terms — sent within 24 hours.</p>
          </Reveal>
          <Reveal>
            <VendorForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
