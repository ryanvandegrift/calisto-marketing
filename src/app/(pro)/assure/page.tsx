import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';
import CTABox from '@/components/shared/CTABox';
import PricingCalculator from '@/components/pricing/PricingCalculator';
import Button from '@/components/shared/Button';

export default function AssurePage() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/assure-hero.jpg"
        kicker="Calisto One · Quality & Condition · Powered by CalistoOS"
        title="Calisto Assure: The Quality and Condition Layer Inside Calisto One"
        subtitle="Calisto Assure is the trust layer inside Calisto One. It gives property managers, real estate agents and teams, brokerages, hands-on owners, and hotel operators a structured way to inspect, document, and prove the condition of every home, unit, and room, with visual evidence and records that flow into Calisto One and out to the clients who rely on you."
        footnote="Sold per property and friendly to turnarounds and listings. Start with the homes, floors, or buildings where your reputation matters most and expand from there."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        tagline="CalistoOS is the quality engine under every Calisto product. Calisto One is the operations hub your teams log into every day. Assure is how you turn internal standards into visible proof for guests, owners, buyers, investors, and partners, and how you document what the property looked like before and after events handled by Signal or Calisto 24·7."
      />

      {/* ALWAYS GUEST READY / LISTING READY */}
      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Built for trust"
            heading="Quality & condition as a shared standard"
            description="Calisto Assure gives property managers, hotel operators, real estate agents and teams, brokerages, and owners one shared view of readiness. Your teams see exactly what was checked, your owners and brands see proof, and your guests and buyers arrive to properties that match the promise."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-feature-quality.jpg"
              imageAlt="Quality inspection and verification"
              title="Inspections & checklists that match how you work"
              text="Design inspection flows around your brand, not around a generic app. Calisto Assure adapts to hotel-style operations, professional property managers, real estate teams, brokerages, and owners who prefer to stay close to their own properties without extra spreadsheets or photo folders."
              list={[
                '<strong>Property managers & hotel operators:</strong> pre-arrival, post-stay, periodic condition and safety checks.',
                '<strong>Agents & brokerages:</strong> pre-listing, photo-ready, license and disclosure checks, and handover / closing inspections.',
                '<strong>Owners who self-manage:</strong> clear views of what was checked, when, and by whom, for every key visit.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-feature-inventory.jpg"
              imageAlt="Digital property inventory system"
              title="Photo & video logs, organised by space"
              text="Every inspection becomes a visual chapter in the property's story. Media is time-stamped, tied to specific rooms and assets, and stored in a way that makes client questions easy to answer when an owner, guest, buyer, or asset manager needs clarity."
              list={[
                'Time-stamped logs for owners, buyers, guests, and internal records.',
                'Room-by-room condition tracking to compare visits over time.',
                'Simple exports for owners, HOAs, brands, insurers, lenders, or legal documentation.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-feature-maintenance.jpg"
              imageAlt="Preventive maintenance planning"
              title="Scoring, flags, licenses & maintenance, all connected"
              text="Turn inspections into signals your clients can trust. Calisto Assure scores each visit and highlights what matters most, tracks key license and compliance dates, and turns vague 'everything ok?' into a clear view of where to focus next."
              list={[
                'Scores across cleanliness, maintenance, safety, brand standards, and listing-ready state.',
                'Flags for quick touch ups and preventative maintenance that stay tracked inside Assure.',
                'License tracking for vacation rental permits and real estate agent or brokerage licenses, with simple reminders before expiry.',
                'When work is bigger than a touch up, Assure hands it straight to Calisto One so the right teams, including Calisto 24·7 where relevant, see the same history.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* THE CALISTO DIFFERENCE */}
      <section className="cal-section-block cal-section-block--large">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why CalistoOS"
            heading="Quality and operations finally in sync"
            description="You are not adding another checklist app to the pile. Calisto Assure is the quality layer of a full operating system and operations hub. Standards, inspections, license records, and work orders live on the same data foundation, so what you promise to clients and what you deliver on site stay aligned."
          />

          <div className="cal-compare-grid">
            <CompareCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              }
              title="Proof, not promises"
              text="Assure turns every inspection into a documented event. Scores, flags, photos, and videos create a clear record of readiness so owners, guests, buyers, investors, and brands see more than a checklist. They see evidence they can trust."
            />

            <CompareCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              }
              title="From insight to action in one click"
              text="When Assure finds a problem, Calisto One takes it from there. Light touch ups stay tracked inside Assure. Larger work becomes structured tasks, tickets, or work orders inside Calisto One, with photos, approvals, and status all connected from inspection through resolution. If an issue started with a Signal alert or a Calisto 24·7 call, the same trail continues in Assure."
            />
          </div>
        </div>
      </section>

      {/* CALISTOOS: AI THAT SAVES TIME */}
      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Powered by CalistoOS"
            heading="AI for readiness, not just reporting"
            description="Calisto Assure uses AI to keep standards honest. Instead of manually comparing photos and notes, you get fast, reliable signals when a room, unit, or listing drifts away from the agreed standard so you can protect trust with clients before issues reach guests or buyers."
          >
            <Button variant="accent-outline" href="#pricing">
              Start your free 14 day trial
            </Button>
          </SectionIntro>

          <div className="cal-ai-grid">
            <div className="cal-ai-card">
              <div className="cal-ai-media">
                <img src="https://calistomedia.blob.core.windows.net/calisto-one/assure-ai-inventory.jpg" alt="AI-powered inventory tracking" />
              </div>
              <h3 className="cal-ai-title">Inventory with confidence</h3>
              <p className="cal-ai-text">
                AI compares current photos against your standard set so every key asset and detail is accounted for, even across large portfolios, hotel floors, or branded residences. When clients ask what is really there, you have a clear, visual answer.
              </p>
            </div>

            <div className="cal-ai-card">
              <div className="cal-ai-media">
                <img src="https://calistomedia.blob.core.windows.net/calisto-one/assure-ai-quality.jpg" alt="AI-powered quality verification" />
              </div>
              <h3 className="cal-ai-title">Smarter quality checks</h3>
              <p className="cal-ai-text">
                Condition changes are highlighted automatically. Frontline teams see exactly where to focus, while managers get readiness scores instead of wading through raw photos. This works whether you run a single property or a multi-office brokerage or hotel group.
              </p>
            </div>

            <div className="cal-ai-card">
              <div className="cal-ai-media">
                <img src="https://calistomedia.blob.core.windows.net/calisto-one/assure-ai-proof.jpg" alt="AI-verified guest-ready matching" />
              </div>
              <h3 className="cal-ai-title">Guest-ready & listing-ready proof</h3>
              <p className="cal-ai-text">
                Assure checks that live condition matches your approved listing photos and brand standards, so what guests and buyers see online is what they experience in real life, whether they arrive through Calisto Stays, Calisto Casas, or your own channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARDING MADE EFFORTLESS */}
      <section className="cal-section-block cal-section-block--large">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Get started fast"
            heading="Perfect for listings, hotels, and turnarounds"
            description="Calisto Assure is sold per property so you can protect what matters most first. Use it while a listing is live, for high-visibility hotel floors, across a managed portfolio, or as a permanent quality layer wherever brand standards and client trust cannot slip."
          />

          <div className="cal-feature-grid">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-onboard-pricing.jpg"
              imageAlt="Transparent pricing"
              title="Start with your flagship assets"
              text="Begin with flagship villas, critical hotel floors, your most visible listings, or the properties where key owner relationships depend on consistent quality. Add more over time as teams and clients feel the difference in transparency and readiness."
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-onboard-selfservice.jpg"
              imageAlt="Self-service setup"
              title="Self-service for teams, agents & owners"
              text="Property teams, hotel staff, real estate agents, brokerages, and owners who run their own homes can build digital profiles in minutes. Map spaces, define standards, capture the first inspection, and set license dates so everyone starts from a clean, shared baseline inside CalistoOS."
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/assure-onboard-support.jpg"
              imageAlt="Concierge support"
              title="Concierge onboarding support"
              text="Moving quickly on a larger portfolio, brokerage, or hotel group? Your Calisto Concierge can help define standards, migrate existing records, import license data, and set up Assure alongside Calisto One so inspections and work orders flow smoothly from day one."
            />
          </div>
        </div>
      </section>

      {/* PLANS DESIGNED FOR TRUST (WITH CALCULATOR) */}
      <section className="cal-section-block cal-section-block--accent" id="pricing">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Simple pricing"
            heading="Per property, month to month friendly"
            description="Subscribe Calisto Assure per property, per bedroom, or per unit. Use it for a focused period while a listing is live, during an intensive upgrade phase, or as a long term quality layer across the properties, portfolios, and offices that define your brand."
          />
          
          <PricingCalculator skuPrefix="ASS-" />

          {/* STATIC FEATURE LIST */}
          <div className="cal-pricing-features">
            {[
              'Structured inspections & checklists for property managers, hotel operators, agents, brokerages, and owners.',
              'Time-stamped photo and video logs for owners, guests, buyers, asset managers, and brand partners.',
              'Readiness scoring across cleanliness, maintenance, safety, brand standards, and listing state.',
              'Light maintenance tracking for small fixes and touch ups inside Assure, with history per property.',
              'License and compliance tracking for vacation rental permits and real estate agent or brokerage licenses.',
              'Automatic task, ticket, or work order creation in Calisto One when issues or expiries are found.',
              'Month to month flexibility so you can subscribe during listings, key seasons, and critical project phases.',
              'Designed so property managers, agents, brokerages, owners, and hotel operators can use one shared platform.',
              'Pairs naturally with Signal and Calisto 24·7 when incidents need both overnight response and daytime proof.',
            ].map((feature, index) => (
              <div key={index} className="cal-pricing-feature">
                <div className="cal-pricing-feature-check">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Not Sure CTA */}
          <CTABox
            title="Not sure how many properties to start with?"
            text="Your Calisto Concierge can help you choose a starting scope, whether that is a single flagship listing, a hotel wing, a cluster of managed homes, or one brokerage office, and plan how to expand over time."
            ctaText="Let's talk"
            ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="cal-section-block cal-section-block--large">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions & answers"
            heading="Frequently answered about Calisto Assure"
            description="How Assure fits into CalistoOS and Calisto One for property managers, real estate agents and teams, brokerages, hands-on property owners, and hotel operators who need to build trust with their clients."
          />

          <div className="cal-faq-grid">
            <FAQCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              }
              question="Who is Calisto Assure for?"
              answer="Calisto Assure is built for property managers and PM companies, real estate agents and teams, brokerages, hotel and serviced apartment operators, and owners who want to stay close to their own properties. If your business depends on clients trusting that a property is truly as presented, Assure gives you one place to see and prove it."
            />

            <FAQCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
              question="Can I use Assure just while a property is listed or during a project?"
              answer="Yes. Assure is subscription based per property and month to month friendly. Many clients use it intensively while a listing is live, during a turnaround or refurbishment, or through key seasons, then adjust coverage as their portfolio and needs change."
            />

            <FAQCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              }
              question="How does Assure help agents, brokerages, and buyers?"
              answer="Agents and brokerages can share inspection logs, photos, and condition reports directly with buyers and their advisors. Assure makes it simple to show the exact state of the home today, reducing surprises between offer, inspection, handover, and post-closing, and strengthening your reputation with clients."
            />

            <FAQCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v4H4z"></path>
                  <path d="M4 12h16v8H4z"></path>
                </svg>
              }
              question="Can Calisto Assure help with compliance and licenses?"
              answer="Yes. Assure can track key license and compliance dates such as vacation rental permits and real estate agent or brokerage licenses. You can keep renewal details in one place and trigger tasks or reminders through Calisto One so nothing critical quietly expires in the background."
            />

            <FAQCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              }
              question="How does Calisto One fit into all of this?"
              answer="Calisto Assure sets the standards and runs the inspections. When something needs action, Calisto One, your operations hub powered by CalistoOS, takes over: creating tasks, tickets, or full work orders with time, materials, and approvals. Once work is complete, proof flows back into Assure so quality and operations stay fully aligned on the same operating system, and your clients see a consistent story from promise to delivery. If an incident began with a Signal alert or a Calisto 24·7 call, the same chain of evidence runs from the first alert through the final inspection."
            />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/assure-footer-cta.jpg"
        title="Run operations. Protect reputation. Prove readiness."
        text="Calisto Assure gives property managers, agents, brokerages, owners, and hotel operators the confidence that every stay and every showing begins with a property that truly meets the standard, and that the proof lives inside Calisto One, powered by CalistoOS."
        ctaText="Start your free 14 day trial"
        ctaHref="#pricing"
      />

      <div style={{ height: '48px' }}></div>
    </>
  );
}
