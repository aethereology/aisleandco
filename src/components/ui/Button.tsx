import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline' | 'outline-dark' | 'ghost';
  withArrow?: boolean;
}

export function Button({ href, variant = 'primary', withArrow, className = '', children, ...props }: ButtonProps) {
  const baseClass = "btn-shine font-sans inline-flex items-center gap-2.5 px-7 py-[15px] rounded-full text-sm tracking-[0.04em] font-medium transition-all duration-350 ease-[cubic-bezier(0.2,0.7,0.2,1)] border border-transparent leading-none cursor-pointer group";
  
  const variants = {
    primary: "bg-accent-gold text-charcoal hover:bg-accent-gold-dark hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(201,168,106,0.32)]",
    outline: "border-[rgba(255,255,255,0.7)] text-white bg-transparent hover:bg-white hover:text-brand-blue",
    'outline-dark': "border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white",
    ghost: "!p-0 !py-2.5 !rounded-none border-b border-charcoal text-charcoal hover:text-accent-gold hover:border-accent-gold"
  };

  const content = (
    <>
      <span className="relative z-[2] inline-flex items-center gap-2.5">
        {children}
        {withArrow && <span className="transition-transform duration-[450ms] ease-out group-hover:translate-x-1.5">→</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
