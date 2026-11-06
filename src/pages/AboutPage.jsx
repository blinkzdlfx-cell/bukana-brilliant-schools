import { motion } from 'motion/react';
import { BookOpen, Users, GraduationCap, Building2, Star, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { schoolProfile, admissionsCta, academicsCta, contactCta } from '@/data/school.js';

export function AboutPage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <MissionSection />
      <ValuesPhilosophySection />
      <LeadershipSection />
      <FacilitiesSection />
      <NextStepsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="relative container-wide section-pad pt-24 md:pt-36 pb-24 md:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              About Bukana Brilliant Schools
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
            >
              A place to begin the journey of learning.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
            >
              {schoolProfile.description} {`{' '}`}<strong className="text-surface-white">Be a star @ BBS.</strong>
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" href="/academics" className="px-8 py-4">
                Explore learning levels
              </Button>
              <Button variant="outline" href="/contact" className="px-8 py-4">
                Contact the school
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px] w-full rounded-2xl overflow-hidden border border-brand/30 bg-surface-warm">
            <TemporaryImage
              alt="Approved school photograph to be supplied by Bukana Brilliant Schools"
              category="about"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="overview" className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Overview &amp; history"
          title="About the school"
          description="Bukana Brilliant Schools serves Creche, Nursery, and Primary education in Ijegun, Lagos. The school&rsquo;s founding story, history, and background details are pending owner confirmation and will be shared here once approved."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink-deep">What families can ask about</h3>
            <ul className="space-y-4 text-ink-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>The school&rsquo;s mission, vision, and educational approach.</span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>Class structure, curriculum, and learning expectations by level.</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>Facilities, school-day arrangements, and parent communication.</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>Admission requirements, current fees, and key dates.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-border-soft bg-surface-warm">
            <TemporaryImage
              alt="Approved school environment photograph to be supplied"
              category="overview"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our mission"
          title="Our purpose"
          description={schoolProfile.mission}
          className="text-center"
        />
        <div className="mt-12 p-10 rounded-2xl bg-brand text-surface-white">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              {schoolProfile.mission}
            </p>
            <p className="mt-6 text-lg text-[#dbe8dc] leading-relaxed">
              This mission guides how Bukana Brilliant Schools welcomes children at every level&mdash;from Creche
              through Nursery to Primary&mdash;and how the school partners with parents and guardians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesPhilosophySection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Philosophy &amp; values"
          title="Guiding principles"
          description="The school&rsquo;s educational philosophy, vision, and core values are pending owner confirmation and will be published here once approved."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Educational philosophy',
              text: 'How the school approaches teaching and care at each level.',
              pending: true,
            },
            {
              title: 'Vision',
              text: 'The school&rsquo;s long-term aspirations for its pupils.',
              pending: true,
            },
            {
              title: 'Core values',
              text: 'The principles that guide staff, pupils, and families.',
              pending: true,
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardBody className="p-7">
                <h3 className="mb-3 text-xl font-bold text-ink-deep">{item.title}</h3>
                <p className="text-ink-muted">{item.text}</p>
                {item.pending && (
                  <p className="mt-4 text-xs font-semibold text-accent">
                    Content pending owner confirmation.
                  </p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section id="leadership" className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Leadership"
          title="Director&rsquo;s welcome"
          description="A formal welcome from the school&rsquo;s leadership, including the director&rsquo;s message and portrait, is pending owner confirmation and an approved biography and photograph."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-border-soft bg-surface-warm">
            <TemporaryImage
              alt="Approved leadership portrait to be supplied by the school"
              category="leadership"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink-deep">A message from the school</h3>
            <p className="text-ink-muted leading-relaxed mb-6">
              The director&rsquo;s welcome note and leadership biographies will be published here once the school
              supplies approved text and photographs.
            </p>
            <p className="text-xs font-semibold text-accent">
              Leadership names and images require owner approval before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Facilities &amp; environment"
          title="Learning spaces"
          description="Details about classrooms, play areas, and school facilities are pending owner confirmation and approved photography."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Classrooms', text: 'Age-appropriate learning spaces for Creche, Nursery, and Primary.' },
            { title: 'Creative activities', text: 'Space for art, music, and hands-on learning.' },
            { title: 'Outdoor play', text: 'Areas for play, movement, and outdoor learning.' },
          ].map((item) => (
            <Card key={item.title}>
              <CardBody className="p-7">
                <h3 className="mb-3 text-xl font-bold text-ink-deep">{item.title}</h3>
                <p className="text-ink-muted">{item.text}</p>
                <p className="mt-4 text-xs font-semibold text-accent">
                  Details and images pending owner confirmation.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextStepsSection() {
  return (
    <section className="bg-brand section-pad text-surface-white">
      <div className="container-wide text-center">
        <SectionHeading
          eyebrow="Continue exploring"
          title="Choose your next step"
          description="Explore the learning levels, review the admissions enquiry information, or contact the school directly."
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" href="/academics" className="px-8 py-4">
            Explore academics
          </Button>
          <Button variant="primary" href="/admissions" className="px-8 py-4">
            Admissions enquiries
          </Button>
          <Button variant="secondary" href="/contact" className="px-8 py-4">
            Contact the school
          </Button>
        </div>
      </div>
    </section>
  );
}
