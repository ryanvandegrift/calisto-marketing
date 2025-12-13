import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function BoutiquePage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/boutique-hero.jpg"
        kicker="Calisto Collection · Boutique"
        title="Calisto Boutique: Exclusive Luxury Properties & Experiences"
        subtitle="Calisto Boutique represents our most exclusive properties: private estates, boutique hotels, and unique venues available for extended stays, events, and private use. Each property offers extraordinary design, location, and service."
        primaryCTA={{
          text: 'Inquire about availability',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'Browse boutique properties',
          href: 'https://calistoco.com/boutique',
        }}
        meta="Exclusive estates · Private events · Extended stays · Dominican Republic & Spain"
        tagline="These properties aren't just rentals—they're experiences. Available for discerning travelers, private events, corporate retreats, and extended residence."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The collection"
            heading="Extraordinary properties for extraordinary moments"
            description="Calisto Boutique properties are selected for their exceptional design, location, and capacity to deliver unforgettable experiences. From beachfront estates to historic villas, each property tells a story."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/boutique-estates.jpg"
              imageAlt="Luxury estate exterior"
              title="Private estates & villas"
              text="Multi-bedroom estates with pools, gardens, ocean views, and complete privacy. Perfect for families, groups, and those seeking ultimate luxury."
              list={[
                '5-12 bedroom estates',
                'Beachfront and hilltop locations',
                'Full staff including chef and concierge',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/boutique-hotels.jpg"
              imageAlt="Boutique hotel interior"
              title="Boutique hotels & residences"
              text="Small luxury hotels and branded residences offering hotel services with residential comfort. Ideal for extended stays and corporate retreats."
              list={[
                '4-20 room boutique properties',
                'Hotel services with residential privacy',
                'Meeting spaces and event capabilities',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/boutique-events.jpg"
              imageAlt="Event venue setup"
              title="Event venues & experiences"
              text="Properties designed for weddings, corporate events, retreats, and celebrations. We coordinate everything from catering to entertainment."
              list={[
                'Wedding and celebration venues',
                'Corporate retreat facilities',
                'Full event planning and coordination',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Guest experience"
            heading="White-glove service and complete customization"
            description="Boutique properties include dedicated concierge, custom menus, activity planning, and whatever else you need for the perfect stay or event."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Pre-arrival planning"
              text="Work with our concierge team to plan every detail: dietary preferences, activity reservations, transportation, and special requests."
            />

            <CompareCard
              title="Private chef & catering"
              text="In-residence chef service or catered events. Custom menus designed around your preferences and dietary needs."
            />

            <CompareCard
              title="Activities & experiences"
              text="Boat charters, private tours, golf tee times, spa services, and exclusive experiences coordinated by our concierge team."
            />

            <CompareCard
              title="Complete privacy"
              text="Exclusive use means complete privacy. No shared spaces, no other guests—just your group and our dedicated staff."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Join Calisto Boutique"
            heading="Exceptional properties wanted"
            description="We're always seeking extraordinary properties to join Calisto Boutique. If you own a special estate, boutique hotel, or unique venue, we'd love to discuss representation."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Property criteria"
              text="Boutique properties must offer something exceptional: location, design, size, or experience. We look for properties that command premium rates and deliver extraordinary stays."
              list={[
                'Exceptional location or design',
                '5+ bedrooms or 4+ hotel rooms',
                'Event capabilities or unique features',
              ]}
            />

            <FeatureCard
              title="Partnership model"
              text="We handle everything: marketing, bookings, guest services, staff coordination, and property care. You receive income while we deliver experiences."
              list={[
                'Professional marketing and photography',
                'White-glove guest services',
                'Staff coordination and training',
              ]}
            />

            <FeatureCard
              title="Getting started"
              text="Start with a property review and market analysis. We'll assess revenue potential and create a custom plan for your property."
              list={[
                'Property assessment and photography',
                'Market positioning and pricing strategy',
                'Custom partnership agreement',
              ]}
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/boutique-footer.jpg"
        title="Extraordinary properties deserve extraordinary representation."
        text="Join Calisto Boutique and let us showcase your estate, hotel, or venue to the world's most discerning travelers and event planners."
        ctaText="Inquire about representation"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}