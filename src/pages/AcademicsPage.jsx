import { motion } from 'motion/react';
import { BookOpen, Users, Star, GraduationCap, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { educationLevels, pendingNote } from '@/data/academics.js';
import { admissionsCta, contactCta } from '@/data/school.js';

const levelIcons = { creche: Users, nursery: Star, primary: GraduationCap };

export function AcademicsPage() {
  return (
    <>
      <HeroSection />
      <LevelsSection />
      <CurriculumSection />
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
            Academics at BBS
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
          >
            Explore the stage that fits your child.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
          >
            Bukana Brilliant Schools serves Creche, Nursery, and Primary. The school can confirm class availability,
            age requirements, curriculum details, and the most suitable placement for your child.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" href="/contact" className="px-8 py-4">
              Ask about class placement
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

function LevelsSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Learning levels"
          title="Three stages to explore"
          description="The information below is a guide to the questions parents may want answered. It is not a substitute for the school&rsquo;s confirmed curriculum, class structure, or admission criteria."
        />
        <div className="mt-12 space-y-10">
          {educationLevels.map((level, index) => {
            const Icon = levelIcons[level.id] || BookOpen;
            return (
              <Card key={level.id} className="overflow-hidden">
                <div className={index % 2 === 0 ? 'grid md:grid-cols-[1.25fr_0.75fr]' : 'grid md:grid-cols-[0.75fr_1.25fr]'}>
                  <div className={index % 2 === 0 ? 'bg-surface-white p-7 md:p-10' : 'order-2 bg-surface-white p-7 md:p-10'}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
                      Level {index + 1}
                    </p>
                    <h2 className="mb-4 text-3xl font-bold text-ink-deep">{level.name}</h2>
                    <p className="text-lg leading-relaxed text-ink-muted">
                      {level.summary ||
                        `Information about ${level.name.toLowerCase()}. Details are pending owner confirmation.`}
                    </p>
                  </div>
                  <div className={index % 2 === 0 ? 'bg-surface-warm p-7 md:p-10' : 'order-1 bg-surface-warm p-7 md:p-10'}>
                    <h3 className="mb-5 text-lg font-bold text-ink-deep">Questions to ask the school</h3>
                    <ul className="space-y-4">
                      {[
                        `What age range does the school accept for ${level.name.toLowerCase()}?`,
                        `What does a typical day look like in ${level.name.toLowerCase()}?`,
                        `How are parents updated about a child&rsquo;s progress?`,
                      ].map((question) => (
                        <li key={question} className="flex items-start gap-3 text-ink-muted">
                          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                          <span className="leading-relaxed">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="mt-10 text-sm text-ink-muted text-center">{pendingNote}</p>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Curriculum &amp; learning areas"
          title="What children learn"
          description="Curriculum pillars, subjects, and assessment details are pending owner confirmation. The prompts below are useful areas to discuss with the school."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Communication &amp; language', 'Speaking, listening, and early literacy development.'],
            ['Personal, social &amp; emotional', 'Confidence, relationships, and managing feelings.'],
            ['Physical development', 'Movement, coordination, and health.'],
            ['Literacy', 'Reading, writing, and phonics foundations.'],
            ['Numeracy', 'Counting, shapes, and early mathematics.'],
            ['Understanding the world', 'Community, nature, and how things work.'],
            ['Expressive arts &amp; design', 'Art, music, role-play, and creativity.'],
          ].map(([title, detail], index) => (
            <Card key={title} className="h-full">
              <CardBody className="p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink-deep">{title}</h3>
                <p className="text-sm text-ink-muted">{detail}</p>
                <p className="mt-3 text-xs text-ink-muted">
                  Curriculum detail pending owner confirmation.
                </p>
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
          <MessageCircle className="mb-4 h-8 w-8 text-accent" />
          <h2 className="mb-3 text-3xl font-bold">Need details for your child?</h2>
          <p className="leading-relaxed text-[#dbe8dc]">
            Contact the school to confirm the available classes, requirements, and next steps for an admissions
            enquiry.
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
