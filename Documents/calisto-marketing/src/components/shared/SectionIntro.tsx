import type { SectionIntroProps } from '@/types';

export default function SectionIntro({
  kicker,
  heading,
  description,
  children,
}: SectionIntroProps) {
  return (
    <div className="cal-section-intro">
      {kicker && (
        <div className="cal-section-kicker">{kicker}</div>
      )}
      <h2 className="cal-section-heading">{heading}</h2>
      <p className="cal-section-description">{description}</p>
      {children && (
        <div className="cal-mt-5">{children}</div>
      )}
    </div>
  );
}
