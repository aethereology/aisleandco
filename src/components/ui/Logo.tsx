import Link from 'next/link';

type LogoVariant = 'dark' | 'light';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  withTagline?: boolean;
  tagline?: string;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const sizeClasses: Record<LogoSize, string> = {
  sm: 'text-[20px]',
  md: 'text-[26px]',
  lg: 'text-[32px]',
  xl: 'text-[44px]',
};

export function Logo({
  variant = 'dark',
  size = 'md',
  withTagline = false,
  tagline = 'Wedding Atelier',
  asLink = true,
  href = '/',
  onClick,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-charcoal';
  const subtleColor = isLight ? 'text-[rgba(255,255,255,0.6)]' : 'text-subtle';
  const ruleColor = isLight ? 'bg-accent-gold-soft' : 'bg-accent-gold';

  const wordmark = (
    <span className={`inline-flex items-baseline ${sizeClasses[size]} ${textColor} font-serif font-light tracking-[0.015em] leading-none`}>
      <span>Aisle</span>
      <span
        aria-hidden="true"
        className="italic font-normal text-accent-gold mx-[0.18em] text-[1.06em] transition-colors duration-[350ms]"
      >
        &amp;
      </span>
      <span>Co.</span>
    </span>
  );

  const lockup = (
    <span className={`inline-flex flex-col items-start gap-[10px] ${className}`}>
      {wordmark}
      {withTagline && (
        <span className="inline-flex items-center gap-2.5 pl-[2px]">
          <span className={`block w-[20px] h-px ${ruleColor}`} aria-hidden="true" />
          <span className={`font-sans text-[10px] tracking-[0.32em] uppercase font-medium ${subtleColor}`}>
            {tagline}
          </span>
        </span>
      )}
    </span>
  );

  if (!asLink) return lockup;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Aisle & Co. — home"
      className="no-underline inline-block group"
    >
      {lockup}
    </Link>
  );
}
