export function Accordion({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="max-w-[840px] mx-auto border-t border-line">
      {items.map((item, i) => (
        <details key={i} className="group border-b border-line py-6 cursor-pointer">
          <summary className="flex justify-between items-center list-none font-serif text-2xl text-charcoal gap-6 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="w-8 h-8 border border-line rounded-full inline-flex items-center justify-center shrink-0 transition-all duration-350 text-lg text-subtle group-open:rotate-45 group-open:bg-brand-blue group-open:text-white group-open:border-brand-blue">
              +
            </span>
          </summary>
          <p className="pt-[18px] pb-1 text-subtle text-base max-w-[60ch] leading-[1.7]">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
