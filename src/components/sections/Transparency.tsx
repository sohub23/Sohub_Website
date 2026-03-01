import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  "Vision & Syllabus",
  "Work model",
  "Standards & policies",
  "Progress updates",
  "Resources"
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% untouched
   ────────────────────────────────────────────── */
const DesktopTransparency = () => {
  return (
    <section id="transparency" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white shadow-2xl shadow-primary/5 text-center">

          <AnimatedSection>
            <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-6">
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

/* ──────────────────────────────────────────────
   MOBILE VERSION — elegant & tappable stack
   ────────────────────────────────────────────── */
const MobileTransparency = () => {
  return (
    <section id="transparency-mobile" className="py-16 bg-[#fafafa] relative overflow-hidden px-5">
      <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center">
        <h2
          className="text-[28px] font-normal tracking-tight text-foreground mb-3"
          style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Open by design.
        </h2>
        <p className="text-[15px] text-foreground-muted mb-8 text-balance leading-relaxed">
          We don’t hide behind marketing. We publish what we’re building, how we operate, and how decisions are made.
        </p>

        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="w-full text-left px-5 py-4 rounded-2xl bg-white border border-gray-100 text-foreground text-[15px] font-medium shadow-sm focus:bg-gray-50 flex items-center justify-between group"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              <span>{link}</span>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-foreground-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const Transparency = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileTransparency />;
  }

  return <DesktopTransparency />;
};