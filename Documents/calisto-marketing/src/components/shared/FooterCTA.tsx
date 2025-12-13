import type { FooterCTAProps } from '@/types';
import Button from './Button';

export default function FooterCTA({
  backgroundImage,
  title,
  text,
  ctaText,
  ctaHref,
}: FooterCTAProps) {
  return (
    <section 
      className="cal-footer-cta"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="cal-footer-content">
        <h2 className="cal-footer-title">{title}</h2>
        <p className="cal-footer-text">{text}</p>
        <Button variant="accent" size="large" href={ctaHref}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
