import { Placeholder } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';

export default function About() {
  const team = [
    ['Kyle', 'Founder · Operations', 'Pediatric care, pet care, and large-format events. Reads every contract.'],
    ['Sarah', 'Lead Aisle Sitter', 'NICU nurse by week. Flawlessly negotiates with toddlers.'],
    ['Michael', 'Lead Handler', 'Veterinary tech. Can spot an overstimulated golden retriever from fifty yards.']
  ];

  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="pt-[140px] pb-16 md:pt-[200px] md:pb-[120px] text-center">
        <Reveal className="max-w-[980px] mx-auto px-5 sm:px-8">
          <span className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">N° 003 — About</span>
          <h1 className="mt-6 font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] font-light text-charcoal">Built for the day <em className="italic text-accent-gold">that matters most.</em></h1>
          <p className="font-serif font-light text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-body mt-7 mx-auto max-w-[54ch]">Aisle &amp; Co. exists because everyone at a wedding deserves to actually enjoy it — including the smallest guests.</p>
        </Reveal>
      </section>

      <section className="bg-cream py-[clamp(72px,10vw,140px)] pt-0">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — The story</span>
            <span>How we got here</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-9 md:gap-20 items-start">
            <Placeholder text="Placeholder · Founder portrait" className="aspect-[4/5] rounded-md w-full" />
            <div>
              <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] mb-8 font-light text-charcoal">A wedding planner who used to be a <em className="italic text-brand-blue">hospital nurse.</em></h2>
              <div className="text-[17px] leading-[1.75] text-charcoal space-y-[18px]">
                <p>Aisle &amp; Co. began at the back of a coastal venue, in October, with a six-year-old in a flower crown asking when she could go back to the dance floor. The bride was on the patio. The planner was on a radio. Nobody on payroll was actually <em>watching</em> the kids.</p>
                <p>The founder, Kyle, had spent a decade between pediatric care, in-home pet sitting, and large-format events. He'd seen the gap from every side. Northeast Florida — with its destination weddings, coastal venues, and 18-month booking calendars — had no dedicated, insured, wedding-day-specific care option. Plenty of babysitters. Plenty of dog walkers. Nobody who knew that the photographer needs the dog at 4:42, not 5:00.</p>
                <p>So he built the team he wished he'd had on the radio that night. Background-checked. CPR-certified. Trained on a manual that exists. Insured to the standard a Ritz coordinator will actually accept.</p>
                <p>That's the whole story. We hope to be a small footnote in yours.</p>
              </div>
              <div className="mt-8 font-serif italic text-2xl text-brand-blue">— Kyle, Founder</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — What we believe</span>
            <span>Three principles</span>
          </Reveal>
          <Reveal className="mb-20 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal">What we <em className="italic text-accent-gold">actually believe.</em></h2>
            <p className="text-subtle text-base leading-[1.6] max-w-[48ch]">Three things we won't compromise on, written plainly.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-12">
            <div>
              <div className="font-serif italic text-accent-gold text-[42px] leading-none mb-6">i.</div>
              <h3 className="font-serif text-[26px] mb-3.5 leading-[1.2] max-w-[18ch] text-charcoal">Care is a credential, not a vibe.</h3>
              <p className="text-subtle text-[15px] leading-[1.7]">We screen, train, and certify every team member. Background checks, pediatric CPR, and our Aisle &amp; Co. Sitter Manual are non-negotiable.</p>
            </div>
            <div>
              <div className="font-serif italic text-accent-gold text-[42px] leading-none mb-6">ii.</div>
              <h3 className="font-serif text-[26px] mb-3.5 leading-[1.2] max-w-[18ch] text-charcoal">The kids' room is part of the wedding.</h3>
              <p className="text-subtle text-[15px] leading-[1.7]">Not an afterthought. We coordinate with the planner, the photographer, and the catering team so that nothing breaks the flow of the day.</p>
            </div>
            <div>
              <div className="font-serif italic text-accent-gold text-[42px] leading-none mb-6">iii.</div>
              <h3 className="font-serif text-[26px] mb-3.5 leading-[1.2] max-w-[18ch] text-charcoal">Pets are family — and they need a pro.</h3>
              <p className="text-subtle text-[15px] leading-[1.7]">A wedding is overstimulating for any animal. Our handlers know when to push them onto the dance floor for the photo and when to take them home.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(72px,10vw,140px)] pt-0">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase mb-10 md:mb-16">
            <span>§ — The team</span>
            <span>Small, deliberate, growing</span>
          </Reveal>
          <Reveal className="mb-12 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[18px] md:gap-12 items-end">
            <h2 className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.05] max-w-[18ch] font-light text-charcoal">People on the <em className="italic text-accent-gold">radio.</em></h2>
            <p className="text-subtle text-base leading-[1.6] max-w-[48ch]">A small team by design. Every wedding day is led by a senior operator, not a substitute.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(([name, role, desc], i) => (
              <div key={i}>
                <Placeholder text={`Placeholder · ${name}`} className="aspect-[4/5] rounded-md mb-5" />
                <h4 className="font-serif text-2xl mb-1 text-charcoal">{name}</h4>
                <div className="text-[11px] tracking-[0.2em] uppercase text-accent-gold mb-3.5">{role}</div>
                <p className="text-subtle text-sm leading-[1.6]">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
