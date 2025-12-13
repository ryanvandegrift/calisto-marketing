import type { CompareCardProps } from '@/types';

export default function CompareCard({ icon, title, text }: CompareCardProps) {
  return (
    <div className="cal-compare-card">
      {icon && (
        <div className="cal-compare-icon">{icon}</div>
      )}
      <h3 className="cal-compare-title">{title}</h3>
      <p className="cal-compare-text">{text}</p>
    </div>
  );
}
