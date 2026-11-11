import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ClipboardList, MessageCircle, School, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { contactDetails } from '@/data/contact.js';
import admissionsBurstImage from '@/images/back-to-school.png';

const enquirySteps = [
  {
    number: '01',
    title: 'Start a conversation',
    detail: 'Tell the school which learning level you are interested in and ask whether places are currently available.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Discuss your child’s needs',
    detail: 'Ask about age requirements, class placement, the school day and whether a visit can be arranged.',
    icon: School,
  },
  {
    number: '03',
    title: 'Confirm the next steps',
    detail: 'The school will explain its current application process, required documents, fees and any relevant dates.',
    icon: ClipboardList,
  },
];

const burstParticles = [
  { x: -126, y: -126, size: 18, rotate: -24, delay: 0 },
  { x: -92, y: -164, size: 22, rotate: 18, delay: 0.22 },
  { x: -54, y: -112, size: 16, rotate: 32, delay: 0.48 },
  { x: -22, y: -190, size: 20, rotate: -16, delay: 0.12 },
  { x: 18, y: -144, size: 18, rotate: 28, delay: 0.62 },
  { x: 54, y: -184, size: 22, rotate: -30, delay: 0.34 },
  { x: 92, y: -128, size: 17, rotate: 16, delay: 0.78 },
  { x: 128, y: -160, size: 20, rotate: 34, delay: 0.18 },
  { x: -148, y: -62, size: 16, rotate: -12, delay: 0.92 },
  { x: -108, y: -82, size: 19, rotate: 26, delay: 0.56 },
  { x: -68, y: -42, size: 22, rotate: -34, delay: 0.3 },
  { x: -34, y: -88, size: 17, rotate: 14, delay: 1.04 },
  { x: 34, y: -72, size: 19, rotate: -22, delay: 0.7 },
  { x: 72, y: -48, size: 16, rotate: 30, delay: 0.42 },
  { x: 112, y: -86, size: 21, rotate: -18, delay: 0.84 },
  { x: 148, y: -54, size: 17, rotate: 22, delay: 0.66 },
];
 
const questions = [
  'Which classes have available places?',
  'What age range is accepted for each learning level?',
  'Can we arrange a visit before making a decision?',
  'Which documents, fees and dates should we prepare for?',
];

export function AdmissionsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative grid items-center gap-8 py-14 md:grid-cols-[1.12fr_0.88fr] md:gap-5 md:py-16 lg:py-20">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Admissions
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              Make your first step an informed one.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
              Considering Bukana Brilliant Schools for Creche, Nursery or Primary? Start by speaking with the school. The admissions team can confirm current availability, requirements and how to proceed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" href="/contact" className="min-h-12 px-6">
                Start an enquiry <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button variant="secondary" href="/academics" className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep">
                Explore learning levels
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-56 w-full max-w-md overflow-hidden sm:h-72 md:max-w-none" aria-hidden="true">
            <div className="absolute bottom-5 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-accent/15 blur-2xl" />
            <div className="absolute bottom-8 left-1/2 h-8 w-24 -translate-x-1/2 rounded-full bg-brand/70 blur-xl" />
            {burstParticles.map((particle, index) => (
              <motion.img
                key={index}
                src={admissionsBurstImage}
                alt=""
                aria-hidden="true"
                width={particle.size}
                height={particle.size}
                draggable="false"
                initial={shouldReduceMotion ? false : { x: 0, y: 0, opacity: 0, scale: 0.25 }}
                animate={shouldReduceMotion
                  ? { x: particle.x, y: particle.y, opacity: 0.9, rotate: particle.rotate, scale: 1 }
                  : {
                    x: [0, particle.x * 0.62, particle.x],
                    y: [0, particle.y * 0.62, particle.y],
                    opacity: [0, 1, 0],
                    scale: [0.25, 1, 0.7],
                    rotate: [0, particle.rotate],
                  }}
                transition={shouldReduceMotion
                  ? { duration: 0 }
                  : {
                    duration: 2.8 + (index % 4) * 0.32,
                    delay: particle.delay,
                    repeat: Infinity,
                    repeatDelay: 0.12,
                    ease: 'easeOut',
                    times: [0, 0.42, 1],
                  }}
                style={{ width: particle.size, height: particle.size }}
                className="absolute left-1/2 top-[72%] rounded-[4px] border border-white/80 object-cover shadow-md shadow-black/30"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="A simple place to start"
            title="Your admissions enquiry"
            description="Every family’s questions are different. These three steps help you organise the conversation; the school will confirm its official process."
          />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {enquirySteps.map(({ number, title, detail, icon: Icon }) => (
              <Card key={number} className="h-full">
                <CardBody className="p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.16em] text-ink-muted/60">{number}</span>
                  </div>
                  <h2 className="mt-7 text-xl font-bold text-ink-deep">{title}</h2>
                  <p className="mt-3 leading-7 text-ink-muted">{detail}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border-soft bg-surface-warm">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Before you enquire</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              A few useful questions to bring along.
            </h2>
            <p className="mt-5 leading-8 text-ink-muted">
              Ask the school to confirm the details that matter to your family. Requirements and availability can change, so use the school’s latest guidance rather than relying on a general checklist.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border-soft bg-white p-6 shadow-sm sm:p-8">
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question} className="flex items-start gap-3 border-b border-border-soft pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="leading-7 text-ink">{question}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-surface-warm p-4">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm leading-6 text-ink-muted">
                Application documents, fees, class availability and admission dates must be confirmed directly with Bukana Brilliant Schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-deep text-white">
        <div className="container-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E8D28C]">Ready to ask?</p>
            <h2 className="mt-3 text-balance text-2xl font-bold text-white sm:text-3xl">Speak with the school.</h2>
            <p className="mt-3 leading-7 text-white">Send an enquiry and ask for the latest admissions information for your child’s learning level.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="accent" href={contactDetails.whatsapp} className="min-h-12 px-6">
              WhatsApp the school <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="/contact" className="min-h-12 px-6">Contact details</Button>
          </div>
        </div>
      </section>
    </>
  );
}
