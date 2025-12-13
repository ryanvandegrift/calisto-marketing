// Shared TypeScript types for Calisto Marketing Site

export interface HeroCoverProps {
  backgroundImage: string;
  kicker: string;
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  meta?: string;
  tagline?: string;
  footnote?: string;
}

export interface SectionIntroProps {
  kicker?: string;
  heading: string;
  description: string;
  children?: React.ReactNode;
}

export interface FeatureCardProps {
  image?: string;
  imageAlt?: string;
  meta?: string;
  title: string;
  text: string;
  list?: string[];
  children?: React.ReactNode;
}

export interface CompareCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

export interface FAQCardProps {
  icon?: React.ReactNode;
  question: string;
  answer: string;
}

export interface FooterCTAProps {
  backgroundImage: string;
  title: string;
  text: string;
  ctaText: string;
  ctaHref: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'accent-outline' | 'ghost' | 'muted';
  size?: 'small' | 'medium' | 'large' | 'compact';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CTABoxProps {
  title: string;
  text: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant?: ButtonProps['variant'];
}
