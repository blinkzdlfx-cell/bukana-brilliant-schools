import { motion } from 'motion/react';
import { BookOpen, Star, Users, Play } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { earlyYears, pendingNote } from '@/data/academics.js';
import { contactCta, admissionsCta } from '@/data/school.js';

export function EarlyYearsPage() {
  return (
    <>
      <HeroSection />
      <FrameworkSection />
      <DailyRoutineSection />
      <EnquirySection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="relative container-wide section-pad pt-24 md:pt-36 pb-24 md:pb-36">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Early Years
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
          >
            Early Years (Pre-School &amp; Nursery)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
          >
            Foundational care and learning for the youngest pupils. Ask the school about age range, daily routine,
            and how children are supported as they develop.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" href="/contact" className="px-8 py-4">
              Ask about early years
            </Button>
            <Button variant="outline" href="/admissions" className="px-8 py-4">
              Admissions enquiries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Curriculum pillars"
          title="Areas of learning and development"
          description="Curriculum frameworks and subject details are pending owner confirmation. The pillars below are useful areas to discuss with the school."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {earlyYears.pillars.map((pillar) => (
            <Card key={pillar.title}>
              <CardBody className="p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-ink-deep">{pillar.title}</h3>
                <p className="text-ink-muted">{pillar.detail || 'Detail pending owner confirmation.'}</p>
                {pillar.detail === null && (
                  <p className="mt-3 text-xs font-semibold text-accent">Content pending owner confirmation.</p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-muted text-center">{pendingNote}</p>
      </div>
    </section>
  );
}

function DailyRoutineSection() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="School day"
          title="Typical daily routine"
          description="The daily schedule for early years is pending owner confirmation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { time: 'Arrival', activity: 'Welcome and settling in', detail: null },
            { time: 'Morning', activity: 'Circle time and early learning', detail: null },
            { time: 'Midday', activity: 'Meals, rest, and outdoor play', detail: null },
            { time: 'Afternoon', activity: 'Creative activities and stories', detail: null },
            { time: 'Pickup', activity: 'Handover and parent update', detail: null },
          ].map((item) => (
            <Card key={item.time}>
              <CardBody className="p-6 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">{item.time}</p>
                <h3 className="mb-2 text-lg font-bold text-ink-deep">{item.activity}</h3>
                {item.detail === null ? (
                  <p className="text-xs font-semibold text-accent">Detail pending owner confirmation.</p>
                ) : (
                  <p className="text-sm text-ink-muted">{item.detail}</p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section className="bg-brand-deep section-pad text-surface-white">
      <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <Play className="mb-4 h-8 w-8 text-accent" />
          <h2 className="mb-3 text-3xl font-bold">Questions about early years?</h2>
          <p className="leading-relaxed text-[#dbe8dc]">
            Contact the school to confirm age range, class placement, daily routine, and next steps for enrolment.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button variant="accent" href="/contact" className="px-8 py-4">
            Contact the school
          </Button>
          <Button variant="secondary" href="/admissions" className="px-8 py-4">
            Admissions
          </Button>
        </div>
      </div>
    </section>
  );
}
