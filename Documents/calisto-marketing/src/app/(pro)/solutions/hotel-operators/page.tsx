import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function HotelOperatorsPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-hotel-hero.jpg"
        kicker="Solutions · Hotel Operators · Powered by CalistoOS"
        title="Calisto One for Hotel Operators"
        subtitle="Run boutique hotels, aparthotels, and serviced apartment buildings with modern operations technology. Calisto One brings guest experience, housekeeping coordination, quality control, and device monitoring into one platform—designed for operators who want control without enterprise PMS complexity."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Built for boutique hotels · Aparthotels · Serviced apartments · Multi-unit operations"
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Your challenges"
            heading="Legacy hotel systems that slow you down"
            description="Traditional hotel PMSs are expensive, inflexible, and built for large chains. You need the operational control of a real hotel system without the cost and complexity designed for 500-room properties."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Guest experience feels dated"
              text="Paper check-in forms, manual ID verification, and scattered communication channels make your boutique hotel feel less premium than it should."
              list={[
                'Calisto Navigator: Modern guest app',
                'Online check-in and digital keys',
                'Branded, mobile-first experience',
              ]}
            />

            <FeatureCard
              title="Housekeeping runs on WhatsApp and spreadsheets"
              text="Room assignments, task completion, and supply requests live in chat groups and Excel files. No visibility, no accountability, constant miscommunication."
              list={[
                'Calisto Ops: Structured housekeeping',
                'Room-by-room task assignment',
                'Real-time completion tracking',
              ]}
            />

            <FeatureCard
              title="No proof of condition or quality standards"
              text="You trust your team but can't prove room condition to guests or management. When disputes happen, it's your word against theirs."
              list={[
                'Calisto Assure: Photo documentation',
                'Before/after room inspections',
                'Quality reports per floor and building',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto One helps"
            heading="Hotel operations without enterprise PMS pricing"
            description="Calisto One gives you the operational control you need—guest apps, housekeeping coordination, quality tracking, and device monitoring—without forcing you into a legacy PMS designed for Marriott."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Navigator"
              text="Your branded guest app. Guests check in online, access digital keys, request services, and communicate—all under your hotel's name and style."
            />

            <CompareCard
              title="Calisto Ops"
              text="Operations hub for rooms, bookings, tasks, and team coordination. Housekeeping sees their routes; managers see everything; accountability is automatic."
            />

            <CompareCard
              title="Calisto Assure"
              text="Room-by-room quality proof. Inspectors photograph condition before guests arrive and after they leave. Disputes become rare; standards become visible."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital room keys tied to bookings. Guests receive access when check-in is complete. Keys revoke at checkout. No more physical key tracking."
            />

            <CompareCard
              title="Calisto Signal"
              text="Monitor doors, leaks, temperature, and safety devices across all rooms. Alerts create maintenance tasks automatically. Optional 24/7 monitoring available."
            />

            <CompareCard
              title="Calisto 24·7"
              text="Extend your front desk beyond lobby hours. Live team handles guest calls, messages, and device alerts after hours—logged into your operations."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Common workflows"
            heading="How hotel operators use Calisto One daily"
            description="From reservation to checkout, Calisto One handles multi-room operations without legacy PMS complexity."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Reservation confirmed"
              title="Guest journey begins automatically"
              text="Booking enters Ops (direct or via Sync). Navigator sends pre-arrival message with online check-in link. Room assignment happens in Ops. Housekeeping tasks created."
            />

            <FeatureCard
              meta="Check-in day"
              title="Contactless arrival, digital keys"
              text="Guest completes online check-in via Navigator. ID verified, payment confirmed, agreement signed. Calisto Key issues room access automatically."
            />

            <FeatureCard
              meta="During stay"
              title="Service requests and housekeeping coordination"
              text="Guest requests extra towels via Navigator. Request becomes task in Ops assigned to housekeeping. Completion logged. Guest notified automatically."
            />

            <FeatureCard
              meta="After checkout"
              title="Room inspection and next guest prep"
              text="Assure inspection documents room condition. Any issues flagged for maintenance. Room status updates. Next guest's journey begins seamlessly."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered by hotel operators"
            description="Common questions from boutique hotels and aparthotel operators evaluating Calisto One."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is Calisto One a PMS replacement?"
              answer="It can be. Many boutique hotels use Calisto One as their complete operations platform. Others integrate it alongside legacy systems, using Calisto for guest experience and quality while keeping PMS for accounting."
            />

            <FAQCard
              question="Does it work for multi-building properties?"
              answer="Yes. Calisto One supports single buildings, multi-building campuses, and distributed aparthotel portfolios across cities. All managed from one platform."
            />

            <FAQCard
              question="Can we keep our existing channel manager?"
              answer="Yes. You can use Calisto Sync or keep your current channel manager and integrate bookings into Calisto One via API or manual entry."
            />

            <FAQCard
              question="What about front desk operations?"
              answer="Calisto Navigator reduces front desk workload through online check-in and digital keys. For properties with staffed lobbies, the front desk uses Ops for guest management."
            />

            <FAQCard
              question="How is pricing structured for hotels?"
              answer="Per room for most products. Example: Navigator at $10/room/month, Assure at $10/room/month. Volume discounts for larger properties. Contact us for portfolio pricing."
            />

            <FAQCard
              question="Can we trial it with a few rooms first?"
              answer="Absolutely. Many hotels start with a single floor or building, prove the workflow, then expand to the full property or portfolio."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-hotel-footer.jpg"
        title="Modern hotel operations without enterprise complexity."
        text="Calisto One brings guest apps, housekeeping coordination, quality tracking, and device monitoring to boutique hotels and aparthotels—without forcing you into legacy PMS pricing."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}