# Bukana Brilliant Schools — Website Implementation Prompt

You are the primary coding agent responsible for implementing the Bukana Brilliant Schools website.

Before writing any code, inspect the repository and read:

1. `AGENTS.md`
2. `docs/SITE_PLAN.md`
3. `docs/DESIGN_REFERENCE.md`
4. `README.md`

Those documents are the project's source of truth.

Do not ask the user to repeat requirements that are already documented there.

---

# 1. PROJECT OBJECTIVE

Build a polished, professional, parent-focused website for:

**Bukana Brilliant Schools**

This must be a **complete multi-page school website**.

Do NOT build a single long landing page.

The website should feel like a real school website suitable for presenting to a prospective school client.

The primary goals are:

- communicate what the school offers
- explain academic stages
- communicate the school's educational philosophy
- present admissions information
- show school life and activities
- present news and announcements
- make it easy for parents to contact the school
- make the school feel credible and professionally represented

Prioritize user experience and visual quality over unnecessary technical complexity.

---

# 2. DESIGN REFERENCE

The following repository is the visual and information-architecture reference:

https://github.com/sharonbrainacademy-stack/edupro-school-template

Study the reference and use it to understand:

- school website composition
- visual hierarchy
- navigation
- hero sections
- typography hierarchy
- section spacing
- academic programme presentation
- admissions presentation
- gallery presentation
- news presentation
- footer structure
- responsive behavior
- general visual polish

However, this is NOT a cloning task.

DO NOT copy:

- EduPro branding
- EduPro colors
- EduPro logo
- EduPro text
- exact layouts
- exact component implementation
- React architecture
- TypeScript architecture
- admin dashboard implementation
- database implementation
- exact assets where avoidable

Create an original Bukana Brilliant Schools design inspired by the quality and structure of the reference.

---

# 3. BRAND

Primary brand color:

`#0d8215`

This color is subject to change later.

Therefore, DO NOT scatter this color throughout the project.

Create centralized design tokens using CSS custom properties.

For example:

```css
:root {
  --color-primary: #0d8215;
  --color-primary-dark: ...;
  --color-primary-light: ...;
  --color-text: ...;
  --color-muted: ...;
  --color-background: ...;
  --color-border: ...;
}
```

The exact supporting palette is up to you, but it must complement the primary green.

The website should NOT look like every section has been painted green.

Use green strategically for:

- CTAs
- active states
- small accents
- icons
- section highlights
- selected elements

Use neutral backgrounds for most content areas.

---

# 4. REQUIRED TECHNICAL DIRECTION

Use a lightweight architecture.

Preferred:

- semantic HTML
- modern CSS
- vanilla JavaScript
- Vite only if useful

Do NOT use:

- Tailwind CDN
- hardcoded Tailwind utility classes
- React unless explicitly requested
- Vue
- Angular
- Next.js
- large UI libraries
- unnecessary dependencies

The project should use normal maintainable CSS classes.

For example:

```html
<section class="hero">
  <div class="container">
    ...
  </div>
</section>
```

rather than:

```html
<section class="min-h-screen bg-green-700 px-6 py-20 ...">
```

Create reusable CSS components for:

- buttons
- cards
- containers
- sections
- headings
- forms
- navigation
- badges
- grids
- responsive layouts

---

# 5. PROJECT ARCHITECTURE

Use a clean structure similar to:

```text
/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── school-life.html
├── gallery.html
├── news.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── components.js
│   │
│   └── images/
│
├── docs/
├── AGENTS.md
├── README.md
└── package.json
```

You may improve this structure if there is a strong technical reason.

Do not introduce unnecessary complexity.

---

# 6. GLOBAL HEADER

Create a professional school navigation.

Desktop navigation:

- Home
- About
- Academics
- Admissions
- School Life
- News
- Contact

Include a prominent Admissions / Enquiry CTA.

The header should:

- be clean
- have a clear active-page state
- remain usable across all pages
- not consume excessive vertical space
- have subtle hover states
- have visible keyboard focus states

Mobile:

- school logo/wordmark
- hamburger/menu button
- accessible mobile navigation
- clear links
- Admissions CTA where practical

The mobile menu must actually work.

---

# 7. GLOBAL FOOTER

Create a strong professional footer.

Include:

### School identity
Bukana Brilliant Schools

### Short description
A concise parent-friendly description.

### Navigation
Useful site links.

### Academics
Links to academic sections.

### Admissions
Admission CTA.

### Contact
Phone/email/address placeholders until verified.

### WhatsApp
Include a WhatsApp CTA, but DO NOT invent a real school WhatsApp number.

### Copyright
Current year.

Do not add fake social-media accounts.

---

# 8. HOME PAGE

Create a visually strong homepage.

## Hero

The hero should contain:

- strong headline
- supporting paragraph
- primary CTA: Admissions
- secondary CTA: Discover the School
- school/learning visual
- subtle overlay
- strong typography
- responsive composition

Possible direction:

"Building bright minds for a confident future."

Do not treat this exact wording as mandatory if you develop a better headline.

The hero should immediately communicate:

- education
- trust
- growth
- confidence
- school quality

Do not use excessive animations.

---

## Introduction

Introduce Bukana Brilliant Schools.

Communicate concepts such as:

- academic development
- character
- confidence
- supportive learning
- whole-child development

Do not invent historical claims.

---

## Academic Pathways

Create three strong cards:

### Early Years

### Primary

### Secondary

Each should have:

- number/icon
- title
- description
- CTA
- subtle interaction

Clicking the card should lead to the appropriate academic content.

---

## Why Bukana / Values

Create a visually interesting section communicating values such as:

- Excellence
- Integrity
- Respect
- Curiosity
- Responsibility
- Leadership

Do not present unsupported claims as official school facts.

---

## School Life Preview

Create a visual section showing:

- learning
- activities
- classroom experience
- facilities
- student/community moments

Use high-quality temporary imagery if real school imagery is not available.

Make it easy to replace those images later.

---

## Admissions CTA

Create a prominent admissions section.

Explain the general process:

1. Enquiry
2. School visit / assessment
3. Admission decision
4. Enrolment

Make clear when information is general/demo information.

---

## News Preview

Show a few announcement cards.

Do not fabricate real school events.

Use clearly labelled sample/demo content where necessary.

---

## Final CTA

End the homepage with:

- Admissions CTA
- Contact CTA
- WhatsApp CTA

---

# 9. ABOUT PAGE

Create a dedicated About page.

Sections:

1. Page hero
2. School introduction
3. Educational philosophy
4. Vision
5. Mission
6. Core values
7. Leadership section if verified information exists
8. CTA

Do not invent:

- founder names
- principal names
- establishment year
- awards
- accreditation
- school history

If information is unavailable, design the section so real information can be inserted later.

---

# 10. ACADEMICS PAGE

Create a dedicated Academics page.

Do NOT squeeze all academic information into the homepage.

Create strong visual sections for:

## Early Years

Discuss appropriate themes:

- early literacy
- early numeracy
- communication
- social development
- creativity
- independence

## Primary

Discuss:

- literacy
- numeracy
- science
- creativity
- problem solving
- collaboration
- character development

## Secondary

Discuss:

- academic progression
- subject development
- independent learning
- leadership
- examination preparation
- preparation for further education

Do NOT claim a specific curriculum until the school confirms it.

---

# 11. ADMISSIONS PAGE

This should be one of the strongest pages.

Parents should immediately understand what to do.

Sections:

### Admission introduction

Explain why parents should contact the school.

### Admission process

Display:

1. Enquiry
2. School visit / assessment
3. Admission decision
4. Enrolment

### Requirements

Create a clear list/card layout.

Use language such as:

"Typical requirements may include..."

Do not present unverified requirements as official policy.

### FAQ

Create useful parent questions such as:

- Which classes are open for admission?
- How do I begin an application?
- Is an assessment required?
- Can I visit the school?
- What documents should I prepare?

Do not invent definitive answers where the school has not supplied them.

Use appropriate "Please contact the school" responses where necessary.

### Contact CTA

Include:

- WhatsApp
- Phone
- Contact page
- enquiry action

---

# 12. SCHOOL LIFE PAGE

Create a dedicated School Life page.

This should communicate what everyday life at the school can look like.

Possible sections:

- Learning
- Activities
- Events
- Facilities
- Clubs
- Student experience

Do not claim specific facilities or clubs unless confirmed.

Design the page so actual school content can replace demo content later.

---

# 13. GALLERY PAGE

Create a professional gallery.

Categories:

- All
- Learning
- Activities
- Events
- Facilities

Include:

- responsive image grid
- attractive image ratios
- hover interaction
- category filtering
- optional lightbox

If implementing a lightbox:

- keyboard accessible
- ESC closes
- visible close button
- appropriate alt text
- no broken navigation

Do not falsely present stock photos as verified Bukana photographs.

---

# 14. NEWS & ANNOUNCEMENTS PAGE

Create a dedicated News page.

Include:

- featured announcement
- article cards
- category
- date
- title
- excerpt
- CTA

Possible categories:

- Announcement
- Events
- Academic
- School Life

Until actual school news is provided, clearly label content as demo/sample content.

If implementing article details, use real routes/pages rather than dead buttons.

---

# 15. CONTACT PAGE

Create a parent-friendly contact page.

Include:

- phone
- email
- address
- opening hours
- WhatsApp
- enquiry form
- map section

Until the school provides verified details, use obvious placeholders such as:

`[School phone number to be confirmed]`

Do NOT invent fake real-looking phone numbers or addresses.

---

# 16. CONTACT FORM

Create a polished enquiry form.

Fields:

- Parent/Guardian Name
- Phone Number
- Child's Age/Class
- Subject/Enquiry
- Message

The form must NOT pretend to send data to a backend.

Until a backend exists, either:

- clearly identify it as a demo form
- or show a clear demo confirmation explaining that backend integration is pending

Never create fake API calls or fake database submissions.

---

# 17. MAP

Create a visually appropriate map/location section.

If the official address is unknown:

Do not embed a random location.

Instead create a professional placeholder indicating:

"School location will be added after the official address is confirmed."

---

# 18. CONTENT QUALITY

Content should sound like a professional Nigerian school website.

Avoid:

- generic AI-sounding paragraphs
- excessive corporate language
- exaggerated claims
- fake statistics
- fake testimonials
- fake awards
- fake accreditation
- fake examination results

Content should be:

- clear
- concise
- parent-focused
- trustworthy
- educational
- easy to scan

---

# 19. VISUAL DESIGN

The site should have:

- strong typography
- excellent spacing
- clear hierarchy
- high-quality imagery
- subtle borders
- restrained shadows
- professional cards
- generous whitespace
- consistent button styles
- consistent section widths

Avoid:

- excessive gradients
- excessive rounded cards
- excessive shadows
- excessive green
- excessive animations
- huge text everywhere
- SaaS dashboard styling
- clutter

The visual direction should feel like a premium modern school website.

---

# 20. RESPONSIVE DESIGN

Do not merely shrink the desktop design.

Design deliberately for:

- 320px+
- mobile
- tablet
- laptop
- desktop
- large desktop

Check:

- navigation
- hero
- typography
- cards
- grids
- forms
- gallery
- footer
- spacing
- image crops

---

# 21. ACCESSIBILITY

Implement:

- semantic HTML
- landmarks
- correct heading hierarchy
- form labels
- keyboard navigation
- visible focus states
- accessible buttons
- accessible mobile menu
- meaningful alt text
- sufficient contrast
- reduced-motion consideration

Do not use clickable `<div>` elements where a button or link is appropriate.

---

# 22. SEO

Every page should have:

- unique `<title>`
- meta description
- proper heading structure
- useful image alt text
- Open Graph metadata where appropriate

Suggested titles:

- Bukana Brilliant Schools | Home
- About Bukana Brilliant Schools
- Academics | Bukana Brilliant Schools
- Admissions | Bukana Brilliant Schools
- School Life | Bukana Brilliant Schools
- Gallery | Bukana Brilliant Schools
- News & Announcements | Bukana Brilliant Schools
- Contact Bukana Brilliant Schools

---

# 23. PERFORMANCE

Keep the site lightweight.

Use:

- optimized images
- lazy loading for below-the-fold images
- minimal JavaScript
- no unnecessary dependencies
- reusable CSS
- efficient DOM manipulation

Do not install packages simply because they are available.

---

# 24. DATA INTEGRITY

This is mandatory.

Never invent official:

- school address
- phone number
- email
- WhatsApp number
- principal
- founder
- fees
- curriculum
- accreditation
- awards
- student count
- examination results
- establishment date

If information is unavailable, mark it as requiring confirmation.

---

# 25. DEMO SCOPE

This is currently a public website demonstration.

DO NOT build:

- student portal
- parent portal
- teacher portal
- authentication
- admin dashboard
- payment system
- result checking system
- school management system
- fake CMS
- fake database

These are potential future features after the client confirms requirements.

---

# 26. CODE QUALITY

Use reusable architecture.

Avoid duplicating the same CSS and JavaScript unnecessarily.

Shared elements such as:

- header
- footer
- buttons
- cards
- typography
- containers
- forms

should follow consistent reusable patterns.

If using JavaScript to inject shared header/footer components, ensure the implementation works correctly on every page.

---

# 27. NO TAILWIND

This is a hard requirement.

DO NOT:

- add Tailwind CDN
- generate huge Tailwind utility strings
- use Tailwind as the primary styling architecture

Use standard CSS.

The finished HTML should remain readable and maintainable.

---

# 28. BEFORE FINISHING

Test the website thoroughly.

Check every page:

- Home
- About
- Academics
- Admissions
- School Life
- Gallery
- News
- Contact

Check every navigation link.

Check every CTA.

Check mobile navigation.

Check forms.

Check gallery filters.

Check console errors.

Check image loading.

Check responsive layouts.

Check keyboard accessibility.

Check focus states.

Check SEO metadata.

Check that no fake school facts were introduced.

Check that no Tailwind CDN exists.

Check that no hardcoded Tailwind utility architecture exists.

---

# 29. FINAL REQUIREMENT

Do not stop after creating basic pages.

The finished result should feel like a coherent, professionally designed school website.

Prioritize:

1. visual quality
2. parent usability
3. responsive behavior
4. clean architecture
5. maintainability
6. truthful content
7. performance

Do not add unnecessary features.

Implement the documented website completely, then inspect your own work and fix obvious issues before declaring the task complete.