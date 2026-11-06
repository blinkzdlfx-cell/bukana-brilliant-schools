import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { academicsCta, admissionsCta, contactCta } from '@/data/school.js';

export function AboutPage() {
  return (
    <>
      <section className="bg-brand section-pad text-surface-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">About Bukana Brilliant Schools</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl">A place to begin the journey of learning.</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#e8f3e9]">Bukana Brilliant Schools serves Creche, Nursery, and Primary education in Ijegun, Lagos. This page introduces the school and helps families know what to ask as they explore whether BBS is right for their child.</p>
            <p className="mt-5 font-semibold text-accent">Be a star @ BBS</p>
          </div>
          <div className="relative h-[320px] md:h-[400px]">
            <TemporaryImage alt="Approved school photograph to be supplied by Bukana Brilliant Schools" category="about" width="100%" height="100%" />
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="The school" title="Three educational stages, one place to start" description="Families can contact the school to learn about its current class structure, teaching approach, daily routines, and expectations for parents and guardians." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { number: '01', title: 'Creche', text: 'Ask about age eligibility, care arrangements, daily routines, communication with families, and what children need to bring.' },
              { number: '02', title: 'Nursery', text: 'Ask about class groups, early learning activities, classroom routines, and how children are prepared for the next stage.' },
              { number: '03', title: 'Primary', text: 'Ask about class placement, subjects, learning materials, assessment, and how the school shares progress with parents.' },
            ].map((item) => (
              <Card key={item.number} className="h-full">
                <CardBody className="p-7">
                  <p className="mb-4 text-sm font-bold tracking-widest text-brand">{item.number}</p>
                  <h2 className="mb-3 text-xl font-bold text-ink-deep">{item.title}</h2>
                  <p className="leading-relaxed text-ink-muted">{item.text}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-pad">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-card">
            <TemporaryImage alt="Approved photograph of the school environment to be supplied" category="environment" width="100%" height="100%" />
          </div>
          <div>
            <SectionHeading eyebrow="Get to know us" title="The details that matter to your family" description="A school profile is most useful when it answers practical questions. We recommend speaking directly with BBS about the points below and confirming any arrangements before enrolment." className="mx-0 text-left" />
            <ul className="mt-7 space-y-3 text-ink-muted">
              <li className="rounded-lg border border-border-soft bg-surface-white p-4">The school’s mission, vision, and educational approach.</li>
              <li className="rounded-lg border border-border-soft bg-surface-white p-4">Class structure, curriculum, and learning expectations.</li>
              <li className="rounded-lg border border-border-soft bg-surface-white p-4">Facilities, school-day arrangements, and parent communication.</li>
              <li className="rounded-lg border border-border-soft bg-surface-white p-4">Admission requirements, current fees, and key dates.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Continue exploring" title="Choose your next step" description="Explore the learning levels, review the admissions enquiry information, or contact the school directly." />
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="outline" href={academicsCta.href}>Explore academics</Button>
            <Button variant="primary" href={admissionsCta.href}>Admissions enquiries</Button>
            <Button variant="secondary" href={contactCta.href}>Contact the school</Button>
          </div>
        </div>
      </section>
    </>
  );
}
