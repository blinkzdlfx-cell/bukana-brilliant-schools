import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, GraduationCap, Building2, Play, Palette, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { schoolProfile, admissionsCta, academicsCta, contactCta } from '@/data/school.js';
import { contactDetails } from '@/data/contact.js';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AdmissionsBanner />
      <AboutPreview />
      <ProgramsGrid />
      <FacilitiesShowcase />
      <ContactInvitation />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand-deep overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgzMnYyMEgweiIvPjwvc3ZnPg==')]"></div>
      <div className="relative container-wide section-pad pt-24 md:pt-36 pb-24 md:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Creche · Nursery · Primary
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-surface-white text-balance"
            >
              Every bright future begins with a first step.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl text-center lg:text-left"
            >
              {schoolProfile.description} <strong className="text-surface-white"> Be a star @ BBS.</strong>
            </motion.p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full sm:flex-1 sm:min-w-0"
              >
                <Button variant="accent" href={admissionsCta.href} className="flex w-full min-h-14 whitespace-normal px-5 py-4 text-base leading-snug">
                  Enquire about admission <ArrowRight className="ml-2 inline h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full sm:flex-1 sm:min-w-0"
              >
                <Button variant="outline" href={academicsCta.href} className="w-full px-8 py-4 text-base">
                  Explore learning levels
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="hidden lg:block relative h-[440px] w-full">
            <TemporaryImage
              alt="Approved school photograph to be supplied by Bukana Brilliant Schools"
              category="hero"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionsBanner() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <div className="rounded-2xl bg-brand-deep p-8 md:p-12 text-surface-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                Admissions enquiries
              </p>
              <h2 className="mb-4 text-3xl font-bold">Open for Creche, Nursery &amp; Primary</h2>
              <p className="leading-relaxed text-[#dbe8dc]">
                Contact Bukana Brilliant Schools to learn about available classes, requirements, and how to arrange
                a visit. Details are confirmed directly by the school.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="accent" href={admissionsCta.href} className="w-full md:w-auto px-8 py-4">
                Enquire about admission
              </Button>
              <Button variant="outline" href={contactCta.href} className="w-full md:w-auto px-8 py-4">
                Contact the school
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About Bukana Brilliant Schools"
          title="A place to begin the journey of learning"
          description="Bukana Brilliant Schools serves Creche, Nursery, and Primary education in Ijegun, Lagos. This preview helps families know what to ask as they explore whether BBS is right for their child."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="mb-5 text-2xl font-bold text-ink-deep">Why families explore BBS</h3>
            <ul className="space-y-5 text-ink-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>Three learning levels &mdash; Creche, Nursery, and Primary &mdash; in one school.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>A welcoming environment where every child can grow in confidence and curiosity.</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>Learning balanced with play, creativity, and outdoor activity.</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button variant="outline" href="/about" className="px-7 py-3">
                Learn more about the school
              </Button>
            </div>
          </div>
          <div className="relative h-[360px] w-full rounded-2xl overflow-hidden border border-border-soft bg-surface-warm grid grid-cols-2 gap-2">
            <TemporaryImage
              alt="Approved classroom photograph to be supplied"
              category="classroom"
              width="100%"
              height="50%"
              className="h-full w-full"
            />
            <TemporaryImage
              alt="Approved outdoor play photograph to be supplied"
              category="play"
              width="100%"
              height="100%"
              className="h-full w-full"
            />
            <TemporaryImage
              alt="Approved facilities photograph to be supplied"
              category="facilities"
              width="100%"
              height="50%"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsGrid() {
  const programs = [
    {
      id: 'creche-nursery',
      title: 'Creche &amp; Nursery',
      icon: Users,
      description:
        'Early years care and learning. Ask the school about age ranges, daily routines, and how children are supported.',
    },
    {
      id: 'primary',
      title: 'Primary School',
      icon: GraduationCap,
      description:
        'Primary classes and subjects. Ask the school about class structure, curriculum, and progress tracking.',
    },
    {
      id: 'admissions',
      title: 'Admissions',
      icon: BookOpen,
      description:
        'Start your enquiry. Contact the school for current availability, requirements, and next steps.',
    },
  ];

  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Programs"
          title="One school, endless opportunities"
          description="Explore the educational stages offered at Bukana Brilliant Schools and find the right starting point for your child."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            const link =
              program.id === 'admissions'
                ? admissionsCta.href
                : program.id === 'creche-nursery'
                ? '/early-years'
                : '/primary';
            return (
              <motion.div
                key={program.id}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden"
              >
                <div className="bg-surface-white border border-border-soft rounded-xl p-7 h-full">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-surface-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-ink-deep group-hover:text-brand transition-colors">
                    {program.title}
                  </h3>
                  <p className="leading-relaxed text-ink-muted">{program.description}</p>
                  <Button
                    variant="outline"
                    href={link}
                    className="mt-6 w-full text-sm"
                  >
                    Explore {program.title}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center lg:justify-end">
          <Button variant="primary" href={admissionsCta.href} className="px-8 py-3">
            Start an admissions enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}

function FacilitiesShowcase() {
  const facilities = [
    { id: 'classrooms', label: 'Classrooms', icon: BookOpen },
    { id: 'play', label: 'Play &amp; outdoor learning', icon: Play },
    { id: 'creative', label: 'Creative activities', icon: Palette },
    { id: 'building', label: 'School facilities', icon: Building2 },
  ];

  return (
    <section className="bg-surface-white section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Facilities &amp; media"
          title="See the learning environment"
          description="Approved photographs of classrooms, play areas, and facilities will be displayed here once supplied by the school."
        />
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:no-overflow-x sm:pb-0 sm:snap-none">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="flex-none shrink-0 w-64 sm:w-80 rounded-xl border border-border-soft bg-surface-warm overflow-hidden snap-start sm:snap-none group"
              >
                <div className="h-40 bg-surface-warm flex items-center justify-center group-hover:bg-brand/50 transition-colors">
                  <TemporaryImage
                    alt={`Approved ${facility.label.toLowerCase()} photograph to be supplied`}
                    category={facility.id}
                    width="100%"
                    height="100%"
                    className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon className="w-10 h-10 text-brand" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-ink-deep">{facility.label}</h3>
                  <p className="text-sm text-ink-muted mt-1">
                    Photograph pending school approval.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-ink-muted text-center">
          Horizontal showcase on mobile &mdash; swipe to view. All images pending approved school photography.
        </p>
      </div>
    </section>
  );
}

function ContactInvitation() {
  return (
    <section className="bg-brand section-pad text-surface-white">
      <div className="container-wide text-center">
        <SectionHeading
          eyebrow="Ready to get in touch?"
          title="Contact Bukana Brilliant Schools"
          description="Reach us by email or WhatsApp to ask about admissions, arrange a visit, or learn more about Creche, Nursery, and Primary."
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-ink-deep font-semibold hover:bg-brand-deep transition-colors focus-visible:outline-accent focus-visible:outline-2"
          >
            <Mail className="w-5 h-5" />
            Email the school
          </a>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand text-surface-white font-semibold hover:bg-brand-deep transition-colors focus-visible:outline-accent focus-visible:outline-2"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
