import { AnimatedSection } from '../ui/AnimatedSection';
import { Building2, Users, Code, GraduationCap, Handshake } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const audiences = [
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Companies seeking reliable technology infrastructure and scalable solutions.',
    color: '#4285F4',
    bgLight: '#e8f0fe'
  },
  {
    icon: Users,
    title: 'Consumers',
    description: 'Individuals who deserve better services and smarter everyday tools.',
    color: '#EA4335',
    bgLight: '#fce8e6'
  },
  {
    icon: Code,
    title: 'Builders',
    description: 'Developers and creators who want to contribute to meaningful projects.',
    color: '#34A853',
    bgLight: '#e6f4ea'
  },
  {
    icon: GraduationCap,
    title: 'Teams & Graduates',
    description: 'Fresh talent ready for real challenges and serious growth opportunities.',
    color: '#FBBC05',
    bgLight: '#fef7e0'
  },
  {
    icon: Handshake,
    title: 'Partners',
    description: 'Organizations aligned with our mission to build lasting impact.',
    color: '#1967D2',
    bgLight: '#e8f0fe'
  },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% untouched
   ────────────────────────────────────────────── */
const DesktopWhoItsFor = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4">Who we serve</p>
            <h2 className="text-[48px]">Built for those who build</h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <AnimatedSection key={audience.title} delay={index * 0.08} className="h-full">
              <div className="card-white text-center h-full group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 bg-primary/10"
                >
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-body-sm">
                  {audience.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ──────────────────────────────────────────────
   MOBILE VERSION — elegant horizontal scrolling cards
   ────────────────────────────────────────────── */
const MobileWhoItsFor = () => {
  return (
    <section className="py-16 bg-[#fafafa] overflow-hidden">
      <div className="px-5 mb-8">
        <p className="text-[12px] font-bold tracking-widest text-[#fb8a09] uppercase mb-2">Who we serve</p>
        <h2
          className="text-[28px] leading-[1.2] font-normal tracking-tight text-foreground"
          style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Built for those who build.
        </h2>
      </div>

      <div className="pl-5 pr-2">
        <div className="flex overflow-x-auto pb-8 pt-2 hide-scrollbar snap-x snap-mandatory gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[260px] bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col items-start"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                style={{ backgroundColor: audience.bgLight, color: audience.color }}
              >
                <audience.icon className="w-6 h-6" />
              </div>
              <h3
                className="text-[18px] font-medium text-foreground mb-2"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                {audience.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground-muted">
                {audience.description}
              </p>
            </div>
          ))}
          {/* Spacer to allow the last item to be properly scrolled into view */}
          <div className="shrink-0 w-2 snap-end" />
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const WhoItsFor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileWhoItsFor />;
  }

  return <DesktopWhoItsFor />;
};