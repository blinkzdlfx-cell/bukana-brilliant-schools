import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { Mail, Phone, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { contactDetails, contactIntro } from '@/data/contact.js';
import { admissionsCta } from '@/data/school.js';

const FIELD = {
  address: { label: 'School address', icon: MapPin, value: contactDetails.address, pending: contactDetails.addressPending },
  phone: { label: 'Phone', icon: Phone, value: contactDetails.phone, pending: contactDetails.phonePending },
  whatsapp: { label: 'WhatsApp', icon: MessageCircle, value: contactDetails.whatsapp ? contactDetails.whatsappDisplay : null, href: contactDetails.whatsapp, pending: contactDetails.whatsappPending },
  email: { label: 'Email', icon: Mail, value: contactDetails.email, pending: contactDetails.emailPending },
};

export function ContactPage() {
  return (
    <>
      <section className="bg-brand section-pad text-surface-white">
        <div className="container-wide">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Contact Bukana Brilliant Schools</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-balance md:text-5xl">Let’s talk about your child’s next step.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#e8f3e9]">{contactIntro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="accent" href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</Button>
            <Button variant="secondary" href={admissionsCta.href}>Admissions enquiries</Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-white section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Contact details" title="Choose how to get in touch" description="WhatsApp is available for enquiries. Other contact details and the exact location should be confirmed by the school before they are published as official channels." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {Object.entries(FIELD).map(([key, field]) => (
              <Card key={key} className="h-full">
                <CardBody className="flex gap-4 p-6 md:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand"><field.icon className="h-6 w-6" /></div>
                  <div className="min-w-0">
                    <h2 className="mb-2 text-lg font-bold text-ink-deep">{field.label}</h2>
                    {field.value ? (
                      field.href ? (
                        <a href={field.href} target={key === 'whatsapp' ? '_blank' : undefined} rel={key === 'whatsapp' ? 'noopener noreferrer' : undefined} className="break-words font-semibold text-brand underline underline-offset-4 hover:text-brand-deep">
                          {field.value}
                        </a>
                      ) : key === 'phone' ? (
                        <a href={`tel:${field.value}`} className="break-words font-semibold text-brand underline underline-offset-4">{field.value}</a>
                      ) : key === 'email' ? (
                        <a href={`mailto:${field.value}`} className="break-words font-semibold text-brand underline underline-offset-4">{field.value}</a>
                      ) : <p className="leading-relaxed text-ink">{field.value}</p>
                    ) : (
                      <p className="text-ink-muted">Contact detail to be supplied by the school.</p>
                    )}
                    {field.pending && <p className="mt-2 text-xs text-ink-muted">Not yet confirmed for publication.</p>}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-pad">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Find the school" title="Plan your route before travelling" description="The school’s address is listed below, but the map pin and directions still need verification. Contact the school to confirm the correct entrance and route before your visit." className="mx-0 text-left" />
            <div className="mt-7 flex items-start gap-4 rounded-card border border-border-soft bg-surface-white p-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <p className="leading-relaxed text-ink">{contactDetails.address}</p>
            </div>
            <p className="mt-4 text-sm text-ink-muted">Opening days and hours have not yet been confirmed. Please ask before visiting.</p>
          </div>
          <div>
            <div className="relative min-h-[280px] overflow-hidden rounded-card border border-border-soft bg-surface-white p-4 md:min-h-[360px]">
              <TemporaryImage alt="Verified map or location image to be added after school location confirmation" category="location" width="100%" height="100%" />
            </div>
            {contactDetails.mapUrl && (
              <a href={contactDetails.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4">
                Open directions <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep section-pad text-surface-white">
        <div className="container-wide grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Clock className="mb-4 h-8 w-8 text-accent" />
            <h2 className="mb-3 text-3xl font-bold">Need admissions information?</h2>
            <p className="max-w-2xl leading-relaxed text-[#dbe8dc]">Ask the school directly about available classes, required documents, fees, and how to arrange a visit. This website does not accept or process applications.</p>
          </div>
          <Button variant="accent" href={admissionsCta.href} className="px-8 py-4">Admissions enquiries</Button>
        </div>
      </section>
    </>
  );
}
