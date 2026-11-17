import { ArrowRight, BookOpenCheck, Compass, HeartHandshake, Lightbulb, Sprout, Target } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const visionPillars = [
  {
    icon: Sprout,
    title: 'Every child’s potential',
    description: 'Create room for every child to grow, discover their strengths and develop confidence at each stage of learning.',
  },
  {
    icon: BookOpenCheck,
    title: 'A strong foundation',
    description: 'Value meaningful early-years and primary education that prepares children for the next steps in their learning journey.',
  },
  {
    icon: HeartHandshake,
    title: 'Character and respect',
    description: 'Encourage kindness, responsibility, curiosity and respect for others as important parts of a child’s development.',
  },
  {
    icon: Lightbulb,
    title: 'A lifelong love of learning',
    description: 'Inspire children to ask questions, think creatively and approach new ideas with confidence.',
  },
];

export function OurVisionPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative py-20 md:py-28">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            The future we are working towards
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Our Vision
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            A clear sense of purpose guides how we think about every child, every learning experience and the future we hope to help shape.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface-warm">
        <div className="container-wide">
          <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <figure className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-xl ring-1 ring-brand/10">
                <img
                  src="data:image/webp;base64,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"
                  alt="The proprietor of Bukana Brilliant Schools"
                  width="240"
                  height="360"
                  fetchPriority="high"
                  className="aspect-[2/3] w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-5 text-center">
                <p className="text-lg font-bold text-ink-deep">The Proprietor</p>
                <p className="mt-1 text-sm text-ink-muted">Bukana Brilliant Schools</p>
              </figcaption>
            </figure>

            <div className="pt-2 lg:pt-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Compass aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-brand">Our aspiration</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-ink-deep sm:text-4xl">
                Helping every child become confident, capable and ready for the future.
              </h2>
              <p className="mt-6 text-base leading-8 text-ink-muted">
                Our vision is to grow Bukana Brilliant Schools into a leading centre of quality, inclusive and purposeful early-years and primary education—where every child is encouraged to discover their abilities, build strong foundations and develop the confidence to make a positive difference.
              </p>
              <p className="mt-4 text-base leading-8 text-ink-muted">
                We want each learner to leave every stage of their journey with a stronger sense of curiosity, responsibility and possibility. This vision calls us to keep learning, keep improving and work constructively with families in the development of every child.
              </p>
              <div className="mt-8 rounded-2xl border-l-4 border-accent bg-white p-6 shadow-sm sm:p-7">
                <p className="text-lg font-semibold leading-8 text-brand-deep">
                  “Be a star @ BBS” is an invitation to recognise the potential in every child and give that potential room to shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">What our vision means</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              The principles behind our direction
            </h2>
            <p className="mt-4 leading-8 text-ink-muted">
              Our vision is reflected in the priorities we keep in view as we support children through Creche, Nursery and Primary education.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {visionPillars.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="card-elevated rounded-2xl border border-border-soft bg-surface-warm p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-ink-muted/60">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-deep">{title}</h3>
                <p className="mt-3 leading-7 text-ink-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-deep text-white">
        <div className="container-wide grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <Target aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">A shared journey towards a brighter future.</h2>
            <p className="mt-4 leading-8 text-white/80">
              Families are important partners in a child’s education. We welcome conversations with parents and guardians about the school and the learning journey ahead.
            </p>
          </div>
          <Button variant="accent" href="/contact" className="min-h-12 px-7">
            Contact the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}

export default OurVisionPage;
