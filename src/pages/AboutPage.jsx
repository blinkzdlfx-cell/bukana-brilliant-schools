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
          description="Bukana Brilliant Schools is committed to helping children build strong foundations for lifelong learning. Serving families in Ijegun, Lagos, the school brings together Creche, Nursery and Primary education under the belief that every child deserves the opportunity to learn, grow and shine."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink-deep">Our story and commitment</h3>
            <div className="mb-6 space-y-4 leading-relaxed text-ink-muted">
              <p>Bukana Brilliant Schools is built around the belief that a child’s early learning experiences can shape a lifelong attitude towards discovery, confidence and personal growth. Its educational journey brings together Creche, Nursery and Primary learning, giving families a place to explore the foundations of their children’s development.</p>
              <p>As the school continues its work with families in Ijegun, Lagos, its purpose remains focused on nurturing potential, encouraging curiosity and helping every learner develop the knowledge and character to shine. The school’s story is not defined by a date or a building alone, but by the children it seeks to support and the partnership it builds with their families.</p>
            </div>
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
                <span>A partnership with families that places each child&rsquo;s development at the centre.</span>
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
          description="Our approach is guided by a simple belief: children learn best when they are supported, encouraged to ask questions and given room to develop at their own pace."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Educational philosophy',
              text: 'A child-centred approach that values curiosity, active participation, purposeful play and clear learning foundations.',
            },
            {
              title: 'Vision',
              text: 'To help every learner develop the knowledge, confidence and character to make a positive contribution to the world.',
            },
            {
              title: 'Core values',
              text: 'Respect, responsibility, kindness, creativity, perseverance and a commitment to doing one’s best.',
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardBody className="p-7">
                <h3 className="mb-3 text-xl font-bold text-ink-deep">{item.title}</h3>
                <p className="text-ink-muted">{item.text}</p>
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
          description="A welcome to every family joining the Bukana Brilliant Schools community."
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
            <h3 className="mb-4 text-2xl font-bold text-ink-deep">Welcome to Bukana Brilliant Schools</h3>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>Dear Parents and Guardians,</p>
              <p>It is a pleasure to welcome you to Bukana Brilliant Schools. Choosing a school is one of the most important decisions a family makes, and we recognise the trust that comes with allowing us to be part of your child’s early years and learning journey.</p>
              <p>Our commitment is to provide a caring and purposeful learning experience where children are encouraged to be curious, build confidence, develop good character and discover their individual strengths. From Creche and Nursery through Primary, every stage is an opportunity to lay foundations for future growth.</p>
              <p>We value the partnership between school and home. We encourage parents and guardians to ask questions, stay involved and work with us in supporting each child’s progress.</p>
              <p>Thank you for considering Bukana Brilliant Schools. We look forward to welcoming your family and sharing the journey of helping every child become a star.</p>
              <p className="font-semibold text-brand-deep">Warm regards,<br />The Director<br />Bukana Brilliant Schools</p>
            </div>
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
          description="A positive learning environment brings together thoughtful teaching, purposeful activities and spaces that support children’s development. Families are encouraged to visit and see the school’s facilities first-hand."
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
