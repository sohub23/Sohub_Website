import { AnimatedSection } from '../ui/AnimatedSection';
import logoOrange from '@/assets/logo-orange.svg';
import { ArrowUpRight, Facebook, Linkedin, Instagram, Youtube, FileText, ChevronDown, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import membershipBasis from '@/assets/membership_basis.png';
import hotscanQR from '@/assets/Sohub_hotscan.png';

const brochures = [
  { name: 'SOHUB Controls', url: '/brochures/Shohub Controls March 2026 - V3.0.pdf' },
  { name: 'SOHUB Protect', url: '/brochures/SOHUB_Protect_Brochure.pdf' },
];


/* ──────────────────────────────────────────────
   QR CODE EXPANDABLE COMPONENT
   ────────────────────────────────────────────── */
const QRExpandable = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSize = size === 'sm' ? 'w-20 h-20' : 'w-24 h-24';
  const containerPad = size === 'sm' ? 'p-2.5' : 'p-3';

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setExpanded(true)}
          className={`bg-white rounded-xl ${containerPad} shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 relative group cursor-pointer transition-transform hover:scale-105`}
        >
          <img src={hotscanQR} alt="Scan to Call SOHUB" className={`${imgSize} object-contain`} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-xl transition-colors flex items-center justify-center">
            <Maximize2 className="w-4 h-4 text-[#fb8a09] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
        <div>
          <p className={`${size === 'sm' ? 'text-[11px]' : 'text-xs'} font-medium text-footer-text/60`}>Call With<br />Hotscan</p>
          <p className={`${size === 'sm' ? 'text-[9px]' : 'text-[10px]'} text-footer-text/40 mt-0.5`}>Tap to enlarge</p>
        </div>
      </div>

      {/* Expanded Modal — portaled to body */}
      {expanded && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-xs w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <div className="text-center">
              <p className="text-[16px] font-semibold text-[#202124] mb-1">Call With Hotscan</p>
              <p className="text-[13px] text-[#5f6368] mb-5">Point your phone camera at this QR code</p>
              <div className="bg-[#f8f9fa] rounded-2xl p-6 inline-block border border-gray-100">
                <img src={hotscanQR} alt="Scan to Call SOHUB" className="w-56 h-56 object-contain" />
              </div>
              <p className="text-[12px] text-[#5f6368] mt-4">SOHUB — Solution Hub Technologies</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

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
              <img src={membershipBasis} alt="SOHUB Membership" className="h-[48px] w-auto mt-2" />
            </div>

            <div className="flex flex-col gap-4 mx-auto md:mx-0">
              <a href="#initiatives" className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2 justify-center md:justify-start">
                Explore the ecosystem
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a href="/contact" className="text-lg md:text-xl font-medium text-footer-text hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Contact
                <ArrowUpRight className="w-5 h-5" />
              </a>
              {/* Brochures Dropdown */}
              <div id="brochures" className="relative group">
                <button className="text-lg md:text-xl font-medium text-footer-text hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <FileText className="w-5 h-5" />
                  Brochures
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {brochures.map((b) => (
                    <a
                      key={b.name}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#202124] hover:bg-[#fff7e6] hover:text-[#fb8a09] transition-colors"
                    >
                      <FileText className="w-4 h-4 text-[#fb8a09]/60" />
                      {b.name}
                    </a>
                  ))}
                </div>
              </div>
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

              {/* QR Code */}
              <div className="mt-2 flex justify-center md:justify-start">
                <QRExpandable size="md" />
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-footer-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-footer-text/50">
              © {new Date().getFullYear()} SOHUB — Solution Hub Technologies.
            </p>
            <div className="flex gap-8 text-sm text-footer-text/50">
              <a href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy</a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors duration-300">Terms</a>
              <a href="/code-of-conduct" className="hover:text-primary transition-colors duration-300">Code of Conduct</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

/* ──────────────────────────────────────────────
   MOBILE BROCHURES DROPDOWN (click-to-toggle)
   ────────────────────────────────────────────── */
const MobileBrochuresDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[13px] font-medium text-[#202124] hover:text-[#fb8a09] transition-colors"
      >
        <FileText className="w-3.5 h-3.5" />
        Brochures
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-[#ffffff] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 py-1.5 z-[100] overflow-hidden">
          {brochures.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 text-[12px] text-[#202124] hover:bg-[#fff7e6] hover:text-[#fb8a09] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#fb8a09]/60" />
              {b.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — clean app-style list navigation
   ────────────────────────────────────────────── */
const MobileFooter = () => {
  return (
    <footer id="contact-mobile" className="bg-[#fafafa] relative overflow-hidden py-12 px-5 border-t border-black/5">
      <div className="relative z-20 max-w-full mx-auto flex flex-row gap-3">
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
          <img src={membershipBasis} alt="SOHUB Membership" className="h-[18px] w-auto mt-1" />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center gap-4 pl-4 border-l border-gray-100">
          <a href="#initiatives" className="flex items-center gap-2 text-[13px] font-medium text-[#fb8a09] hover:text-[#e07a00] transition-colors">
            Explore ecosystem
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a href="/contact" className="flex items-center gap-2 text-[13px] font-medium text-[#202124] hover:text-[#fb8a09] transition-colors">
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <MobileBrochuresDropdown />
          <div id="brochures" />
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

      {/* QR Code Section */}
      <div className="relative z-10 max-w-full mx-auto flex flex-col items-center gap-2 pt-6 mt-4 border-t border-gray-100 px-5">
        <QRExpandable size="sm" />
      </div>

      <div className="relative z-10 max-w-md mx-auto pt-6 mt-6 border-t border-gray-200 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-[14px] text-[#5f6368] font-medium">
          <a href="/privacy-policy" className="hover:text-[#202124]">Privacy</a>
          <a href="/terms-of-service" className="hover:text-[#202124]">Terms</a>
          <a href="/code-of-conduct" className="hover:text-[#202124]">Code of Conduct</a>

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
