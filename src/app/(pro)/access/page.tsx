import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function KeyPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/key-hero.jpg"
        kicker="Calisto Key · Digital access platform · Powered by CalistoOS"
        title="Calisto Key: Digital Access for Guests, Owners & Teams"
        subtitle="Calisto Key turns bookings, tasks, and visits into digital keys that work the way your operations work. Use it on its own as your access platform or plug it into Calisto One so your locks, stays, and fieldwork all run from the same source of truth."
        primaryCTA={{
          text: 'See how Calisto Key works',
          href: '#how-it-works',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Works with modern smart locks · Built on your Microsoft stack · Ready for single homes, villas, boutique hotels, and portfolios"
        tagline="CalistoOS is the engine. Calisto One is the hub. Calisto Key is your digital front door."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Key"
            heading="Digital keys that start from your operations, not a siloed app"
            description="Most digital key systems live in their own world or bolt onto a single PMS. Calisto Key lives in your operations hub. Bookings, stays, viewings, and tasks already sit in Calisto Ops or your existing systems. Calisto Key turns that context into secure, time bound access for everyone who needs it across stays, showings, and service visits."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Keys that follow bookings and tasks"
              text="When a guest checks in, a viewing is scheduled, or a maintenance visit is created in Calisto Ops, Calisto Key issues the right digital key automatically. When the stay ends, the viewing is over, or the task is closed, access is revoked without anyone collecting cards or changing codes by hand."
            />

            <CompareCard
              title="Access for guests, owners, staff, and vendors"
              text="Calisto Key uses your unified people database to grant access by role: guests for their stay, owners for their homes, housekeepers and maintenance by schedule, and vendors by appointment. Everyone gets what they need and nothing they do not, whether you run a single home or a global brand."
            />

            <CompareCard
              title="Built on Microsoft and CalistoOS"
              text="Under the hood, Calisto Key runs on Azure, integrates with Dynamics and Microsoft IoT Hub, and uses CalistoOS as the shared data model. You keep the power of your Microsoft stack while owners and guests simply experience smooth, secure access under your brand."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent" id="how-it-works">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto Key works"
            heading="From booking to door unlock in four clean steps"
            description="Calisto Key turns the workflows you already run in Calisto One into digital access flows. If you are not on Calisto One yet, you can start with manual entries, CSV imports, or API connections to your PMS and upgrade when you are ready."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Step 1"
              title="Check in, verification and payment in Navigator"
              text="Guests and clients complete online check in, ID verification, and payment in Calisto Navigator. Owners and agents confirm visits and showings. Once conditions are met, Calisto Ops marks the booking, stay, or appointment as ready for digital access."
              list={[
                'Online check in and KYC flows',
                'Deposits and balances collected before access',
                'Eligibility rules configured once and reused everywhere',
              ]}
            />

            <FeatureCard
              meta="Step 2"
              title="Rooms, units and roles from Calisto Ops"
              text="Calisto Ops knows who is staying, visiting, or working where. It links bookings, tasks, and deals to specific rooms and units. It defines roles for guests, owners, staff, and vendors. Calisto Key uses this structure to decide which doors each person should be able to open and when."
              list={[
                'Property and room master data reused for access',
                'Role based access for guests, owners, staff, and vendors',
                'Time windows tied to stays, viewings, or service windows',
              ]}
            />

            <FeatureCard
              meta="Step 3"
              title="Digital key issuance to phones and apps"
              text="When a stay or visit reaches the right status, Calisto Key talks to your smart lock providers. It creates or updates time bound credentials and delivers them through your chosen guest experience: wallet passes, app based keys, PIN codes, or a mix of all three."
              list={[
                'API based integrations with modern smart lock systems',
                'Support for mobile keys, wallet passes, and PINs',
                'Automatic revocation at check out or after appointments',
              ]}
            />

            <FeatureCard
              meta="Step 4"
              title="Monitoring, logs and support with Signal and 24·7"
              text="Lock events feed into Calisto Signal and Calisto Ops. Lockouts, battery alerts, and repeated failed attempts become tasks, tickets, or alerts. Signal is included for Calisto Key and Calisto Ops subscribers so you always see what is happening at the door."
              list={[
                'Access events logged per property, room, and stay',
                'Issues escalated into tasks or tickets automatically',
                'Included Signal monitoring, with optional 24·7 human response for lockouts',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Key"
            description="Here are some of the most common questions from hotels, property managers, and real estate teams that are considering Calisto Key as their digital access layer, either on its own or inside Calisto One."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="How is Calisto Key priced, and what is included?"
              answer="Calisto Key is priced per lock on monthly terms, starting around US$6 per lock per month with a free trial so you can validate the setup. Every Calisto Key subscription includes Calisto Signal monitoring at no additional cost, so you see access events and device health from day one."
            />

            <FAQCard
              question="Is Calisto Key a lock brand or a software layer?"
              answer="Calisto Key is a software layer and access brain, not a lock manufacturer. It connects to supported smart lock providers by API and to your Microsoft stack. It ties access to bookings, tasks, and deals so you are not locked into a single hardware vendor or a single PMS."
            />

            <FAQCard
              question="Which smart locks and systems can Calisto Key work with?"
              answer="Calisto Key is designed to work with modern, API capable lock ecosystems that are used in hotels, vacation rentals, and multifamily properties. We start with your current or planned hardware stack and map out an integration path, then standardize the logic in CalistoOS so it feels consistent across brands and markets."
            />

            <FAQCard
              question="Do guests need to download a separate app?"
              answer="Not necessarily. Many teams choose wallet based keys or one tap links through Calisto Navigator so guests never need a separate app. If you prefer an app experience, Calisto Key can also power keys inside your branded guest app. The access logic is the same in both cases."
            />

            <FAQCard
              question="Can we use Calisto Key without Calisto One or changing PMS?"
              answer="Yes. You can start with Calisto Key as a standalone access platform. Add reservations and visits manually, import them from CSV, or connect through our API or Power Automate. When you are ready, you can connect Calisto Key to Calisto One or swap PMS without losing your access history or rules."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/key-footer-cta.jpg"
        title="Turn every booking and visit into seamless, secure access."
        text="Calisto Key brings digital keys into the same place where you already run operations, quality, and client journeys. Start with a free trial, then grow from a single smart lock to a global portfolio while you keep full control from Calisto One."
        ctaText="See how Calisto Key works"
        ctaHref="#how-it-works"
      />
    </>
  );
}