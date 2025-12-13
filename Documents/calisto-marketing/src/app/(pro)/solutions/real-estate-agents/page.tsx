import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function RealEstateAgentsPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-agent-hero.jpg"
        kicker="Solutions · Real Estate Agents · Powered by CalistoOS"
        title="Calisto One for Real Estate Agents"
        subtitle="Manage listings, buyer pipelines, showings, and transactions in one unified platform. Calisto One brings client workspaces, digital access, e-signature, and transaction tracking together—so agents can focus on relationships instead of juggling tools."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Built for individual agents · Teams · Sales & leasing · Residential & commercial"
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Your challenges"
            heading="Stop losing deals in email and spreadsheets"
            description="Agents manage listings, buyers, showings, offers, and documents across email, drive folders, CRMs, and portal logins. Critical details slip through the cracks. Clients feel lost in the process."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Clients don't know where they stand"
              text="Buyers ask 'what's next?' Sellers ask 'did they sign?' You spend hours updating people instead of finding deals or negotiating."
              list={[
                'Calisto Purview: Client workspace',
                'Clear timelines and next steps',
                'Automated status updates',
              ]}
            />

            <FeatureCard
              title="Documents and signatures are chaos"
              text="Offers, counteroffers, disclosures, and addenda live in email threads. Clients sign the wrong version. You can't prove who saw what when."
              list={[
                'Calisto Sign: E-signature platform',
                'Property-smart templates',
                'Guided signing workflows',
              ]}
            />

            <FeatureCard
              title="Showings require coordination gymnastics"
              text="Lockbox codes, tenant scheduling, access permissions—every showing is a logistical puzzle. Buyers show up at the wrong time. Keys don't work."
              list={[
                'Calisto Key: Digital access',
                'Time-bound showing access',
                'Automated entry for buyers and agents',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto One helps"
            heading="One platform for clients, listings, transactions & access"
            description="Calisto One replaces scattered tools with a unified agent workspace. Your clients get clarity. Your transactions stay organized. Your showings run smoothly."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Purview"
              text="Client-facing workspace where buyers see curated listings, showing plans, offer status, required documents, and signing tasks—all in one branded portal."
            />

            <CompareCard
              title="Calisto Deals"
              text="Transaction pipeline for listings and buyers. Track mandates, showings, offers, negotiations, and closings with clear next-step visibility."
            />

            <CompareCard
              title="Calisto Sign"
              text="E-signature platform for offers, counteroffers, disclosures, leases, and addenda. Property-smart templates merge deal data automatically."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital access for showings and walkthroughs. Buyers get time-bound entry. You get access logs and security without lockbox hunting."
            />

            <CompareCard
              title="Calisto Ops"
              text="Properties, contacts, and tasks in one hub. Every listing connects to its showing schedule, buyer pipeline, and transaction history."
            />

            <CompareCard
              title="Calisto Assure"
              text="Pre-listing inspections and condition documentation. Prove property quality to buyers and sellers with photo-backed reports."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Common workflows"
            heading="How real estate agents use Calisto One daily"
            description="From listing to closing, Calisto One handles the workflows that consume agents' time."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="New listing"
              title="Mandate to market-ready"
              text="Listing enters Ops. Assure pre-listing inspection documents condition. Photos and details ready for marketing. Showing schedule created."
            />

            <FeatureCard
              meta="Buyer inquiry"
              title="Lead to qualified showing"
              text="Buyer added to Deals pipeline. Curated listings sent to Purview. Showing confirmed. Calisto Key issues time-bound access automatically."
            />

            <FeatureCard
              meta="Offer submitted"
              title="Offer to acceptance"
              text="Offer prepared in Sign using property-smart template. Buyer reviews and signs in Purview. Seller receives notification. Counter-offers tracked in Deals."
            />

            <FeatureCard
              meta="Transaction closing"
              title="Acceptance to keys-in-hand"
              text="Required documents requested in Purview. Buyer uploads proof of funds, ID, disclosures. Final agreements signed. Transaction timeline complete."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered by real estate agents"
            description="Common questions from agents evaluating Calisto One for their practice."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is this a CRM replacement?"
              answer="Calisto Deals can replace your CRM, or work alongside it. Many agents start with Purview (client portal) and Sign (e-signature), then migrate to full Deals pipeline management."
            />

            <FAQCard
              question="Do clients need to download an app?"
              answer="No. Purview opens from a secure link as a web app. Clients can save it to their home screen if they want app-like access."
            />

            <FAQCard
              question="Can I use my existing e-signature tool?"
              answer="Yes. You can use Calisto Sign or integrate your existing tool. Many agents switch to Sign for property-smart templates and better client experience."
            />

            <FAQCard
              question="How does showing access work?"
              answer="Calisto Key integrates with smart locks at listings. Schedule a showing in Ops, buyer gets time-bound digital access. No lockbox codes or key handoffs."
            />

            <FAQCard
              question="What about team collaboration?"
              answer="Teams see shared pipelines, showing schedules, and transaction status. Lead agents control visibility. Support staff handle tasks without full pipeline access."
            />

            <FAQCard
              question="How is pricing structured for agents?"
              answer="Per agent for most products. Purview, Sign, and Key have per-transaction or per-property components. Contact us to discuss your deal volume."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-agent-footer.jpg"
        title="Close more deals with less administrative chaos."
        text="Calisto One brings client portals, transaction pipelines, e-signature, and digital access into one platform—so agents can focus on relationships instead of tool management."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}