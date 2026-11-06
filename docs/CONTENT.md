# Content and Data Rules — Bukana Brilliant Schools

## 1. Verified project details currently available

| Field | Current value | Status |
|---|---|---|
| School name | Bukana Brilliant Schools | Supplied |
| Short name | BBS | Supplied |
| Tagline | Be a star @ BBS | Supplied |
| Domain | bukanabrilliantschools.com | Supplied |
| Educational levels | Creche, Nursery, Primary | Supplied |
| Address | Degbuyi Complex, 282, Jegun/Ikotun Road, Thomas Adeoye B/Stop, Ijegun, Lagos, Nigeria | Previously supplied; owner must reconfirm before production |
| Mission | To nurture every child’s potential through caring, purposeful early-years and primary education | Owner-supplied |
| Email | contact@bukanabrilliantschools.com | Owner-supplied |
| WhatsApp | 07019779736 | Owner-supplied |

All other school-specific facts must be treated as pending until confirmed.

## 2. Content integrity

Never invent:
- Founding year, named historical events, or specific school milestones.
- Founder, proprietor, principal, teacher, or staff names.
- Vision or values statements (the mission statement above is owner-supplied; do not add to it).
- Curriculum, teaching methodology, subjects, or examination details.
- Age ranges, class structure, or class sizes.
- Tuition, fees, discounts, or payment policies.
- Admissions dates, availability, requirements, or guarantees.
- Facilities, transport, meals, security, health, or childcare arrangements.
- Accreditations, registrations, awards, rankings, or affiliations.
- Student results, pass rates, or performance statistics.
- Testimonials or parent reviews.
- Phone number, opening hours, or social accounts (beyond the owner-supplied WhatsApp and email).
- News, events, announcements, or calendar dates.

If a detail is not verified, omit it or mark it internally as pending. Do not publish internal placeholders as facts.

## 3. Content groups

### School identity
- Official name.
- Logo.
- Tagline.
- Short school description.
- Approved brand assets.

### About
- School overview.
- History, if supplied.
- Mission and vision, if supplied.
- Values, if supplied.
- Leadership profiles, if approved.

### Academics
Represent the three known levels as structured data:
- Creche.
- Nursery.
- Primary.

Potential fields, only when confirmed:
- Display name.
- Age range.
- Class names.
- Overview.
- Learning objectives.
- Curriculum/subjects.
- Daily routine.
- Facilities.
- Relevant approved images.
- Admissions CTA.

### Admissions
Potential fields, only when confirmed:
- Application process.
- Entry requirements.
- Required documents.
- Admission periods.
- Fees.
- FAQ.
- Official enquiry channel.

### School life / gallery
Potential fields:
- Image source.
- Approved caption.
- Category.
- Alt text.
- Permission status.
- Display order.

### Contact
- Official address.
- Phone.
- WhatsApp.
- Email.
- Opening hours.
- Map/directions URL.
- Social media links.

Every contact value requires owner confirmation.

## 4. Placeholder and image policy

- The 30 royalty-free images in the gallery are temporary illustrative references only; they must never be presented as photographs of Bukana Brilliant Schools.
- Clearly identify stock photographs as illustrative references and do not imply they depict the actual school.
- Replace the temporary gallery images with owner-provided photographs when the school supplies approved assets.
- Obtain approval for photographs before production use.
- Identifiable student photographs require appropriate school approval and parent/guardian consent.
- Do not expose student names, class lists, personal details, or image metadata.
- Avoid fabricated testimonials and fake review cards.
- If no approved imagery exists, use neutral design placeholders that are clearly marked for replacement.

## 5. Data organization

Keep repeated content in dedicated data modules rather than scattering it through page components.

Recommended groups:
- `schoolProfile`
- `educationLevels`
- `admissionsContent`
- `galleryItems`
- `contactDetails`
- `navigationItems`

Keep owner-dependent values centralized. Components should render structured content rather than contain repeated hard-coded school details.

## 6. Content review before production

Before launch, the owner must review:
- All copy.
- School name and tagline formatting.
- Address and map pin.
- Phone, WhatsApp, and email.
- Admissions information and fees, if displayed.
- Educational-level descriptions.
- Facilities and curriculum claims.
- All photographs, captions, and permissions.
- Social links and opening hours.

No unverified placeholder may remain in a production-facing page.


## 7. Current gallery implementation

- The dedicated `/gallery` route uses `src/pages/GalleryPage.jsx` and the central `src/data/gallery.js` image manifest.
- The gallery currently contains 30 temporary royalty-free image references across six filter options.
- The page supports responsive image cards, full-screen viewing, previous/next controls, keyboard navigation, swipe navigation, lazy loading and asynchronous decoding.
- Replace image entries in `src/data/gallery.js` with owner-approved school image URLs and accurate alt text/captions. Keep image permission status confirmed before publishing identifiable pupils.
- Careers have been removed from the website. There is no News page or News route in the public navigation or sitemap.
