import { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'business', label: 'For Businesses' },
  { id: 'consumer', label: 'For Consumers' },
  { id: 'builder', label: 'For Builders' },
  { id: 'team', label: 'For Teams' },
  { id: 'impact', label: 'For Impact' },
];

const systems = [
  { 
    name: 'CONNECT', 
    purpose: 'Seamless communication infrastructure for modern teams',
    categories: ['business', 'team'],
  },
  { 
    name: 'O-MAMA', 
    purpose: 'Maternal healthcare support system for expecting mothers',
    categories: ['consumer', 'impact'],
  },
  { 
    name: 'EMP', 
    purpose: 'Employee management and workforce optimization',
    categories: ['business', 'team'],
  },
  { 
    name: 'TOLPAR', 
    purpose: 'Transport and logistics platform for efficient delivery',
    categories: ['business', 'consumer'],
  },
  { 
    name: 'AI', 
    purpose: 'Intelligent automation and machine learning solutions',
    categories: ['business', 'builder'],
  },
  { 
    name: 'PROTECT', 
    purpose: 'Security and safety monitoring for homes and businesses',
    categories: ['consumer', 'business'],
  },
  { 
    name: 'HOME & CONTROLS', 
    purpose: 'Smart home automation and IoT integration',
    categories: ['consumer'],
  },
  { 
    name: 'XIMPUL', 
    purpose: 'Digital impulse for accelerated business growth',
    categories: ['business', 'builder'],
  },
  { 
    name: 'FILMIC STATION', 
    purpose: 'Creative content production and media services',
    categories: ['consumer', 'builder'],
  },
];

export const InitiativesExplorer = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSystems = activeFilter === 'all' 
    ? systems 
    : systems.filter(s => s.categories.includes(activeFilter));

  return (
    <section id="initiatives" className="section-spacing bg-background">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-overline mb-4">Our Initiatives</p>
            <h2 className="text-headline mb-6">
              One vision. Many focused initiatives.
            </h2>
            <p className="text-body-xl max-w-xl mx-auto">
              Explore what matters to you. Go deep — at your pace.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-pill ${
                  activeFilter === filter.id 
                    ? 'filter-pill-active' 
                    : 'filter-pill-inactive'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSystems.map((system) => (
              <motion.div
                key={system.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group cursor-pointer h-full flex flex-col p-8 rounded-2xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 tracking-[-0.01em]">
                    {system.name}
                  </h3>
                  <p className="text-foreground-muted flex-grow mb-5 text-sm leading-relaxed">
                    {system.purpose}
                  </p>
                  <span className="link-primary group-hover:gap-2.5">
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};