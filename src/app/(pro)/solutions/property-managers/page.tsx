import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function PropertyManagersPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-pm-hero.jpg"
        kicker="Solutions · Property Managers · Powered by CalistoOS"
        title="Calisto One for Property Managers"
        subtitle="Run vacation rentals, serviced apartments, and short-term rental portfolios with one unified operations platform. Calisto One brings channel management, guest experience, housekeeping, quality control, and device monitoring into a single source of truth—so your team spends less time switching tools and more time delivering hospitality."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Built for VR managers · Single homes to large portfolios · Channel management · Guest apps · Quality control"
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Your challenges"
            heading="Stop juggling ten different tools"
            description="Property managers deal with channel calendars, PMS systems, guest messaging apps, housekeeping tools, maintenance trackers, and owner portals—all disconnected. Calisto One replaces this chaos with one unified hub."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Bookings scattered across channels"
              text="You manage Airbnb, Booking.com, VRBO, and direct bookings in separate calendars. Double bookings happen. Rates get out of sync."
              list={[
                'Calisto Sync: One calendar, all channels',
                'Automatic rate and availability updates',
                'No more manual calendar checks',
              ]}
            />

            <FeatureCard
              title="Guest communication is inbox chaos"
              text="Pre-arrival messages, check-in instructions, maintenance requests, and upsells live in email, WhatsApp, channel inboxes, and your head."
              list={[
                'Calisto Navigator: Branded guest app',
                'Unified messaging tied to bookings',
                'Pre-arrival workflows automated',
              ]}
            />

            <FeatureCard
              title="Quality and cleanliness are trust issues"
              text="You rely on cleaners to 'do it right' but have no proof of condition, no photo records, and no way to prove quality to owners or guests."
              list={[
                'Calisto Assure: Photo inspections',
                'Before/after proof for every turnover',
                'Quality reports for owners',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto One helps"
            heading="One platform for bookings, guests, operations & quality"
            description="Calisto One brings your entire short-term rental operation into a single workspace. Your team works from one system. Your guests get a premium experience. Your owners see proof of quality."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Sync"
              text="Connect Airbnb, Booking.com, VRBO, and your direct site. One calendar, automatic rate updates, no double bookings. Works with single homes or 100+ unit portfolios."
            />

            <CompareCard
              title="Calisto Navigator"
              text="Your branded guest app. Guests check in online, upload IDs, sign agreements, request services, and access digital keys—all without email chaos."
            />

            <CompareCard
              title="Calisto Ops"
              text="Properties, contacts, bookings, and tasks in one hub. Housekeeping routes, maintenance tickets, and owner communications flow from here."
            />

            <CompareCard
              title="Calisto Assure"
              text="Visual proof of quality. Cleaners and inspectors photograph every room before and after. Owners and guests see documented condition."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital access tied to bookings. Guests get keys when conditions are met. Access revokes automatically at checkout. No more lockbox codes."
            />

            <CompareCard
              title="Calisto Signal"
              text="Monitor leaks, doors, temperature, and smoke detectors. Alerts create tasks in Ops. Optional 24/7 monitoring available."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Common workflows"
            heading="How property managers use Calisto One daily"
            description="From booking confirmation to checkout, Calisto One handles the workflows that consume your team's time."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Booking confirmed"
              title="Automatic guest journey starts"
              text="A booking arrives from Airbnb. Sync updates all calendars. Navigator sends pre-arrival instructions. Ops creates housekeeping tasks. Sign generates rental agreement."
            />

            <FeatureCard
              meta="Guest arrives"
              title="Check-in, verification, key issuance"
              text="Guest completes online check-in in Navigator. ID uploaded and verified. Agreement signed. Payment confirmed. Calisto Key issues digital access automatically."
            />

            <FeatureCard
              meta="During stay"
              title="Requests, upsells, messaging"
              text="Guest requests early checkout via Navigator. Request becomes task in Ops. Cleaner schedule adjusts. Owner notified. Everything documented."
            />

            <FeatureCard
              meta="After checkout"
              title="Inspection, quality proof, next booking"
              text="Assure inspection captures condition photos. Any damage documented. Owner receives report. Property immediately ready for next guest."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered by property managers"
            description="Common questions from VR managers evaluating Calisto One."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Do I need to replace my PMS?"
              answer="Not necessarily. Many PMs start by adding Calisto products alongside their PMS, then migrate fully once workflows are proven. We support data imports and can sync with common systems during transition."
            />

            <FAQCard
              question="How long does setup take?"
              answer="Most single-property setups are live in days. Larger portfolios phase in over weeks, starting with highest-value properties first."
            />

            <FAQCard
              question="Can I use just Sync, or do I need everything?"
              answer="Start with what you need. Many PMs begin with Sync (channels) and Navigator (guest app), then add Assure, Key, and Signal as they standardize operations."
            />

            <FAQCard
              question="What about owner reporting?"
              answer="Owners can access property dashboards showing bookings, revenue, condition reports, and maintenance history—all from the same data your team uses."
            />

            <FAQCard
              question="Does it work for single homes or just portfolios?"
              answer="Both. Calisto One scales from a single vacation rental to 1,000+ unit portfolios. Pricing adjusts to portfolio size."
            />

            <FAQCard
              question="How is pricing structured?"
              answer="Per property for most products (Sync, Assure, Navigator). Team seats available for larger operations. Contact us to discuss your portfolio."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-pm-footer.jpg"
        title="Run better rentals with one unified platform."
        text="Calisto One brings channels, guests, operations, and quality into a single source of truth for property managers who want to deliver hospitality without tool chaos."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}