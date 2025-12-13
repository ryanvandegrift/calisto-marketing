import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calisto Collection - Luxury Property Operations',
  description: 'Join the Calisto Collection. Hosting, Management, and Boutique programs for luxury properties.',
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Optional: Add Collection-specific navigation header here */}
      {children}
      {/* Optional: Add Collection-specific footer here */}
    </>
  );
}
