import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { admissionsCta, contactCta } from '@/data/school.js';

export function AdmissionsPage() {
  return (
    <>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Admissions"
            title="Admissions enquiry"
            description="Interested families can enquire about admission for Creche, Nursery, and Primary. Process details are pending school confirmation."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardBody className="pb-4">
                <h3 className="text-lg font-bold text-ink-deep mb-2">Available levels</h3>
                <p className="text-sm text-ink-muted">
                  Creche, Nursery, and Primary. Specific class structure and entry requirements pending confirmation.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="pb-4">
                <h3 className="text-lg font-bold text-ink-deep mb-2">Next step</h3>
                <p className="text-sm text-ink-muted">
                  Contact the school to learn about the application process and required documents.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="pb-4">
                <h3 className="text-lg font-bold text-ink-deep mb-2">Fees</h3>
                <p className="text-sm text-ink-muted">
                  Tuition and fees are pending owner approval for public display.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-surface-warm section-pad border-t border-border-soft">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Get in touch"
            title="Send an enquiry"
            description="Admissions steps, requirements, and fees will be published once confirmed by the school."
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={admissionsCta.href} className="w-full sm:w-auto">
              Enquire about admission
            </Button>
            <Button variant="outline" href={contactCta.href} className="w-full sm:w-auto">
              Contact the school
            </Button>
          </div>
          <p className="mt-8 text-sm text-ink-muted text-center">
            This is an enquiry channel only. No application is submitted or processed through this website.
          </p>
        </div>
      </section>
    </>
  );
}
