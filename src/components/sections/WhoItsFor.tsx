import { AnimatedSection } from '../ui/AnimatedSection';
import { Building2, Users, Code, GraduationCap, Handshake } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Companies seeking reliable technology infrastructure and scalable solutions.',
  },
  {
    icon: Users,
    title: 'Consumers',
    description: 'Individuals who deserve better services and smarter everyday tools.',
  },
  {
    icon: Code,
    title: 'Builders',
    description: 'Developers and creators who want to contribute to meaningful projects.',
  },
  {
    icon: GraduationCap,
    title: 'Teams & Graduates',
    description: 'Fresh talent ready for real challenges and serious growth opportunities.',
  },
  {
    icon: Handshake,
    title: 'Partners',
    description: 'Organizations aligned with our mission to build lasting impact.',
  },
];

export const WhoItsFor = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4">Who we serve</p>
            <h2 className="text-headline">Built for those who build</h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <AnimatedSection key={audience.title} delay={index * 0.08}>
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