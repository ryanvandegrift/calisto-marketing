import type { CTABoxProps } from '@/types';
import Button from './Button';

export default function CTABox({
  title,
  text,
  ctaText,
  ctaHref,
  ctaVariant = 'accent-outline',
}: CTABoxProps) {
  return (
    <div className="cal-cta-box">
      <h3 className="cal-cta-title">{title}</h3>
      <p className="cal-cta-text">{text}</p>
      <Button variant={ctaVariant} href={ctaHref}>
        {ctaText}
      </Button>
    </div>
  );
}
