import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const People = () => {
  return (
    <section id="people" className="py-24 bg-white relative overflow-hidden">
      <div className="container-main text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground mb-6">
              For people who want to build — not just work.
            </h2>
            <p className="text-lg text-foreground-muted mb-8 text-balance">
              If you want shortcuts, SOHUB is not for you. <br />
              If you want to learn fast, own outcomes, and grow through real responsibility — welcome.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="px-8 py-3.5 bg-foreground text-background rounded-full font-semibold hover:bg-black/80 transition-all flex items-center gap-2">
                Work with SOHUB
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="px-8 py-3.5 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/70 transition-all">
                Learn our standards
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};