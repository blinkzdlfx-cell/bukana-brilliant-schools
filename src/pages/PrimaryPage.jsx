import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { schoolImages } from '@/data/learning-images.js';
import { OptimizedImage } from '@/components/ui/optimized-image.jsx';

const topics = [
  {
    title: 'Class structure',
    detail: 'Ask which primary classes are available, the age or placement requirements and how children move between levels.',
    icon: GraduationCap,
  },
  {
    title: 'Curriculum and subjects',
    detail: 'Ask which curriculum is followed, which subjects are taught at each level and which learning materials are used.',
    icon: BookOpen,
  },
  {
    title: 'Progress and communication',
    detail: 'Find out how learning is assessed, how progress is shared and how parents can discuss a child’s development with the school.',
    icon: ClipboardCheck,
  },
];

const questions = [
  'Which primary class levels are currently available?',
  'How is a child’s class placement determined?',
  'Which subjects and learning materials are used?',
  'How are assessments and parent updates handled?',
];

export function PrimaryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative py-16 md:py-20 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Primary school
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Building strong foundations for what comes next.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
            Learn what to ask about primary class placement, curriculum, subjects and the way children’s progress is supported at Bukana Brilliant Schools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" href="/contact" className="min-h-12 px-6">
              Ask about Primary <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="/admissions" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">
              Admissions information
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-warm">
        <div className="container-wide grid items-center gap-7 md:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl">
            <OptimizedImage src={schoolImages[1].enhanced} optimized={schoolImages[1].optimized.enhanced} alt={schoolImages[1].alt} sizes="(max-width: 768px) 100vw, 60vw" className="aspect-[16/10] h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Learning in practice</p>
            <h2 className="mt-3 text-2xl font-bold text-ink-deep">A strong foundation for lifelong learning.</h2>
            <p className="mt-3 leading-7 text-ink-muted">Explore the learning environment and speak with the school about class structure, subjects and how pupils are supported.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Primary learning"
            title="The details parents should understand"
            description="Explore the areas that shape primary education and prepare the right questions for your conversation with the school."
          />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {topics.map(({ title, detail, icon: Icon }, index) => (
              <Card key={title} className="h-full">
                <CardBody className="p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.16em] text-ink-muted/60">0{index + 1}</span>
                  </div>
                  <h2 className="mt-7 text-xl font-bold text-ink-deep">{title}</h2>
                  <p className="mt-3 leading-7 text-ink-muted">{detail}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border-soft bg-surface-warm">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">A useful conversation</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              What should you ask before enrolment?
            </h2>
            <p className="mt-5 leading-8 text-ink-muted">
              A clear understanding of class placement, curriculum and communication helps families make an informed choice.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border-soft bg-white p-6 shadow-sm sm:p-8">
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question} className="flex items-start gap-3 border-b border-border-soft pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="leading-7 text-ink">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-deep text-white">
        <div className="container-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <Users aria-hidden="true" className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold text-white sm:text-3xl">Would you like to learn more about primary education?</h2>
            <p className="mt-3 leading-7 text-white">Contact the school to confirm current classes, requirements and next steps.</p>
          </div>
          <Button variant="accent" href="/contact" className="min-h-12 w-full px-6 sm:w-auto">
            Contact the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
