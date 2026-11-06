import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { TemporaryImage } from '@/components/ui/temporary-image.jsx';
import { contactDetails, contactIntro } from '@/data/contact.js';
import { admissionsCta } from '@/data/school.js';

const CATEGORIES = [
  { label: 'Admissions enquiry', value: 'admissions' },
  { label: 'School tour / visit', value: 'tour' },
  { label: 'General question', value: 'general' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: null }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Full name is required.';
    if (!formData.email.trim()) next.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) next.message = 'Please tell us how we can help.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMailtoBody = () =>
    [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Category: ${CATEGORIES.find((c) => c.value === formData.category)?.label}`,
      '',
      `Message:`,
      formData.message,
    ].join('\n');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Real action: open the visitor's email client pre-filled with the enquiry.
    // No submission success is claimed until the visitor completes sending.
    const subject = encodeURIComponent(`Admissions enquiry from ${formData.name}`);
    const body = encodeURIComponent(buildMailtoBody());
    window.location.assign(`mailto:${contactDetails.email}?subject=${subject}&body=${body}`);
    setSubmitting(false);
  };

  return (
    <>
      <HeroSection />
      <ContactFormSection
        formData={formData}
        errors={errors}
        submitting={submitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ContactDetailsSection />
      <LocationSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="relative container-wide section-pad pt-24 md:pt-36 pb-24 md:pb-36">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Contact Bukana Brilliant Schools
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6 text-4xl md:text-5xl font-bold leading-tight text-surface-white text-balance"
          >
            Let&rsquo;s talk about your child&rsquo;s next step.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#dbe8dc] md:text-xl"
          >
            {contactIntro}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  );
}

function ContactFormSection({
  formData,
  errors,
  submitting,
  onChange,
  onSubmit,
}) {
  return (
    <section id="contact-form" className="bg-surface-white section-pad scroll-mt-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Send a message"
          title="Contact form"
          description="Complete the form to send an enquiry by email. WhatsApp is also available for a faster response."
        />
        <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Full name"
              id="name"
              value={formData.name}
              onChange={(v) => onChange('name', v)}
              error={errors.name}
            />
            <TextField
              label="Email address"
              id="email"
              type="email"
              value={formData.email}
              onChange={(v) => onChange('email', v)}
              error={errors.email}
            />
          </div>
          <TextField
            label="Phone number"
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(v) => onChange('phone', v)}
            error={errors.phone}
          />
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-ink-deep">
              Inquiry category
            </label>
            <div className="grid gap-2 md:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <label key={cat.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={formData.category === cat.value}
                    onChange={() => onChange('category', cat.value)}
                    className="h-4 w-4 text-brand rounded border-brand"
                  />
                  <span className="ml-2 text-sm text-ink">{cat.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-ink-deep">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="block w-full rounded-lg border border-border-soft bg-surface-white px-4 py-3 text-ink leading-relaxed focus:outline-none focus:ring-2 focus:ring-brand transition-colors"
              value={formData.message}
              onChange={(e) => onChange('message', e.currentTarget.value)}
            />
            {errors.message && (
              <p className="text-sm text-red-700">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            variant="accent"
            disabled={submitting}
            className="w-full px-8 py-4"
          >
            {submitting ? 'Opening your email&hellip;' : 'Send enquiry by email'}
          </Button>
          <p className="text-sm text-ink-muted text-center">
            This opens your email app to contact {contactDetails.email}. No application is submitted or processed
            through this website.
          </p>
        </form>
      </div>
    </section>
  );
}

function TextField({ label, id, type = 'text', value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-ink-deep">{label}</label>
      <input
        id={id}
        type={type}
        className={cnInput(
          'block w-full rounded-lg border px-4 py-3 text-ink leading-relaxed focus:outline-none focus:ring-2 transition-colors',
          error ? 'border-red-600 focus:ring-red-600' : 'border-border-soft focus:ring-brand'
        )}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}

function cnInput(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

function ContactDetailsSection() {
  return (
    <section className="bg-surface-warm section-pad border-t border-border-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact details"
          title="Choose how to get in touch"
          description="WhatsApp is available for enquiries. Other contact details and the exact location should be confirmed by the school before they are published as official channels."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              label: 'Email',
              icon: Mail,
              value: contactDetails.email,
              href: `mailto:${contactDetails.email}`,
              pending: contactDetails.emailPending,
            },
            {
              label: 'WhatsApp',
              icon: MessageCircle,
              value: contactDetails.whatsappDisplay,
              href: contactDetails.whatsapp,
              pending: contactDetails.whatsappPending,
            },
            {
              label: 'Address',
              icon: MapPin,
              value: contactDetails.address,
              pending: contactDetails.addressPending,
            },
            {
              label: 'Phone',
              icon: Phone,
              value: contactDetails.phone,
              pending: contactDetails.phonePending,
            },
          ].map((field) => (
            <Card key={field.label} className="h-full">
              <CardBody className="flex gap-4 p-6 md:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <field.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="mb-2 text-lg font-bold text-ink-deep">{field.label}</h2>
                  {field.value ? (
                    field.href ? (
                      <a
                        href={field.href}
                        target={field.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={field.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className="break-words font-semibold text-brand underline underline-offset-2 hover:text-brand-deep"
                      >
                        {field.value}
                      </a>
                    ) : (
                      <p className="leading-relaxed text-ink">{field.value}</p>
                    )
                  ) : (
                    <p className="text-ink-muted">Contact detail to be supplied by the school.</p>
                  )}
                  {field.pending && (
                    <p className="mt-2 text-xs text-ink-muted">Not yet confirmed for publication.</p>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="bg-surface-white section-pad">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Find the school"
            title="Plan your route before travelling"
            description="The school&rsquo;s address is listed below, but the map pin and directions still need verification. Contact the school to confirm the correct entrance and route before your visit."
            className="mx-0 text-left"
          />
          <div className="mt-7 flex items-start gap-4 rounded-card border border-border-soft bg-surface-white p-5">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <p className="leading-relaxed text-ink">{contactDetails.address}</p>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Opening days and hours have not yet been confirmed. Please ask before visiting.
          </p>
        </div>
        <div>
          <div className="relative min-h-[320px] overflow-hidden rounded-card border border-border-soft bg-surface-white p-4">
            <TemporaryImage
              alt="Verified map or location image to be added after school location confirmation"
              category="location"
              width="100%"
              height="100%"
            />
          </div>
          {contactDetails.mapUrl && (
            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4"
            >
              Open directions <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
