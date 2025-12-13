import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function OpsPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/ops-hero.jpg"
        kicker="Calisto One · Core Operations · Powered by CalistoOS"
        title="Calisto Ops: The Operations Hub Inside Calisto One"
        subtitle="Calisto Ops is the daily workspace where property managers, hotel operators, and real estate teams manage contacts, properties, bookings, tasks, and workflows. It's the foundation that connects every other Calisto product into one source of truth."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Operations hub · Contacts · Properties · Bookings · Tasks · Workflows"
        tagline="CalistoOS is the engine. Calisto One is the hub. Ops is where your team works every day."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Ops"
            heading="One workspace for people, properties, and work"
            description="Ops replaces scattered spreadsheets, multiple PMSs, and disconnected tools with one unified operations hub. Everything your team needs to run properties, serve guests, and close deals lives here."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/ops-feature-contacts.jpg"
              imageAlt="Unified contact management"
              meta="People"
              title="One contact database for everyone"
              text="Guests, owners, vendors, agents, buyers, and team members all live in one clean CRM. See complete history, preferences, and interactions across every property and transaction."
              list={[
                'Unified people database across all properties.',
                'Contact timelines with every interaction logged.',
                'Segmentation by role: guests, owners, vendors, buyers.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/ops-feature-properties.jpg"
              imageAlt="Property master data"
              meta="Properties"
              title="Property master data and portfolios"
              text="Homes, villas, hotel rooms, and listings organized by portfolio, brand, and market. Every property connects to its owners, bookings, tasks, documents, and devices."
              list={[
                'Property master data with complete specs.',
                'Portfolio and brand organization.',
                'Links to bookings, tasks, keys, and alerts.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/ops-feature-tasks.jpg"
              imageAlt="Task and workflow management"
              meta="Work"
              title="Tasks, tickets, and workflows"
              text="Housekeeping, maintenance, showings, inspections, and guest requests become structured tasks with owners, due dates, and status. Teams see exactly what needs to happen next."
              list={[
                'Tasks tied to properties and bookings.',
                'Workflows for housekeeping, maintenance, showings.',
                'Team assignment and status tracking.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How it works"
            heading="Ops connects everything in Calisto One"
            description="Ops is the foundation. Every other Calisto product—Sync, Navigator, Assure, Deals, Signal, Key, 24·7—reads from and writes to Ops so your team always works from one source of truth."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Ops + Sync"
              text="Bookings from Airbnb, Booking.com, and your direct site flow into Ops automatically. Your team sees all reservations in one calendar with complete guest details."
            />

            <CompareCard
              title="Ops + Navigator"
              text="Guest check-ins, messages, and service requests in Navigator become tasks and updates in Ops. Your team responds with full context."
            />

            <CompareCard
              title="Ops + Assure"
              text="Inspections and quality checks create tasks in Ops. Issues flagged in Assure become work orders for your team to action."
            />

            <CompareCard
              title="Ops + Deals"
              text="Real estate transactions, listings, and mandates connect to the same properties and contacts. Agents see booking history; PMs see sales activity."
            />

            <CompareCard
              title="Ops + Signal"
              text="Device alerts from leaks, doors, and sensors create tickets in Ops. Your team sees which property, which device, and what happened."
            />

            <CompareCard
              title="Ops + Key"
              text="Digital keys issued through Calisto Key are logged in Ops. Access events, lockouts, and battery alerts become visible tasks."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Ops"
            description="Quick answers about setup, data migration, team access, and integration with other Calisto products."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is Calisto Ops a PMS or a CRM?"
              answer="Ops is both and neither. It's an operations hub that combines contact management, property data, bookings, and task workflows in one place. It connects to your existing tools or replaces them entirely."
            />

            <FAQCard
              question="Can we migrate data from our current system?"
              answer="Yes. We support data imports from spreadsheets, CSVs, and APIs from common PMS and CRM systems. Contact history, property details, and bookings can be migrated during onboarding."
            />

            <FAQCard
              question="How does team access work?"
              answer="You control which team members see which properties, contacts, and tasks. Housekeeping sees their routes; managers see everything; owners see only their properties."
            />

            <FAQCard
              question="Do we need other Calisto products to use Ops?"
              answer="No. Ops works standalone as your operations hub. But it becomes more powerful when connected to Sync (channels), Navigator (guests), Assure (quality), and other Calisto products."
            />

            <FAQCard
              question="Can we customize fields and workflows?"
              answer="Yes. Custom fields, tags, and workflow templates can be configured per brand, property type, and market to match how your team actually works."
            />

            <FAQCard
              question="How is pricing structured?"
              answer="Ops is included as the foundation of Calisto One. Pricing scales based on properties, team size, and which additional products you activate (Sync, Navigator, etc)."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/ops-footer-cta.jpg"
        title="One workspace. One source of truth. One calm operations hub."
        text="Calisto Ops brings people, properties, bookings, and tasks into one place so your team can focus on service instead of juggling tools."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}