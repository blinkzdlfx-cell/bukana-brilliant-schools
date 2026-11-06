import { Mail, Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { contactCta, schoolProfile } from '@/data/school.js';
import { contactDetails as contactData, contactIntro } from '@/data/contact.js';

export function SiteFooter({ currentPath, onLinkClick }) {
  const currentYear = new Date().getFullYear();
  const hasSocial = contactData.social && contactData.social.length > 0;

  return (
    <footer className="bg-surface-white border-t border-border-soft">
      {/* Pre-footer callout */}
      <section className="bg-brand-deep text-surface-white py-12">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg font-semibold text-[#dbe8dc]">
              Join {schoolProfile.name}! Have a question? Let us know how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" asChild className="px-8 py-3 text-base">
                <a href={contactCta.href}>Contact us</a>
              </Button>
            </div>
            {hasSocial && (
              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9fb09f]">
                  Follow us
                </span>
                {contactData.social.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-brand hover:bg-brand-deep text-surface-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.label.toLowerCase() === 'facebook' ? (
                      <Facebook className="w-5 h-5" />
                    ) : social.label.toLowerCase() === 'instagram' ? (
                      <Instagram className="w-5 h-5" />
                    ) : (
                      <MessageCircle className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main footer grid */}
      <section className="bg-surface-warm py-12 border-t border-border-soft">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Left column: logo + tagline */}
            <div className="space-y-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick('/');
                }}
                className="flex items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-surface-white">
                  <span className="text-xl font-bold tracking-tight">BBS</span>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-ink-deep">
                  Bukana Brilliant Schools
                </span>
              </a>
              <p className="text-lg font-bold text-brand">Be a star @ BBS</p>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
                {contactIntro}
              </p>
            </div>

            {/* Right column: contact metadata */}
            <div className="space-y-6 md:space-y-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-ink-deep">
                Contact us
              </h2>
              <ul className="space-y-4 text-sm">
                {contactData.address && (
                  <li className="flex items-start gap-3 leading-relaxed">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <p className="font-semibold text-ink-deep">Address</p>
                      <p className="text-ink">{contactData.address}</p>
                    </div>
                  </li>
                )}
                {contactData.email && (
                  <li className="flex items-start gap-3 leading-relaxed">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <p className="font-semibold text-ink-deep">Email</p>
                      <a href={`mailto:${contactData.email}`} className="text-brand hover:text-brand-deep">
                        {contactData.email}
                      </a>
                    </div>
                  </li>
                )}
                {contactData.whatsapp && (
                  <li className="flex items-start gap-3 leading-relaxed">
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <p className="font-semibold text-ink-deep">WhatsApp</p>
                      <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-deep">
                        {contactData.whatsappDisplay}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-ink-deep">
                Explore
              </h2>
              <ul className="space-y-4 text-sm">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Academics', href: '/academics' },
                  { label: 'Admissions', href: '/admissions' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'Contact', href: '/contact' },
                ].map((item) => {
                  const isActive = currentPath === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(item.href);
                        }}
                        className={cn(
                          'transition-colors',
                          isActive
                            ? 'font-semibold text-brand-deep'
                            : 'text-ink-muted hover:text-brand'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright bar */}
      <div className="border-t border-border-soft py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#687268]">
          <p>&copy; {currentYear} {schoolProfile.name}. All rights reserved.</p>
          <p className="font-semibold text-brand">Be a star @ BBS</p>
        </div>
      </div>
    </footer>
  );
}
