import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody, CardHeader } from '@/components/ui/card.jsx';
import { educationLevels, pendingNote } from '@/data/academics.js';
import { admissionsCta } from '@/data/school.js';

export function AcademicsPage() {
  return (
    <>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Academics"
            title="Creche, Nursery, and Primary"
            description="Bukana Brilliant Schools serves three educational levels. Detailed information for each level is pending owner confirmation."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {educationLevels.map((level) => (
              <Card key={level.id}>
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-ink-deep">{level.name}</h3>
                  {level.detailsPending && (
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mt-2">
                      Details pending
                    </span>
                  )}
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-ink-muted mb-4">
                    {level.summary ||
                      `Information about ${level.name.toLowerCase()}, including age range and learning focus, is pending owner confirmation.`}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted text-center">{pendingNote}</p>
          <div className="mt-12 text-center">
            <Button variant="primary" href={admissionsCta.href}>Enquire about admission</Button>
          </div>
        </div>
      </section>
    </>
  );
}
