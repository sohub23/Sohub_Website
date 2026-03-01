import { AnimatedSection } from '../ui/AnimatedSection';
import { Target, ShieldCheck, Eye, Scale } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const principles = [
  {
    icon: Scale,
    title: "Discipline over motivation",
    desc: "We don’t rely on reminders. Our work runs on systems.",
    delay: 0,
    color: "#4285F4", // Google Blue
    bgLight: "#e8f0fe"
  },
  {
    icon: Target,
    title: "Goals over noise",
    desc: "If it doesn’t serve a clear goal, it doesn’t exist.",
    delay: 0.1,
    color: "#EA4335", // Google Red
    bgLight: "#fce8e6"
  },
  {
    icon: ShieldCheck,
    title: "Reliability by design",
    desc: "Uptime, security, and stability are not features — they are the base.",
    delay: 0.2,
    color: "#34A853", // Google Green
    bgLight: "#e6f4ea"
  },
  {
    icon: Eye,
    title: "Transparency by default",
    desc: "Customers, partners, employees — everyone deserves clarity.",
    delay: 0.3,
    color: "#FBBC05", // Google Yellow
    bgLight: "#fef7e0"
  }
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — exact original, untouched
   ────────────────────────────────────────────── */
const DesktopSohubStandard = () => (
  <section id="standard" className="py-24 bg-background relative overflow-hidden">
    <div className="container-main">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-normal tracking-tight text-foreground">
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

/* ──────────────────────────────────────────────
   MOBILE VERSION — elegant staggered list
   ────────────────────────────────────────────── */
const MobilePrincipleItem = ({
  p,
  index
}: {
  p: typeof principles[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="flex gap-4 p-5 rounded-2xl bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/5 items-start"
    >
      <div
        className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center mt-0.5 text-foreground-muted shadow-sm"
      >
        <p.icon className="w-5 h-5" />
      </div>

      <div className="flex-1">
        <h3
          className="text-[17px] font-medium text-foreground mb-1.5 leading-snug"
          style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          {p.title}
        </h3>
        <p className="text-[14px] text-foreground-muted leading-relaxed">
          {p.desc}
        </p>
      </div>
    </motion.div>
  );
};

const MobileSohubStandard = () => (
  <section id="standard-mobile" className="py-16 bg-[#fafafa] relative overflow-hidden px-5">
    {/* Clean subtle background shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2" />

    <div className="relative z-10 text-center mb-10">
      <h2
        className="text-[28px] leading-[1.2] font-normal tracking-tight text-foreground mb-3"
        style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        Principles we live by
      </h2>
      <p className="text-[15px] text-foreground-muted">
        The foundations of everything we build.
      </p>
    </div>

    <div className="relative z-10 flex flex-col gap-3">
      {principles.map((p, index) => (
        <MobilePrincipleItem key={index} p={p} index={index} />
      ))}
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const SohubStandard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileSohubStandard />;
  }

  return <DesktopSohubStandard />;
};