import { Button } from '@/components/ui/button.jsx';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { academicsCta, admissionsCta } from '@/data/school.js';

export function AboutPage() {
  return (
    <>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="About Bukana Brilliant Schools"
            title="Our identity"
            description="Bukana Brilliant Schools serves Creche, Nursery, and Primary education. Our mission, vision, and values statements are pending owner confirmation and will be shared here once approved."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-ink-deep mb-4">A school for the community</h3>
              <p className="text-ink-muted mb-4 leading-relaxed">
                Located at Degbuyi Complex, Ijegun, Lagos, Bukana Brilliant Schools is
                committed to providing a safe, welcoming environment where children can
                learn and grow.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Leadership profiles, history, and founding details will be published
                only with approved biographies and photographs.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <TemporaryImage
                alt="School environment at Bukana Brilliant Schools"
                category="about"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-warm section-pad border-t border-border-soft">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Next steps"
            title="Explore further"
            description="Learn more about our educational levels or begin an admissions enquiry."
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="outline" href={academicsCta.href} className="w-full sm:w-auto">
              Explore academics
            </Button>
            <Button variant="primary" href={admissionsCta.href} className="w-full sm:w-auto">
              Enquire about admission
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
