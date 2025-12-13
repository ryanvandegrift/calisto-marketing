import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function PurviewPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/purview-hero.jpg"
        kicker="Calisto One · Real Estate Client Workspace · Powered by CalistoOS"
        title="Calisto Purview: The Client Experience for Real Estate"
        subtitle="Calisto Purview is the client-facing workspace where agents and brokerages send curated listings, organize documents, track next steps, and run e-signing—so clients always know what's happening, what's signed, and what comes next."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Client workspace · Listings · Documents · Timelines · E-sign · Web and mobile"
        tagline="Your team works in Calisto One and your deal workflows. Purview is what the client sees: one organized place for listings, showings, offers, required documents, signing rooms, and milestone updates—under your brand and your process."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The client experience"
            heading="A clear view of the transaction—without inbox chaos"
            description="Purview replaces 'check your email' with a calm, premium workspace. Clients get a secure link where everything lives: curated listings, showing plans, offers, document requests, signatures, and a simple timeline of next steps."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/purview-listings.jpg"
              imageAlt="Curated listing collection"
              meta="Discover"
              title="Curated listings & client collections"
              text="Agents send handpicked listings into Purview as collections. Clients compare, save favorites, and leave feedback in context—so your follow-up is precise and fast."
              list={[
                'Collections per buyer, tenant, or investor.',
                'Favorites, notes, and structured feedback.',
                'Updates when status or pricing changes (optional).',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/purview-route.jpg"
              imageAlt="Showing route planning"
              meta="Visit"
              title="Showing plans, routes & next-step scheduling"
              text="Turn showings into a smooth plan. Clients see itineraries, routes, notes, and what to bring—then confirm or request changes without long email threads."
              list={[
                'Mapped routes and showing itineraries.',
                'Simple confirmations and change requests.',
                'Post-showing feedback that stays tied to the listing.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/purview-timeline.jpg"
              imageAlt="Transaction timeline"
              meta="Progress"
              title="A calm timeline: what's next, what's pending, what's done"
              text="Purview gives clients a simple transaction view: upcoming milestones, required documents, signatures pending, and offers/counters—so clients feel confident and guided."
              list={[
                'Milestones and "next actions" per deal.',
                'Offer, counter, and acceptance visibility.',
                'Status always reflects your live workflow.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Documents & signing"
            heading="One place to collect, review, and sign"
            description="Purview acts like a private deal room. Clients upload requested documents, review drafts, and sign in guided steps—without hunting for attachments or wondering if they signed the latest version."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Document requests that don't get ignored"
              text="Build a clean checklist of required documents (ID, proof of funds, disclosures, corporate docs, lender paperwork). Clients upload to the right place, and your team sees what's missing instantly."
              list={[
                'Smart document checklists by deal type and market.',
                'Uploads tied to the deal record—no drive link sprawl.',
                'Version visibility and "latest file" clarity.',
              ]}
            />

            <FeatureCard
              title="Guided e-signing rooms"
              text="Send offers, counteroffers, disclosures, leases, addenda, and closing packages with a guided signing flow. Clients sign in the correct order and always know what is pending."
              list={[
                'E-sign powered by Calisto Sign.',
                'Property-smart templates with merged deal data.',
                'Audit trails, certificates, and completed packets.',
              ]}
            />

            <FeatureCard
              title="Client clarity: signed, pending, approved"
              text="Purview keeps the client calm. They see exactly what is signed, what needs attention, and what your team is doing behind the scenes."
              list={[
                'Clear "signed vs pending" status at all times.',
                'Final agreements stored and accessible securely.',
                'Less chasing, fewer errors, faster closings.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="For agents & brokerages"
            heading="A premium client layer on top of how you already work"
            description="Purview is designed to fit real-world brokerage operations. Your team keeps their workflows, but clients experience one consistent workspace. Launch it under your brand with your domains, messaging tone, and transaction steps."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Client workspace under your brand"
              text="Your logo, colors, and voice—so your clients feel like they're working with a premium firm, not bouncing between tools."
            />

            <CompareCard
              title="Less admin, fewer mistakes"
              text="Replace ad-hoc email threads and drive folders with a single deal room. Reduce version confusion and missing documents."
            />

            <CompareCard
              title="Client satisfaction & referrals"
              text="Clients feel guided. They see progress. They sign faster. They trust your process—and that creates referrals."
            />

            <CompareCard
              title="Built on CalistoOS"
              text="Purview connects to Calisto One and Calisto Sign so your workflows and your client experience share one reality."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Purview"
            description="Quick answers about setup, client experience, documents, signing, and brokerage deployment."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Who is Calisto Purview for?"
              answer="Purview is built for real estate agents, teams, and brokerages that want a premium client experience for the full transaction—listings, showings, document requests, and signing—without relying on scattered email and drive folders."
            />

            <FAQCard
              question="Is Purview a CRM?"
              answer="No. Purview is the client-facing workspace layer. It complements your CRM by giving clients one place to view progress, upload documents, and sign."
            />

            <FAQCard
              question="How does signing work?"
              answer="Purview uses Calisto Sign for guided e-sign flows. Offers, disclosures, addenda, leases, and closing packages can be generated from templates and signed inside the same workspace where clients see their timeline and documents."
            />

            <FAQCard
              question="Do clients need to download an app?"
              answer="No. Purview opens instantly from a secure link as a web app. Clients can save it to their home screen if they want an app-like experience."
            />

            <FAQCard
              question="Can brokerages brand it?"
              answer="Yes. Purview can be deployed under your branding, domains, and client messaging tone, so it feels like your firm's premium client experience—not another third-party tool."
            />

            <FAQCard
              question="What types of transactions does it support?"
              answer="Purview supports buying, selling, leasing, and investment workflows. You can standardize document checklists and signing sequences per market and deal type."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/purview-footer-cta.jpg"
        title="Give clients a clear view—and a premium experience."
        text="Calisto Purview turns your listings, documents, and signatures into one calm client workspace. Clients know what's next. Your team spends less time chasing paperwork. Deals move faster—with fewer mistakes."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}