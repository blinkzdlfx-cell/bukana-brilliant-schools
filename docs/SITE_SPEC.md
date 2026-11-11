# Website Specification — Bukana Brilliant Schools

**Document status:** Initial product specification  
**Project type:** New public school website

## 1. Product objective

Design and build a polished school website that introduces Bukana Brilliant Schools, communicates its Creche, Nursery, and Primary offering, gives parents a clear view of the school's learning environment, and directs interested families toward verified admissions and contact channels.

This document defines the intended product experience. It does not authorize inventing school policies, academic claims, facilities, or contact information.

## 2. Primary user journeys

### Journey A — First-time parent
1. Arrives on the homepage.
2. Understands the school's identity and educational levels.
3. Reviews the school's approach and learning environment.
4. Explores Academics and About.
5. Selects an admissions enquiry or contact action.

### Journey B — Parent comparing school levels
1. Opens Academics.
2. Selects Creche, Nursery, or Primary.
3. Reads the confirmed age range, learning focus, and relevant details when supplied.
4. Moves to Admissions or Contact.

### Journey C — Parent ready to visit
1. Opens Contact / Find Us.
2. Sees the verified address and map/directions option.
3. Uses an official phone, email, or WhatsApp channel when confirmed.

## 3. Global layout

### Header
- School identity/logo or typographic wordmark.
- Desktop navigation.
- Clearly visible Admissions CTA.
- Responsive mobile menu.
- Sticky or fixed behavior only if it remains unobtrusive and accessible.
- Active route indication.
- Mobile menu must close on Escape, on route selection, and when the close control is activated.

### Footer
- School name and tagline.
- Main navigation links.
- Verified address.
- Verified contact details only.
- Optional social links only after owner confirmation.
- Copyright line with current year.
- No invented opening hours or claims.

## 4. Required pages

### 4.1 Home — `/`

Purpose: establish identity, communicate the educational offering, and guide visitors to the next step.

Recommended section sequence:
1. **Hero:** school name, concise value statement, tagline, strong admissions CTA, secondary Academics CTA, relevant approved image or image composition.
2. **School introduction:** short, factual overview.
3. **Learning levels:** three clear feature panels for Creche, Nursery, and Primary.
4. **Learning approach:** explain the school's approach only after the owner supplies or approves the details. Until then, use neutral copy that does not claim a proprietary method.
5. **School environment:** approved photos of classrooms, play/learning spaces, activities, and school facilities.
6. **Why parents may explore BBS:** factual differentiators only; do not fabricate rankings, outcomes, awards, safety certifications, or testimonials.
7. **Admissions invitation:** simple next step with a clear CTA.
8. **Location/contact strip:** verified address and official contact action.
9. **Footer.**

The hero should be visually strong without making the entire page one oversized banner. The opening viewport must make the school identity and next action immediately clear.

### 4.2 About the School — `/about`

Purpose: explain the school’s identity, mission, and educational philosophy.

Potential sections:
- Introduction and school identity.
- Mission and vision, only when supplied or approved.
- Educational philosophy / values, only when verified.
- Leadership or founder profile, only with approved biography and photograph.
- Learning environment and facilities, using actual school imagery.
- CTA to explore Academics or Admissions.

Do not create a founding year, history, leadership names, mission statement, or accreditation claim without confirmation.

### 4.3 Academics — `/academics`

Purpose: explain the three levels served.

Create distinct, consistent sections or subpages for:

**Creche**
- Intended age range: owner confirmation required.
- Learning and care description: owner confirmation required.
- Daily routine and facilities: owner confirmation required.

**Nursery**
- Intended age range: owner confirmation required.
- Learning focus and curriculum details: owner confirmation required.
- Activities and transition details: owner confirmation required.

**Primary**
- Classes/grade structure: owner confirmation required.
- Curriculum and subject details: owner confirmation required.
- Assessment and progression details: owner confirmation required.

Do not guess ages, class names, curriculum, subjects, teaching methods, class sizes, or assessment policies. If approved content is not yet available, present the three levels with concise neutral introductions and label detailed information as pending.

### 4.4 Admissions — `/admissions`

Purpose: help parents understand how to make an admissions enquiry.

Potential sections:
- Admissions introduction.
- Available levels.
- Admissions steps, only after school confirmation.
- Requirements/documents, only after confirmation.
- Fees, only if explicitly supplied and approved for public display.
- Admissions FAQ, based on owner-approved answers.
- Enquiry CTA.

Do not invent application windows, availability, fees, age requirements, required documents, entrance tests, discounts, or acceptance guarantees.

A contact/enquiry action must lead to a real configured channel. A frontend-only form must not pretend to submit.

### 4.5 School Life / Gallery — `/school-life` or `/gallery`

Purpose: give parents a visual understanding of the learning environment and school activities.

Potential categories:
- Learning and classroom moments.
- Creative activities.
- Play and outdoor learning.
- School events.
- Facilities and environment.

Use actual school photographs supplied or approved by the owner. Do not imply generic stock photos depict this specific school. If temporary imagery is needed during design, clearly treat it as temporary and replace it before production.

The homepage retains its existing photographic motion strip. The dedicated `/gallery` page uses a static, responsive masonry-style column layout with varied image proportions, clean spacing, and rounded cards. It displays the complete available collection as paired imagery: the enhanced landscape version is the primary card image, with the original portrait frame shown as a zoomed inset. Category filters let visitors narrow the collection, and selecting a card opens an accessible fullscreen viewer with both image versions, previous/next controls, and Escape/arrow-key support. The gallery does not autoplay, slide, or apply automatic scroll-reveal movement. Do not describe these supplied school photographs as stock imagery.

Do not publish identifiable student photos without documented owner approval and appropriate parent/guardian consent. Do not expose student names, sensitive details, or metadata.

### 4.6 News & Events — `/news` (conditional)

Include this route only if the school will provide current, maintained announcements or event information.

- Never invent dates, notices, events, holidays, or school announcements.
- If there is no real content source, omit the route from primary navigation rather than publishing an empty or fabricated news feed.
- Do not hard-code stale event dates into the site.

### 4.7 Contact / Find Us — `/contact`

Purpose: provide trustworthy contact and location information.

Known location:
**Degbuyi Complex, 282, Jegun/Ikotun Road, Thomas Adeoye B/Stop, Ijegun, Lagos, Nigeria.**

Owner must verify the address before production.

Include:
- Verified physical address.
- Official phone number.
- Official WhatsApp number/link, if supplied.
- Official email address.
- Map/directions link or embedded map only after location verification.
- Opening hours only when confirmed.
- A clear admissions/contact CTA.

Do not invent or infer phone numbers, email addresses, opening hours, or map coordinates.

## 5. Navigation and route behavior

Proposed primary navigation:
- Home
- About
- Academics
- Admissions
- School Life
- Contact

News & Events is optional and should only appear if maintained content is available.

Requirements:
- Every navigation item has a valid destination.
- Current route is visually and semantically indicated.
- Mobile navigation supports touch, keyboard, and Escape.
- Direct visits and refreshes work on every route.
- Unknown paths show a branded 404 page with a link home.
- Do not use placeholder `#` links for primary actions.

## 6. Calls to action

Preferred action hierarchy:
1. **Admissions enquiry** — primary action.
2. **Explore academics** — secondary action.
3. **Contact the school / Find us** — supporting action.

CTA wording should be consistent across pages. A CTA must never lead to an unconfigured or misleading destination.

## 7. Motion and interaction

Use the Motion library selectively for:
- Hero text/image entrance.
- Small section reveals.
- Card hover feedback.
- Menu transitions.
- Gallery interactions, if implemented.

Requirements:
- Respect reduced-motion preferences.
- Avoid long delays before key content appears.
- Avoid scroll-jacking and forced horizontal scrolling.
- Keep all important information available without animation.
- Do not use autoplay video or audio.

## 8. Responsive behavior

Design mobile-first and verify at minimum:
- Small phone: 320–375 px.
- Common phone: 390–430 px.
- Tablet: 768 px.
- Laptop: 1024–1280 px.
- Large desktop: 1440 px and above.

No horizontal overflow. Text, imagery, navigation, forms, and buttons must remain usable at narrow widths.

## 9. SEO and sharing

- Unique title and meta description per route.
- Canonical domain to be configured after deployment decision.
- Open Graph title, description, and image.
- Descriptive page headings with one clear H1 per page.
- Semantic page landmarks.
- Favicon and appropriate theme colour.
- Sitemap and robots configuration when route structure is stable.
- No fabricated structured data, ratings, reviews, or school credentials.

## 10. Performance and accessibility

- Optimize and size images for their display context.
- Lazy-load below-the-fold images.
- Avoid layout shift by reserving image dimensions.
- Use semantic elements and meaningful alt text.
- Maintain readable contrast.
- Provide visible keyboard focus.
- Use accessible form labels and error messages.
- Ensure buttons have descriptive accessible names.
- Respect reduced motion.
- Avoid unnecessary JavaScript and third-party scripts.

## 11. Acceptance criteria

The site is ready for owner review when:
- All approved routes render and refresh correctly.
- Home clearly introduces Bukana Brilliant Schools.
- Creche, Nursery, and Primary are represented accurately.
- Admissions and Contact journeys are clear.
- No unverified facts are presented as truth.
- Visual system follows `DESIGN_SYSTEM.md`.
- Mobile and desktop layouts are coherent.
- Navigation and interactive controls work.
- Metadata is route-specific.
- Build and smoke tests pass.
- Owner-dependent content is listed explicitly rather than fabricated.
