import { motion } from 'motion/react';
import { ClipboardList, MessageCircle, CalendarDays, FileCheck2, CircleHelp, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { admissionsProcess, placementPolicies, requiredDocuments } from '@/data/academics.js';
import { contactCta, admissionsCta } from '@/data/school.js';

export function AdmissionsPage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <PoliciesSection />
      <DocumentsSection />
      <ContactSection />
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
            Admissions
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
          >
            Make your first step an informed one.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
          >
            If you are considering Bukana Brilliant Schools for Creche, Nursery, or Primary, start by contacting the
            school. The admissions team will guide families through class placement, the application process and the documents required for enrolment.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" href="/contact" className="px-8 py-4">
              Start an enquiry
            </Button>
            <Button variant="outline" href="/academics" className="px-8 py-4">
              Explore learning levels
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Admissions process"
          title="How to begin an enquiry"
          description="Use these practical steps to organise your questions. The school will explain its official process and any required forms."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {admissionsProcess.map(({ step, title, detail }) => (
            <Card key={step} className="h-full">
              <CardBody className="p-7">
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-surface-white">
                    <span className="text-sm font-bold">{step}</span>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">
                      Step {step}
                    </p>
                    <h3 className="text-lg font-bold text-ink-deep">{title}</h3>
                  </div>
                </div>
                <p className="leading-relaxed text-ink-muted">{detail}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoliciesSection() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Placement policies"
          title="How places are offered"
          description="Placement and admission criteria are confirmed by the school at the time of enquiry."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {placementPolicies.map((policy) => (
            <Card key={policy}>
              <CardBody className="p-7">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <p className="leading-relaxed text-ink-muted">{policy}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentsSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Required documents"
          title="What to prepare"
          description="Prepare these commonly requested records. The admissions team will confirm which documents apply to your child and whether anything else is needed."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {requiredDocuments.map((doc) => (
            <Card key={doc} className="h-full">
              <CardBody className="p-6 flex flex-col">
                <FileCheck2 className="mb-4 h-6 w-6 text-brand" />
                <p className="text-sm font-medium text-ink-deep leading-snug">{doc}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-brand-deep section-pad text-surface-white">
      <div className="container-wide text-center">
        <SectionHeading
          eyebrow="Have questions?"
          title="Speak with the school"
          description="For current admission information, use the contact details published on this website and confirm that you are speaking with an official school representative."
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" href="/contact" className="px-8 py-4">
            Contact the school
          </Button>
          <Button variant="secondary" href="/academics" className="px-8 py-4">
            Review academics
          </Button>
        </div>
      </div>
    </section>
  );
}
