import type { HeroCoverProps } from "@/types";
import Button from "./Button";

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
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="cal-hero-cover-inner">
        {kicker && <div className="cal-hero-cover-kicker">{kicker}</div>}

        <h1 className="cal-hero-cover-title">{title}</h1>

        {/* Calm line-length (matches the “premium” feel) */}
        {subtitle && (
          <p className="cal-hero-cover-subtitle" style={{ maxWidth: 720 }}>
            {subtitle}
          </p>
        )}

        {footnote && (
          <p className="cal-hero-cover-footnote" style={{ maxWidth: 720 }}>
            {footnote}
          </p>
        )}

        <div className="cal-hero-cta-row">
          {/* Hero CTA should be the site “primary/secondary” system */}
          <Button variant="primary" size="large" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>

          {secondaryCTA && (
            <Button variant="secondary" size="large" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>

        {meta && <p className="cal-hero-cover-meta">{meta}</p>}

        {tagline && (
          <p className="cal-hero-cover-tagline" style={{ maxWidth: 820 }}>
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}
