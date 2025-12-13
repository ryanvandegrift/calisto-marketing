import Image from 'next/image';
import type { FeatureCardProps } from '@/types';

export default function FeatureCard({
  image,
  imageAlt = '',
  meta,
  title,
  text,
  list,
  children,
}: FeatureCardProps) {
  return (
    <article className="cal-feature-card">
      {image && (
        <div className="cal-feature-media">
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={600}
            unoptimized
          />
        </div>
      )}
      <div className="cal-feature-content">
        {meta && <div className="cal-meta cal-mb-2">{meta}</div>}
        <h3 className="cal-feature-title">{title}</h3>
        <p className="cal-feature-text">{text}</p>
        {list && list.length > 0 && (
          <ul className="cal-feature-list">
            {list.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        )}
        {children}
      </div>
    </article>
  );
}
