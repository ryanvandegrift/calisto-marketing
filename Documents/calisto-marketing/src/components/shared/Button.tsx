import Link from 'next/link';
import type { ButtonProps } from '@/types';

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  href,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClass = 'cal-btn';
  const variantClass = `cal-btn-${variant}`;
  const sizeClass = size !== 'medium' ? `cal-btn-${size}` : '';
  const classes = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
