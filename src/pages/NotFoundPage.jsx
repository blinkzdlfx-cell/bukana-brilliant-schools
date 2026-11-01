import { SectionHeading } from '@/components/ui/section-heading.jsx';
import { Button } from '@/components/ui/button.jsx';

export function NotFoundPage() {
  return (
    <section className="bg-surface-white section-pad min-h-[60vh] flex flex-col justify-center">
      <div className="container-wide text-center">
        <SectionHeading
          eyebrow="Page not found"
          title="We couldn&rsquo;t find that page"
          description="The page you are looking for does not exist. Return to the homepage or explore the school."
          className="text-center"
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">Go to homepage</Button>
          <Button variant="outline" href="/contact">Contact the school</Button>
        </div>
      </div>
    </section>
  );
}
