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
                  src="/images/proprietor-portrait.webp"
                  alt="The proprietor of Bukana Brilliant Schools"
                  width="360"
                  height="540"
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
