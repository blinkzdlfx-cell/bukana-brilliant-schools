import { Camera, Images, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { LearningImageMarquee } from '@/components/ui/learning-image-marquee.jsx';

export function GalleryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-12 h-64 w-64 rounded-full border border-white/10" />
        <div className="container-wide relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              School gallery
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              A real picture of school life starts with real moments.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
              We are preparing this space for approved photographs from Bukana Brilliant Schools. We will not present stock images as pictures of the school, its pupils or facilities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" href="/contact" className="min-h-12 px-6">
                Ask about a school visit
              </Button>
              <Button variant="secondary" href="/school-life" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">
                Explore school life
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/15" />
            <div className="relative rounded-[1.5rem] border border-white/15 bg-white/8 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-[#E8D28C]">
                  <Camera aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">Coming soon</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white/10"><BookIcon /></div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-accent/15 text-[#E8D28C]"><Sparkles className="h-7 w-7" /></div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-white/10"><Images className="h-7 w-7 text-white" /></div>
              </div>
              <p className="mt-6 text-lg font-semibold text-white">Official BBS photography</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Shared here when the school has approved the images for publication.</p>
            </div>
          </div>
        </div>
      </section>

      <LearningImageMarquee
        eyebrow="Illustrative learning moments"
        title="A moving glimpse into the world of learning."
        description="These stock photographs illustrate learning themes only. They are not photographs of BBS pupils, staff, classrooms or facilities."
      />

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-ink-deep sm:text-3xl">
              Authenticity and pupil privacy come first.
            </h2>
            <p className="mt-4 leading-7 text-ink-muted">
              The moving strip above uses illustrative stock photographs and does not depict Bukana Brilliant Schools. Official school images will only be added after approval, with the required permissions and parent or guardian consent for identifiable children.
            </p>
            <a href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-brand hover:text-brand-deep">
              Contact the school <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function BookIcon() {
  return <Images className="h-7 w-7 text-white" />;
}
