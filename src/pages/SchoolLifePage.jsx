import { BookOpen, Palette, Trees, Building2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { Button } from '@/components/ui/button.jsx';
import { contactCta } from '@/data/school.js';

const experiences = [
  { id: 'learning', label: 'Learning & classrooms', icon: BookOpen, description: 'Ask about classroom routines, learning materials, class sizes, and how teaching is organised at each level.' },
  { id: 'creative', label: 'Creative activities', icon: Palette, description: 'Find out which creative, practical, or enrichment activities are included in the school programme.' },
  { id: 'play', label: 'Play & outdoor learning', icon: Trees, description: 'Ask what play or outdoor opportunities are available and how they fit into the school day.' },
  { id: 'facilities', label: 'Facilities & environment', icon: Building2, description: 'When you contact or visit the school, ask to see the facilities relevant to your child’s level.' },
];

export function SchoolLifePage() {
  return (
    <>
      <section className="bg-brand section-pad text-surface-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">School life</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-balance md:text-5xl">See beyond the classroom.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e8f3e9]">A school’s environment and daily routines are important parts of the family decision. Explore the areas parents may want to learn about at Bukana Brilliant Schools, then contact the school for accurate details.</p>
          </div>
          <div className="relative h-[300px] md:h-[380px]">
            <TemporaryImage alt="Approved school-life photograph to be supplied by Bukana Brilliant Schools" category="school-life" width="100%" height="100%" />
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Explore school life" title="The experience is more than a timetable" description="Use these areas as a guide to what you may want to see or ask about. Descriptions below are enquiry prompts, not claims that a particular facility or activity is available." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experiences.map(({ id, label, icon: Icon, description }) => (
              <Card key={id} className="h-full overflow-hidden">
                <div className="grid sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="min-h-[220px] bg-surface-warm p-4">
                    <TemporaryImage alt={`Approved photograph for ${label.toLowerCase()} to be supplied`} category={id} width="100%" height="100%" />
                  </div>
                  <CardBody className="p-6 md:p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div>
                    <h2 className="mb-3 text-xl font-bold text-ink-deep">{label}</h2>
                    <p className="leading-relaxed text-ink-muted">{description}</p>
                  </CardBody>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-pad">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Plan a visit" title="Ask to see the environment for yourself" description="If the school offers visits, ask how to arrange one and which areas you may view. A visit can help you understand the setting, routines, and practical arrangements relevant to your child." className="mx-0 text-left" />
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" href={contactCta.href}>Ask about a visit</Button>
              <Button variant="outline" href="/academics">Explore learning levels</Button>
            </div>
          </div>
          <div className="rounded-card border border-border-soft bg-surface-white p-7 md:p-9">
            <ShieldCheck className="mb-4 h-8 w-8 text-brand" />
            <h2 className="mb-3 text-xl font-bold text-ink-deep">Student privacy matters</h2>
            <p className="leading-relaxed text-ink-muted">Photographs showing identifiable children should be published only after the school has confirmed the necessary permissions and parent or guardian consent. Avoid including student names, private records, or other identifying information in public gallery captions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
