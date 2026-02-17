import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

const links = [
  "Vision & Syllabus",
  "Work model",
  "Standards & policies",
  "Progress updates",
  "Resources"
];

export const Transparency = () => {
  return (
    <section id="transparency" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white shadow-2xl shadow-primary/5 text-center">

          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground mb-6">
              Open by design.
            </h2>
            <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
              We don’t hide behind marketing. We publish what we’re building, how we operate, and how decisions are made.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="group px-6 py-3 rounded-full bg-white border border-border/50 text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2"
                >
                  {link}
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};