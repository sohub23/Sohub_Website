import { AnimatedSection } from '../ui/AnimatedSection';
import { Eye, Sliders, Play, TrendingUp } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: Eye,
        title: "Observe",
        desc: "We don't wait for reports. We look for the normalized problems people live with."
    },
    {
        number: "02",
        icon: Sliders,
        title: "Normalize",
        desc: "We adapt global technology to fit Bangladesh's infrastructure, cost, and habits."
    },
    {
        number: "03",
        icon: Play,
        title: "Execute",
        desc: "We build systems that run in the real world — transparent, reliable, and scalable."
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Evolve",
        desc: "We don't stop at launch. We measure, improve, and raise the standard continuously."
    }
];

export const OurApproach = () => {
    return (
        <section id="approach" className="section-spacing bg-secondary/30 relative overflow-hidden">
            <div className="container-main">
                <AnimatedSection>
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <p className="text-overline mb-3">Our Approach</p>
                        <h2 className="text-heading-2 mb-4">
                            From reality to results.
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                            <div className="h-full card-google p-6 flex flex-col items-start relative group overflow-hidden">
                                {/* Colored Number */}
                                <div className="text-4xl font-bold text-primary/10 group-hover:text-primary transition-colors duration-300 mb-4 select-none">
                                    {step.number}
                                </div>

                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary relative z-10 transition-transform group-hover:scale-110">
                                    <step.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-heading-3 mb-2 relative z-10">{step.title}</h3>
                                <p className="text-body-sm relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
