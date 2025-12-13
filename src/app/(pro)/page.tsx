import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function ProHomePage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/os-hero.jpg"
        kicker="Calisto Pro · Operations Platform · Powered by CalistoOS"
        title="Calisto Pro: The Operations Platform for Modern Hospitality & Real Estate"
        subtitle="Calisto Pro is the operations platform built on CalistoOS, the quality-first operating system for properties. It unifies people, properties, devices, and workflows so boutique hotels, property managers, and real estate agencies can deliver consistently excellent stays, showings, and deals from one calm, connected platform that now includes digital keys, smart signals, and around-the-clock human support."
        primaryCTA={{
          text: 'Explore the platform',
          href: '#products',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Digital access with Calisto Key · Smart monitoring with Calisto Signal · Human response from Calisto 24·7"
        tagline="CalistoOS is the quality engine under every Calisto product. Calisto Pro is the operations platform your teams log into every day. Ops sits at the center with Sync, Navigator, Assure, Deals, Purview, Sign, Key, Signal, and 24·7 working together as one stack."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="CalistoOS + Calisto Pro"
            heading="The engine, the platform, and the human layer behind every stay and sale"
            description="Every booking, inspection, viewing, and contract is a promise to a guest, owner, or client. CalistoOS provides the quality-first operating system. Calisto Pro turns that engine into an operations platform where your teams work every day, and Calisto Key, Signal, and 24·7 extend it into the real world with digital access, live signals, and humans who can act on what the system sees."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="CalistoOS · Quality-first operating system"
              text="CalistoOS is the infrastructure that powers every Calisto product: shared data, standards, automations, and integrations. It keeps property records, people, workflows, and quality rules consistent across your entire portfolio and provides the common language for Ops, Sync, Navigator, Assure, Deals, Purview, Sign, Key, Signal, and 24·7."
            />

            <CompareCard
              title="Calisto Pro · Operations platform"
              text="Calisto Pro is the application layer your teams see every day. Ops, Sync, Navigator, Assure, Deals, Purview, Sign, Key, and Signal sit on one shared foundation so a change in operations is reflected in channels, guest journeys, inspections, transactions, access, and monitoring without duplicate tools or re-entry."
            />

            <CompareCard
              title="Calisto 24·7 · Humans backed by the stack"
              text="Calisto 24·7 is the always-on support layer that turns a standard SaaS into a service your guests and owners feel. When a lock fails, a signal fires, or a guest calls after hours, 24·7 sees bookings, keys, signals, and history in one place and can respond with confidence on your behalf."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent" id="products">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto Pro suite"
            heading="Ten products, one shared foundation"
            description="CalistoOS is the quality-first operating system. Calisto Pro is the suite of products built on top of it. Ops is your core operations workspace. Sync connects channels. Navigator curates the guest and client journey. Assure protects quality. Deals and Purview manage transactions. Sign handles e-signature. Key, Signal, and 24·7 take you beyond software with digital access, live signals from the property, and around-the-clock human support."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Core operations"
              title="Calisto Ops"
              text="The core operations workspace inside Calisto Pro. Shared calendars, unified CRM, tasks, tickets, and simple reporting for every stay, inspection, and showing across properties, portfolios, and offices, all powered by CalistoOS."
              list={[
                "Explore Ops →"
              ]}
            />

            <FeatureCard
              meta="Channels & distribution"
              title="Calisto Sync"
              text="Connect OTAs, portals, and websites to a single source of truth. Rates, availability, and listing content stay aligned while bookings and inquiries flow back into Calisto Ops with full channel attribution."
              list={[
                <a key="sync" href="/sync" className="cal-link-btn">Explore Sync →</a>
              ]}
            />

            <FeatureCard
              meta="Guest & client experience"
              title="Calisto Navigator"
              text="Give guests, owners, buyers, and sellers a clean, branded portal or app for trips, viewings, documents, statuses, messaging, and upsells. Navigator reads from Calisto Ops and works with Calisto Key for digital keys and smooth arrivals."
              list={[
                <a key="nav" href="/navigator" className="cal-link-btn">Explore Navigator →</a>
              ]}
            />

            <FeatureCard
              meta="Quality & compliance"
              title="Calisto Assure"
              text="Standardize inspections, photos, scoring, and condition reports across properties. Issues become tasks in Calisto Ops and every room, unit, and listing has a quality history your owners, brands, and guests can trust."
              list={[
                <a key="assure" href="/assure" className="cal-link-btn">Explore Assure →</a>
              ]}
            />

            <FeatureCard
              meta="Transactions & CRM"
              title="Calisto Deals"
              text="Pipelines for listings, mandates, offers, and contracts that live in the same system as your operations. Track milestones and commissions while keeping every deal tied to the right people and properties in Calisto Ops."
              list={[
                <a key="deals" href="/deals" className="cal-link-btn">Explore Deals →</a>
              ]}
            />

            <FeatureCard
              meta="Client workspace"
              title="Calisto Purview"
              text="The client-facing workspace where agents and brokerages send curated listings, organize documents, track next steps, and run e-signing—so clients always know what's happening, what's signed, and what comes next."
              list={[
                <a key="purview" href="/purview" className="cal-link-btn">Explore Purview →</a>
              ]}
            />

            <FeatureCard
              meta="E-signature"
              title="Calisto Sign"
              text="Property-smart e-signature for rental agreements, sales contracts, and disclosure packets. Templates pull data from Ops so documents populate automatically with the right property details, guest names, and deal terms."
              list={[
                <a key="sign" href="/sign" className="cal-link-btn">Explore Sign →</a>
              ]}
            />

            <FeatureCard
              meta="Digital access"
              title="Calisto Key"
              text="Turn bookings, showings, and service visits into digital keys that just work. Calisto Key connects your smart locks to Ops, Navigator, Signal, and 24·7 so guests, owners, staff, and vendors get the right access at the right time with a full audit trail behind every door."
              list={[
                <a key="key" href="/access" className="cal-link-btn">Explore Key →</a>
              ]}
            />

            <FeatureCard
              meta="Devices & signals"
              title="Calisto Signal"
              text="Bring sensors, devices, and smart home data into the same story as bookings and quality. Calisto Signal watches for unusual patterns, battery issues, and device health and turns them into clear signals, tasks, and alerts in Ops, Assure, and 24·7."
              list={[
                <a key="signal" href="/signal" className="cal-link-btn">Explore Signal →</a>
              ]}
            />

            <FeatureCard
              meta="Around-the-clock support"
              title="Calisto 24·7"
              text="A human team that sees what Calisto Pro sees and can act on it at any hour. Calisto 24·7 works from the same bookings, keys, signals, and quality records as your internal teams so lockouts, after-hours calls, and urgent issues are handled with context, not guesswork."
              list={[
                <a key="247" href="/24-7" className="cal-link-btn">Explore 24·7 →</a>
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How teams roll out Calisto Pro"
            heading="Start with Ops, then add products as you grow"
            description="Calisto Pro is designed for phased adoption. Most teams begin with a single portfolio, hotel, or office in Ops, then layer on Sync, Navigator, Assure, Deals, Purview, Sign, Key, Signal, and 24·7 where they bring the most visible step up in experience and control."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Step 1"
              title="Launch Calisto Ops"
              text="Start with the portfolio, hotel, or office that matters most. Bring calendars, contacts, tickets, and core workflows into Calisto Ops so your team feels one calm center for the day-to-day."
            />

            <FeatureCard
              meta="Step 2"
              title="Connect channels and journeys"
              text="Add Sync to connect channels and portals, and Navigator to give guests, buyers, tenants, and owners a modern portal or app. The same records in Ops now power distribution and experience."
            />

            <FeatureCard
              meta="Step 3"
              title="Add quality, transactions & access"
              text="Introduce Assure to standardize quality, Deals and Purview for transactions, Sign for e-signature, and Key to control digital access. Everything connects to the same bookings and properties in Ops."
            />

            <FeatureCard
              meta="Step 4"
              title="Switch on Signal and 24·7"
              text="Add Signal to watch what devices see, and 24·7 so guests and owners have a trusted human team that can respond at any hour using the same context your internal teams see."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Who Calisto Pro serves"
            heading="Made for teams who care deeply about service"
            description="Whether you run a 30-room hotel, a regional property management company, or a brokerage that handles luxury homes, Calisto Pro is for operators who want every guest, owner, and client to feel they chose the right partner."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Boutique hotels & serviced apartments"
              meta="Stays · Guest experience"
              text="Replace a patchwork of PMS, inboxes, and manual logs with one operations platform for rooms, tickets, quality, and access. Guests enjoy smooth arrivals, digital keys, and fast support."
            />

            <FeatureCard
              title="Property management companies"
              meta="Second homes · Vacation rentals"
              text="Coordinate geographically dispersed portfolios with shared standards for inspections, maintenance, communication, and owner reporting. Key, Signal, and Assure give you visibility between visits."
            />

            <FeatureCard
              title="Real estate agencies & brokerages"
              meta="Listings · Showings · Transactions"
              text="Connect listings, mandates, showings, and deals to the same properties and people. Agents use Ops, Deals, Purview, and Key as one stack so transactions feel effortless to clients."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Pro"
            description="A few of the most common questions from hotels, property managers, and brokerages considering Calisto Pro as their operations platform."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is Calisto Pro a PMS, a CRM, or something else?"
              answer="Calisto Pro is your operations platform built on CalistoOS. It brings together core elements of a PMS, CRM, channel manager, task app, and deal tracker into one interconnected workspace, so your teams work from a single source of truth."
            />

            <FAQCard
              question="What is the difference between CalistoOS and Calisto Pro?"
              answer="CalistoOS is the underlying operating system: shared data, standards, automations, and integrations. Calisto Pro is the suite of applications your teams use every day: Ops, Sync, Navigator, Assure, Deals, Purview, Sign, and the infrastructure products Key, Signal, and 24·7."
            />

            <FAQCard
              question="Do I need every product to get value?"
              answer="No. Every customer starts with Calisto Ops. From there you can add Sync, Navigator, Assure, Deals, Purview, Sign, Key, Signal, or 24·7 as your channels, guest journeys, quality programs, and service expectations grow."
            />

            <FAQCard
              question="Can Calisto Pro work with tools I already use?"
              answer="Yes. CalistoOS is designed to sit at the center of your stack and integrate with existing systems during rollout. Many teams keep certain legacy tools while shifting daily work into Calisto Pro."
            />

            <FAQCard
              question="Is Calisto Pro suitable for multi-country portfolios?"
              answer="Yes. CalistoOS supports multi-property, multi-brand, and multi-market portfolios with flexible grouping and filtering. Leadership can see the big picture while local teams focus on their specific region or brand."
            />

            <FAQCard
              question="How is pricing structured?"
              answer="Most products are priced per property or per user. Sync, Assure, and Navigator are typically per-property. Deals and Purview are per-agent. Contact us to discuss your specific portfolio and team size."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/os-footer-cta.jpg"
        title="Give your teams the operations platform they deserve."
        text="Calisto Pro, powered by CalistoOS, brings operations, channels, journeys, quality, transactions, access, signals, and around-the-clock support into one connected platform. Start with the portfolio that matters most today and grow into the full suite over time."
        ctaText="Explore the platform"
        ctaHref="#products"
      />
    </>
  );
}