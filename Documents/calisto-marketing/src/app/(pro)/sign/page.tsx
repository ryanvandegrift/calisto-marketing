import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function SignPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/sign-hero.jpg"
        kicker="Calisto One · E-Signature · Powered by CalistoOS"
        title="Calisto Sign: Property-Smart E-Signature for Real Estate & Hospitality"
        subtitle="Calisto Sign is the e-signature layer inside Calisto One. It generates rental agreements, sales contracts, and disclosure packets using property-smart templates, then guides guests, buyers, and owners through signing—with every document tied to the right property and deal."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="E-signature · Property templates · Rental agreements · Sales contracts · Guided signing"
        tagline="Your properties and contacts are in Ops. Your templates and signatures live in Sign. Everything stays connected."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Sign"
            heading="Templates that know your properties"
            description="Sign isn't just another e-signature tool. It's built for property operations. Templates pull data from Ops so rental agreements, sales contracts, and disclosures populate automatically with the right property details, guest names, and deal terms."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sign-feature-templates.jpg"
              imageAlt="Property-smart document templates"
              meta="Templates"
              title="Property-smart templates that auto-populate"
              text="Create rental agreements, sales contracts, disclosure packets, and addenda once. Sign merges property data, guest details, and deal terms automatically from Ops and Deals."
              list={[
                'Templates by property type and market.',
                'Auto-population from Ops property data.',
                'Version control and brand consistency.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sign-feature-guided.jpg"
              imageAlt="Guided signing experience"
              meta="Signing"
              title="Guided signing for guests and buyers"
              text="Sign guides signers through documents in the correct order with clear instructions. Guests sign in Navigator; buyers sign in Purview. No confusion about which version or where to sign."
              list={[
                'Sequential signing for multiple parties.',
                'Mobile-friendly signing interface.',
                'Signature placement and initials guided.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sign-feature-audit.jpg"
              imageAlt="Audit trail and compliance"
              meta="Compliance"
              title="Audit trails and completed packets"
              text="Every signature is logged with timestamp, IP address, and device. Completed documents attach to the property record in Ops and the deal in Deals. Compliance is automatic."
              list={[
                'Legally binding e-signatures with audit certificates.',
                'Completed documents stored per property and deal.',
                'Export for regulators, lenders, and title companies.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How it works"
            heading="Sign connects to Navigator, Purview, Ops, and Deals"
            description="Sign isn't standalone. It's the signature layer that sits across your guest experience (Navigator), client workspace (Purview), and transaction workflows (Deals)."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Sign + Navigator"
              text="Rental agreements for guests are generated when bookings are confirmed. Guests review and sign in Navigator before receiving digital keys."
            />

            <CompareCard
              title="Sign + Purview"
              text="Sales contracts, offers, and disclosures are sent to buyers through Purview. Buyers sign in guided steps with real-time status visible to agents."
            />

            <CompareCard
              title="Sign + Ops"
              text="Completed documents attach to property records in Ops. Teams see signature status and can export packets for owners, regulators, or partners."
            />

            <CompareCard
              title="Sign + Deals"
              text="Offer packets and closing documents are linked to deals. Agents track signature progress as part of the transaction pipeline."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Sign"
            description="Quick answers about templates, legal validity, pricing, and integration with Navigator and Purview."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Are Calisto Sign signatures legally binding?"
              answer="Yes. Sign uses industry-standard e-signature technology with audit trails, timestamps, and certificates. Signatures are legally binding in most jurisdictions for rental agreements and real estate contracts."
            />

            <FAQCard
              question="Can we use our own templates?"
              answer="Yes. Upload your existing templates and we'll convert them to property-smart templates. Or use our template library and customize for your brand and market."
            />

            <FAQCard
              question="Do signers need an account?"
              answer="No. Guests and buyers receive a secure signing link. They sign from any device without creating an account. The signing experience is branded to your company."
            />

            <FAQCard
              question="How does pricing work?"
              answer="Sign is included with Calisto One. High-volume users can add envelope packs. There are no per-signature fees for standard rental and sales contracts."
            />

            <FAQCard
              question="Can we use Sign without Navigator or Purview?"
              answer="Yes. Sign works standalone with Ops. But it's more powerful when guests sign in Navigator and buyers sign in Purview."
            />

            <FAQCard
              question="What document types are supported?"
              answer="Rental agreements, sales contracts, offers, counteroffers, disclosure packets, addenda, leases, and management agreements. Custom document types can be added."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/sign-footer-cta.jpg"
        title="Turn every property into a template. Every signature into a record."
        text="Calisto Sign brings property-smart templates and guided signing into Navigator, Purview, and your transaction workflows."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}