import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function ManagingBrokersPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-broker-hero.jpg"
        kicker="Solutions · Managing Brokers · Powered by CalistoOS"
        title="Calisto One for Managing Brokers & Brokerages"
        subtitle="Run real estate offices, teams, and multi-market brokerages with unified operations. Calisto One brings agent pipelines, client workspaces, transaction tracking, compliance, and commission management into one platform—giving brokers visibility without micromanagement."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Built for brokerages · Multi-office operations · Team oversight · Compliance tracking"
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Your challenges"
            heading="Agents use different tools, you have no visibility"
            description="Managing brokers struggle to see pipeline health, transaction status, and compliance across agents and offices. Every agent runs their own system. You piece together reports from spreadsheets and CRM exports."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="No visibility into agent pipelines"
              text="You don't know which deals are real, which buyers are qualified, or where transactions actually stand until agents volunteer updates."
              list={[
                'Calisto Deals: Unified pipeline view',
                'Agent performance by office and market',
                'Deal stages and forecasted closings',
              ]}
            />

            <FeatureCard
              title="Compliance is a constant worry"
              text="Required disclosures, e-signatures, document retention—you rely on agents to 'handle it' but have no proof of compliance when auditors or regulators ask."
              list={[
                'Calisto Sign: Audit trails built-in',
                'Required document tracking',
                'Compliance reports per office and agent',
              ]}
            />

            <FeatureCard
              title="Commission splits are manual nightmares"
              text="Referrals, co-listings, team splits, and sliding scales live in spreadsheets. Errors happen. Disputes follow. Agents complain."
              list={[
                'Calisto Deals: Automated commission calc',
                'Split tracking per deal and agent',
                'Clear revenue reporting for brokers',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto One helps"
            heading="Unified platform for multi-agent, multi-office operations"
            description="Calisto One gives managing brokers the visibility they need without forcing agents into rigid workflows. Agents get tools that make them more productive. Brokers get oversight, compliance, and performance data."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Deals"
              text="Pipeline and transaction management across all agents and offices. Brokers see forecasted closings, deal stages, and agent performance in real-time."
            />

            <CompareCard
              title="Calisto Purview"
              text="Standardized client portals under brokerage branding. Every agent's clients get the same premium experience—listings, documents, signatures, timelines."
            />

            <CompareCard
              title="Calisto Sign"
              text="Brokerage-wide e-signature with compliance built-in. Required disclosures are tracked. Audit trails are automatic. Regulators see documentation, not explanations."
            />

            <CompareCard
              title="Calisto Ops"
              text="Unified operations hub for properties, contacts, and tasks across all agents. Brokers see office-level metrics; agents see their own work."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital access for showings across the brokerage. Security, accountability, and showing analytics—without managing hundreds of lockbox codes."
            />

            <CompareCard
              title="Calisto Assure"
              text="Pre-listing quality inspections standardized across agents. Brokerage maintains quality standards; agents deliver proof to sellers and buyers."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Brokerage benefits"
            heading="What managing brokers gain with Calisto One"
            description="Calisto One transforms brokerage operations from loose agent independence to structured oversight without killing agent productivity."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Pipeline visibility"
              title="See deal flow across offices and agents"
              text="Know which agents have healthy pipelines, which deals are stalled, and what revenue is forecasted—without waiting for weekly meetings or manual reports."
            />

            <FeatureCard
              meta="Compliance confidence"
              title="Audit-ready from day one"
              text="Required disclosures, e-signature audit trails, and document retention are automatic. Regulators ask, you show reports—not scramble for proof."
            />

            <FeatureCard
              meta="Commission accuracy"
              title="Automated splits and referral tracking"
              text="Commission calculations follow brokerage rules automatically. Referrals, co-listings, and team splits are tracked per deal. Disputes become rare."
            />

            <FeatureCard
              meta="Branded client experience"
              title="Premium experience under brokerage brand"
              text="Every client gets the same professional portal, document workflow, and transaction visibility—whether working with a rookie or top producer."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered by managing brokers"
            description="Common questions from brokerage principals evaluating Calisto One for office-wide deployment."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Will agents actually use it?"
              answer="Yes—when it makes their lives easier. Agents adopt Purview (client portals) and Sign (e-signature) fast because clients love them. Pipeline and commission features follow naturally."
            />

            <FAQCard
              question="Can we customize it per office or market?"
              answer="Yes. Document templates, required disclosures, commission structures, and workflows can vary by office, market, or deal type while maintaining brokerage oversight."
            />

            <FAQCard
              question="How does data access work?"
              answer="Agents see their deals. Team leaders see team pipelines. Managing brokers see everything. Owners control visibility rules based on office structure."
            />

            <FAQCard
              question="What about agent independence?"
              answer="Agents maintain control of their client relationships and deal strategies. Brokers get visibility into pipeline health, compliance status, and performance—not micromanagement."
            />

            <FAQCard
              question="Can we phase it in office by office?"
              answer="Absolutely. Many brokerages start with one office or top-performing team, prove the model, then roll out to additional offices and markets."
            />

            <FAQCard
              question="How is brokerage pricing structured?"
              answer="Per agent with volume discounts for large offices. Some products (Purview, Sign) have per-transaction components. Contact us to discuss your brokerage structure."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-broker-footer.jpg"
        title="Run a modern brokerage with unified operations and real visibility."
        text="Calisto One brings agent pipelines, client portals, compliance tracking, and commission management into one platform—giving managing brokers the oversight they need without killing agent productivity."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}