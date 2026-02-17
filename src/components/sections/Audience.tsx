import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Users, Briefcase, Code2, GraduationCap, Handshake } from 'lucide-react';

const audiences = [
    {
        icon: Briefcase,
        title: "Businesses",
        desc: "Communication, operations, automation, reliability."
    },
    {
        icon: Users,
        title: "Consumers",
        desc: "Access, convenience, quality of life."
    },
    {
        icon: Code2,
        title: "Builders",
        desc: "Tools, platforms, documentation, open learning."
    },
    {
        icon: GraduationCap,
        title: "Teams & Graduates",
        desc: "Ownership, skills, measurable growth."
    },
    {
        icon: Handshake,
        title: "Partners",
        desc: "Pilots, integration, local execution."
    }
];

export const Audience = () => {
    return (
        <section id="audience" className="py-24 bg-white relative">
            <div className="container-main">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground mb-4">
                            Built for people who want real progress.
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audiences.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="p-8 rounded-3xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                                <p className="text-foreground-muted">{item.desc}</p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
