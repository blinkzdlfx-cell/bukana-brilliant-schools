import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { galleryCategories, galleryItems, galleryPendingNotice } from '@/data/gallery.js';

export function SchoolLifePage() {
  return (
    <>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="School life"
            title="Learning in action"
            description="A visual look at classroom moments, creative activities, play, and facilities. Images will be added once owner-approved school photography is available."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryCategories.map((cat) => (
              <Card key={cat.id}>
                <CardBody className="p-5">
                  <h3 className="text-lg font-bold text-ink-deep mb-2">{cat.label}</h3>
                  <div className="h-32 rounded-card bg-surface-warm border border-border-soft flex items-center justify-center">
                    <TemporaryImage
                      alt={`${cat.label} at Bukana Brilliant Schools`}
                      category={cat.id}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          {galleryItems.length === 0 && (
            <p className="mt-8 text-sm text-ink-muted text-center">
              {galleryPendingNotice}
            </p>
          )}
        </div>
      </section>
      <section className="bg-surface-warm section-pad border-t border-border-soft">
        <div className="container-wide">
          <p className="text-sm text-ink-muted text-center max-w-2xl mx-auto">
            Identifiable student photographs are published only with documented school
            approval and appropriate parent/guardian consent. Student names and personal
            details are not displayed.
          </p>
        </div>
      </section>
    </>
  );
}
