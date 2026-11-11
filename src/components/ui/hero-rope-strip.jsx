import { schoolImages } from '@/data/learning-images.js';
import { OptimizedImage } from '@/components/ui/optimized-image.jsx';
const photos = schoolImages.slice(0, 6);
function Lane({ images, reverse = false, duration = 42 }) {
  const loop = [...images, ...images];
  return <div className={`bbs-rope-lane ${reverse ? 'bbs-rope-lane--reverse' : ''}`} style={{ '--rope-duration': `${duration}s` }}>
    <svg className="bbs-rope-line" viewBox="0 0 1200 150" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 74 C160 12 260 138 430 74 S700 12 870 74 S1080 138 1220 74" /></svg>
    <div className="bbs-rope-track">{loop.map((photo, index) => <figure className="bbs-rope-photo" key={index} style={{ '--photo-index': index % images.length }}>
      <OptimizedImage src={photo.enhanced} optimized={photo.optimized.enhanced} alt="" width={640} height={360} sizes="10rem" loading={index < 2 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : undefined} />
      <figcaption>{photo.caption}</figcaption>
    </figure>)}</div>
  </div>;
}
export function HeroRopeStrip() {
  if (!photos.length) return null;
  return <div className="bbs-hero-rope" aria-label="A small selection of photographs from Bukana Brilliant Schools">
    <div className="bbs-hero-rope__heading"><span className="bbs-hero-rope__dot" /><span>Life at BBS</span><span className="bbs-hero-rope__rule" /><span className="bbs-hero-rope__count">A look inside our school</span></div>
    <Lane images={photos} duration={84} /><Lane images={[...photos].reverse()} reverse duration={92} />
    <p className="bbs-hero-rope__note">Real classrooms, real people, real school moments.</p>
  </div>;
}
