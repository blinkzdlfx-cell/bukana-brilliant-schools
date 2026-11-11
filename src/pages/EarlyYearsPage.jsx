import { ArrowRight, Baby, BookOpen, HeartHandshake, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';

const discussionTopics = [
  {
    title: 'Age and settling in',
    detail: 'Ask about the age range for each class, how new children are welcomed and how the transition into school is supported.',
    icon: Baby,
  },
  {
    title: 'Learning through the day',
    detail: 'Ask how stories, language, play, movement and early number activities fit into the daily programme.',
    icon: BookOpen,
  },
  {
    title: 'Care and communication',
    detail: 'Find out about daily routines, meals, rest, collection arrangements and how parents receive updates.',
    icon: HeartHandshake,
  },
];

const learningAreas = [
  'Communication and language',
  'Personal and social development',
  'Physical development',
  'Early literacy and numeracy',
  'Understanding the world',
  'Creative expression',
];

export function EarlyYearsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative py-16 md:py-20 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Early years
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            A thoughtful start for the youngest learners.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
            Exploring Creche and Nursery? Speak with Bukana Brilliant Schools about age requirements, class availability, early learning and how children are supported as they settle in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" href="/contact" className="min-h-12 px-6">
              Ask about early years <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="/admissions" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">
              Admissions information
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Creche and Nursery"
            title="What matters in the early years?"
            description="Every child develops at their own pace. Use these topics to understand the school’s approach and decide whether it is a good fit for your family."
          />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {discussionTopics.map(({ title, detail, icon: Icon }, index) => (
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
        <div className="container-wide grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Areas to discuss</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              Learning is more than letters and numbers.
            </h2>
            <p className="mt-5 leading-8 text-ink-muted">
              These are common early-childhood development areas that parents may wish to discuss. Ask the school which areas are included in its current programme and how they are taught.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border-soft bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {learningAreas.map((area) => (
                <div key={area} className="flex min-h-14 items-center gap-3 rounded-xl bg-surface-warm px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Sparkles aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-ink-deep">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-ink-muted">
              General discussion topics only. The school should confirm its actual curriculum, class structure and daily routine.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide flex flex-col items-start justify-between gap-7 rounded-[1.5rem] bg-brand-deep p-7 text-white sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold text-white sm:text-3xl">Have questions about Creche or Nursery?</h2>
            <p className="mt-3 leading-7 text-white">Ask about age range, class availability, daily arrangements and how to begin an enquiry.</p>
          </div>
          <Button variant="accent" href="/contact" className="min-h-12 w-full px-6 sm:w-auto">
            Contact the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
