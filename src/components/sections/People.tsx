import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% untouched
   ────────────────────────────────────────────── */
const DesktopPeople = () => {
  return (
    <section id="people" className="py-24 bg-white relative overflow-hidden">
      <div className="container-main text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-6">
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

/* ──────────────────────────────────────────────
   MOBILE VERSION — elegant mobile typography and full-width buttons
   ────────────────────────────────────────────── */
const MobilePeople = () => {
  return (
    <section id="people-mobile" className="py-16 bg-white relative overflow-hidden px-5">
      <div className="text-center relative z-10">
        <div className="max-w-md mx-auto">
          <h2
            className="text-[28px] leading-[1.2] font-normal tracking-tight text-foreground mb-4"
            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            For people who want to build — not just work.
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground-muted mb-10 text-balance">
            If you want shortcuts, SOHUB is not for you. <br className="hidden sm:block" />
            If you want to learn fast, own outcomes, and grow through real responsibility — welcome.
          </p>

          <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
            <a
              href="#"
              className="px-4 border border-foreground py-2.5 bg-foreground text-background rounded-full font-semibold hover:bg-black/80 transition-all text-[12px] sm:text-[13px] text-center shadow-sm whitespace-nowrap"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Work with SOHUB
            </a>
            <a
              href="#"
              className="px-4 py-2.5 bg-secondary border border-transparent text-foreground rounded-full font-semibold hover:bg-secondary/70 transition-all text-[12px] sm:text-[13px] text-center whitespace-nowrap"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Learn our standards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const People = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobilePeople />;
  }

  return <DesktopPeople />;
};