import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils.js';
import { contactDetails, contactIntro } from '@/data/contact.js';

export function SiteFooter({ currentPath, onLinkClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-surface-white border-t border-border-dark">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <a href="/" onClick={(e) => { e.preventDefault(); onLinkClick('/'); }} className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-4">
              <span className="text-2xl font-bold text-accent tracking-tight">BBS</span>
              <span className="text-sm font-semibold text-surface-white uppercase tracking-widest">Bukana Brilliant Schools</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[#cdd6ce]">{contactIntro}</p>
            <p className="text-sm font-semibold text-accent">Be a star @ BBS</p>
            <div className="flex items-center gap-3">
              {contactDetails.social.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-surface-white transition-colors hover:bg-brand-deep" aria-label={social.label}>
                  <Share2 className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-surface-white">Contact</h2>
            <ul className="space-y-3 text-sm text-[#cdd6ce]">
              {contactDetails.address && <li className="flex items-start gap-3 leading-relaxed"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><p>{contactDetails.address}</p></li>}
              {contactDetails.phone && <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /><a href={`tel:${contactDetails.phone}`} className="underline underline-offset-2 hover:text-surface-white">{contactDetails.phone}</a></li>}
              {contactDetails.whatsapp && <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /><a href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-surface-white">WhatsApp: {contactDetails.whatsappDisplay || 'Message the school'}</a></li>}
              {contactDetails.email && <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /><a href={`mailto:${contactDetails.email}`} className="underline underline-offset-2 hover:text-surface-white">{contactDetails.email}</a></li>}
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-surface-white">Explore</h2>
            <ul className="space-y-3 text-sm text-[#cdd6ce]">
              {[
                { label: 'Home', href: '/' },
                { label: 'About the school', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'School life', href: '/school-life' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <li key={item.href}>
                    <a href={item.href} onClick={(e) => { e.preventDefault(); onLinkClick(item.href); }} className={cn('transition-colors hover:text-surface-white', isActive ? 'font-semibold text-surface-white' : 'text-[#cdd6ce]')} aria-current={isActive ? 'page' : undefined}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border-dark pt-8 text-xs text-[#9fb09f] md:flex-row md:items-center">
          <p>&copy; {currentYear} Bukana Brilliant Schools. All rights reserved.</p>
          <p>Be a star @ BBS</p>
        </div>
      </div>
    </footer>
  );
}
