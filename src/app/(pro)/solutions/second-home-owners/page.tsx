import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function SecondHomeOwnersPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-owner-hero.jpg"
        kicker="Solutions · Second Home Owners · Powered by CalistoOS"
        title="Calisto One for Second Home Owners"
        subtitle="Manage your vacation home, villa, or investment property without becoming a professional property manager. Calisto One brings bookings, guest experience, quality monitoring, and device safety into one calm platform—whether you self-manage or work with a local team."
        primaryCTA={{
          text: 'Start your free 14 day trial',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Built for hands-on owners · Villas · Beach houses · Mountain retreats · Investment properties"
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Your challenges"
            heading="You own a beautiful property but managing it is chaos"
            description="Second home owners want rental income and peace of mind—but get inbox overwhelm, maintenance surprises, and no proof of how the property is actually being treated between visits."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Guest communication lives in your personal inbox"
              text="Pre-arrival questions, check-in instructions, mid-stay requests, and post-checkout feedback flood your email and phone—even when you're on vacation yourself."
              list={[
                'Calisto Navigator: Branded guest app',
                'Guests get info without bothering you',
                'Communication organized by booking',
              ]}
            />

            <FeatureCard
              title="You have no idea what's happening at the property"
              text="Did the cleaner show up? Is the temperature stable? Did a pipe leak? You find out when a guest complains or you visit in person."
              list={[
                'Calisto Signal: Device monitoring',
                'Leak, door, temperature alerts',
                'Optional 24/7 monitoring team',
              ]}
            />

            <FeatureCard
              title="Trust but can't verify quality or condition"
              text="You hire cleaners and maintenance but have no photo proof of quality. When damage happens, it's guesswork about who was responsible."
              list={[
                'Calisto Assure: Photo inspections',
                'Before/after every stay',
                'Clear accountability timeline',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto One helps"
            heading="Professional property management without hiring a PM company"
            description="Calisto One gives you the tools property managers use—guest apps, quality tracking, device monitoring—without the 25% commission or loss of control."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Navigator"
              text="Your branded guest app. Guests check in, access house rules, request services, and get digital keys—without texting you personally."
            />

            <CompareCard
              title="Calisto Sync"
              text="Connect Airbnb, Booking.com, VRBO, and direct bookings. One calendar, no double bookings. Rates update everywhere automatically."
            />

            <CompareCard
              title="Calisto Ops"
              text="Booking calendar, cleaner schedules, maintenance tasks, and guest history in one place. Stay organized without spreadsheets."
            />

            <CompareCard
              title="Calisto Assure"
              text="Photo documentation before and after every stay. Know condition, prove quality, settle disputes with evidence."
            />

            <CompareCard
              title="Calisto Signal"
              text="Monitor leaks, doors, temperature, smoke detectors. Get alerts when things go wrong. Optional 24/7 team watches for you."
            />

            <CompareCard
              title="Calisto Key"
              text="Digital keys tied to bookings. No lockbox codes. Access granted when payment clears, revoked at checkout automatically."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Common scenarios"
            heading="How second home owners use Calisto One"
            description="From booking confirmation to post-stay review, Calisto One handles the work while you stay in control."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Booking arrives"
              title="Automatic guest journey starts"
              text="Booking syncs from Airbnb. Navigator sends pre-arrival message. Cleaner task created. You get notification—or not, if you prefer quiet mode."
            />

            <FeatureCard
              meta="Guest arrives"
              title="Check-in without you being there"
              text="Guest completes online check-in in Navigator. Rental agreement signed through Calisto Sign. Digital key issued automatically when payment clears."
            />

            <FeatureCard
              meta="During stay"
              title="You're notified when it matters"
              text="Signal alerts you if water leak detected or door left open. Guest requests extra towels through Navigator—you decide if you handle it or cleaner does."
            />

            <FeatureCard
              meta="After checkout"
              title="Proof of condition, ready for next guest"
              text="Assure inspection photos show condition after stay. Any damage documented with timestamps. Next booking's journey begins automatically."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered by second home owners"
            description="Common questions from villa, beach house, and mountain retreat owners evaluating Calisto One."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is this overkill for one property?"
              answer="No. Calisto One works great for single-property owners who want professional systems without professional overhead. Many start with Navigator + Signal for peace of mind."
            />

            <FAQCard
              question="Do I need to hire a property manager?"
              answer="Not necessarily. Calisto One gives you the tools PMs use. You can self-manage with cleaner/handyman support, or work with a local coordinator without full PM fees."
            />

            <FAQCard
              question="What if I use the property myself sometimes?"
              answer="Block personal use in the calendar. Signal and Assure keep monitoring. Navigator turns off for owner stays. You get the same protection whether renting or using personally."
            />

            <FAQCard
              question="Can I add more properties later?"
              answer="Yes. Many owners start with one vacation home, see the results, then add investment properties or other family homes to the same account."
            />

            <FAQCard
              question="What about local helpers?"
              answer="Give your cleaner, handyman, or local coordinator limited access in Ops. They see their tasks and schedules—not your finances or full guest details."
            />

            <FAQCard
              question="How is pricing for single-property owners?"
              answer="Very affordable. Navigator ($10/month), Signal monitoring ($10/month for devices), Sync ($5/property/month). Most owners spend $25-50/month total."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/solutions-owner-footer.jpg"
        title="Own a second home. Not a second job."
        text="Calisto One brings professional property management tools to hands-on owners—guest apps, quality tracking, device monitoring—without 25% PM commissions or loss of control."
        ctaText="Start your 14 day trial"
        ctaHref="#pricing"
      />
    </>
  );
}