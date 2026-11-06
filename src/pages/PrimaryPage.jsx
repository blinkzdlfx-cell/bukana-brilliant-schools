import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Star, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { primarySchool, pendingNote } from '@/data/academics.js';
import { contactCta, admissionsCta } from '@/data/school.js';

export function PrimaryPage() {
  return (
    <>
      <HeroSection />
      <StructureSection />
      <SubjectsSection />
      <AssessmentSection />
      <EnquirySection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="relative container-wide section-pad pt-24 md:pt-36 pb-24 md:pb-36">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Primary School
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
          >
            Primary School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
          >
            Primary classes and subjects. Ask the school about class structure, curriculum, subjects, and how
            progress is assessed and shared with families.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" href="/contact" className="px-8 py-4">
              Ask about primary
            </Button>
            <Button variant="outline" href="/admissions" className="px-8 py-4">
              Admissions enquiries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StructureSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Class structure"
          title="Primary classes"
          description="Class structure, grade levels, and placement details are pending owner confirmation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: 'Class structure', text: 'Primary grade levels and class organization.' },
            { label: 'Subjects', text: 'Curriculum subjects taught at each level.' },
            { label: 'Assessment', text: 'How learning and progress are assessed.' },
          ].map((item) => (
            <Card key={item.label}>
              <CardBody className="p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-ink-deep">{item.label}</h3>
                <p className="text-ink-muted">{item.text}</p>
                <p className="mt-4 text-xs font-semibold text-accent">Detail pending owner confirmation.</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-muted text-center">{pendingNote}</p>
      </div>
    </section>
  );
}

function SubjectsSection() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Subjects"
          title="Subjects taught"
          description="The full subject list and curriculum outline are pending owner confirmation."
        />
        <div className="mt-12 flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
          {[
            'Literacy',
            'Numeracy',
            'Science',
            'Social Studies',
            'Creative Arts',
            'Physical Education',
          ].map((subject) => (
            <span
              key={subject}
              className="px-4 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-medium"
            >
              {subject}
            </span>
          ))}
          <p className="mt-8 text-xs font-semibold text-accent text-center">
            Subject list pending owner confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}

function AssessmentSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Assessment &amp; progression"
          title="Tracking progress"
          description="Assessment methods and progression details are pending owner confirmation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Assessment approach',
              text: 'How the school checks understanding and progress.',
            },
            {
              title: 'Parent communication',
              text: 'Progress reports and parent-teacher updates.',
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardBody className="p-7">
                <h3 className="mb-3 text-lg font-bold text-ink-deep">{item.title}</h3>
                <p className="text-ink-muted">{item.text}</p>
                <p className="mt-4 text-xs font-semibold text-accent">Detail pending owner confirmation.</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section className="bg-brand-deep section-pad text-surface-white">
      <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <Users className="mb-4 h-8 w-8 text-accent" />
          <h2 className="mb-3 text-3xl font-bold">Questions about primary?</h2>
          <p className="leading-relaxed text-[#dbe8dc]">
            Contact the school to confirm class placement, subjects, assessment, and enrolment next steps.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button variant="accent" href="/contact" className="px-8 py-4">
            Contact the school
          </Button>
          <Button variant="secondary" href="/admissions" className="px-8 py-4">
            Admissions
          </Button>
        </div>
      </div>
    </section>
  );
}
