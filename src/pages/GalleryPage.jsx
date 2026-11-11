import { Camera, MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { LearningImageMarquee } from '@/components/ui/learning-image-marquee.jsx';
import { Badge } from '@/components/ui/badge.jsx';

export function GalleryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:py-24">
          <div>
            <Badge variant="accent" className="mb-5 gap-2 border border-white/15 bg-white/10 text-[#F2D98C]"><span className="h-2 w-2 rounded-full bg-accent" /> Official school gallery</Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">A closer look at life at Bukana Brilliant Schools.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">Explore photographs of the school environment, learning spaces, teachers and students.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button variant="accent" href="/contact" className="min-h-12 px-6">Ask about a school visit</Button><Button variant="secondary" href="/school-life" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">Explore school life</Button></div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[1.5rem] border border-white/15 bg-white/8 p-6 backdrop-blur-sm sm:p-8"><Camera aria-hidden="true" className="h-6 w-6 text-[#E8D28C]" /><p className="mt-8 text-lg font-semibold text-white">Real school moments</p><p className="mt-2 text-sm leading-6 text-white/75">Original photographs paired with their enhanced landscape versions.</p></div>
        </div>
      </section>
      <LearningImageMarquee eyebrow="Bukana Brilliant Schools" title="Real moments. Real learning." description="Browse authentic school photographs, with original portrait frames alongside enhanced 16:9 versions." />
      <section className="section-pad bg-surface-white"><div className="container-wide"><div className="mx-auto max-w-3xl text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand"><ShieldCheck aria-hidden="true" className="h-6 w-6" /></span><h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-ink-deep sm:text-3xl">Respect, authenticity and pupil privacy come first.</h2><p className="mt-4 leading-7 text-ink-muted">Photographs are presented as supplied by the school. Identifiable pupil images should only be published with school approval and appropriate parent or guardian consent.</p><a href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-brand hover:text-brand-deep">Contact the school <MessageCircle aria-hidden="true" className="h-4 w-4" /></a></div></div></section>
    </>
  );
}