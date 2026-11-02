import { ClipboardList, MessageCircle, CalendarDays, FileCheck2, CircleHelp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { admissionsCta, contactCta } from '@/data/school.js';

const enquiryTopics = [
  { icon: ClipboardList, title: 'Available classes', text: 'Ask which Creche, Nursery, or Primary classes are currently available and which class may suit your child.' },
  { icon: FileCheck2, title: 'Requirements', text: 'Confirm the age criteria, documents, forms, and any other items the school requires before you prepare them.' },
  { icon: CalendarDays, title: 'School schedule', text: 'Ask about the school calendar, daily timings, visiting arrangements, and any relevant admission dates.' },
  { icon: CircleHelp, title: 'Fees and policies', text: 'Request the current fee schedule and clarify payment arrangements and school policies directly with the school.' },
];

export function AdmissionsPage() {
  return (
    <>
      <section className="bg-brand section-pad text-surface-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Admissions</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-balance md:text-5xl">Make your first step an informed one.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e8f3e9]">If you are considering Bukana Brilliant Schools for Creche, Nursery, or Primary, start by contacting the school. The school must confirm current availability, entry requirements, fees, and the official application process.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="accent" href={contactCta.href}>Start an enquiry</Button>
              <Button variant="secondary" href="/academics">Explore learning levels</Button>
            </div>
          </div>
          <div className="rounded-card border border-white/15 bg-white/5 p-7 md:p-9">
            <MessageCircle className="mb-5 h-9 w-9 text-accent" />
            <h2 className="mb-3 text-2xl font-bold">Before you apply</h2>
            <p className="leading-relaxed text-[#dbe8dc]">Please confirm details directly with the school. This website currently provides information for enquiries; it does not submit, reserve, or process an application.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Prepare for your conversation" title="What to ask about" description="These are useful enquiry topics, not a statement of the school’s formal admission rules. Follow the instructions given directly by the school." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {enquiryTopics.map(({ icon: Icon, title, text }, index) => (
              <Card key={title} className="h-full overflow-hidden">
                <CardBody className="flex gap-5 p-7 md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon className="h-6 w-6" /></div>
                  <div><p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Topic 0{index + 1}</p><h2 className="mb-3 text-xl font-bold text-ink-deep">{title}</h2><p className="leading-relaxed text-ink-muted">{text}</p></div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="A simple starting point" title="How to begin an admissions enquiry" description="Use these practical steps to organise your questions. The school will explain its official process and any required forms." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Tell the school about your child', 'Share the child’s age and the level you are enquiring about, without sending sensitive documents through an unverified channel.'],
              ['02', 'Ask for the official requirements', 'Confirm availability, age criteria, documents, fees, school timings, and any dates that apply.'],
              ['03', 'Follow the school’s instructions', 'Arrange a visit or next conversation if offered, and use only the payment and application instructions confirmed by the school.'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-card border border-border-soft bg-surface-white p-7">
                <p className="mb-4 text-sm font-bold tracking-widest text-brand">{number}</p>
                <h3 className="mb-3 text-xl font-bold text-ink-deep">{title}</h3>
                <p className="leading-relaxed text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep section-pad text-surface-white">
        <div className="container-wide text-center">
          <SectionHeading eyebrow="Have questions?" title="Speak with the school" description="For current admission information, use the contact details published on this website and confirm that you are speaking with an official school representative." className="text-center" />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="accent" href={contactCta.href}>Contact the school</Button>
            <Button variant="secondary" href={admissionsCta.href}>Review admissions</Button>
          </div>
        </div>
      </section>
    </>
  );
}
