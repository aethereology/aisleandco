import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export default function ForVendors() {
  const venues = ['Treasury Group', 'Omni Amelia Island', 'Ritz-Carlton Amelia', 'Sawgrass Marriott', 'Hammock Beach', 'Epping Forest'];

  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="pt-[160px] pb-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">N° 004 — For Venues & Planners</Reveal>
          <Reveal className="mt-6 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-16 items-end">
            <h1 className="font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] max-w-[18ch] font-light text-charcoal">Make your couples' day easier. <em className="italic text-accent-gold">Get on the right side of the kids' room conversation.</em></h1>
            <p className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-[#3a3a3a] font-light max-w-[46ch]">Aisle & Co. is the wedding-day care partner for premium venues and planners across Northeast Florida.</p>
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
            <div className="p-10 md:p-12 border-r border-b border-line-soft">
              <div className="font-mono text-accent-gold text-[11px] tracking-[0.18em] mb-5.5">/01</div>
              <h3 className="font-serif text-[26px] mb-3 max-w-[18ch] text-charcoal">Insured to your standard.</h3>
              <p className="text-subtle text-[15px] leading-[1.65] max-w-[46ch]">$1M GL, pet rider, COI naming your venue as additional insured.</p>
            </div>
            <div className="p-10 md:p-12 border-r border-b border-line-soft">
              <div className="font-mono text-accent-gold text-[11px] tracking-[0.18em] mb-5.5">/02</div>
              <h3 className="font-serif text-[26px] mb-3 max-w-[18ch] text-charcoal">Single point of contact.</h3>
              <p className="text-subtle text-[15px] leading-[1.65] max-w-[46ch]">One operator for kids and pets. No chasing multiple vendors the week of.</p>
            </div>
            <div className="p-10 md:p-12 border-r border-b border-line-soft">
              <div className="font-mono text-accent-gold text-[11px] tracking-[0.18em] mb-5.5">/03</div>
              <h3 className="font-serif text-[26px] mb-3 max-w-[18ch] text-charcoal">Coordinated with your timeline.</h3>
              <p className="text-subtle text-[15px] leading-[1.65] max-w-[46ch]">Pre-event call, T-3 brief, on-site 60 minutes before guests arrive.</p>
            </div>
            <div className="p-10 md:p-12 border-r border-b border-line-soft">
              <div className="font-mono text-accent-gold text-[11px] tracking-[0.18em] mb-5.5">/04</div>
              <h3 className="font-serif text-[26px] mb-3 max-w-[18ch] text-charcoal">Branded for your couple.</h3>
              <p className="text-subtle text-[15px] leading-[1.65] max-w-[46ch]">Optional co-branded "Family-Friendly Wedding" insert for your welcome packet.</p>
            </div>
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

      <section className="pb-[clamp(72px,10vw,140px)] pt-0">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — Currently pursuing partnerships with</span>
            <span>Northeast Florida · 2026</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-line-soft">
            {venues.map((v, i) => (
              <div key={i} className="py-9 px-7 border-r border-b border-line-soft font-serif text-[24px] text-charcoal text-center flex items-center justify-center min-h-[120px] tracking-[0.01em]">
                {v}
              </div>
            ))}
          </Reveal>
          <p className="text-center mt-8 text-subtle text-sm max-w-[60ch] mx-auto">We are actively building our preferred-vendor relationships across Northeast Florida — let's talk.</p>
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
            <form className="grid gap-5.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                <div className="grid gap-2"><label className="text-[11px] tracking-[0.18em] uppercase text-subtle font-medium">Name</label><input type="text" required className="font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all" /></div>
                <div className="grid gap-2"><label className="text-[11px] tracking-[0.18em] uppercase text-subtle font-medium">Email</label><input type="email" required className="font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all" /></div>
              </div>
              <div className="grid gap-2"><label className="text-[11px] tracking-[0.18em] uppercase text-subtle font-medium">Venue / Firm name</label><input type="text" required className="font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all" /></div>
              <div className="grid gap-2"><label className="text-[11px] tracking-[0.18em] uppercase text-subtle font-medium">Role</label>
                <select className="font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all">
                  <option>Planner</option>
                  <option>Venue Coordinator</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid gap-2"><label className="text-[11px] tracking-[0.18em] uppercase text-subtle font-medium">Message (optional)</label><textarea placeholder="Anything we should know about your couples or calendar." className="font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full min-h-[120px] resize-y outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all"></textarea></div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <Button type="button" withArrow>Send me the packet</Button>
                <span className="text-subtle text-[13px]">We reply within 24 hours.</span>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
