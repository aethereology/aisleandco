"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const inputClass =
  "font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all";
const labelClass = "text-[11px] tracking-[0.18em] uppercase text-subtle font-medium";

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', weddingDate: '', venue: '',
    children: '', pets: '', message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const services = ['Aisle Sitters', 'Pet of Honor', 'Wedding Weekend Care', 'Not sure yet'];

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleService = (s: string) => {
    setSelectedServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ type: 'couple', ...form, services: selectedServices }),
      });
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        const fe: Record<string, string[] | undefined> = data?.issues?.fieldErrors ?? {};
        const firstMsg = fe.email?.[0] || fe.name?.[0] || Object.values(fe)[0]?.[0];
        setStatus('error');
        setErrorMsg(firstMsg ? `${firstMsg}.` : 'Please double-check your entries and try again.');
        return;
      }
      if (!res.ok) throw new Error('send_failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('We couldn’t send your inquiry. Please email us directly at hello@aisleand.co.');
    }
  };

  return (
    <div className="animate-[fade_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
      <section className="pt-[160px] pb-16">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <Reveal className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">N° 005 — Contact</Reveal>
          <Reveal className="mt-6 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-16 items-end">
            <h1 className="font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] max-w-[14ch] font-light text-charcoal">Tell us about your <em className="italic text-accent-gold">wedding day.</em></h1>
            <p className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.45] text-body font-light max-w-[46ch]">We respond to every inquiry within 24 hours — direct human responses.</p>
          </Reveal>
        </div>
      </section>

      <section className="pt-6 pb-[clamp(72px,10vw,140px)]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20">
            <Reveal>
              {status === 'success' ? (
                <div className="border border-line-soft rounded-[18px] p-8 sm:p-12 bg-cream/60">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent-gold uppercase">Inquiry received</span>
                  <h2 className="mt-4 font-serif text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-light text-charcoal">Thank you — we’ve <em className="italic text-brand-blue">got it.</em></h2>
                  <p className="mt-5 text-body text-[16px] leading-[1.7] max-w-[52ch]">A real person on our team will reply within 24 hours, usually sooner. We’ve also sent a confirmation to <strong className="text-charcoal">{form.email || 'your inbox'}</strong>. Talk soon.</p>
                  <p className="mt-6 font-serif italic text-xl text-brand-blue">— Maureen Ella, Founder</p>
                </div>
              ) : (
                <form className="grid gap-[22px]" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                    <div className="grid gap-2"><label className={labelClass}>Your name</label><input type="text" required value={form.name} onChange={set('name')} className={inputClass} /></div>
                    <div className="grid gap-2"><label className={labelClass}>Email</label><input type="email" required value={form.email} onChange={set('email')} className={inputClass} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                    <div className="grid gap-2"><label className={labelClass}>Phone (optional)</label><input type="tel" value={form.phone} onChange={set('phone')} className={inputClass} /></div>
                    <div className="grid gap-2"><label className={labelClass}>Wedding date</label><input type="date" value={form.weddingDate} onChange={set('weddingDate')} className={inputClass} /></div>
                  </div>
                  <div className="grid gap-2"><label className={labelClass}>Venue</label><input type="text" placeholder="e.g. The Treasury, St. Augustine" value={form.venue} onChange={set('venue')} className={inputClass} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                    <div className="grid gap-2"><label className={labelClass}>Number of children (optional)</label><input type="number" min="0" value={form.children} onChange={set('children')} className={inputClass} /></div>
                    <div className="grid gap-2"><label className={labelClass}>Number of pets (optional)</label><input type="number" min="0" value={form.pets} onChange={set('pets')} className={inputClass} /></div>
                  </div>
                  <div className="grid gap-2">
                    <label className={labelClass}>Services interested in</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((s) => {
                        const checked = selectedServices.includes(s);
                        return (
                          <label key={s} className={`relative flex items-center gap-3.5 px-5 py-[18px] border rounded-xl cursor-pointer text-sm tracking-[0.01em] transition-all duration-300 min-h-[60px] select-none ${checked ? 'border-brand-blue bg-[rgba(31,78,121,0.035)]' : 'border-line bg-white hover:border-brand-blue hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(20,30,50,0.05)]'}`}>
                            <input type="checkbox" className="absolute opacity-0 pointer-events-none" checked={checked} onChange={() => toggleService(s)} />
                            <span className={`w-[18px] h-[18px] rounded-[5px] border-[1.5px] inline-flex items-center justify-center shrink-0 transition-all duration-[250ms] ${checked ? 'bg-brand-blue border-brand-blue' : 'bg-white border-line'}`}>
                              <svg className={`w-2.5 h-2.5 transition-all duration-[250ms] text-white ${checked ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.6]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="5 12 10 17 19 8" /></svg>
                            </span>
                            <span className="flex-1 leading-[1.3] text-body">{s}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid gap-2"><label className={labelClass}>Tell us about your day</label><textarea placeholder="Date, venue, headcount, anything we should know." value={form.message} onChange={set('message')} className={`${inputClass} min-h-[120px] resize-y`}></textarea></div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-[#9b2c2c] bg-[#fbeaea] border border-[#f0caca] rounded-[10px] px-4 py-3">{errorMsg}</p>
                  )}

                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <Button type="submit" withArrow disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                    </Button>
                    <span className="text-subtle text-[13px]">We reply within 24 hours.</span>
                  </div>
                </form>
              )}
            </Reveal>

            <Reveal as="aside" className="p-6 sm:p-9 bg-cream rounded-[18px] flex flex-col gap-7 self-start">
              <div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-subtle font-medium mb-2">Email</h4>
                <a href="mailto:hello@aisleand.co" className="font-serif text-[28px] text-brand-blue no-underline tracking-[0.005em] transition-colors hover:text-accent-gold">hello@aisleand.co</a>
              </div>
              <div className="h-px bg-line-soft w-full"></div>
              <div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-subtle font-medium mb-2">Response time</h4>
                <p className="text-sm text-body leading-[1.6]">Within 24 hours, often sooner. We are a small team — direct human responses.</p>
              </div>
              <div className="h-px bg-line-soft w-full"></div>
              <div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-subtle font-medium mb-2">Service area</h4>
                <ul className="list-none p-0 m-0 grid gap-1.5 text-sm text-body">
                  <li>Jacksonville</li>
                  <li>St. Augustine</li>
                  <li>Ponte Vedra</li>
                  <li>Amelia Island</li>
                  <li>Palm Coast</li>
                  <li>Daytona Beach</li>
                </ul>
              </div>
              <div className="h-px bg-line-soft w-full"></div>
              <div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-subtle font-medium mb-2">For venues &amp; planners</h4>
                <p className="text-sm text-body leading-[1.6]">Looking for a vendor packet or to be added to our preferred-partner roster? <Link href="/for-vendors" className="text-brand-blue underline hover:text-accent-gold transition-colors">Visit the partners page →</Link></p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
