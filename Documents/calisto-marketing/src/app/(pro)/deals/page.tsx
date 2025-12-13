import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function DealsPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/deals-hero.jpg"
        kicker="Calisto One · Transactions & CRM · Powered by CalistoOS"
        title="Calisto Deals: Transaction Management for Real Estate"
        subtitle="Calisto Deals is the transaction and pipeline layer inside Calisto One. It helps real estate agents, teams, and brokerages manage listings, buyer journeys, offers, contracts, and commissions—all connected to the same properties and contacts you already manage in Ops."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Real estate CRM · Listings · Buyer pipelines · Offers · Contracts · Commissions"
        tagline="Ops manages operations. Deals manages transactions. Both run on the same properties and contacts in Calisto One."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Deals"
            heading="From listing to closing in one clean pipeline"
            description="Deals replaces fragmented CRMs, spreadsheet trackers, and email chaos with one structured transaction workspace. Agents see their pipeline; teams see performance; brokerages see the full view across offices and brands."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/deals-feature-listings.jpg"
              imageAlt="Listing pipeline management"
              meta="Listings"
              title="Listing pipelines from mandate to sold"
              text="Track exclusive mandates, non-exclusive listings, and pocket listings through every stage. See days on market, price changes, viewing activity, and offers in one place."
              list={[
                'Mandate tracking with expiry alerts.',
                'Listing stages from prep to sold.',
                'Connected to Assure inspections and Purview client views.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/deals-feature-buyers.jpg"
              imageAlt="Buyer journey management"
              meta="Buyers"
              title="Buyer journeys and offer tracking"
              text="Follow buyers from initial inquiry through viewings, offers, negotiations, and closing. Every interaction, showing, and document stays connected to the right buyer and property."
              list={[
                'Buyer qualification and search criteria.',
                'Showing schedules and feedback.',
                'Offer preparation and counter-offers.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/deals-feature-commission.jpg"
              imageAlt="Commission and split tracking"
              meta="Money"
              title="Commissions, splits, and referrals"
              text="Calculate commissions, track splits with co-agents and referral partners, and see projected earnings per deal. Teams and brokerages get clear revenue visibility across the pipeline."
              list={[
                'Commission calculation by market and deal type.',
                'Agent splits and referral partner tracking.',
                'Revenue forecasting and closed deal reports.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How it works"
            heading="Deals connects to Ops, Purview, Assure, and Key"
            description="Deals isn't a standalone CRM. It's the transaction layer on top of Calisto Ops. Properties, contacts, and showings flow between Ops and Deals so you never duplicate data or lose context."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Deals + Ops"
              text="Properties and contacts from Ops become listings and buyers in Deals. Showings scheduled in Deals create tasks in Ops. Everything stays connected."
            />

            <CompareCard
              title="Deals + Purview"
              text="Clients see curated listings, showing plans, and offer status in Purview. Agents manage the pipeline in Deals. Both views stay in sync."
            />

            <CompareCard
              title="Deals + Assure"
              text="Pre-listing inspections and handover checks from Assure attach to deals. Quality reports become part of the listing package."
            />

            <CompareCard
              title="Deals + Key"
              text="Showings and viewing appointments trigger digital access through Calisto Key. Agents and buyers get time-bound keys automatically."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Deals"
            description="Quick answers about listings, pipelines, team access, commission tracking, and integration with other tools."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is this just for residential sales?"
              answer="No. Deals supports residential sales, rentals, commercial, land, and investment properties. Pipeline stages and workflows adapt to your market and deal types."
            />

            <FAQCard
              question="Can teams and brokerages see each other's deals?"
              answer="You control visibility. Individual agents see their pipeline. Team leaders see team performance. Brokerages see everything across offices and brands."
            />

            <FAQCard
              question="How do referrals work?"
              answer="Track incoming and outgoing referrals with partner agents and brokerages. Commission splits are calculated automatically based on your agreements."
            />

            <FAQCard
              question="Can we use Deals without other Calisto products?"
              answer="Deals requires Calisto Ops as the foundation (properties and contacts). Purview, Assure, and Key are optional but make Deals more powerful when connected."
            />

            <FAQCard
              question="Do we need to change our existing CRM?"
              answer="Many teams start by running Deals alongside their CRM, then migrate fully once workflows are proven. We support data imports and can sync with common CRM systems during transition."
            />

            <FAQCard
              question="How is pricing structured?"
              answer="Deals is priced per agent or team with volume discounts for brokerages. Contact us to discuss your team size and transaction volume."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/deals-footer-cta.jpg"
        title="Turn every listing and buyer into a structured pipeline."
        text="Calisto Deals brings listings, buyers, offers, and commissions into one transaction workspace—connected to the same properties and contacts you manage in Ops."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}