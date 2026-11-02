import { BookOpen, Users, Star, GraduationCap, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody, CardHeader } from '@/components/ui/card.jsx';
import { admissionsCta, contactCta } from '@/data/school.js';

const levels = [
  {
    id: 'creche',
    title: 'Creche',
    icon: Users,
    intro: 'For families exploring the earliest stage of a child’s school experience.',
    questions: ['What age range does the school accept?', 'What does a typical day include?', 'What care arrangements and items should parents know about?'],
  },
  {
    id: 'nursery',
    title: 'Nursery',
    icon: Star,
    intro: 'For families asking about early learning, classroom routines, and preparation for primary education.',
    questions: ['What nursery classes are available?', 'Which learning activities and materials are used?', 'How are parents updated about a child’s progress?'],
  },
  {
    id: 'primary',
    title: 'Primary',
    icon: GraduationCap,
    intro: 'For families looking for details about primary classes, subjects, and learning expectations.',
    questions: ['Which primary classes are offered?', 'What curriculum and subjects are followed?', 'How are learning and progress assessed?'],
  },
];

export function AcademicsPage() {
  return (
    <>
      <section className="bg-brand section-pad text-surface-white">
        <div className="container-wide">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Academics at BBS</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-balance md:text-5xl">Explore the stage that fits your child.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#e8f3e9]">Bukana Brilliant Schools serves Creche, Nursery, and Primary. The school can confirm class availability, age requirements, curriculum details, and the most suitable placement for your child.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="accent" href={contactCta.href}>Ask about class placement</Button>
            <Button variant="secondary" href={admissionsCta.href}>Admissions enquiries</Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Learning levels" title="Three stages to explore" description="The information below is a guide to the questions parents may want answered. It is not a substitute for the school’s confirmed curriculum, class structure, or admission criteria." />
          <div className="mt-12 space-y-8">
            {levels.map(({ id, title, icon: Icon, intro, questions }, index) => (
              <Card key={id} className="overflow-hidden">
                <div className={index === 1 ? 'grid md:grid-cols-[0.75fr_1.25fr]' : 'grid md:grid-cols-[1.25fr_0.75fr]'}>
                  <div className={index === 1 ? 'order-2 bg-surface-white p-7 md:p-10' : 'bg-surface-white p-7 md:p-10'}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-7 w-7" /></div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Level 0{index + 1}</p>
                    <h2 className="mb-4 text-3xl font-bold text-ink-deep">{title}</h2>
                    <p className="text-lg leading-relaxed text-ink-muted">{intro}</p>
                  </div>
                  <div className={index === 1 ? 'order-1 bg-surface-warm p-7 md:p-10' : 'bg-surface-warm p-7 md:p-10'}>
                    <h3 className="mb-5 text-lg font-bold text-ink-deep">Questions to ask the school</h3>
                    <ul className="space-y-4">
                      {questions.map((question) => (
                        <li key={question} className="flex items-start gap-3 text-ink-muted">
                          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                          <span className="leading-relaxed">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="For families" title="Understand the learning experience before enrolment" description="The school’s own answers are the most reliable source for programme-specific information. During your enquiry, consider discussing the following areas." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Class placement', 'Age criteria, class names, entry points, and whether spaces are available.'],
              ['Learning programme', 'Curriculum, subjects, learning resources, and activities by level.'],
              ['Progress updates', 'Assessment approach, parent-teacher communication, and progress reporting.'],
              ['School-day details', 'Timings, items to bring, meals or transport if offered, and school policies.'],
            ].map(([title, text]) => (
              <Card key={title} className="h-full"><CardBody className="p-6"><h3 className="mb-3 text-lg font-bold text-ink-deep">{title}</h3><p className="leading-relaxed text-ink-muted">{text}</p></CardBody></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep section-pad text-surface-white">
        <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <MessageCircle className="mb-4 h-8 w-8 text-accent" />
            <h2 className="mb-3 text-3xl font-bold">Need details for your child?</h2>
            <p className="leading-relaxed text-[#dbe8dc]">Contact the school to confirm the available classes, requirements, and next steps for an admissions enquiry.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="accent" href={contactCta.href}>Contact the school</Button>
            <Button variant="secondary" href={admissionsCta.href}>Admissions</Button>
          </div>
        </div>
      </section>
    </>
  );
}
