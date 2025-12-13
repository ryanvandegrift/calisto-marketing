import type { HeroCoverProps } from '@/types';
import Button from './Button';

export default function HeroCover({
  backgroundImage,
  kicker,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  meta,
  tagline,
  footnote,
}: HeroCoverProps) {
  return (
    <section 
      className="cal-hero-cover" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="cal-hero-cover-inner">
        <div className="cal-hero-cover-kicker">{kicker}</div>
        <h1 className="cal-hero-cover-title">{title}</h1>
        <p className="cal-hero-cover-subtitle">{subtitle}</p>
        
        {footnote && (
          <p className="cal-hero-cover-footnote">{footnote}</p>
        )}
        
        <div className="cal-hero-cta-row">
          <Button variant="accent" size="large" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>
          {secondaryCTA && (
            <Button variant="accent-outline" size="large" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
        
        {meta && (
          <p className="cal-hero-cover-meta">{meta}</p>
        )}
        
        {tagline && (
          <p className="cal-hero-cover-tagline">{tagline}</p>
        )}
      </div>
    </section>
  );
}
