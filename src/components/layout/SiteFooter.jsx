import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { contactDetails, contactIntro } from '@/data/contact.js';

const ICONS = { Mail, Phone, MapPin, Share2 };

export function SiteFooter({ currentPath, onLinkClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-surface-white border-t border-border-dark">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand tracking-tight">BBS</span>
              <span className="text-sm font-semibold text-surface-white uppercase tracking-widest">
                Bukana Brilliant Schools
              </span>
            </div>
            <p className="text-sm text-[#cdd6ce] leading-relaxed max-w-xs">
              {contactIntro}
            </p>
            <div className="flex items-center gap-3">
              {contactDetails.social.length > 0 ? (
                contactDetails.social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-brand hover:bg-brand-deep text-surface-white transition-colors"
                    aria-label={s.label}
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                ))
              ) : null}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-surface-white">Contact</h3>
            <ul className="space-y-3 text-sm text-[#cdd6ce]">
              {contactDetails.address ? (
                <li className="flex items-start gap-3 leading-relaxed">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand" />
                  <p>{contactDetails.address}</p>
                </li>
              ) : null}
              {contactDetails.phone ? (
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand" />
                  <a href={`tel:${contactDetails.phone}`} className="text-[#cdd6ce] hover:text-surface-white transition-colors underline underline-offset-2">
                    {contactDetails.phone}
                  </a>
                </li>
              ) : null}
              {contactDetails.whatsapp ? (
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand" />
                  <a href={contactDetails.whatsapp} className="text-[#cdd6ce] hover:text-surface-white transition-colors underline underline-offset-2">
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {contactDetails.email ? (
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand" />
                  <a href={`mailto:${contactDetails.email}`} className="text-[#cdd6ce] hover:text-surface-white transition-colors underline underline-offset-2">
                    {contactDetails.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-surface-white">Explore</h3>
            <ul className="space-y-3 text-sm text-[#cdd6ce]">
              {[
                { label: 'About the school', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'School life', href: '/school-life' },
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
                        isActive ? 'text-surface-white' : 'text-[#cdd6ce] hover:text-surface-white'
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

        <div className="mt-12 pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9fb09f]">
          <p>
            &copy; {currentYear} Bukana Brilliant Schools. All rights reserved.
          </p>
          <p className="text-[#9fb09f]">Address pending owner confirmation before publication.</p>
        </div>
      </div>
    </footer>
  );
}
