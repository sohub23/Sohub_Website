import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

export const QuietClosing = () => {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(180% 100% at 50% 0%, hsl(32, 97%, 51%) 0%, hsl(32, 97%, 75%) 50%, hsl(32, 90%, 85%) 100%)',
        }}
        animate={{
          background: [
            'radial-gradient(180% 100% at 50% 0%, hsl(32, 97%, 51%) 0%, hsl(32, 97%, 75%) 50%, hsl(32, 90%, 85%) 100%)',
            'radial-gradient(200% 120% at 40% 10%, hsl(32, 97%, 55%) 0%, hsl(32, 95%, 70%) 50%, hsl(32, 88%, 82%) 100%)',
            'radial-gradient(180% 100% at 60% 5%, hsl(32, 97%, 51%) 0%, hsl(32, 97%, 75%) 50%, hsl(32, 90%, 85%) 100%)',
            'radial-gradient(180% 100% at 50% 0%, hsl(32, 97%, 51%) 0%, hsl(32, 97%, 75%) 50%, hsl(32, 90%, 85%) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Decorative Curved Shapes */}
      <motion.div 
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(32, 97%, 65%) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div 
        className="absolute -right-20 top-0 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(32, 97%, 60%) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <motion.div 
        className="absolute right-1/4 bottom-0 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(32, 97%, 70%) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="container-main relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {/* Content Card */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-headline text-foreground mb-6">
                Begin different.
                <br />
                <span className="text-foreground-muted">Win different.</span>
              </h2>
              <p className="text-body-lg mb-3">
                We're not here to follow trends.
              </p>
              <p className="text-body-xl !text-foreground font-medium">
                We're here to raise standards.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};