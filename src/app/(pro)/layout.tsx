import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calisto Pro - Professional Operations Platform',
  description: '10 integrated products for property management, real estate, and hospitality operations.',
};

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Optional: Add Pro-specific navigation header here */}
      {children}
      {/* Optional: Add Pro-specific footer here */}
    </>
  );
}
