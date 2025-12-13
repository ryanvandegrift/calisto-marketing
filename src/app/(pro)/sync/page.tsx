import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function SyncPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/sync-hero.jpg"
        kicker="Calisto One · Channel Manager · Powered by CalistoOS"
        title="Calisto Sync: The Channel Manager Inside Calisto One"
        subtitle="Calisto Sync is the channel manager built directly into Calisto One. Sync connects your Airbnb, Booking.com, VRBO, and direct website availability and rates into one clean, reliable source of truth so property managers and hotel operators can avoid double bookings and stop updating channels one by one."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Per property · Includes seat access · Airbnb, Booking.com & VRBO · 14 day trial · No credit card"
        tagline="CalistoOS powers your operations. Calisto One is your team's daily workspace. Calisto Sync connects your distribution to that system, cleanly, reliably, and without the clutter of ten separate tools."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Keep your channels in sync"
            heading="One source of truth for bookings, rates & availability"
            description="Calisto Sync connects Airbnb, Booking.com, and VRBO directly into Calisto One. Bookings, changes, cancellations, and basic guest details reflect instantly across every connected channel. No more double bookings. No more manually updating calendars or seasonal rates in multiple tools."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sync-feature-unified-calendars.jpg"
              imageAlt="Unified multi-channel calendar"
              meta="Unified calendars"
              title="Every booking in one calendar"
              text="Bookings from Airbnb, Booking.com, VRBO, and your direct site appear instantly in Calisto One. Holds, owner stays, maintenance blocks, and housekeeping schedules stay aligned across channels."
              list={[
                'Instant two way sync for bookings & cancellations',
                'Prevents double bookings across all connected OTAs',
                'Supports single homes, multi unit hotels, and room types',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sync-feature-rates-availability.jpg"
              imageAlt="Rates and availability updating"
              meta="Rates & availability"
              title="Update rates once and Sync pushes everywhere"
              text="Manage seasonal pricing, minimum stays, restrictions, and availability from inside Calisto One. Sync distributes your settings cleanly to Airbnb, Booking.com, and VRBO."
              list={[
                'Rate & availability control from a single dashboard',
                'Minimum stay, LOS & restrictions synced across channels',
                'Hotel style rate plans and multi unit inventory supported',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/sync-feature-ops-automation.jpg"
              imageAlt="Operations automation"
              meta="Operations automation"
              title="Reservations trigger your workflows automatically"
              text="When a booking arrives, Calisto One immediately updates calendars and can trigger housekeeping, maintenance, and pre arrival prep flows. No extra tools. No manual work."
              list={[
                'Bookings → instant housekeeping tasks',
                'Cancellations → calendars automatically updated',
                'Guest details flow into your operational system without retyping',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Channel connections"
            heading="Connect Airbnb, Booking.com & VRBO in minutes"
            description="Calisto Sync focuses on short term rental and hotel distribution. Your properties connect cleanly to the major OTAs and your direct booking site with no portals, no sales integrations, and no unnecessary complexity."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Short term rental channels"
              text="Airbnb, Booking.com, and VRBO connect directly to Calisto One. Reduce admin, protect your calendars, and keep your operations clean and predictable."
              list={[
                'Fast onboarding and authentication',
                'Real time sync for availability, rates & restrictions',
                'Direct website channel available where applicable',
                'OTA origin tracking for performance analysis',
              ]}
            />

            <FeatureCard
              title="Hotel & multi unit inventory"
              text="Sync supports hotels, aparthotels, and multi unit buildings using a room type model."
              list={[
                'Room types & unit level mapping',
                'Rate plan support for hotel operators',
                'Clean two way inventory sync',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Sync"
            description="Quick answers for PMs, hotels, and owners setting up channel management inside Calisto One."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Which channels does Sync support?"
              answer="Airbnb, Booking.com, VRBO, and your direct website where supported."
            />

            <FAQCard
              question="Does Sync include property portals or sales listings?"
              answer="Not at this time. Sync focuses exclusively on rental distribution. Sales portals and lead flows are part of other Calisto products."
            />

            <FAQCard
              question="Do I need Calisto One to use Sync?"
              answer="Yes. Sync updates availability, bookings, and rates inside Calisto One so your entire team sees a single, reliable source of truth. You do not need to purchase other Calisto modules to use Sync."
            />

            <FAQCard
              question="Does Sync work for hotels?"
              answer="Yes. Room types, rate plans, and multi unit mapping are fully supported."
            />

            <FAQCard
              question="Is pricing per property?"
              answer="Yes. You can activate Sync on as few or as many properties as you want, with optional seats for larger revenue or reservations teams."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/sync-footer-cta.jpg"
        title="Connect your channels to the way you actually work."
        text="Calisto Sync brings Airbnb, Booking.com, and VRBO directly into Calisto One so your team always works from one clean source of truth. Start with your highest impact homes, hotel units, or personal portfolio, then grow into the full Calisto One stack over time."
        ctaText="Start your 14-day trial"
        ctaHref="#pricing"
      />
    </>
  );
}