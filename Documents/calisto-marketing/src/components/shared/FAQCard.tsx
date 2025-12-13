import type { FAQCardProps } from '@/types';

export default function FAQCard({ icon, question, answer }: FAQCardProps) {
  return (
    <article className="cal-faq-card">
      {icon && (
        <div className="cal-faq-icon">{icon}</div>
      )}
      <h3 className="cal-faq-question">{question}</h3>
      <p className="cal-faq-answer">{answer}</p>
    </article>
  );
}
