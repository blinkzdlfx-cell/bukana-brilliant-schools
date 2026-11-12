import { ArrowRight, BookOpen, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { schoolProfile } from '@/data/school.js';

export function ProprietorWelcomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="container-wide relative py-20 md:py-28">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            About Bukana Brilliant Schools
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            A Welcome Message from the Proprietor
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            A message of welcome to parents, guardians and every family considering Bukana Brilliant Schools.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide mx-auto max-w-4xl">
          <article className="overflow-hidden rounded-[1.5rem] border border-brand/10 bg-white shadow-sm">
            <div className="h-2 bg-brand" />
            <div className="p-7 sm:p-10 md:p-14">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <BookOpen aria-hidden="true" className="h-7 w-7" />
              </span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand">The Proprietor</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-deep sm:text-3xl">
                Welcome to {schoolProfile.name}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-ink-muted">
                <p>
                  Every child deserves the opportunity to learn, grow and discover their potential in a caring and supportive environment. At {schoolProfile.name}, we are committed to helping children build confidence, curiosity and good character from their earliest years.
                </p>
                <p>
                  Through our Creche, Nursery and Primary learning community, our aim is to give each child a strong foundation for the future while encouraging a love of learning, respect for others and the confidence to shine.
                </p>
                <p>
                  We value the trust parents and guardians place in us. We look forward to working in partnership with families as we support each child's development and educational journey.
                </p>
              </div>
              <div className="mt-9 border-t border-border-soft pt-7">
                <div className="flex items-center gap-3 text-brand-deep">
                  <HeartHandshake aria-hidden="true" className="h-5 w-5 shrink-0" />
                  <p className="font-semibold">The Proprietor</p>
                </div>
                <p className="mt-1 pl-8 text-sm text-ink-muted">{schoolProfile.name}</p>
              </div>
            </div>
          </article>
          <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-2xl bg-surface-warm p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-lg font-bold text-ink-deep">Learn more about our school</h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">Explore our learning levels or speak with the school directly.</p>
            </div>
            <Button variant="primary" href="/contact" className="min-h-12 px-6">
              Contact the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProprietorWelcomePage;
