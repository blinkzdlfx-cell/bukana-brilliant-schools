# Content and Data Rules — Bukana Brilliant Schools

## 1. Verified project details currently available

| Field | Current value | Status |
|---|---|---|
| School name | Bukana Brilliant Schools | Supplied |
| Short name | BBS | Supplied |
| Tagline | Be a star @ BBS | Supplied |
| Domain | bukanabrilliantschools.com | Supplied |
| Educational levels | Creche, Nursery, Primary | Supplied |
| Address | Degbuyi Complex, 282, Jegun/Ikotun Road, Thomas Adeoye B/Stop, Ijegun, Lagos, Nigeria | Owner-confirmed for the current site (2026-11-11) |
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

- The current local photo library in `src/images/` contains 21 school-supplied photo entries; do not describe these as stock imagery.
- The presence of photos in the repository does not independently confirm publication rights or parent/guardian consent.
- Confirm the school has permission to publish each image and obtain parent/guardian consent for identifiable pupils before public use.
- Keep original images and enhanced 16:9 versions paired in the central manifest; do not overwrite the originals.
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


## 7. Current school-photo implementation

- `src/data/learning-images.js` maps 21 original school-supplied photos to enhanced 16:9 versions and responsive WebP variants.
- The homepage uses `HeroRopeStrip` for the first six photos and a separate six-photo `HomeLifeSection`. The two-lane rope strip moves slowly and respects hover, keyboard focus, and reduced-motion preferences.
- The dedicated `/gallery` page uses a static responsive photo grid, category filters, and a lightbox that presents the enhanced landscape image alongside the original photograph.
- Responsive WebP variants are generated by `scripts/optimize-images.mjs` and referenced through `src/generated/optimized-image-map.js`.
- The older `learning-image-marquee.jsx` component is not used by the current homepage or dedicated gallery. Do not describe the current gallery as an autoplay marquee.
- Keep captions accurate and avoid exposing pupil names or private metadata. Confirm publication rights and parent/guardian consent for identifiable pupils.
- Careers remain removed; no News route is active.
