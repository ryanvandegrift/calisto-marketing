import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function CollectionHomePage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/collection-hero.jpg"
        kicker="Calisto Collection · Flagship Portfolio · Operated on Calisto Pro"
        title="Calisto Collection: Flagship Homes, Villas & Hotels Operated by Calisto"
        subtitle="Calisto Collection is the private portfolio of homes, villas, and boutique hotels operated by Calisto. It brings three programs—Calisto Hosting, Calisto Management, and Calisto Boutique—under one calm, owner-facing brand, all powered by CalistoOS and coordinated through Calisto Pro with Calisto Key, Calisto Signal, and Calisto 24·7 behind every stay and visit."
        primaryCTA={{
          text: 'Explore the Collection',
          href: '#programs',
        }}
        secondaryCTA={{
          text: 'Talk to our team',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        meta="Flagship villas · Second homes · Boutique hotels · Long-term operating partnerships"
        tagline="CalistoOS is the engine, Calisto Pro is the platform, and Calisto Collection is where that stack comes to life. Calisto Key, Calisto Signal, and Calisto 24·7 add digital access, live signals, and human response so every key you own feels quietly protected."
      />

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto ecosystem"
            heading="A private portfolio, powered by a shared operating system"
            description="Calisto Collection is the owner-facing brand for properties operated by Calisto. Behind the scenes, every stay, visit, inspection, project, and alert runs on CalistoOS and is orchestrated through Calisto Pro. Owners experience a calm, consistent service layer. Our teams work from a single, disciplined system that knows your properties, keys, signals, and guests."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto Collection · The private portfolio"
              text="A curated group of homes, villas, and boutique hotels where Calisto is the ongoing operating partner. Three programs—Hosting, Management, and Boutique—serve different asset types, but share one standard of care, one owner experience, and one philosophy across every address we accept."
            />

            <CompareCard
              title="CalistoOS & Calisto Pro · The engine underneath"
              text="CalistoOS is the quality-first operating system. Calisto Pro is the operations platform our teams log into every day. Together, they keep reservations, inspections, tasks, devices, and deals aligned so the entire portfolio runs with the same discipline, regardless of property type or market."
            />

            <CompareCard
              title="Key, Signal & 24·7 · The real-world layer"
              text="Calisto Key manages digital access. Calisto Signal watches what sensors and smart devices see. Calisto 24·7 is the human team that can respond at any hour using that context. Together they turn a software stack into a feeling of safety and presence around the homes, villas, and hotels in the Collection."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent" id="programs">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto Collection programs"
            heading="Three ways to bring your property into the Collection"
            description="Each program is designed for a different kind of asset, but all share the same CalistoOS foundation, Calisto Pro platform, and access, signal, and support layers. Owners can start with one property and one program, then expand as their portfolio grows and diversifies."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Flagship villas & residences"
              title="Calisto Hosting"
              text="The program for a small, handpicked network of villas and residences where Calisto runs every stay. Calisto Hosting combines luxury guest experience with disciplined operations, using CalistoOS, Calisto Pro, and Calisto Navigator to manage bookings, inspections, concierge, and reporting end-to-end, with Calisto Key, Signal, and 24·7 protecting each stay in the background."
              list={[
                <a key="hosting" href="/hosting" className="cal-link-btn">Explore Calisto Hosting →</a>
              ]}
            />

            <FeatureCard
              meta="Second homes & primary residences"
              title="Calisto Management"
              text="Flagship home management for owners who want everything around their second home handled, including smart home, maintenance, projects, visits, and emergencies. Calisto Management uses Calisto Pro together with Key and Signal so doors, devices, and field teams stay aligned, with Calisto 24·7 available when something cannot wait for business hours."
              list={[
                <a key="mgmt" href="/management" className="cal-link-btn">Explore Calisto Management →</a>
              ]}
            />

            <FeatureCard
              meta="Hotels, villa resorts & branded residences"
              title="Calisto Boutique"
              text="Long-term operating partnerships for boutique hotels, villa clusters, and branded residences. Calisto Boutique brings the same technology, playbooks, and guest philosophy used across the Collection to multi-key assets, with Calisto Pro, Key, Signal, and 24·7 supporting on-site teams and protecting owner and investor expectations."
              list={[
                <a key="boutique" href="/boutique" className="cal-link-btn">Explore Calisto Boutique →</a>
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Who we serve"
            heading="Owners, families & investors with properties that matter"
            description="Calisto Collection is intentionally small. We partner with people and projects where there is as much care for architecture, location, and guest experience as there is for yield. If that sounds like you, you're in the right place and you'll feel the difference that a full stack and a 24·7 human team can make."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              title="Individual flagship owners"
              meta="One home · One villa · One hotel"
              text="You own a singular home or property in a special place and want a partner who treats it as more than a line item. Calisto brings structure, teams, and technology around your property while protecting what makes it yours, from the way it is lit and secured to the way guests are welcomed."
            />

            <FeatureCard
              title="Families & family offices"
              meta="Multiple properties · Multiple markets"
              text="You steward several homes, villas, and hospitality assets across destinations. Calisto Collection gives you one operating philosophy, one reporting language, and one partner to call, with a single view across keys, signals, occupancy, and projects at portfolio level."
            />

            <FeatureCard
              title="Developers & investment partners"
              meta="New builds · Repositions · Mixed use"
              text="You're shaping or repositioning assets that blend private residences, villas, and boutique hospitality. Calisto becomes the operating partner behind the scenes, with Calisto Pro, Key, Signal, and 24·7 providing visible structure to buyers, lenders, and residents."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How we work together"
            heading="A deliberate, staged path into the Collection"
            description="Calisto Collection relationships are measured in years, not seasons. We move carefully at the start so that once we're live, everyone—owners, guests, and teams—understands the standards we're protecting and the outcomes we're aiming for, across operations, access, devices, and support."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Step 1"
              title="Discovery & fit"
              text="We start with a conversation about your property, goals, and time horizon. Together we decide which program—Hosting, Management, or Boutique—is the right entry point, and which Calisto Pro modules and 24·7 coverage pattern match the way you want to use the asset."
            />

            <FeatureCard
              meta="Step 2"
              title="Blueprint, access & devices"
              text="We map the operating model: service levels, technology rollout, local staffing, and financial structure. This includes the design of Calisto Key and Signal for your property so access, alerts, and maintenance all line up with how you and your guests actually live and stay in the space."
            />

            <FeatureCard
              meta="Step 3"
              title="Onboarding & continuous care"
              text="We implement CalistoOS, launch through Calisto Pro, configure Key and Signal, and bring your property live as part of the Collection. From there, we run regular rhythms, walkthroughs, reviews, and planning sessions, with Calisto 24·7 and local teams working together."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Why Calisto Collection"
            heading="One philosophy across every key you own"
            description="Calisto Collection exists so owners don't have to juggle one partner for the hotel, another for the villa, and a third for their second home. Instead, you get one ecosystem that is designed for quality, built on technology, and delivered with quiet, high-touch service at any hour."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Quality you can see, not just feel"
              text="CalistoOS and Calisto Assure bring photo-based standards, checklists, and inspections to every property. Owners and investors see proof of condition and care, not just promises, and can trace the history of work and decisions over the life of the asset."
            />

            <CompareCard
              title="One relationship, many properties"
              text="Whether you start with a single villa in Calisto Hosting or a hotel in Calisto Boutique, the same leadership team stands behind the relationship. Adding new properties becomes an extension of a conversation already underway and a system already tuned to the way you think."
            />

            <CompareCard
              title="Security, access & response built in"
              text="Calisto Key, Calisto Signal, and Calisto 24·7 are not optional extras. They are how we keep the homes, villas, and hotels in the Collection safe, ready, and responsive. You feel like someone is always paying attention because both the software and the people are."
            />
          </div>
        </div>
      </section>

      <section className="cal-section-block cal-section-block--accent">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="Frequently answered about Calisto Collection"
            description="A few of the conversations we have early with owners, family offices, and developers considering bringing their properties into the Collection."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is Calisto Collection a brand, a service, or a portfolio?"
              answer="All three. Calisto Collection is the umbrella brand for properties operated by Calisto, the set of service programs they run on, and the private portfolio we curate with a small number of owners and partners that align with our philosophy."
            />

            <FAQCard
              question="How do I know which program is right for my property?"
              answer="During discovery, we look at how the property is used today and where you want it to go. A non-rented second home usually starts with Calisto Management. A luxury rental villa may join through Calisto Hosting. A multi-key asset is typically a fit for Calisto Boutique."
            />

            <FAQCard
              question="Can multiple properties sit in different programs?"
              answer="Yes. Many owners have a mix: a private residence in Management, a rental villa in Hosting, and a stake in a Boutique hotel. We treat each asset with the right program while keeping your relationship, reporting, and access unified at the Collection level."
            />

            <FAQCard
              question="How does the Calisto technology show up for me as an owner?"
              answer="You see a calm portal view with clear status, reports, and plans. Behind that, Calisto Pro holds bookings, projects, and tasks. Calisto Key controls access, Calisto Signal watches devices and alerts, and Calisto 24·7 is available when guests or situations need a human response."
            />

            <FAQCard
              question="What kind of commitment do you require?"
              answer="Collection relationships are structured as clear, multi-year agreements with calm exit provisions. The details vary by program, but the principle is the same: we invest seriously in each property, and we expect to be there long enough to create meaningful value."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-collection/collection-footer-cta.jpg"
        title="Bring your world into the Calisto Collection."
        text="Whether you're starting with a single flagship home or aligning a portfolio of villas and hotels, Calisto Collection gives you one partner, one philosophy, and one system behind everything you own. Begin with the property that matters most today and grow from there."
        ctaText="Explore the programs"
        ctaHref="#programs"
      />
    </>
  );
}