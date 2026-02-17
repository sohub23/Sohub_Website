import { AnimatedSection } from '../ui/AnimatedSection';
import { Eye, Globe, Sliders, Play, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Eye,
    title: "Observe",
    desc: "Observe real problems as they exist (not reported, not requested)."
  },
  {
    icon: Globe,
    title: "Learn Globally",
    desc: "Learn from systems already working globally."
  },
  {
    icon: Sliders,
    title: "Normalize",
    desc: "Normalize technology for Bangladesh — cost, infrastructure, behavior."
  },
  {
    icon: Play,
    title: "Run",
    desc: "Run in the real Bangladesh."
  },
  {
    icon: TrendingUp,
    title: "Improve",
    desc: "Improve continuously."
  }
];

export const HowWeOperate = () => {
  return (
    <section id="operate" className="py-24 bg-secondary/5 overflow-hidden">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-overline mb-4 text-foreground-muted">How we operate</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground mb-6">
              How we move from reality to results.
            </h2>
            <p className="text-lg text-foreground-muted">
              We look outward to understand what works. Then we do something simple — and difficult. We start.
            </p>
          </div>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border/50 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative group flex flex-col items-center md:items-start text-center md:text-left">

                  {/* Icon Node */}
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                    className="w-24 h-24 bg-white rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center mb-6 relative"
                  >
                    <div className="absolute inset-0 rounded-full border border-primary/20" />
                    <step.icon className="w-8 h-8 text-primary" />

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-medium text-foreground mb-2 px-2">{step.title}</h3>
                  <p className="text-sm text-foreground-muted px-2">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};