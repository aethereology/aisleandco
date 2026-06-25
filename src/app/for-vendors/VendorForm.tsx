"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const inputClass =
  "font-inherit text-[15px] px-4 py-3.5 border border-line rounded-[10px] bg-white text-charcoal w-full outline-none focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(31,78,121,0.1)] transition-all";
const labelClass = "text-[11px] tracking-[0.18em] uppercase text-subtle font-medium";

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function VendorForm() {
  const [form, setForm] = useState({
    name: '', email: '', venueFirm: '', role: 'Planner', message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ type: 'vendor', ...form }),
      });
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        const fe: Record<string, string[] | undefined> = data?.issues?.fieldErrors ?? {};
        const firstMsg = fe.email?.[0] || fe.name?.[0] || fe.venueFirm?.[0] || Object.values(fe)[0]?.[0];
        setStatus('error');
        setErrorMsg(firstMsg ? `${firstMsg}.` : 'Please double-check your entries and try again.');
        return;
      }
      if (!res.ok) throw new Error('send_failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('We couldn’t send your request. Please email us directly at hello@aisleand.co.');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-line-soft rounded-[18px] p-8 sm:p-12 bg-white/70">
        <span className="font-mono text-[11px] tracking-[0.22em] text-accent-gold uppercase">Request received</span>
        <h3 className="mt-4 font-serif text-[clamp(26px,3.4vw,40px)] leading-[1.1] font-light text-charcoal">Your packet is on the <em className="italic text-brand-blue">way.</em></h3>
        <p className="mt-5 text-body text-[16px] leading-[1.7] max-w-[52ch]">We’ve sent a confirmation to <strong className="text-charcoal">{form.email || 'your inbox'}</strong>, and a real person will follow up within 24 hours with pricing, a sample COI, and the planner referral terms.</p>
      </div>
    );
  }

  return (
    <form className="grid gap-5.5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        <div className="grid gap-2"><label className={labelClass}>Name</label><input type="text" required value={form.name} onChange={set('name')} className={inputClass} /></div>
        <div className="grid gap-2"><label className={labelClass}>Email</label><input type="email" required value={form.email} onChange={set('email')} className={inputClass} /></div>
      </div>
      <div className="grid gap-2"><label className={labelClass}>Venue / Firm name</label><input type="text" required value={form.venueFirm} onChange={set('venueFirm')} className={inputClass} /></div>
      <div className="grid gap-2"><label className={labelClass}>Role</label>
        <select value={form.role} onChange={set('role')} className={inputClass}>
          <option>Planner</option>
          <option>Venue Coordinator</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid gap-2"><label className={labelClass}>Message (optional)</label><textarea placeholder="Anything we should know about your couples or calendar." value={form.message} onChange={set('message')} className={`${inputClass} min-h-[120px] resize-y`}></textarea></div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-[#9b2c2c] bg-[#fbeaea] border border-[#f0caca] rounded-[10px] px-4 py-3">{errorMsg}</p>
      )}

      <div className="flex items-center gap-4 mt-2 flex-wrap">
        <Button type="submit" withArrow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send me the packet'}
        </Button>
        <span className="text-subtle text-[13px]">We reply within 24 hours.</span>
      </div>
    </form>
  );
}
