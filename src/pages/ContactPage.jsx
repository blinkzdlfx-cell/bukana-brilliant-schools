import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactDetails, contactIntro } from '@/data/contact.js';
import { admissionsCta } from '@/data/school.js';

const FIELD = {
  address: { label: 'Address', icon: MapPin, value: contactDetails.address, pending: contactDetails.addressPending },
  phone: { label: 'Phone', icon: Phone, value: contactDetails.phone, pending: contactDetails.phonePending },
  whatsapp: { label: 'WhatsApp', icon: Phone, value: contactDetails.whatsapp, pending: contactDetails.whatsappPending },
  email: { label: 'Email', icon: Mail, value: contactDetails.email, pending: contactDetails.emailPending },
};

export function ContactPage() {
  return (
    <>
      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Contact us"
            title="Find us"
            description={contactIntro}
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {Object.entries(FIELD).map(([key, field]) => (
                <Card key={key}>
                  <CardBody className="pt-5 pb-4">
                    <div className="flex items-start gap-3">
                      <field.icon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{field.label}</p>
                        <p className="text-ink leading-relaxed">
                          {field.value ? (
                            field.label === 'Email' ? (
                              <a href={`mailto:${field.value}`} className="text-brand underline underline-offset-2 hover:text-brand-deep">
                                {field.value}
                              </a>
                            ) : field.label === 'Phone' ? (
                              <a href={`tel:${field.value}`} className="text-brand underline underline-offset-2 hover:text-brand-deep">
                                {field.value}
                              </a>
                            ) : field.label === 'WhatsApp' ? (
                              <a href={field.value} className="text-brand underline underline-offset-2 hover:text-brand-deep">
                                {field.value}
                              </a>
                            ) : (
                              field.value
                            )
                          ) : (
                            <span className="text-ink-muted">Pending owner confirmation</span>
                          )}
                        </p>
                        {field.pending && (
                          <span className="mt-1 inline-block text-xs text-accent font-semibold">
                            Value pending confirmation
                          </span>
                        )}
                      </div>
                    </div>
                  </CardBody>
              </Card>
            ))}
          </div>
          <div className="flex flex-col justify-center">
              <div className="rounded-card bg-surface-warm border border-border-soft p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                <TemporaryImage
                  alt="School location map placeholder"
                  category="location"
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="mt-4 text-sm text-ink-muted text-center">
                Map/directions link pending location verification.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand section-pad">
        <div className="container-wide text-center">
          <SectionHeading
            eyebrow="Ready to visit?"
            title="Get in touch"
            description="Reach out through an official channel or arrange a visit to the school."
            className="text-center"
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={admissionsCta.href} className="w-full sm:w-auto">
              Enquire about admission
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
