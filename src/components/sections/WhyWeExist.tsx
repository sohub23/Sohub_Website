import { useEffect, useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, BarChart3, Globe, Heart } from 'lucide-react';

/* ──────────────────────────────────────────────
   MOBILE VERSION — compact, stacked layout
   ────────────────────────────────────────────── */
const MobileWhyWeExist = () => (
  <section id="why" className="pt-2 pb-12 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3" />

    <div className="px-5 relative z-10 w-full">
      <AnimatedSection>
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5"
            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            <Globe className="w-3 h-3" />
            <span>The Mission</span>
          </div>

          <h2
            className="text-[28px] font-bold tracking-tight text-foreground mb-5 leading-[1.15]"
            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            The gap is <span className="text-foreground-muted">execution.</span>
          </h2>

          <div className="space-y-3">
            <p
              className="text-[15px] leading-relaxed"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Our beloved country, <span className="text-primary font-medium">Bangladesh</span>, is full of challenges.
              But we believe it is also full of the potential to solve them.
            </p>
            <p
              className="text-[15px] leading-relaxed"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              We don't need more ideas. We need disciplined systems that work.
              Systems that are transparent, reliable, and built to scale.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button className="btn-primary text-sm">
              Our Philosophy
            </button>
            <div className="h-10 w-[1px] bg-border" />
            <div className="flex flex-col">
              <span className="text-[10px] text-foreground-muted uppercase tracking-wider">Est.</span>
              <span className="font-bold text-foreground text-sm">2022</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cards — stacked vertically */}
      <div className="space-y-3">
        <AnimatedSection delay={0.1}>
          <div className="card-google p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3
                className="text-[15px] font-semibold text-foreground"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Passion for Bangladesh
              </h3>
              <p
                className="text-[13px] text-foreground-muted"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Solving real problems for our people.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-google p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3
                className="text-[15px] font-semibold text-foreground"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Disciplined Method
              </h3>
              <p
                className="text-[13px] text-foreground-muted"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Data-driven, proven, and scalable.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="card-google p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div>
              <h3
                className="text-[15px] font-semibold text-foreground"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Usage of Technology
              </h3>
              <p
                className="text-[13px] text-foreground-muted"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                The most scalable way to improve.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="card-google p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3
                className="text-[15px] font-semibold text-foreground"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Global inspiration. Local innovation.
              </h3>
              <p
                className="text-[13px] text-foreground-muted"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Inspired by global technology. Engineered for Bangladesh.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopWhyWeExist = () => (
  <section id="why" className="pt-0 pb-20 bg-background relative overflow-hidden flex items-center">

    {/* Background Decor */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3" />

    <div className="container-main relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: The Manifesto */}
        <AnimatedSection>
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-8"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              <Globe className="w-3 h-3" />
              <span>The Mission</span>
            </div>

            <h2
              className="text-display font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              The gap is <br />
              <span className="text-foreground-muted">execution.</span>
            </h2>

            <div className="space-y-4 max-w-lg">
              <p
                className="text-body-large leading-relaxed"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Our beloved country, <span className="text-primary font-medium">Bangladesh</span>, is full of challenges.
                But we believe it is also full of the potential to solve them.
              </p>
              <p
                className="text-body-large leading-relaxed"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                We don't need more ideas. We need disciplined systems that work.
                Systems that are transparent, reliable, and built to scale.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button className="btn-primary">
                Our Philosophy
              </button>
              <div className="h-12 w-[1px] bg-border" />
              <div className="flex flex-col">
                <span className="text-xs text-foreground-muted uppercase tracking-wider">Est.</span>
                <span className="font-bold text-foreground">2022</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: The Dashboard (Visual Proof) */}
        <div className="relative">
          <div className="space-y-4">
            {/* Passion Card */}
            <AnimatedSection delay={0.1}>
              <div className="card-google p-6 flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3
                    className="text-heading-3"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Passion for Bangladesh
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Solving real problems for our people.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Method Card */}
            <AnimatedSection delay={0.2}>
              <div className="card-google p-6 flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="text-heading-3"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Disciplined Method
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Data-driven, proven, and scalable.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Promise Card */}
            <AnimatedSection delay={0.3}>
              <div className="card-google p-6 flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="text-heading-3"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Usage of Technology
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    The most scalable way to improve.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Global Inspiration Card */}
            <AnimatedSection delay={0.4}>
              <div className="card-google p-6 flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="text-heading-3"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Global inspiration. Local innovation.
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Inspired by global technology. Engineered for Bangladesh.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const WhyWeExist = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileWhyWeExist />;
  }

  return <DesktopWhyWeExist />;
};