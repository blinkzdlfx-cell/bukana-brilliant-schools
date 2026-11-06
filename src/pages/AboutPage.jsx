import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { schoolProfile } from '@/data/school.js';

const foundations = [
  {
    title: 'Confidence',
    description: 'Encouraging children to discover their strengths and approach new experiences with confidence.',
    icon: Sparkles,
  },
  {
    title: 'Curiosity',
    description: 'Making room for questions, exploration and a positive interest in learning.',
    icon: Lightbulb,
  },
  {
    title: 'Character',
    description: 'Supporting the development of kindness, responsibility and respect for others.',
    icon: HeartHandshake,
  },
];

export function AboutPage() {
  return (
    <>
      <HeroSection />
      <OurPurposeSection />
      <FoundationsSection />
      <FamilyPartnershipSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/10" />
      <div className="container-wide relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            About Bukana Brilliant Schools
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl"
          >
            Helping every child find room to grow and shine.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {schoolProfile.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" href="/academics" className="min-h-12 px-6">
              Explore learning levels <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep"
            >
              Contact the school
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-white/15" />
          <div className="relative rounded-[1.5rem] border border-white/15 bg-white/8 p-7 backdrop-blur-sm sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-[#E8D28C]">
              <BookOpen aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">Our purpose</p>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-white">
              “{schoolProfile.tagline}”
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A commitment to helping children develop confidence, curiosity and character through their learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPurposeSection() {
  return (
    <section id="overview" className="section-pad bg-surface-white">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Our purpose</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
            A strong beginning matters.
          </h2>
          <p className="mt-5 leading-8 text-ink-muted">
            Early learning is an important part of a child’s journey. Bukana Brilliant Schools brings together Creche, Nursery and Primary education for families in Ijegun, Lagos.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-brand/10 bg-surface-warm p-7 sm:p-9">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
          </span>
          <p className="mt-6 text-lg font-semibold leading-8 text-ink-deep sm:text-xl">
            {schoolProfile.mission.replaceAll('&rsquo;', '’').replaceAll('&mdash;', '—')}
          </p>
        </div>
      </div>
    </section>
  );
}

function FoundationsSection() {
  return (
    <section id="purpose" className="section-pad border-y border-border-soft bg-surface-warm">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The BBS outlook"
          title="Growing in more than one way"
          description="The school’s stated purpose places confidence, curiosity and character alongside a child’s learning journey."
        />
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {foundations.map(({ title, description, icon: Icon }, index) => (
            <Card key={title} className="h-full">
              <CardBody className="p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-ink-muted/60">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-ink-deep">{title}</h3>
                <p className="mt-3 leading-7 text-ink-muted">{description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyPartnershipSection() {
  return (
    <section className="section-pad bg-surface-white">
      <div className="container-wide">
        <div className="grid items-center gap-8 rounded-[1.5rem] bg-brand-deep p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
          <div className="max-w-2xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <Users aria-hidden="true" className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              A school choice is a family decision.
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              We encourage parents and guardians to speak with the school, ask questions and learn more about the learning levels and current arrangements before making a decision.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button variant="accent" href="/contact" className="min-h-12 px-6">
              Contact the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="/admissions" className="min-h-12 px-6">
              Admissions information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
