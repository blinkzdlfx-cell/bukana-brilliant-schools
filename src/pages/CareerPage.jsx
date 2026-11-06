import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Briefcase, Mail } from 'lucide-react';
import { contactCta, schoolProfile } from '@/data/school.js';
import { contactDetails } from '@/data/contact.js';

export function CareerPage() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Career"
          title="Join the BBS team"
          description="Bukana Brilliant Schools welcomes interest from educators and support staff. Current vacancies and application details are pending owner confirmation."
        />
        <div className="mt-12 max-w-2xl">
          <div className="bg-surface-warm border border-border-soft rounded-xl p-8">
            <div className="flex items-start gap-3 mb-6">
              <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-bold text-ink-deep">Vacancies</h3>
                <p className="text-ink-muted">Open positions will be listed here once the school confirms current vacancies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-bold text-ink-deep">Express interest</h3>
                <p className="text-ink-muted">
                  Send your interest or CV to {contactDetails.email}.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="primary" href="/contact" className="px-8 py-4">
            Contact the school
          </Button>
        </div>
      </div>
    </section>
  );
}
