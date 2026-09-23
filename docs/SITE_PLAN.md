# Bukana Brilliant Schools — Full Site Plan

## 1. Project objective

Create a polished, credible, parent-focused school website for Bukana Brilliant Schools.

This is a **multi-page website**, not a single scrolling landing page.

The site should communicate:
- who the school is
- what age groups/programmes it offers
- its educational approach
- school values
- admission information
- school life
- announcements/news
- how parents can contact the school
- where the school is located

The website should feel like a real school website that could be shown to a school owner/client as a serious product demo.

## 2. Design reference

Use the supplied EduPro school template repository as visual and information-architecture inspiration:

https://github.com/sharonbrainacademy-stack/edupro-school-template

Use its general quality, hierarchy, spacing, section composition, school-oriented UX, cards, hero sections, academic/admission presentation, gallery/news patterns, navigation and footer ideas.

Do NOT copy:
- its colors
- its logo/branding
- its text
- its exact assets
- its React/TypeScript implementation
- its admin implementation
- its database/storage architecture
- its exact page designs

Improve the design where appropriate.

## 3. Brand

Primary brand color:
`#0d8215`

The color may change later.

Therefore:
- define a single source of truth for brand colors
- use CSS custom properties/design tokens
- do not scatter the hex value throughout files
- supporting colors should be derived to create a professional education brand
- use neutral whites, soft greys, deep text colors and restrained green accents
- avoid making every section green

Suggested visual character:
- modern
- trustworthy
- academic
- warm but professional
- spacious
- premium without looking like a corporate SaaS dashboard

## 4. Technical direction

Use a lightweight web stack.

Preferred:
- semantic HTML
- CSS
- vanilla JavaScript
- optional Vite only if useful for development/building

Do NOT use:
- Tailwind CDN
- hardcoded Tailwind utility classes as the styling system
- React unless explicitly requested
- large UI libraries without justification
- unnecessary dependencies

If a build tool is used, CSS should still be organized around reusable classes/design tokens rather than utility-class markup.

Recommended structure:

```
/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── school-life.html
├── gallery.html
├── news.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── js/
│   │   ├── main.js
│   │   └── components.js
│   └── images/
├── docs/
├── AGENTS.md
└── README.md
```

The exact structure may differ if the agent has a clearly better lightweight architecture, but responsibilities must remain clear.

## 5. Global layout

### Header

Desktop:
- school logo/wordmark
- Home
- About
- Academics
- Admissions
- School Life
- News
- Contact
- prominent admission/enquiry CTA

Mobile:
- compact logo
- menu button
- accessible mobile navigation
- clear CTA where space permits

Header should:
- remain visually stable
- have clear active-page state
- not become oversized
- work across all pages

### Footer

Include:
- school identity
- short description
- useful navigation
- academic/admission links
- contact information
- WhatsApp CTA
- address placeholder until verified
- copyright
- social links only if real school accounts are supplied

## 6. Home page

The homepage should be a strong summary of the entire school.

### Hero
Include:
- strong school-focused headline
- short supporting statement
- primary CTA: Admissions
- secondary CTA: Discover the School
- high-quality school/learning visual
- subtle visual treatment
- no excessive animation

### Introduction
Introduce Bukana Brilliant Schools.

Communicate:
- learning
- character
- confidence
- supportive environment

### Academic pathways
Three clear programme cards:
1. Early Years
2. Primary
3. Secondary

Each should have:
- title
- short description
- visual cue
- link to Academics

### Why/values section
Show several meaningful differentiators such as:
- academic excellence
- character
- supportive learning
- creativity
- leadership

Do not make unsupported claims about accreditation, rankings or exam performance.

### School life
Use a visual preview:
- classroom
- activities
- facilities
- student/community moments

Link to School Life/Gallery.

### Admissions CTA
Clear explanation of the next step:
- enquiry
- school visit/assessment
- admission
- enrolment

### News preview
Show latest school updates or clearly labelled demo content.

### Final CTA
Contact + WhatsApp.

## 7. About page

Sections:
- page hero
- school introduction/story
- educational philosophy
- vision
- mission
- core values
- leadership section if verified information exists

Do not invent named principals, founders, awards or history.

## 8. Academics page

Present learning stages clearly.

### Early Years
Discuss:
- early literacy
- numeracy
- communication
- social development
- creativity
- independence

### Primary
Discuss:
- core academic foundations
- literacy/numeracy
- science
- creativity
- problem solving
- collaboration
- character

### Secondary
Discuss:
- academic progression
- subject development
- independent learning
- leadership
- examination preparation
- further education preparation

Avoid claiming a specific curriculum until confirmed by the school.

## 9. Admissions page

This is one of the most important pages.

Include:
- admission introduction
- who can apply
- admission stages
- requirements
- enquiry CTA
- school visit CTA
- WhatsApp CTA
- FAQ section

Suggested process:
1. Enquiry
2. School visit / assessment where applicable
3. Admission decision
4. Enrolment

Clearly distinguish general guidance from school-confirmed requirements.

## 10. School Life

Create a dedicated school-life area.

Possible sections:
- Gallery
- Facilities
- Activities
- Events
- Clubs
- Student experience

Use realistic visual presentation but do not falsely claim that stock images are photographs of Bukana.

If imagery is placeholder, structure the UI so actual school photographs can easily replace it.

## 11. Gallery

Gallery should feel like a real school media page.

Include:
- category filters
- responsive masonry/grid layout
- image cards
- optional lightbox
- keyboard-accessible close behavior if a lightbox is implemented

Suggested categories:
- Learning
- Activities
- Events
- Facilities

## 12. News & Announcements

Create a dedicated page.

Include:
- featured announcement
- article cards
- dates
- categories
- short excerpts
- article/detail route if implemented

Do not fabricate real events.

Clearly label demo/sample content until actual school announcements are supplied.

## 13. Contact page

Include:
- phone
- email
- address
- opening hours
- WhatsApp
- enquiry form
- map/location section

Until verified:
- use clearly marked placeholders
- do not invent an address
- do not invent a phone number
- do not invent email addresses

The form should not pretend to send data unless a real backend/service is connected.

For the demo, it may display a clear "demo form" state.

## 14. Content strategy

The audience is primarily:
- parents
- guardians
- prospective families
- current parents looking for school information

Write content that answers practical questions:
- What does the school offer?
- Which age/class levels are available?
- What is the learning environment?
- How does admission work?
- How can I contact the school?
- Where is the school?
- What happens at the school?

Avoid excessive corporate jargon.

## 15. Interaction requirements

Required:
- responsive navigation
- mobile menu
- active navigation state
- buttons/links with hover/focus states
- accessible forms
- gallery filtering if gallery categories are used
- lightbox if implemented
- FAQ accordion if used
- smooth but restrained transitions

Avoid:
- excessive animations
- autoplay video
- distracting particles
- huge scroll effects
- unnecessary loaders

## 16. SEO and metadata

Each page should have:
- unique title
- meta description
- semantic headings
- useful alt text
- canonical URL placeholder if appropriate
- Open Graph metadata where appropriate

Use clean page titles such as:
- Bukana Brilliant Schools | Home
- About Bukana Brilliant Schools
- Academics | Bukana Brilliant Schools
- Admissions | Bukana Brilliant Schools
- School Life | Bukana Brilliant Schools
- News & Announcements | Bukana Brilliant Schools
- Contact Bukana Brilliant Schools

## 17. Accessibility

Target a strong practical accessibility baseline:
- semantic landmarks
- correct heading hierarchy
- labels for form controls
- keyboard accessible navigation
- visible focus states
- sufficient contrast
- descriptive alt text
- reduced-motion consideration
- buttons for actions, links for navigation

## 18. Responsive behavior

Design intentionally for:
- small phones
- large phones
- tablets
- laptops
- large desktop screens

Do not simply shrink desktop layouts.

Check:
- navigation
- hero
- cards
- grids
- forms
- gallery
- footer
- typography
- spacing

## 19. Performance

Prefer:
- local optimized assets when available
- modern image formats where practical
- lazy loading for below-the-fold images
- minimal JavaScript
- no unnecessary dependencies
- no huge libraries for simple interactions

## 20. Data integrity

Never invent:
- school address
- school phone
- official email
- principal/founder names
- accreditation
- awards
- examination results
- school fees
- curriculum claims
- number of students
- years established

Use placeholders marked for confirmation.

## 21. Demo scope

This phase is a public website demo.

Do NOT build:
- full school management system
- student portal
- parent portal
- teacher portal
- payment system
- result management system
- authentication
- admin CMS
- fake database

These may become Phase 2 after the client confirms requirements.

## 22. Definition of done

The website is not complete until:
- all planned pages exist
- every nav link works
- all CTA links work
- responsive layouts are tested
- no obvious console errors exist
- no broken images exist
- forms behave honestly
- placeholder data is clearly identifiable
- accessibility basics are implemented
- SEO metadata exists
- CSS is maintainable
- design tokens are centralized
- no Tailwind CDN is used
- no hardcoded Tailwind utility architecture is used
- README explains how to run/build the project
- agent documentation is present

## 23. Final implementation instruction

Build the website as a coherent product, not as disconnected pages.

Reuse shared components/styles.
Maintain consistent spacing, typography, buttons, cards, forms and responsive behavior.
Prioritize visual polish and parent usability.
Do not add features merely because they are technically possible.
