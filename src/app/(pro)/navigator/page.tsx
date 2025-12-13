import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';
import CTABox from '@/components/shared/CTABox';

export default function NavigatorPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/navigator-hero.jpg"
        kicker="Calisto One · Guest Experience · Powered by CalistoOS"
        title="Calisto Navigator: The Guest App for Modern Hospitality"
        subtitle="Calisto Navigator is a branded guest experience app for property managers and hotels—built on CalistoOS and connected to Calisto One. It brings booking details, online check-in, ID flows, agreements, guest messaging, upsells, and digital access into one calm place your guests actually use."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Guest app · Web and mobile · Online check-in · Agreements · Upsells · Messaging · Digital keys"
        tagline="Calisto One is the operations hub your teams use every day. Navigator is the guest layer on top: guests check in, verify identity, sign agreements, request services, and access digital keys—while your team keeps control of workflows, compliance, and operations behind the scenes."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The guest journey"
            heading="From confirmation to check-out—everything in one place"
            description="Navigator replaces scattered links, PDFs, and inbox chaos with one branded guest experience. Guests receive a secure link that opens instantly on any device—no app store download required."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/navigator-portal-trip.jpg"
              imageAlt="Guest trip dashboard on a phone"
              meta="Before arrival"
              title="Trip view that guests trust"
              text="Confirmation details, dates, address, directions, house rules, and check-in instructions—always up to date because Navigator reads from your operational source of truth."
              list={[
                'Instant access from a confirmation link.',
                'Trip details, instructions, and key info in one view.',
                'Branded experience under your name, logo, and tone.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/navigator-built-on-ops.jpg"
              imageAlt="Guest check-in process visual"
              meta="Arrival readiness"
              title="Online check-in, ID capture & verification"
              text="Navigator guides guests through online check-in, ID upload, and required steps by country or property type. Your team stays compliant without creating manual workflows."
              list={[
                'Pre-arrival registration flows tuned for PMs and hotels.',
                'Configurable ID capture and KYC by market.',
                'Status visible to your team inside Calisto One.',
              ]}
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-one/navigator-experience.jpg"
              imageAlt="Digital key and access instructions"
              meta="Access"
              title="Agreements, payments & digital keys—connected"
              text="When required steps are complete—check-in, verification, payment—Navigator becomes the place guests see agreements, lock instructions, and digital keys. No more 'where is the code?' messages."
              list={[
                'Agreements generated and signed via Calisto Sign.',
                'Keys powered by Calisto Key, gated by your rules.',
                'Access instructions and support built into the same flow.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Revenue & service"
            heading="Upsells, messaging, and requests—without chaos"
            description="Navigator is not just check-in. It's a guest commerce and service layer that keeps requests organized and creates new revenue without commissions on your upsells."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Upsells that guests actually buy"
              text="Offer early check-in, late checkout, transfers, cleaning add-ons, concierge services, and more—presented in context at the right moment in the trip."
              list={[
                'Configurable service catalog per brand, property, or portfolio.',
                'Keep 100% of upsell revenue (no per-transaction commission).',
                'Requests route into Ops and field workflows.',
              ]}
            />

            <FeatureCard
              title="Messaging that stays tied to the trip"
              text="Guests message from one clean thread tied to the right reservation. Your team replies with full context in Calisto One—no hunting through inboxes."
              list={[
                'Threads organized per booking and property.',
                'Works alongside email and WhatsApp flows.',
                'Conversation history stays with the reservation record.',
              ]}
            />

            <FeatureCard
              title="Digital guidebooks & stay essentials"
              text="Give guests a calm, beautiful guide: house rules, WiFi, parking, check-out steps, local recommendations, and emergency info—organized and always current."
              list={[
                'Welcome guides, FAQs, and house manuals.',
                'Property-specific essentials and instructions.',
                'Reduce repetitive guest questions dramatically.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Navigator"
            heading="A guest app that feels premium—and runs on real operations"
            description="Many guest apps focus on the front end. Navigator is different: it is built on Calisto One, so the guest experience reflects the same live data your team operates from—bookings, tasks, messages, policies, and access rules."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto One · Operations Hub"
              text="Properties, contacts, bookings, tasks, and workflows live in Calisto One. Navigator reads from this single source of truth so guests always see accurate dates, instructions, status, and services."
            />

            <CompareCard
              title="Calisto Sign"
              text="Generate and send rental agreements using property-smart templates. Guests review and sign without leaving the Navigator experience."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital keys appear only after required conditions are met. Keys, instructions, and support stay connected to the reservation record—reducing lockouts and confusion."
            />

            <CompareCard
              title="Calisto Ops"
              text="Service requests become tasks and workflows. Your team keeps control—without bouncing between systems or losing context."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Navigator"
            description="Quick answers about setup, check-in, ID flows, agreements, keys, messaging, upsells, and deployment."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Who is Calisto Navigator for?"
              answer="Navigator is built for property managers, vacation rental operators, hotels, and serviced apartment groups that want a modern guest experience without adding portals, PDFs, and manual processes."
            />

            <FAQCard
              question="Do guests need to download an app?"
              answer="No. Navigator opens instantly from a secure link as a web app. Guests can save it to their home screen for an app-like experience, but there is no app store download required."
            />

            <FAQCard
              question="Can we configure check-in and ID requirements per market?"
              answer="Yes. You can configure required steps by country, brand, and property type. Navigator collects the data and keeps status visible to your team inside Calisto One."
            />

            <FAQCard
              question="How do agreements and keys work together?"
              answer="Calisto Sign generates the right rental agreement automatically, and Calisto Key issues keys only when your conditions are met (for example: check-in complete, ID verified, payment confirmed)."
            />

            <FAQCard
              question="Do you take a commission on upsells?"
              answer="No. Upsells and service requests are yours. Navigator supports guest commerce without per-transaction commissions."
            />

            <FAQCard
              question="How fast can we launch?"
              answer="Many teams launch a basic guest journey quickly (trip view + check-in). Then they layer in agreements, keys, messaging, upsells, and service catalogs as they standardize operations."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/navigator-footer-cta.jpg"
        title="Give every guest a calm, modern experience."
        text="Calisto Navigator turns online check-in, verification, agreements, messaging, upsells, and digital access into one branded guest journey—built on real operations in Calisto One."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}