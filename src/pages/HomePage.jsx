import { motion } from 'motion/react';
import { Star, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardBody, CardHeader } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { schoolProfile, admissionsCta, academicsCta } from '@/data/school.js';
import { educationLevels } from '@/data/academics.js';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SchoolIntroduction />
      <EducationLevels />
      <LearningApproach />
      <AdmissionsInvitation />
      <LocationContactStrip />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="relative container-wide section-pad pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Now welcoming enquiries
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-white leading-tight mb-6 text-balance"
            >
              Bukana Brilliant Schools
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[#e8f3e9] max-w-lg mb-8 leading-relaxed"
            >
              A welcoming school for Creche, Nursery, and Primary education in
              Ijegun, Lagos. {' '}
              <strong className="text-surface-white">Be a star @ BBS.</strong>
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Button variant="primary" className="w-full text-center px-6 py-3.5 text-lg">
                  Enquire about admission
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full text-center px-6 py-3.5 text-lg">
                  Explore academics
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px] w-full">
            <TemporaryImage
              alt="School learning environment at Bukana Brilliant Schools"
              category="hero"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SchoolIntroduction() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About the school"
          title="A place to grow, learn, and shine"
          description="Bukana Brilliant Schools provides a supportive learning environment for children across Creche, Nursery, and Primary levels. We are located at Degbuyi Complex, Ijegun, Lagos, and we welcome families who want their children to thrive."
        />
      </div>
    </section>
  );
}

function EducationLevels() {
  return (
    <section className="bg-surface-warm section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Educational levels"
          title="Creche, Nursery, Primary"
          description="We serve three educational levels. Detailed information for each level is pending owner confirmation."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {educationLevels.map((level) => (
            <Card key={level.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  {level.id === 'creche' && <Users className="w-5 h-5 text-brand" />}
                  {level.id === 'nursery' && <GraduationCap className="w-5 h-5 text-brand" />}
                  {level.id === 'primary' && <Star className="w-5 h-5 text-brand" />}
                  <h3 className="text-xl font-bold">{level.name}</h3>
                </div>
                {level.detailsPending && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                    Details pending
                  </span>
                )}
              </CardHeader>
              <CardBody>
                <p className="text-sm text-ink-muted mb-4">
                  {level.summary ||
                    'Age range, learning focus, and daily routine details are pending owner confirmation.'}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-muted text-center">
          {educationLevels[0].detailsPending
            ? 'Coming soon: full level details once confirmed by the school.'
            : ''}
        </p>
      </div>
    </section>
  );
}

function LearningApproach() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our approach"
          title="Learning with purpose"
          description="Our approach to teaching and care is guided by the needs of each child. Specific philosophy and curriculum details are pending owner confirmation."
        />
        <div className="mt-12 p-6 bg-brand/5 border border-brand/10 rounded-card">
          <p className="text-ink text-balance">
            While the school&rsquo;s educational philosophy and teaching methods are being confirmed, we welcome you to
            contact us directly to learn how we support children at each stage&mdash;from Creche through Primary.
          </p>
        </div>
      </div>
    </section>
  );
}

function AdmissionsInvitation() {
  return (
    <section className="bg-brand section-pad relative overflow-hidden">
      <div className="relative container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Ready to enrol?"
              title="Take the next step"
              description="Find out about admissions for Creche, Nursery, and Primary and how to arrange a visit."
              className="text-center lg:text-left"
            />
          </div>
          <div className="text-center lg:text-left">
            <Button variant="accent" className="w-full lg:w-auto px-8 py-4 text-lg">
              Enquire about admission
            </Button>
            <p className="mt-4 text-sm text-[#e8f3e9]">
              Admissions steps and requirements are pending school confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationContactStrip() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <div className="bg-surface-white border border-border-soft rounded-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center text-surface-white font-bold">
              <span className="text-lg">📍</span>
            </div>
            <div>
              <h3 className="font-bold text-ink-deep">Visit us</h3>
              <p className="text-sm text-ink-muted">
                {schoolProfile.address} (pending owner confirmation)
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
          <Button variant="primary" className="px-8 py-3.5 text-lg">
            Contact the school
          </Button>
        </div>
      </div>
    </section>
  );
}
