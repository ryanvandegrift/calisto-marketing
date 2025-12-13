import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function SignalPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-os/smarthome-hero-cables.jpg"
        kicker="Calisto Signal · Matter-first safety & device hub · Powered by CalistoOS & Azure"
        title="Calisto Signal: Safety & Device Hub for Homes, Villas & Hotels"
        subtitle="Calisto Signal is the safety, security, and environment layer for Calisto One. Devices send signals; CalistoOS and Azure IoT turn them into calm, structured alerts inside your operations hub. Use it to watch leaks, motion, doors, smoke, temperature, and more—then add Calisto 24·7 Monitoring when you want a live team to watch those alerts and handle incidents for you, day and night."
        primaryCTA={{
          text: 'See how Calisto Signal works',
          href: '#how-it-works',
        }}
        secondaryCTA={{
          text: 'Explore Signal kits & add-ons',
          href: '#pricing',
        }}
        meta="Matter-first devices · Azure IoT backbone · Built for homes, villas, hotels & mixed portfolios · Baseline Signal logging included with Calisto One · Optional Calisto 24·7 Monitoring for managed response"
        tagline="CalistoOS is the engine. Calisto One is the hub. Calisto Signal is the layer that connects every smart device to the work your teams already do."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Signal"
            heading="From random device apps to a unified safety layer"
            description="Most 'smart security' systems live in their own apps and send noisy notifications to the wrong people. Calisto Signal lives in your operations. Devices connect through IoT Hub; events land in Calisto One as structured alerts, tasks, and incidents tied to the right property, room, and owner—ready for your team or Calisto 24·7 to act on."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Alerts that land where teams already work"
              text="Door sensors, leak detectors, cameras, and smoke alarms all flow into Signal. Instead of living in hardware apps, alerts show up in Calisto Ops and your Signal views, connected to bookings, tasks, and owners. One place to see what happened and what needs to happen next."
            />

            <CompareCard
              title="Security, safety & environment in one layer"
              text="Signal looks after intrusion, life safety, and environment at the same time: doors, motion, glass break, smoke, CO, leaks, temperature, humidity, and more. You define which risks matter at each property; Signal routes the right events to the right playbooks."
            />

            <CompareCard
              title="Matter-first hardware, Azure backbone"
              text="Under the hood, Signal favors Matter-over-Thread and other modern, API-capable devices, all connected via Azure IoT and normalized in CalistoOS. You keep flexibility on brands and models while owners and guests just experience quiet, reliable protection."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent" id="how-it-works">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How Calisto Signal works"
            heading="From device ping to documented action in four clean steps"
            description="Calisto Signal turns devices you already trust into a single safety layer. IoT Hub connects hardware, Signal classifies events, and Calisto Ops turns them into work. When you want a live team watching those alerts and handling incidents, you add Calisto 24·7 Monitoring on top—Signal stays the hub for every device and event."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Step 1"
              title="Connect devices through Calisto IoT Hub"
              text="Start by registering your cameras, leak sensors, smoke detectors, climate probes, and other devices in Calisto Ops. Calisto IoT Hub links each device to a property, room, or zone and streams telemetry into Azure IoT. You can use curated Calisto Signal kits from the Signal store or map the hardware you already own."
              list={[
                'Central device registry per account, property, and room',
                'Support for Matter and approved non-Matter devices',
                'Health metrics for connectivity, battery, and last signal',
              ]}
            />

            <FeatureCard
              meta="Step 2"
              title="Define risks, thresholds & playbooks"
              text="In Calisto Signal, you define what 'normal' looks like and what should happen when devices cross a line: water where it should be dry, motion when a room is empty, high CO readings, or a freezer drifting out of range. Those rules are stored against each property, owner, and brand standard."
              list={[
                'Per-property and per-portfolio alert rules',
                'Quiet hours, escalation paths, and severity levels',
                'Different playbooks for homes, villas, and hotels',
              ]}
            />

            <FeatureCard
              meta="Step 3"
              title="Turn events into tickets, tasks & incidents"
              text="When a device fires, Signal classifies the event and sends it into Calisto One. Many alerts become simple logs; some create tasks in Ops for your team; the rare critical ones can create incidents with timelines and owners. Every step is tied to the right property, stay, or room key."
              list={[
                'Event streams organized by device, property, and portfolio',
                'Automatic task creation for follow-up work',
                'Incident timelines with who responded and what happened',
              ]}
            />

            <FeatureCard
              meta="Step 4"
              title="Keep alerts in-house or plug in Calisto 24·7"
              text="By default, your teams can watch and respond to Signal alerts inside Calisto Ops and Navigator. When a property really matters, you can enable Calisto 24·7 Monitoring so our AI and human team watch those alerts, filter false alarms, make calls, and follow your response protocol—Signal stays the hub, 24·7 becomes the incident team."
              list={[
                'Self-service alert views for internal teams and owners',
                'Opt-in Calisto 24·7 Monitoring per property or portfolio',
                'Detailed incident reports for owners and asset managers',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Devices & use cases"
            heading="One safety layer across doors, leaks, air, motion & climate"
            description="Calisto Signal works across a catalog of recommended devices plus approved alternatives. Use starter kits for simple homes or design full-stack coverage for multi-building hotels and portfolios, all connected into the same device hub and alert engine."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-os/smarthome-entry-security.jpg"
              imageAlt="Modern entry door with smart lock and sensors installed"
              meta="Entry & access"
              title="Doors, gates & service entries"
              text="Monitor opening, closing, and forced entry at doors, gates, garages, and staff entrances. Signal watches for events outside normal patterns and can pair with Calisto Key–compatible locks so you know both who should have access and what actually happened at the door."
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-os/smarthome-fire-air.jpg"
              imageAlt="Technician installing a smart smoke detector on a ceiling"
              meta="Fire & air safety"
              title="Smoke, CO & air quality"
              text="Tie smoke, CO, and air quality sensors into continuous logging and alerting. Signal records every alarm, follows your escalation rules, and keeps permanent records—whether it was a burnt toast moment in a studio or a serious event on a hotel floor."
            />

            <FeatureCard
              image="https://calistomedia.blob.core.windows.net/calisto-os/smarthome-water-protection.jpg"
              imageAlt="Water leak at a copper pipe near a hot water heater in a utility room"
              meta="Water & leaks"
              title="Smart water protection & shut-off"
              text="Leak sensors under sinks, in risers, behind washers, and near boilers notify Signal at the first sign of water. Depending on your playbook, that can mean owner alerts, Calisto Tasks dispatch, or smart shut-off valves where supported."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Signal"
            description="The most common questions from owners, property managers, hotel teams, and real estate professionals adding Calisto Signal and 24·7 Monitoring to their Calisto One stack."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is Calisto Signal a hardware brand or a software layer?"
              answer="Calisto Signal is a software and device hub layer, not a hardware manufacturer. It connects to supported sensors, cameras, locks, and hubs by API and bridge technologies. You can use Calisto-recommended kits or approved third-party devices that meet our standards."
            />

            <FAQCard
              question="What's the difference between Signal and 24·7 Monitoring?"
              answer="Signal is the always-on device and alert layer built into Calisto One—your team can see device events and respond to alerts themselves. 24·7 Monitoring is an add-on service where Calisto's AI and human team watch those alerts for you, filter false alarms, call contacts, coordinate help, and file incident reports according to your protocols."
            />

            <FAQCard
              question="Do you really monitor 24/7?"
              answer="Yes—for properties where 24·7 Monitoring is enabled. Signal continues to log alerts around the clock for every device, and for monitored properties our AI and call-handling team are on duty at all hours to review events and act based on your chosen response preferences."
            />

            <FAQCard
              question="Are we locked into a single hardware vendor?"
              answer="No. Signal is designed as a Matter-first, Azure-backed layer that works with a curated list of recommended devices plus approved alternatives. During onboarding we review your current or planned hardware stack, confirm what we can connect, and map any gaps or upgrade paths."
            />

            <FAQCard
              question="Can Signal work for DIY owners as well as managed portfolios?"
              answer="Yes. Signal supports both. Property managers and brokerages often resell Signal and 24·7 Monitoring, while DIY owners use Signal alone through Navigator for visibility and simple alerts in the homes they care about most."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-os/smarthome-footer-night-view.jpg"
        title="Connect every device. Decide who watches the alerts."
        text="Calisto Signal connects Matter-first devices, local teams, and optional 24·7 Monitoring into one calm system inside Calisto One. Start with your most important homes or hotel keys and expand across your portfolio as your hardware and standards evolve."
        ctaText="See how Calisto Signal works"
        ctaHref="#how-it-works"
      />
    </>
  );
}