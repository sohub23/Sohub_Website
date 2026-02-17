'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

// Apple-style cubic bezier easing
type CubicBezier = [number, number, number, number];
const appleEase: CubicBezier = [0.22, 1, 0.36, 1];
const smoothEase: CubicBezier = [0.4, 0, 0.2, 1];

export default function NeuralNetworkHero({
  title,
  description,
  badgeText = "Solution Hub Technologies",
  badgeLabel = "SOHUB",
  ctaButtons = [
    { text: "Explore initiatives", href: "#initiatives", primary: true },
    { text: "Why we exist", href: "#why" }
  ],
  microDetails = ["Discipline", "Transparency", "Results"]
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const words = title.split(' ');
  const { scrollY } = useScroll();

  // Smooth parallax transforms
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const orbScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const orbOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-background"
    >
      {/* Animated Background Orbs - Subtle breathing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large primary orb - top right */}
        <motion.div
          className="absolute -top-[20%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)',
            scale: orbScale,
            opacity: orbOpacity,
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary orb - bottom left */}
        <motion.div
          className="absolute -bottom-[25%] -left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 60%)',
            opacity: orbOpacity,
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Tertiary accent orb - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.02) 0%, transparent 50%)',
            opacity: orbOpacity,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 sm:px-6 md:px-8 pt-24 pb-16 text-center"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: appleEase }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/90 border border-border/40 px-3 sm:px-4 py-2 shadow-md">
              <span className="rounded-full bg-primary px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-primary-foreground tracking-wide">
                {badgeLabel}
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground">{badgeText}</span>
            </div>
          </motion.div>

          {/* Headline - Word by word animation */}
          <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.22em] last:mr-0"
                initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.08,
                  ease: appleEase,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: appleEase }}
            className="mt-6 sm:mt-8 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-foreground-muted px-2"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65, ease: appleEase }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-20"
          >
            {ctaButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: smoothEase }}
                className={
                  button.primary
                    ? "group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/25"
                    : "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-gray-300 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
                }
              >
                {button.text}
                {button.primary && (
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Focus Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9, ease: smoothEase }}
            className="mt-12 sm:mt-16 md:mt-20 relative z-20"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 sm:mb-5 font-semibold">
              Our focus
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {microDetails.map((detail, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                    ease: appleEase
                  }}
                  className="rounded-full bg-white border-2 border-gray-300 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-foreground-muted/40 font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-muted/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
