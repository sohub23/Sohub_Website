import { AnimatedSection } from '../ui/AnimatedSection';
import { Network, XCircle, ArrowRight, Zap, Grip, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import logoOrange from '@/assets/logo-orange.svg';

export const WhatSohubIs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">

      {/* --- FULL SECTION TECH BACKGROUND (Fluid, No Boxes) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />

        {/* 2. Fluid Tech Waves (Replaces Grid) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100 V 1000 H 0 Z"
            fill="url(#tech-gradient)"
            initial={{ d: "M0 100 Q 250 50 500 100 T 1000 100 V 1000 H 0 Z" }}
            animate={{
              d: [
                "M0 100 Q 250 50 500 100 T 1000 100 V 1000 H 0 Z",
                "M0 100 Q 250 150 500 100 T 1000 100 V 1000 H 0 Z",
                "M0 100 Q 250 50 500 100 T 1000 100 V 1000 H 0 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="tech-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FC9206" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FC9206" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3. Floating Particles (Data Dust) */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(252, 146, 6, 0.3) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.2 }} />
      </div>

      <div className="container-main relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4 text-foreground-muted">The Definition</p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <span>What does</span>
              <img src={logoOrange} alt="SOHUB" className="h-10 md:h-14 w-auto -mt-1" />
              <span>mean?</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* 1. The Solution Hub Card (Glass Tech) */}
          <AnimatedSection className="h-full">
            <motion.div
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/10 relative overflow-hidden group border border-primary/10 bg-white/70 backdrop-blur-md"
            >
              {/* Internal Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm border border-primary/10">
                  <Zap className="w-7 h-7 fill-current" />
                </div>

                <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
                  It stands for <br />
                  <span className="text-primary font-bold">Solution Hub.</span>
                </h3>

                <p className="text-lg text-foreground-muted mb-8 leading-relaxed font-medium">
                  A focused network of disciplined initiatives.
                </p>

                <ul className="space-y-4 mt-auto">
                  <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/50 shadow-sm transition-all hover:bg-white hover:shadow-md">
                    <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-700 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-base font-medium text-foreground">One real problem per initiative.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/50 shadow-sm transition-all hover:bg-white hover:shadow-md">
                    <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-700 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-base font-medium text-foreground">Raising the national standard.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-primary/10 flex items-center gap-2 text-primary text-sm font-bold tracking-wide uppercase group-hover:gap-3 transition-all cursor-pointer">
                  <span>See our solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* 2. The Anti-Pattern Card (Subtle) */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="h-full bg-secondary/10 rounded-3xl p-8 md:p-10 border border-transparent hover:border-black/5 transition-colors relative overflow-hidden group backdrop-blur-sm">

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6 text-foreground-muted/70">
                  <XCircle className="w-7 h-7" />
                </div>

                <h3 className="text-3xl md:text-4xl font-medium text-foreground-muted mb-3 opacity-70">
                  Not a typical <br /> service company.
                </h3>

                <p className="text-lg text-foreground-muted/50 mb-8 leading-relaxed">
                  We define ourselves by what we avoid.
                </p>

                <div className="space-y-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                  <p className="flex items-center gap-3 text-foreground-muted">
                    <Grip className="w-4 h-4 opacity-50" />
                    No random products.
                  </p>
                  <p className="flex items-center gap-3 text-foreground-muted">
                    <Grip className="w-4 h-4 opacity-50" />
                    No short-term noise.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 opacity-0">
                  <span className="text-sm">&nbsp;</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};