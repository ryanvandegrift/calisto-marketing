import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function HostingPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/hosting-hero.jpg"
        kicker="Calisto Collection · Hosting"
        title="Calisto Hosting: Professionally Managed Vacation Rentals"
        subtitle="Calisto Hosting is our luxury vacation rental service. We operate a curated collection of high-end villas and homes across the Dominican Republic and Spain with professional management, quality standards, and guest experiences powered by Calisto One."
        primaryCTA={{
          text: 'Apply to join Calisto Hosting',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'Browse properties',
          href: 'https://calistoco.com',
        }}
        meta="Luxury vacation rentals · Professional management · Dominican Republic & Spain"
        tagline="We handle everything: marketing, bookings, guest services, housekeeping, maintenance, and 24/7 support. You receive monthly income and full transparency through your owner portal."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="What we do"
            heading="End-to-end management for luxury vacation homes"
            description="Calisto Hosting manages every aspect of your vacation rental. From professional photography and global marketing to guest screening, check-in coordination, housekeeping, and owner reporting—everything runs through Calisto One."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/hosting-marketing.jpg"
              imageAlt="Professional property photography"
              title="Marketing & distribution"
              text="Professional photography, copywriting, and distribution across Airbnb, Booking.com, VRBO, and calistoco.com. Your property reaches qualified guests worldwide."
              list={[
                'Professional photo and video shoots',
                'Listing optimization for search and booking',
                'Multi-channel distribution and rate management',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/hosting-guest-services.jpg"
              imageAlt="Guest check-in experience"
              title="Guest services & experience"
              text="We screen guests, manage check-in, provide concierge services, and handle all guest communication. Guests receive a premium experience through Calisto Navigator."
              list={[
                'Guest screening and verification',
                'Digital check-in and keyless access',
                '24/7 guest support and concierge',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/hosting-operations.jpg"
              imageAlt="Property maintenance and cleaning"
              title="Operations & maintenance"
              text="Professional housekeeping between stays, ongoing maintenance, quality inspections, and emergency response. Your property stays in perfect condition."
              list={[
                'Professional cleaning and turnover',
                'Preventive and reactive maintenance',
                'Regular inspections and condition reports',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Owner experience"
            heading="Complete transparency and control"
            description="As a Calisto Hosting owner, you access your property dashboard through Calisto Navigator. See bookings, revenue, expenses, maintenance requests, and property status in real-time."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Monthly income statements"
              text="Detailed revenue and expense reporting with automatic direct deposits. See every booking, every expense, and your net income clearly."
            />

            <CompareCard
              title="Owner calendar control"
              text="Block dates for personal use, approve or decline bookings, and set minimum rates. You stay in control of your calendar."
            />

            <CompareCard
              title="Property access anytime"
              text="Digital access to your home through Calisto Key. Visit whenever you want with secure, time-bound entry."
            />

            <CompareCard
              title="Quality assurance"
              text="Regular inspections documented through Calisto Assure. You see photo logs and condition reports after every stay."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Join Calisto Hosting"
            heading="Ideal properties for our collection"
            description="We accept a limited number of properties that meet our quality and location standards. Ideal properties are well-maintained, well-located, and owner-committed to guest hospitality."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Property criteria"
              text="We look for properties with strong appeal to luxury travelers: great locations, quality finishes, and amenities that justify premium rates."
              list={[
                'Beachfront, marina, or resort locations',
                '3+ bedrooms with quality furnishings',
                'Pool, outdoor living, and modern amenities',
              ]}
            />

            <FeatureCard
              title="Owner partnership"
              text="The best Calisto Hosting relationships are partnerships. We invest in your property's success with professional management, marketing, and guest experience."
              list={[
                'Transparent revenue share model',
                'Long-term partnership approach',
                'Dedicated property manager',
              ]}
            />

            <FeatureCard
              title="Application process"
              text="Start with a conversation. We'll review your property, discuss revenue potential, and create a custom hosting plan if it's a good fit."
              list={[
                'Initial property review and photography',
                'Market analysis and revenue projection',
                'Custom hosting agreement and launch plan',
              ]}
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/hosting-footer.jpg"
        title="Turn your villa into income with professional management."
        text="Join Calisto Hosting and let us handle everything while you receive monthly income and maintain full access to your property. Schedule a property review to get started."
        ctaText="Apply to join Calisto Hosting"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}