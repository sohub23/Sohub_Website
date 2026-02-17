import { AnimatedSection } from '../ui/AnimatedSection';
import { Target, ShieldCheck, Eye, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
  {
    icon: Scale,
    title: "Discipline over motivation",
    desc: "We don’t rely on reminders. Our work runs on systems.",
    delay: 0
  },
  {
    icon: Target,
    title: "Goals over noise",
    desc: "If it doesn’t serve a clear goal, it doesn’t exist.",
    delay: 0.1
  },
  {
    icon: ShieldCheck,
    title: "Reliability by design",
    desc: "Uptime, security, and stability are not features — they are the base.",
    delay: 0.2
  },
  {
    icon: Eye,
    title: "Transparency by default",
    desc: "Customers, partners, employees — everyone deserves clarity.",
    delay: 0.3
  }
];

export const SohubStandard = () => {
  return (
    <section id="standard" className="py-24 bg-background relative overflow-hidden">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4 text-foreground-muted">The Standard</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
              Principles we live by.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((p, index) => (
            <AnimatedSection key={index} delay={p.delay} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full border border-border/40 bg-secondary/20 p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-foreground-muted group-hover:text-primary shadow-sm group-hover:scale-110 transition-all duration-300">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{p.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};