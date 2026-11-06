import { motion } from 'motion/react';
import { Star, Users, GraduationCap, BookOpen, HeartHandshake, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody, CardHeader } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { schoolProfile, admissionsCta, academicsCta, contactCta } from '@/data/school.js';
import { educationLevels } from '@/data/academics.js';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SchoolIntroduction />
      <EducationLevels />
      <ParentQuestions />
      <LearningJourney />
      <AdmissionsInvitation />
      <LocationContactStrip />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="container-wide section-pad relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Creche · Nursery · Primary
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold leading-tight text-surface-white text-balance md:text-5xl lg:text-6xl"
            >
              Every bright future begins with a first step.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-[#e8f3e9] md:text-xl"
            >
              Discover Bukana Brilliant Schools, a school serving Creche, Nursery, and Primary education in Ijegun, Lagos.
              <strong className="text-surface-white"> Be a star @ BBS.</strong>
            </motion.p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="accent" href={admissionsCta.href} className="px-6 py-4 text-base">
                Enquire about admission <ArrowRight className="ml-2 inline h-4 w-4" />
              </Button>
              <Button variant="secondary" href={academicsCta.href} className="px-6 py-4 text-base">
                Explore learning levels
              </Button>
            </div>
            <p className="mt-5 text-sm text-[#e8f3e9]">Have questions? Contact the school before making an admission decision.</p>
          </div>
          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl border-2 border-accent/60" />
            <TemporaryImage
              alt="Approved school photograph to be supplied by Bukana Brilliant Schools"
              category="hero"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-surface-white p-5 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-brand">Our school</p>
              <p className="mt-1 text-lg font-bold text-ink-deep">Bukana Brilliant Schools</p>
              <p className="text-sm text-ink-muted">Be a star @ BBS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SchoolIntroduction() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Welcome to BBS"
          title="A school journey from the early years to primary"
          description="Choosing a school is an important family decision. Bukana Brilliant Schools serves Creche, Nursery, and Primary levels, giving parents one place to begin their enquiries about their child's next stage of learning."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: HeartHandshake, title: 'A family decision', text: 'Ask questions, understand the school’s approach, and decide whether it is the right fit for your child.' },
            { icon: BookOpen, title: 'Three learning levels', text: 'Explore the different stages served by BBS and ask which class is appropriate for your child.' },
            { icon: MessageCircle, title: 'Clear communication', text: 'Contact the school directly for current admissions information, requirements, and arrangements.' },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} className="h-full">
              <CardBody className="p-7">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon className="h-6 w-6" /></span>
                <h3 className="mb-3 text-xl font-bold text-ink-deep">{title}</h3>
                <p className="leading-relaxed text-ink-muted">{text}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationLevels() {
  const icons = { creche: Users, nursery: Star, primary: GraduationCap };
  const descriptions = {
    creche: 'Learn about the school’s early-years care arrangements, daily routine, age requirements, and how families are kept informed.',
    nursery: 'Ask about class groups, early learning activities, communication with parents, and how children are supported as they develop.',
    primary: 'Ask about class structure, subjects, learning resources, assessment, and how progress is communicated to families.',
  };

  return (
    <section className="bg-surface-warm section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Learning levels"
          title="Find the right starting point"
          description="Each stage raises different questions for parents. Use these introductions as a guide for your conversation with the school; confirm age ranges, class placement, and programme details directly with BBS."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {educationLevels.map((level) => {
            const Icon = icons[level.id] || BookOpen;
            return (
              <Card key={level.id} className="h-full overflow-hidden">
                <div className="h-2 bg-brand" />
                <CardHeader className="pb-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/25 text-brand-deep"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-2xl font-bold text-ink-deep">{level.name}</h3>
                </CardHeader>
                <CardBody>
                  <p className="mb-5 leading-relaxed text-ink-muted">{descriptions[level.id]}</p>
                  <Button variant="outline" href="/academics" className="w-full">Explore academics</Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ParentQuestions() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="For parents and guardians"
            title="The right questions help you choose confidently"
            description="Before choosing a school, families often want to understand the day-to-day experience—not just the name of a class. We encourage you to contact BBS and ask about the details that matter to your family."
            className="mx-0 text-left"
          />
          <ul className="mt-8 space-y-4">
            {[
              'Which class is suitable for my child’s age and previous experience?',
              'What does a normal school day look like?',
              'What learning materials or documents should we prepare?',
              'How does the school communicate with parents and guardians?',
              'What are the current fees, schedule, and admission requirements?',
            ].map((question) => (
              <li key={question} className="flex items-start gap-3 text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-card bg-surface-warm">
          <TemporaryImage alt="Approved photograph of the school environment to be supplied" category="learning" width="100%" height="100%" />
        </div>
      </div>
    </section>
  );
}

function LearningJourney() {
  return (
    <section className="bg-brand-deep section-pad text-surface-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Your next step"
          title="Get to know the school before you decide"
          description="A conversation with the school can help you understand its current programmes, expectations, and whether it meets your family's needs."
          className="text-center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Explore', 'Read about the school and the three education levels available.'],
            ['02', 'Ask', 'Contact the school for accurate information about classes, fees, and admission.'],
            ['03', 'Plan', 'Confirm the next steps directly with the school before preparing documents or making payments.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-card border border-white/15 bg-white/5 p-7">
              <p className="mb-4 text-sm font-bold tracking-widest text-accent">{number}</p>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-[#dbe8dc]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="accent" href={contactCta.href} className="px-8 py-4">Contact Bukana Brilliant Schools</Button>
        </div>
      </div>
    </section>
  );
}

function AdmissionsInvitation() {
  return (
    <section className="bg-surface-warm section-pad">
      <div className="container-wide">
        <div className="grid items-center gap-8 rounded-card border border-border-soft bg-surface-white p-8 md:p-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Admissions enquiries</p>
            <h2 className="mb-4 text-3xl font-bold text-ink-deep md:text-4xl">Start with a conversation.</h2>
            <p className="max-w-xl leading-relaxed text-ink-muted">Admission availability, entry requirements, fees, and required documents must be confirmed by the school. The admissions page explains how to make an enquiry.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Button variant="primary" href={admissionsCta.href} className="px-7 py-4">Admissions information</Button>
            <Button variant="outline" href={contactCta.href} className="px-7 py-4">Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationContactStrip() {
  return (
    <section className="bg-surface-white section-pad border-t border-border-soft">
      <div className="container-wide">
        <div className="flex flex-col items-start gap-6 rounded-card bg-surface-warm p-8 md:flex-row md:items-center md:p-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-surface-white"><MapPin className="h-6 w-6" /></div>
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-ink-deep">Find Bukana Brilliant Schools</h3>
            <p className="leading-relaxed text-ink-muted">{schoolProfile.address}</p>
            <p className="mt-2 text-sm text-ink-muted">Please confirm the address and directions with the school before travelling.</p>
          </div>
          <Button variant="primary" href={contactCta.href} className="w-full px-7 py-4 md:w-auto">Contact the school</Button>
        </div>
      </div>
    </section>
  );
}
