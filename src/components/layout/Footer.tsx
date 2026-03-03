import { AnimatedSection } from '../ui/AnimatedSection';
import logoOrange from '@/assets/logo-orange.svg';
import { ArrowUpRight, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% untouched
   ────────────────────────────────────────────── */
const DesktopFooter = () => {
  return (
    <footer id="contact" className="bg-footer-bg relative overflow-hidden py-12 md:py-16">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      <div className="container-main relative z-10 text-center md:text-left">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
            <div>
              <img src={logoOrange} alt="SOHUB" className="h-8 w-auto mb-5 mx-auto md:mx-0" />
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-footer-text mb-4 uppercase">
                Begin Different.<br /> Win Different.
              </h2>
              <p className="text-footer-text/60 max-w-md text-lg mb-8">
                We’re not here to follow trends. We’re here to raise standards.
              </p>
              <Link
                to="/join-us"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#fb8a09] text-white rounded-full font-medium hover:bg-[#e07a00] transition-colors"
              >
                Join with us
              </Link>
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
              <a href="/contact" className="text-lg md:text-xl font-medium text-footer-text hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Contact
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 mt-2 justify-center md:justify-start text-[#fb8a09]">
                <a href="https://www.facebook.com/solutionhubtechnologies" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://bd.linkedin.com/company/solution-hub-technologie-sohub" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.instagram.com/solutionhubtechnologies/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.youtube.com/@solutionhubtechnologysohub" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Youtube className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-footer-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
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

/* ──────────────────────────────────────────────
   MOBILE VERSION — clean app-style list navigation
   ────────────────────────────────────────────── */
const MobileFooter = () => {
  return (
    <footer id="contact-mobile" className="bg-[#fafafa] relative overflow-hidden py-12 px-5 border-t border-black/5">
      <div className="relative z-10 max-w-full mx-auto flex flex-row gap-3">
        {/* Left Side */}
        <div className="flex-1 text-left flex flex-col justify-start">
          <div>
            <img src={logoOrange} alt="SOHUB" className="h-[18px] w-auto mb-3" />
            <h2
              className="text-[18px] sm:text-[20px] leading-[1.2] font-normal tracking-tight text-[#202124] mb-2 uppercase"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Begin Different.<br /> Win Different.
            </h2>
            <p className="text-[12px] text-[#5f6368] mb-4 leading-relaxed pr-2">
              We’re not here to follow trends. We’re here to raise standards.
            </p>
          </div>
          <Link
            to="/join-us"
            className="w-fit flex justify-center items-center px-4 py-1.5 bg-[#fb8a09] text-white rounded-full font-semibold hover:bg-[#e07a00] transition-all text-[11px] shadow-sm mb-2"
            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Join with us
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center gap-4 pl-4 border-l border-gray-100">
          <a href="#initiatives" className="flex items-center gap-2 text-[13px] font-medium text-[#fb8a09] hover:text-[#e07a00] transition-colors">
            Explore ecosystem
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="flex items-center gap-2 text-[13px] font-medium text-[#202124] hover:text-[#fb8a09] transition-colors">
            Read Vision 2026
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a href="/contact" className="flex items-center gap-2 text-[13px] font-medium text-[#202124] hover:text-[#fb8a09] transition-colors">
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <div className="flex items-center gap-4 mt-1 text-[#fb8a09]">
            <a href="https://www.facebook.com/solutionhubtechnologies" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://bd.linkedin.com/company/solution-hub-technologie-sohub" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://www.youtube.com/@solutionhubtechnologysohub" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Youtube className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-md mx-auto pt-6 mt-6 border-t border-gray-200 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-[14px] text-[#5f6368] font-medium">
          <a href="#" className="hover:text-[#202124]">Privacy</a>
          <a href="#" className="hover:text-[#202124]">Terms</a>
          <a href="#" className="hover:text-[#202124]">Sitemap</a>
        </div>
        <p className="text-[13px] text-gray-400">
          © {new Date().getFullYear()} SOHUB — Solution Hub Technologies.
        </p>
      </div>
    </footer>
  );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileFooter />;
  }

  return <DesktopFooter />;
};