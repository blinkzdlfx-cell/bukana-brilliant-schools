import { Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { contactCta, schoolProfile } from '@/data/school.js';
import { contactDetails as contactData } from '@/data/contact.js';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About the school', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'School life', href: '/school-life' },
  { label: 'Photo gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function SiteFooter({ currentPath, onLinkClick }) {
  const currentYear = new Date().getFullYear();
  const hasSocial = contactData.social && contactData.social.length > 0;
  const hasConfirmedAddress = Boolean(contactData.address && !contactData.addressPending);
  const mapHref = hasConfirmedAddress
    ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(contactData.address)
    : null;

  return (
    <footer className="border-t border-border-soft bg-white">
      <section className="bg-brand-deep py-12 text-white sm:py-14">
        <div className="container-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Your child’s next chapter</p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Let’s talk about the right start for your child.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Speak with Bukana Brilliant Schools about learning levels, admissions or arranging a visit.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="accent" asChild className="min-h-12 px-6">
              <a href={contactCta.href}>Contact the school</a>
            </Button>
            {contactData.whatsapp && (
              <Button variant="secondary" asChild className="min-h-12 border-white/35 bg-white/10 px-6 text-white hover:bg-white hover:text-brand-deep">
                <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-12 sm:py-16">
        <div className="container-wide">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr] lg:gap-8">
            <div className="max-w-sm">
              <a
                href="/"
                onClick={(event) => { event.preventDefault(); onLinkClick('/'); }}
                className="inline-flex rounded-2xl border border-border-soft bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                aria-label="Bukana Brilliant Schools home"
              >
                <img
                  src={new URL('../../images/bukana-logo.jpeg', import.meta.url).href}
                  alt="Bukana Brilliant Schools — Be a star at BBS"
                  width="144"
                  height="120"
                  loading="lazy"
                  decoding="async"
                  className="h-[6.25rem] w-36 object-contain"
                />
              </a>
              <p className="mt-5 text-lg font-bold text-brand-deep">{schoolProfile.tagline}</p>
              <p className="mt-2 text-sm leading-7 text-ink-muted">
                {schoolProfile.description}
              </p>
              {hasSocial && (
                <div className="mt-5 flex items-center gap-3">
                  {contactData.social.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white text-brand-deep transition-colors hover:border-brand hover:bg-brand hover:text-white"
                    >
                      {social.label.toLowerCase() === 'facebook' ? <Facebook className="h-4 w-4" /> : social.label.toLowerCase() === 'instagram' ? <Instagram className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <nav aria-label="Footer quick links">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-deep">Explore</h2>
              <ul className="mt-5 space-y-3">
                {footerLinks.map((item) => {
                  const active = currentPath === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(event) => { event.preventDefault(); onLinkClick(item.href); }}
                        className={cn('inline-flex min-h-7 items-center text-sm transition-colors hover:text-brand-deep', active ? 'font-semibold text-brand-deep' : 'text-ink-muted')}
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-deep">Contact</h2>
              <ul className="mt-5 space-y-4 text-sm">
                {hasConfirmedAddress && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div className="min-w-0">
                      <p className="font-semibold text-ink-deep">School address</p>
                      <p className="mt-1 leading-6 text-ink-muted">{contactData.address}</p>
                      {mapHref && <a href={mapHref} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-7 items-center gap-1 font-semibold text-brand-deep hover:underline">View map <ArrowUpRight className="h-3.5 w-3.5" /></a>}
                    </div>
                  </li>
                )}
                {contactData.email && (
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div className="min-w-0">
                      <p className="font-semibold text-ink-deep">Email</p>
                      <a href={'mailto:' + contactData.email} className="mt-1 block break-all text-ink-muted transition-colors hover:text-brand-deep">{contactData.email}</a>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-deep">Speak with us</h2>
              <p className="mt-5 text-sm leading-7 text-ink-muted">
                Have a question about the school or admissions? Send us a message and we’ll point you in the right direction.
              </p>
              {contactData.whatsapp && (
                <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg font-semibold text-brand-deep transition-colors hover:text-brand">
                  <MessageCircle className="h-4 w-4" /> {contactData.whatsappDisplay}
                </a>
              )}
              <p className="mt-5 text-xs leading-6 text-ink-muted">
                Creche, Nursery and Primary education in Ijegun, Lagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-soft bg-white py-5">
        <div className="container-wide flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-5 text-ink-muted">© {currentYear} {schoolProfile.name}. All rights reserved.</p>
          <p className="text-xs font-semibold tracking-wide text-brand-deep">{schoolProfile.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
