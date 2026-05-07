export function Placeholder({ text, isBlue, className = '' }: { text: string; isBlue?: boolean; className?: string }) {
  return (
    <div className={`ph ${isBlue ? 'ph-blue' : ''} ${className}`} aria-hidden="true">
      <span className="tag">{text}</span>
    </div>
  );
}
