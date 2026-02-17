import { AnimatedSection } from '../ui/AnimatedSection';
import logoOrange from '@/assets/logo-orange.svg';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-footer-bg relative overflow-hidden py-24 md:py-32">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      <div className="container-main relative z-10 text-center md:text-left">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div>
              <img src={logoOrange} alt="SOHUB" className="h-8 w-auto mb-8 mx-auto md:mx-0" />
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-footer-text mb-4 uppercase">
                Begin Different.<br /> Win Different.
              </h2>
              <p className="text-footer-text/60 max-w-md text-lg">
                We’re not here to follow trends. We’re here to raise standards.
              </p>
            </div>

            <div className="flex flex-col gap-4 mx-auto md:mx-0">
              <a href="#initiatives" className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2 justify-center md:justify-start">
                Explore the ecosystem
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#" className="text-lg md:text-xl font-medium text-footer-text hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Read Vision 2026
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="text-lg md:text-xl font-medium text-footer-text hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Contact
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-footer-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-footer-text/50">
              © {new Date().getFullYear()} SOHUB — Solution Hub Technologies.
            </p>
            <div className="flex gap-8 text-sm text-footer-text/50">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};