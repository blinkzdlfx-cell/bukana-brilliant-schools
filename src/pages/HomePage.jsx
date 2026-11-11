import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Compass,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { schoolProfile, admissionsCta, academicsCta, contactCta } from '@/data/school.js';
import { contactDetails } from '@/data/contact.js';
import { HeroRopeStrip } from '@/components/ui/hero-rope-strip.jsx';

const learningStages = [
  {
    name: 'Creche',
    description: 'Early care and a gentle introduction to learning.',
    icon: HeartHandshake,
    number: '01',
  },
  {
    name: 'Nursery',
    description: 'A foundation for curiosity, confidence and discovery.',
    icon: Sparkles,
    number: '02',
  },
  {
    name: 'Primary',
    description: 'The next stage of a child’s learning journey.',
    icon: GraduationCap,
    number: '03',
  },
];

const parentQuestions = [
  'Which classes are currently available?',
  'What age range is accepted for each level?',
  'How can a family arrange a school visit?',
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeLifeSection />
      <LearningPathSection />
      <FamilySection />
      <AdmissionsSection />
      <ContactSection />
    </>
  );
}

function HomeLifeSection() {
  return (
    <section className="section-pad overflow-hidden border-y border-border-soft bg-surface-warm">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Life at Bukana Brilliant Schools</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">Real moments from our school community.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">A small selection of everyday moments from our classrooms and school environment. Visit the gallery to explore more photographs.</p>
        </div>
        <div className="mt-7 rounded-2xl border border-border-soft bg-brand-deep px-3 py-5 shadow-sm sm:px-5">
          </div>
        <div className="mt-5 flex justify-end">
          <a href="/gallery" className="inline-flex min-h-10 items-center gap-2 text-sm font-bold text-brand hover:text-brand-deep">Explore the full gallery <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full border border-white/10" />
        <div className="absolute -right-6 -top-16 h-[20rem] w-[20rem] rounded-full border border-white/10" />
        <div className="absolute -bottom-40 left-[38%] h-[28rem] w-[28rem] rounded-full bg-brand/35 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="container-wide relative grid items-center gap-12 py-16 md:py-20 lg:min-h-[36rem] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E8D28C]"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Creche <span className="text-white/45">/</span> Nursery <span className="text-white/45">/</span> Primary
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.42, ease: 'easeOut' }}
            className="max-w-2xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.65rem]"
          >
            Every bright future begins with a first step.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.4, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-base leading-8 text-[#E2EAE3] sm:text-lg"
          >
            {schoolProfile.description} <strong className="font-semibold text-white">{schoolProfile.tagline}.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              variant="accent"
              href={admissionsCta.href}
              className="min-h-14 px-7 text-base shadow-lg shadow-black/10"
            >
              Enquire about admission <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              href={academicsCta.href}
              className="min-h-14 border-white/50 bg-white/8 px-7 text-base text-white shadow-none hover:bg-white hover:text-brand-deep"
            >
              Explore learning levels
            </Button>
          </motion.div>

          <p className="mt-7 text-sm text-white/65">
            Serving families in Ijegun, Lagos
          </p>
        </div>

        <HeroRopeStrip />
      </div>
    </section>
  );
}

function LearningPathSection() {
  return (
    <section className="section-pad bg-surface-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Explore BBS"
          title="One school, three learning stages"
          description="Start with the stage you are exploring. The school can help you confirm age requirements, current availability and the right class for your child."
        />

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {learningStages.map(({ name, description, icon: Icon, number }) => (
            <Card key={name} className="h-full overflow-hidden">
              <CardBody className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-ink-muted/60">{number}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-ink-deep">{name}</h3>
                <p className="mt-3 flex-1 leading-7 text-ink-muted">{description}</p>
                <a
                  href={name === 'Creche' || name === 'Nursery' ? '/early-years' : '/primary'}
                  className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-brand hover:text-brand-deep"
                >
                  Explore {name} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" href={academicsCta.href} className="min-h-12 px-6">
            View all learning levels
          </Button>
        </div>
      </div>
    </section>
  );
}

function FamilySection() {
  return (
    <section className="section-pad border-y border-border-soft bg-surface-warm">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">For parents and guardians</p>
          <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
            The right school choice starts with the right questions.
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-ink-muted">
            Choosing a school is an important family decision. We make it easier to start a conversation with Bukana Brilliant Schools and find out what matters for your child.
          </p>
          <Button variant="outline" href="/about" className="mt-7 min-h-12 px-6">
            Get to know BBS
          </Button>
        </div>

        <div className="rounded-[1.5rem] border border-border-soft bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Compass aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-bold text-ink-deep">What would you like to know?</h3>
              <p className="text-sm text-ink-muted">A helpful place to start your enquiry.</p>
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {parentQuestions.map((question) => (
              <li key={question} className="flex items-start gap-3 border-t border-border-soft pt-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="leading-6 text-ink">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AdmissionsSection() {
  return (
    <section className="section-pad bg-surface-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute -right-5 -top-9 h-36 w-36 rounded-full border border-white/10" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#E8D28C]">Admissions enquiries</p>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Take the next step for your child.
              </h2>
              <p className="mt-4 leading-7 text-white">
                Contact the school to ask about available classes, admission requirements and how to arrange a visit. The school will confirm the current details with you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button variant="accent" href={admissionsCta.href} className="min-h-12 whitespace-nowrap px-6">
                Admissions information <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button variant="secondary" href={contactCta.href} className="min-h-12 whitespace-nowrap px-6">
                Contact the school
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-pad border-t border-border-soft bg-surface-warm">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <MessageCircle aria-hidden="true" className="h-6 w-6" />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand">Start a conversation</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
            Have a question about Bukana Brilliant Schools?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-ink-muted">
            Reach the school by WhatsApp or email to ask about Creche, Nursery, Primary and the next steps for your family.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" href={contactDetails.whatsapp} className="min-h-12 px-6" >
              Message on WhatsApp <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="outline" href={contactDetails.email ? 'mailto:' + contactDetails.email : contactCta.href} className="min-h-12 px-6">
              Email the school
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
