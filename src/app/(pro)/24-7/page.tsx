import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function TwentyFourSevenPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-247/calisto-247-hero.jpg"
        kicker="Calisto 24·7 · Live coverage for phones, messages & Signal alerts · Powered by CalistoOS"
        title="Calisto 24·7: Live coverage for homes, villas & hotels"
        subtitle="Calisto 24·7 is the live coverage layer for Calisto One. A real team watches your phones, channel messages, and Signal alerts at all hours and follows your call scripts and playbooks for guests, owners, buyers, and partners. You stay fully present in meetings and appointments. Every interruption is handled, documented, and waiting for you as a clear list in the morning."
        primaryCTA={{
          text: 'View plans & pricing',
          href: '#pricing',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="24/7 live coverage · Logged into Calisto Ops inside Calisto One · Designed for property managers, hotel operators, real estate teams and brokerages, and hands-on owners"
        tagline="CalistoOS is the engine. Calisto One is the hub. Calisto 24·7 is the assistant that never goes off duty."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Always on, never improvised"
            heading="One calm team behind every late-night interruption"
            description="Calisto 24·7 gives you a branded, always-awake front desk for phones, channel messaging, and Signal alerts. Every interaction follows your call scripts and incident playbooks and is logged directly into Calisto Ops inside Calisto One, so you wake up to a clear list instead of guesswork."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="24·7 Calling"
              text="We answer your phone with your greeting, your call scripts, and your priorities at any time of day. Urgent calls escalate to the right person. Everything else is documented in Ops with a clear summary linked to the right property, guest, or client so nothing is lost overnight. Turn 24·7 Calling on when you need coverage and off when you want to take calls yourself."
            />

            <FeatureCard
              title="24·7 Messaging"
              text="We handle channel messaging from Booking.com, Airbnb, and Navigator (your Calisto guest app) under your brand. Guests and owners receive fast, consistent replies even when you are in a showing, on-site at a property, or in a board meeting. We resolve what we can and queue the rest for you in Calisto One with full context and next steps."
            />

            <FeatureCard
              title="24·7 Monitoring (from Signal)"
              text="Calisto Signal logs events from doors, leaks, smoke, temperature, and more. When you turn on 24·7 Monitoring, our team watches those alerts for you. We triage, follow your incident protocols, coordinate help, and document each incident with a clear timeline—so you get calm reports instead of a pile of device notifications."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Who Calisto 24·7 supports"
            heading="Coverage that lets your team stay present"
            description="The same 24·7 backbone works for homes, villas, hotels, and real estate offices. Each client gets a customized playbook and call scripts. Your team gets a single source of truth in Calisto One and the freedom to focus on site visits, showings, and strategy without worrying about missed calls."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Property managers and PM companies"
              text="Late arrivals, maintenance emergencies, and nervous guests are handled with calm, scripted responses. Every call, channel message, and monitored incident lands in Ops and is tied to the right booking, property, or owner—so you can be on site or in a handover meeting without checking your phone every few minutes."
            />

            <FeatureCard
              title="Hands-on property owners"
              text="Manage your own rentals without living on your phone. We cover overnight calls and messages from guests, neighbors, and building staff. You start the day with a simple summary in Calisto One and decide what to handle yourself."
            />

            <FeatureCard
              title="Hotel and hospitality operators"
              text="Extend your front desk beyond lobby hours. We act as your quiet, brand-safe switchboard for guest calls, lockouts, and Signal alerts across rooms and back of house. Everything is linked to room keys, stays, and incidents in Ops wherever those structures exist, so managers can step away knowing coverage is still live."
            />

            <FeatureCard
              title="Real estate agents and brokerages"
              text="Stop losing leads to voicemail. While you are at listing appointments, on showings, or negotiating at the table, 24·7 captures inquiries, uses your scripts to qualify urgency, and creates follow ups and deals in Calisto One. You come out of a meeting to structured opportunities, not a missed-call list."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto difference"
            heading="Not just an answering service"
            description="Traditional answering services sit in their own tools. Calisto 24·7 is wired directly into Calisto One so every call, channel message, and Signal alert becomes a structured step in your workflows, backed by the same property, guest, and owner data you use during the day."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Brand-safe, scripted coverage"
              text="We speak in your voice with greetings, call scripts, frequently asked questions, and protocols tuned for your mix of homes, villas, hotel keys, and clients. Owners and guests feel like they are talking to your team, not a generic call center."
            />

            <CompareCard
              title="Integrated with Signal and Key"
              text="When a Signal alert fires or a guest is locked out, 24·7 steps in. We follow your Signal playbooks, coordinate local help, and—when Calisto Key is in place—assist with digital access without exposing raw lock apps to guests."
            />

            <CompareCard
              title="Portfolio-ready from day one"
              text="Monitor one home or hundreds of keys. 24·7 scales across single properties, PM portfolios, hotel stacks, and multi-office brokerages. Everything is organized by property, room, owner, or account inside Calisto One."
            />

            <CompareCard
              title="Full audit trail, zero guesswork"
              text="Every interaction and monitored incident is logged with time, channel, person, and outcome. You can review the history of calls, message threads, and incident timelines for owners, boards, and brand audits without digging through separate systems."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto 24·7"
            description="Here are some of the most common questions from property managers, hotel operators, real estate teams, brokerages, and hands-on owners who add 24·7 to their Calisto One stack."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Do you really answer 24/7?"
              answer="Yes. Our team is available every hour of every day, including weekends and holidays. Your callers and guests always speak with a real person who follows your scripts and priorities, and every interaction is logged in Calisto Ops."
            />

            <FAQCard
              question="How does the $10 monthly fee for calling work?"
              answer="The $10 monthly fee covers your account setup, routing, call scripts, and reporting. For homes and villas it is applied per account or portfolio. For hotels it is applied per property. On top of that, you pay $2.50 per minute of actual talk time, billed monthly in arrears."
            />

            <FAQCard
              question="Are messages really unlimited?"
              answer="Yes. For homes and villas, each property on 24·7 Messaging is covered at $10 per month. For hotels and multi unit buildings, each room is covered at $5 per month. Within those structures, channel messaging is unlimited under a fair use policy that fits hospitality and real estate workloads."
            />

            <FAQCard
              question="What is included in 24·7 Monitoring from Signal?"
              answer="Signal itself logs all device events into Calisto One. 24·7 Monitoring is the upgrade where our team watches those alerts in real time, filters noise, follows your incident protocols, notifies contacts, coordinates local help, and files a clear incident report after each event, with a transparent per-incident fee."
            />

            <FAQCard
              question="Do guests or owners know Calisto is answering?"
              answer="No. We present ourselves as your team, using your greeting, signatures, and brand name. From the perspective of the caller or guest, they are speaking with your office or front desk."
            />

            <FAQCard
              question="Do I need Calisto Signal or Key to use 24·7?"
              answer="You can use 24·7 on its own, but it becomes much more powerful when it is paired with Signal and Key. With Signal, we can respond to leaks, alarms, and environment alerts. With Key, we can follow your lockout and access playbooks without relying on ad hoc solutions."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-247/calisto-247-footer-cta.jpg"
        title="Sleep well, stay present. Calisto 24·7 is on duty."
        text="Calisto 24·7 keeps your phones, inboxes, and Signal alerts covered without burning out your team. Tell us about your properties, rooms, and current tools, whether you are a PM company, hotel operator, real estate office, or hands-on owner, and we will size the right mix of Calling, Messaging, and Monitoring inside Calisto One—so you can stay fully present where it matters most."
        ctaText="Schedule an intro call"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}