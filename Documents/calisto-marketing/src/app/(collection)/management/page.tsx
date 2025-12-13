import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function ManagementPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/management-hero.jpg"
        kicker="Calisto Collection · Management"
        title="Calisto Management: Second Home Care & Monitoring"
        subtitle="Calisto Management is our property care service for second home owners who don't rent but want professional oversight, maintenance, and monitoring. We watch your home, coordinate service, and keep you informed—all through Calisto Navigator."
        primaryCTA={{
          text: 'Apply for Calisto Management',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'Learn about Calisto Signal',
          href: '/signal',
        }}
        meta="Second home care · Monitoring · Maintenance · Dominican Republic & Spain"
        tagline="Your second home stays secure, maintained, and ready for you. We handle inspections, service coordination, and emergency response while you stay informed through your owner portal."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="What we do"
            heading="Professional care when you're away"
            description="Calisto Management gives second home owners peace of mind. Regular inspections, maintenance coordination, monitoring, and emergency response—everything managed through Calisto One and visible in your Navigator dashboard."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/management-monitoring.jpg"
              imageAlt="Smart home monitoring dashboard"
              title="24/7 monitoring with Calisto Signal"
              text="Leak sensors, door contacts, cameras, and climate monitoring connected through Calisto Signal. We receive alerts and respond according to your protocols."
              list={[
                'Water leak detection and alerts',
                'Entry monitoring and security',
                'Climate monitoring for HVAC and temperature',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/management-inspections.jpg"
              imageAlt="Property inspection checklist"
              title="Regular inspections & reporting"
              text="Scheduled property visits with photo documentation through Calisto Assure. You see exactly what we see with timestamped inspection reports."
              list={[
                'Weekly, bi-weekly, or monthly inspections',
                'Photo logs of every visit',
                'Condition reports and maintenance recommendations',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-collection/management-maintenance.jpg"
              imageAlt="Maintenance coordination"
              title="Maintenance & vendor coordination"
              text="We coordinate all service: pool care, gardening, HVAC service, pest control, and emergency repairs. You approve major work; we handle execution."
              list={[
                'Scheduled maintenance coordination',
                'Vendor management and quality control',
                'Emergency response and repair coordination',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Owner experience"
            heading="Stay connected to your home from anywhere"
            description="Through Calisto Navigator, you access your property dashboard, see inspection reports, review expenses, and approve maintenance—all from your phone or computer."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Real-time alerts"
              text="Receive immediate notifications for urgent issues through Calisto Signal. Water leaks, security events, and climate problems trigger instant alerts."
            />

            <CompareCard
              title="Visual inspection logs"
              text="Every inspection includes photos documenting property condition. See your home through our eyes with timestamped photo reports."
            />

            <CompareCard
              title="Maintenance transparency"
              text="Approve work requests, see vendor invoices, and track completion status. You control the budget and we execute the work."
            />

            <CompareCard
              title="Pre-arrival preparation"
              text="When you're visiting, we prepare your home: HVAC on, pool cleaned, groceries stocked, and everything ready for your arrival."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Join Calisto Management"
            heading="Ideal homes for our care program"
            description="Calisto Management is perfect for second home owners who value professional oversight and want to avoid the stress of long-distance property management."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Property criteria"
              text="We manage second homes that owners visit regularly but need professional care between visits. Ideal properties are in managed communities or resort areas."
              list={[
                'Single-family homes or condos',
                'Located in Dominican Republic or Spain',
                'Owner visits at least 2-3 times per year',
              ]}
            />

            <FeatureCard
              title="Service packages"
              text="Choose the level of oversight that fits your needs: basic monitoring, regular inspections, or full concierge service with pre-arrival preparation."
              list={[
                'Monitoring only with Calisto Signal',
                'Monitoring + monthly inspections',
                'Full service with concierge coordination',
              ]}
            />

            <FeatureCard
              title="Getting started"
              text="We'll visit your property, install monitoring devices if needed, and create a custom care plan based on your home and how often you visit."
              list={[
                'Initial property assessment',
                'Calisto Signal device installation',
                'Custom care plan and pricing',
              ]}
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/management-footer.jpg"
        title="Your second home deserves professional care."
        text="Join Calisto Management for monitoring, inspections, and maintenance coordination while you're away. We keep your home secure and ready for your next visit."
        ctaText="Apply for Calisto Management"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}