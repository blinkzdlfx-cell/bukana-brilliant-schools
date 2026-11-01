# Design System — Bukana Brilliant Schools

## 1. Design intent

Create a contemporary, welcoming, energetic, and trustworthy school identity for Creche, Nursery, and Primary education.

The visual identity is green-led with a small yellow accent. It should feel bright and engaging without becoming noisy, childish, or overly decorative. Use a deliberate balance of brand-colour sections, deep contrast sections, and warm neutral surfaces.

Do not use a predominantly white template. Do not make every section green. Colour should be visibly present throughout the experience, while content remains easy to read.

## 2. Brand colour tokens

These are the approved starting tokens for the school identity:

| Token | Value | Usage |
|---|---|---|
| Primary green | `#0D8215` | Main brand colour, primary buttons, key brand moments, selected section backgrounds |
| Deep green | `#094F1B` | Supporting brand shade, dark green sections, hover/active states, depth |
| Accent yellow | `#F2C94C` | Small highlights, badges, selected icons, underlines, decorative details, occasional emphasis |
| Deep charcoal | `#171B17` | Dark contrast sections, footer, dark text where appropriate |
| Warm light surface | `#F4F5EF` | Main light page sections and cards |
| Main text | `#172018` | Primary text on warm light surfaces |
| White | `#FFFFFF` | Selective text, cards, and contrast—not the default background everywhere |
| Muted text | `#687268` | Secondary text on light surfaces |
| Soft border | `rgba(23,32,24,0.12)` | Dividers and outlines on light surfaces |
| Dark border | `rgba(255,255,255,0.14)` | Dividers and outlines on dark surfaces |

### Colour hierarchy

1. Primary green is the dominant brand colour.
2. Deep green supports the primary green and adds depth.
3. Yellow is a small accent only. It must not compete with green or become a large page background.
4. Warm light neutral surfaces provide breathing room without making the site predominantly white.
5. Charcoal is used selectively for footer areas, contrast sections, and dark components.

Do not introduce unrelated brand colours. Photographs may naturally contain other colours, but the interface palette must remain consistent.

## 3. Colour application guidance

Use a varied section rhythm, for example:
- Warm light surface for readable content-heavy sections.
- Primary green for selected brand sections, key calls to action, and education-level highlights.
- Deep green for strong contrast sections, selected feature panels, and footer treatments.
- Charcoal for occasional visual grounding.
- Yellow for small visual cues and emphasis.

Do not:
- Use yellow as a dominant background.
- Use green behind every section or every card.
- Put low-contrast green text on green backgrounds.
- Put yellow text on white or pale surfaces where it is difficult to read.
- Use white as the automatic background for every page section.
- Use colour alone to communicate status or meaning.

For text on green backgrounds, use white or another verified high-contrast text colour. For text on yellow, use deep charcoal. Check contrast for all interactive and text combinations before sign-off.

## 4. Typography

- Primary family: Inter or a visually compatible sans-serif fallback.
- Use a clear scale from display headings to body and labels.
- Display headings may use tight tracking and compact line height.
- Body copy must prioritize readability over stylistic compression.
- Avoid excessive uppercase text.
- Use uppercase tracking for small eyebrow labels only.
- Do not use tiny body text to fit content into a design.

Suggested hierarchy:
- Display / hero: responsive, bold or semibold, tight tracking.
- H1: clear page-level title.
- H2: section title with strong visual hierarchy.
- H3: card or subsection title.
- Body: readable, relaxed line height.
- Caption/eyebrow: small but comfortably legible.

## 5. Layout and spacing

- Mobile-first layout.
- Center content within a consistent max-width container.
- Use consistent horizontal page gutters.
- Give major sections generous but purposeful vertical spacing.
- Use responsive grids rather than fixed-width layouts.
- Avoid excessively tall empty sections.
- Keep important content near the beginning of each page.
- Use asymmetric layouts selectively for visual interest.
- Vary section backgrounds intentionally to create a clear visual rhythm.

## 6. Surfaces, borders, and radii

- Use warm light cards for content-heavy areas and green/deep-green cards for selected highlights.
- Use borders that suit the surface: subtle dark borders on light surfaces and subtle white borders on dark surfaces.
- Use consistent medium-to-large radii for feature cards and image panels.
- Buttons and compact controls may use pill or rounded rectangle shapes.
- Use shadows sparingly; rely on contrast, borders, and image overlays.
- Avoid layering too many translucent panels.

## 7. Imagery and art direction

Imagery should communicate a welcoming, active, supportive learning environment.

Preferred image subjects:
- Actual school exterior and entrance.
- Approved classroom and learning spaces.
- Teacher-led learning moments.
- Age-appropriate creative and play activities.
- Approved school events and facilities.
- Students only where the school has appropriate permission for public use.

Image rules:
- Owner-approved real school images take priority.
- Do not label stock imagery as a photograph of Bukana Brilliant Schools.
- Do not publish identifiable student photographs without documented approval and appropriate parent/guardian consent.
- Use consistent crops and aspect ratios.
- Use overlays only where needed for text legibility.
- Provide meaningful alt text for informative images.
- Use empty alt text for purely decorative images.
- Optimize image size and loading behavior.
- Never use an image that suggests facilities or services the school does not have.

## 8. Buttons and links

### Primary button
- Primary green surface.
- White text.
- Strong contrast and clear visual weight.
- Use deep green for hover/active states where contrast remains clear.

### Yellow-accent button or detail
- Use sparingly for secondary emphasis or selected campaign/feature moments.
- Use deep charcoal text on yellow.
- Do not style every CTA yellow.

### Secondary button
- Transparent or warm light surface depending on its context.
- Green or deep-green text on light surfaces.
- White text and a subtle light border on dark surfaces.

### Text links
- Clear visual distinction.
- Visible focus.
- No misleading placeholder destinations.

CTA hierarchy:
1. Admissions enquiry.
2. Explore academics.
3. Contact / Find us.

## 9. Cards and content modules

Use reusable variants for:
- Education level cards.
- Feature cards.
- Admissions step cards.
- Gallery tiles.
- News/event cards, if the feature is approved.
- Contact information blocks.
- CTA panels.

Cards should have consistent spacing and typography, but not every card should look identical. Use layout, imagery, and restrained brand-colour variation to establish hierarchy.

## 10. Motion

Use Motion for subtle, purposeful interactions:
- Short entrance transitions.
- Section reveal when it improves flow.
- Image scale on hover.
- Mobile navigation transitions.
- Small CTA feedback.

Rules:
- Respect `prefers-reduced-motion`.
- Avoid excessive stagger delays.
- Avoid parallax that harms mobile performance.
- Do not hide core content until animation completes.
- No autoplay sound or video.

## 11. Accessibility and states

- Maintain WCAG-conscious text contrast.
- Verify contrast for green, yellow, charcoal, warm-light, and white combinations.
- Provide visible keyboard focus.
- Use semantic HTML.
- Ensure controls have accessible names.
- Do not communicate state using colour alone.
- Support reduced motion.
- Ensure touch targets are comfortable on mobile.
- Provide clear empty, loading, error, and success states where relevant.

## 12. Tailwind implementation

- Tailwind CSS 4 is the primary styling system.
- Define reusable CSS theme variables in the global stylesheet using the approved tokens above.
- Use shadcn/ui components selectively and adapt them to this visual system.
- Use `clsx`, `tailwind-merge`, and `class-variance-authority` for reusable class composition when useful.
- Do not introduce Bootstrap or a parallel utility framework.
- Avoid a large handwritten stylesheet; keep custom CSS limited to global tokens, resets, and cases Tailwind cannot express cleanly.

## 13. Design acceptance

A page meets this design system when:
- The approved school green is the dominant brand colour.
- Deep green provides supporting contrast and depth.
- Yellow appears as a restrained accent, not a competing primary colour.
- Warm neutral and dark sections create a deliberate visual rhythm.
- The site is not predominantly white and is not uniformly green.
- Text and controls maintain accessible contrast.
- Imagery provides appropriate school context.
- Typography is readable and expressive.
- Spacing and card styles are consistent.
- Mobile and desktop compositions feel intentionally designed.
- Motion is restrained and accessible.
