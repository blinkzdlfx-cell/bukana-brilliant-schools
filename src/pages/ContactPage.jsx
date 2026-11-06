import { useState } from 'react';
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardBody } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { contactDetails, contactIntro } from '@/data/contact.js';

const CATEGORIES = [
  { label: 'Admissions enquiry', value: 'admissions' },
  { label: 'School tour / visit', value: 'tour' },
  { label: 'General question', value: 'general' },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  category: 'general',
  message: '',
};

export function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setFormData((previous) => ({ ...previous, [key]: value }));
    if (errors[key]) {
      setErrors((previous) => ({ ...previous, [key]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Enter your name.';
    if (!formData.email.trim()) next.email = 'Enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email address.';
    if (!formData.message.trim()) next.message = 'Write a short message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const category = CATEGORIES.find((item) => item.value === formData.category)?.label || 'General question';
    const body = [
      'Name: ' + formData.name,
      'Email: ' + formData.email,
      'Phone: ' + (formData.phone || 'Not provided'),
      'Enquiry type: ' + category,
      '',
      'Message:',
      formData.message,
    ].join('\n');
    const subject = encodeURIComponent(category + ' from ' + formData.name);
    window.location.assign(
      'mailto:' + contactDetails.email + '?subject=' + subject + '&body=' + encodeURIComponent(body)
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="container-wide relative py-16 md:py-20 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D28C]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Contact BBS
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Let’s talk about your child’s next step.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {contactIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="accent"
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-12 px-6"
            >
              Message on WhatsApp <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              href={'mailto:' + contactDetails.email}
              className="min-h-12 border-white/50 bg-white/8 px-6 text-white shadow-none hover:bg-white hover:text-brand-deep"
            >
              Email the school
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-pad scroll-mt-24 bg-surface-white">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Send an enquiry</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              What would you like to know?
            </h2>
            <p className="mt-5 leading-8 text-ink-muted">
              Send a message about admissions, learning levels or arranging a visit. You can also contact the school directly by WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-surface-warm p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-ink-deep">WhatsApp</p>
                  <a
                    href={contactDetails.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-8 items-center break-words font-semibold text-brand underline underline-offset-4"
                  >
                    {contactDetails.whatsappDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-surface-warm p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-ink-deep">Email</p>
                  <a
                    href={'mailto:' + contactDetails.email}
                    className="mt-1 inline-flex min-h-8 break-all font-semibold text-brand underline underline-offset-4"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardBody className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Full name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(value) => handleChange('name', value)}
                    error={errors.name}
                    required
                  />
                  <TextField
                    label="Email address"
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(value) => handleChange('email', value)}
                    error={errors.email}
                    required
                  />
                </div>

                <TextField
                  label="Phone number (optional)"
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(value) => handleChange('phone', value)}
                />

                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-semibold text-ink-deep">
                    What is your enquiry about?
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(event) => handleChange('category', event.currentTarget.value)}
                    className="min-h-12 w-full rounded-xl border border-border-soft bg-white px-4 py-3 text-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-ink-deep">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(event) => handleChange('message', event.currentTarget.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="block min-h-36 w-full resize-y rounded-xl border border-border-soft bg-white px-4 py-3 leading-7 text-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    placeholder="Tell us what you would like to know..."
                  />
                  {errors.message && <p id="message-error" role="alert" className="text-sm font-medium text-red-700">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" className="min-h-12 w-full px-6">
                  Prepare email enquiry <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <p className="text-xs leading-6 text-ink-muted">
                  This opens your email application with your message prepared. The message is not sent or stored by this website.
                </p>
              </form>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="section-pad border-y border-border-soft bg-surface-warm">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">Planning a visit</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink-deep sm:text-4xl">
              Confirm the details before travelling.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-ink-muted">
              The school’s exact visitor directions, entrance and opening hours have not yet been verified for publication. Please contact the school first so you can plan your visit using the latest information.
            </p>
            <Button
              variant="primary"
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 min-h-12 px-6"
            >
              Ask for visit details <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>

          <div className="rounded-[1.5rem] border border-border-soft bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-ink-deep">Location and visitor information</h3>
            </div>
            <p className="mt-4 leading-7 text-ink-muted">
              Request the confirmed address, directions, suitable visiting times and any arrangements you should know before arriving.
            </p>
            <div className="mt-6 flex items-start gap-3 border-t border-border-soft pt-5">
              <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm leading-6 text-ink-muted">Opening days and hours should be confirmed directly with the school.</p>
            </div>
            <div className="mt-5 flex items-start gap-3 border-t border-border-soft pt-5">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm leading-6 text-ink-muted">Only verified contact and location information is presented as confirmed on this page.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TextField({ label, id, type = 'text', autoComplete, value, onChange, error, required = false }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-ink-deep">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? id + '-error' : undefined}
        className={
          'block min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ' +
          (error ? 'border-red-600' : 'border-border-soft')
        }
      />
      {error && <p id={id + '-error'} role="alert" className="text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}
