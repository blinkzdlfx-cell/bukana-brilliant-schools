import { ArrowRight, BookOpen, Building2, Palette, ShieldCheck, Trees } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';

const experiences = [
  {
    label: 'Learning and classrooms',
    icon: BookOpen,
    description: 'Ask how lessons are organised, what learning materials are used and how classroom routines differ by age group.',
  },
  {
    label: 'Creative activities',
    icon: Palette,
    description: 'Find out which art, music, practical or enrichment activities form part of the school programme.',
  },
  {
    label: 'Play and movement',
    icon: Trees,
    description: 'Ask about play opportunities, outdoor time and how physical activity is included in the school day.',
  },
  {
    label: 'School environment',
    icon: Building2,
    description: 'During an arranged visit, ask to see the spaces and facilities relevant to your child’s learning level.',
  },
];

export function SchoolLifePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative py-16 md:py-20 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            School life
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Learning happens in the little moments, too.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
            A child’s school experience includes lessons, play, relationships and the spaces where each day unfolds. Explore what you may want to ask about at Bukana Brilliant Schools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" href="/contact" className="min-h-12 px-6">
              Ask about a school visit <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="/gallery" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">
              School gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Explore school life"
            title="What would you like to know?"
            description="Use these topics to guide a conversation with the school. They are questions for families to explore, not claims about facilities or activities that have not yet been confirmed."
          />
          <div className="mt-11 grid gap-5 md:grid-cols-2">
            {experiences.map(({ label, icon: Icon, description }, index) => (
              <Card key={label} className="h-full">
                <CardBody className="flex h-full gap-5 p-6 sm:p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.16em] text-brand">0{index + 1}</p>
                    <h2 className="mt-2 text-xl font-bold text-ink-deep">{label}</h2>
                    <p className="mt-3 leading-7 text-ink-muted">{description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border-soft bg-surface-warm">
        <div className="container-wide grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Plan a visit</p>
            <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              Seeing the environment can help you make an informed choice.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-ink-muted">
              Contact the school to ask whether a visit can be arranged, when families may come and which areas they can see.
            </p>
            <Button variant="primary" href="/contact" className="mt-7 min-h-12 px-6">
              Ask about a visit <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-[1.5rem] border border-brand/10 bg-white p-7 sm:p-9">
            <ShieldCheck aria-hidden="true" className="h-8 w-8 text-brand" />
            <h3 className="mt-5 text-xl font-bold text-ink-deep">Pupil privacy matters</h3>
            <p className="mt-3 leading-7 text-ink-muted">
              Images showing identifiable children should only be published after the school confirms the necessary permissions and parent or guardian consent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
