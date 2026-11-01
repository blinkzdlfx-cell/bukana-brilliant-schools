# Design System — Bukana Brilliant Schools

## 1. Design intent

Create a contemporary, welcoming, confident school identity using a dark monochrome visual foundation.

The site should feel like a carefully art-directed educational institution: warm through its imagery and content, strong through typography, and easy to navigate. It must not look like a generic white school template.

The palette is intentionally restrained. Do not introduce unrelated bright brand colours without owner approval.

## 2. Colour tokens

Use these as the initial design tokens:

| Token | Value | Usage |
|---|---|---|
| Background | `#070707` | Main page background |
| Foreground | `#f5f5f5` | Main text on dark surfaces |
| Card | `#111111` | Cards and elevated dark surfaces |
| Card foreground | `#f5f5f5` | Text on cards |
| Primary | `#f5f5f5` | Primary light action/surface |
| Primary foreground | `#070707` | Text on primary light action |
| Muted | `#8c8c8c` | Muted interface elements |
| Muted foreground | `#a5a5a5` | Supporting text |
| Border | `rgba(255,255,255,0.11)` | Subtle outlines and dividers |
| Soft surface | `rgba(255,255,255,0.035)` | Quiet card backgrounds |
| Hover surface | `rgba(255,255,255,0.08)` | Hover and selected states |

### Colour distribution
- Dark backgrounds remain the dominant foundation.
- White is used for readable text, emphasis, selected cards, and key CTAs—not as the default background for every section.
- Grey establishes hierarchy and supporting information.
- Photographs may introduce natural colour, but UI chrome remains monochrome.
- A light/inverted section may be used occasionally for strong contrast, not as the page's dominant treatment.

## 3. Typography

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

## 4. Layout and spacing

- Mobile-first layout.
- Center content within a consistent max-width container.
- Use consistent horizontal page gutters.
- Give major sections generous but purposeful vertical spacing.
- Use responsive grids rather than fixed-width layouts.
- Avoid excessively tall empty sections.
- Keep important content near the beginning of each page.
- Use asymmetric layouts selectively for visual interest.

## 5. Surfaces, borders, and radii

- Prefer dark cards with subtle white borders.
- Use consistent medium-to-large radii for feature cards and image panels.
- Buttons and compact controls may use pill or rounded rectangle shapes.
- Use shadows sparingly; rely on contrast, borders, and image overlays.
- Avoid layering too many translucent panels.

## 6. Imagery and art direction

Imagery is especially important because the core UI palette is monochrome.

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

## 7. Buttons and links

### Primary
- White or near-white surface.
- Near-black text.
- Strong contrast.
- Clear hover, focus, active, and disabled states.

### Secondary
- Dark/transparent surface.
- Subtle light border.
- White or muted text.

### Text links
- Clear visual distinction.
- Visible focus.
- No misleading placeholder destinations.

CTA hierarchy:
1. Admissions enquiry.
2. Explore academics.
3. Contact / Find us.

## 8. Cards and content modules

Use reusable variants for:
- Education level cards.
- Feature cards.
- Admissions step cards.
- Gallery tiles.
- News/event cards, if the feature is approved.
- Contact information blocks.
- CTA panels.

Cards should have consistent spacing and typography, but not every card should look identical. Use layout and imagery to establish hierarchy.

## 9. Motion

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

## 10. Accessibility and states

- Maintain WCAG-conscious text contrast.
- Provide visible keyboard focus.
- Use semantic HTML.
- Ensure controls have accessible names.
- Do not communicate state using colour alone.
- Support reduced motion.
- Ensure touch targets are comfortable on mobile.
- Provide clear empty, loading, error, and success states where relevant.

## 11. Tailwind implementation

- Tailwind CSS 4 is the primary styling system.
- Define reusable CSS theme variables in the global stylesheet.
- Use shadcn/ui components selectively and adapt them to this visual system.
- Use `clsx`, `tailwind-merge`, and `class-variance-authority` for reusable class composition when useful.
- Do not introduce Bootstrap or a parallel utility framework.
- Avoid a large handwritten stylesheet; keep custom CSS limited to global tokens, resets, and cases Tailwind cannot express cleanly.

## 12. Design acceptance

A page meets this design system when:
- The dark monochrome foundation is unmistakable.
- White is used intentionally rather than excessively.
- Images provide appropriate school context.
- Typography is readable and expressive.
- Spacing and card styles are consistent.
- Mobile and desktop compositions feel intentionally designed.
- Motion is restrained and accessible.
