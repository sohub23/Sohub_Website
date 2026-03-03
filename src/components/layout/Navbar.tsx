import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoOrange from '@/assets/logo-orange.svg';

import { CompactBackgroundPaths } from '@/components/ui/background-paths';
import ximpulBottleImage from '@/assets/ximpl-flow.png';

import aloImage from '@/assets/Alo_transparent.png';
import pdlcImage from '@/assets/pdlc_transparent.png';
import switchImage from '@/assets/Switch_transparent.png';
import sohubAILogo from '@/assets/sohub-ai-logo.svg';
import ximpulLogo from '@/assets/ximpul.png';
import sohubConnectLogo from '@/assets/sohub-connect.png';
import oMamaLogo from '@/assets/carousel/omama-navbar.png';
import empLogo from '@/assets/emp.png';
import filmicLogo from '@/assets/carousel/filmic-navbar.png';
import tolparLogo from '@/assets/carousel/tolpar-navbar.png';
import controlsLogo from '@/assets/carousel/controls-navbar.png';
import machineLogo from '@/assets/carousel/machine-navbar.png';
import cloweeNavbarLogo from '@/assets/carousel/clowee-navbar.png';
import protectLogo from '@/assets/protect.png';
import smartHomeLogo from '@/assets/Home_cropped.png';
import smartLightImage from '@/assets/light_transparent.png';
import sohubProtectImage from '@/assets/protect2_transparent_v3.png';


// Menu data types
interface SubMenuItem {
  title: string;
  description?: string;
  href: string;
  image: string;
}

interface MenuItem {
  label: string;
  href: string;
  submenu: SubMenuItem[];
  links: { label: string; href: string }[];
}

// Menu data with images
const menuItems: MenuItem[] = [
  {
    label: 'Initiatives',
    href: '#initiatives',
    submenu: [
      { title: '', description: 'Communication without barriers', href: 'https://connect.sohub.com.bd/', image: sohubConnectLogo },
      { title: '', description: 'Hygienic food access', href: 'https://omama.sohub.com.bd/', image: oMamaLogo },
      { title: '', description: 'Execution & accountability OS', href: 'https://emp.sohub.com.bd/', image: empLogo },
      { title: '', description: 'The SOHUB superapp', href: '#initiatives', image: tolparLogo },
      { title: '', description: 'Automation that scales', href: '#initiatives', image: sohubAILogo },
      { title: '', description: 'Safety & trust initiatives', href: '#initiatives', image: protectLogo },
      { title: '', description: 'Smart control solutions', href: '#initiatives', image: controlsLogo },
      { title: '', description: 'Industrial automation', href: '#initiatives', image: machineLogo },
      { title: '', description: 'Content that moves culture', href: '#initiatives', image: filmicLogo },
      { title: '', description: 'Product experience standards', href: 'https://ximpul.com/', image: ximpulLogo },
      { title: '', description: 'Intelligent living spaces', href: 'https://home.sohub.com.bd/', image: smartHomeLogo },
      { title: '', description: 'Smart laundry solutions', href: '#initiatives', image: cloweeNavbarLogo },
    ],
    links: [
      { label: 'View All Initiatives', href: '#initiatives' },
      { label: 'Our Ecosystem', href: '#ecosystem' },
      { label: 'Partner With Us', href: '#partner' },
    ]
  },
  {
    label: 'Tolpar',
    href: '/tolpar',
    submenu: [],
    links: []
  },
  {
    label: 'Discover',
    href: '#discover',
    submenu: [
      { title: 'Smart Home', href: 'https://home.sohub.com.bd', image: '', description: 'Quick Links' },
      { title: 'Telephony', href: '#telephony', image: '', description: 'Quick Links' },
      { title: 'Solutions', href: '#solutions', image: '', description: 'Quick Links' },
      { title: 'Brochures', href: '#brochures', image: '', description: 'Quick Links' },
      { title: 'Terms of Service', href: '#terms', image: '', description: 'Legal' },
      { title: 'Privacy Policy', href: '#privacy', image: '', description: 'Legal' },
      { title: 'Service Level Agreement', href: '#sla', image: '', description: 'Legal' },
      { title: 'Code of Conduct', href: '#conduct', image: '', description: 'Legal' },
      { title: 'About Us', href: '/company-info', image: '', description: 'Company' },
      { title: 'Career', href: '/join-us', image: '', description: 'Company' },
      { title: 'Contact Us', href: '/contact', image: '', description: 'Company' },
      { title: 'Sohub Shop', href: 'https://home.sohub.com.bd', image: '', description: 'Company' },
    ],
    links: []
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [mobileMenuView, setMobileMenuView] = useState<'main' | string>('main');
  const [shopIndex, setShopIndex] = useState(0);
  const [shopDirection, setShopDirection] = useState(0); // 0: none, 1: next (slide left), -1: prev (slide right)
  const SHOP_VISIBLE_COUNT = 4;

  const nextShopItems = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shopItem = menuItems.find(item => item.label === 'Shop');
    const totalItems = shopItem?.submenu.length || 0;

    if (shopIndex + SHOP_VISIBLE_COUNT < totalItems) {
      setShopDirection(1);
      setShopIndex(prev => prev + 1);
    }
  };

  const prevShopItems = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shopIndex > 0) {
      setShopDirection(-1);
      setShopIndex(prev => prev - 1);
    }
  };

  // Reset shop index when menu closes
  useEffect(() => {
    if (!activeMenu) {
      setShopIndex(0);
      setShopDirection(0);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setTimeout(() => setMobileMenuView('main'), 300); // Reset after close animation
    }
  }, [isMobileMenuOpen]);

  // Disable body scroll when any menu is open
  useEffect(() => {
    if (activeMenu || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMenu, isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || activeMenu
          ? 'py-3 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
          : 'py-4 md:py-5 bg-transparent'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-10">
            <img src={logoOrange} alt="SOHUB" className="h-5 sm:h-6 md:h-7 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && item.submenu.length > 0 ? setActiveMenu(item.label) : setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className={`px-4 py-1 font-medium text-sm rounded-[4px] transition-all duration-300 ${activeMenu === item.label
                    ? 'text-[#171a20] bg-black/5 dark:bg-white/10 dark:text-white'
                    : 'text-[#171a20] hover:bg-black/5 dark:text-white dark:hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="relative" onMouseEnter={() => setActiveMenu(null)}>
              <Link
                to="/company-info"
                className="px-4 py-1 font-medium text-sm rounded-[4px] transition-all duration-300 text-[#171a20] hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
              >
                Company Info
              </Link>
            </div>
            <div className="relative" onMouseEnter={() => setActiveMenu('Shop')}>
              <a
                href="#shop"
                className={`px-4 py-1 font-medium text-sm rounded-[4px] transition-all duration-300 ${activeMenu === 'Shop'
                  ? 'text-[#171a20] bg-black/5 dark:bg-white/10 dark:text-white'
                  : 'text-[#171a20] hover:bg-black/5 dark:text-white dark:hover:bg-white/10'
                  }`}
              >
                Shop
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4 z-10">
            <a
              href="https://www.facebook.com/solutionhubtechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-70"
              aria-label="Facebook"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb8a09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://bd.linkedin.com/company/solution-hub-technologie-sohub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="#fb8a09" strokeWidth="2" fill="none" />
                <path d="M7 10v7M7 7v.01" stroke="#fb8a09" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 10v7M11 13.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" stroke="#fb8a09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@solutionhubtechnologysohub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-70"
              aria-label="YouTube"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb8a09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors text-foreground hover:bg-secondary z-10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.5, 0, 0, 0.75] }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-background shadow-[0_8px_16px_rgba(0,0,0,0.16)] hidden lg:block z-10"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="container-main pt-6 pb-8 max-h-[600px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-zinc-600">
                {(activeMenu === 'Shop' ? [{
                  label: 'Shop',
                  submenu: [
                    { title: 'Ximpul', description: 'Experience the standard', href: 'https://ximpul.com/', image: ximpulBottleImage },
                    { title: 'ALO', description: 'Premium lifestyle', href: 'https://home.sohub.com.bd/alo', image: aloImage },
                    { title: 'PDLC Film', description: 'Smart film technology', href: 'https://home.sohub.com.bd/pdlc-film', image: pdlcImage },
                    { title: 'Smart Switch', description: 'Intelligent controls', href: 'https://home.sohub.com.bd/switch', image: switchImage },
                    { title: 'Smart Light', description: 'Efficient lighting', href: 'https://home.sohub.com.bd/smart-light', image: smartLightImage },
                    { title: 'Sohub Protect', description: 'Security', href: 'https://home.sohub.com.bd/sohub-protect', image: sohubProtectImage },
                  ],
                  links: []
                }] : menuItems.filter((item) => item.label === activeMenu))
                  .map((item) => (
                    <div key={item.label} className={`${item.label === 'Discover' || item.label === 'Shop' ? 'flex justify-center' : 'grid grid-cols-12 gap-8'}`}>
                      {/* Image Cards */}
                      <div className={`${item.label === 'Discover' || item.label === 'Shop' ? 'w-auto px-12' : 'col-span-8 pl-32'}`}>
                        {item.label === 'Discover' ? (
                          <div className="grid grid-cols-3 gap-32 pt-2">
                            {/* Column 1: Quick Links */}
                            <div className="flex flex-col gap-6">
                              <h3 className="text-[#5c5e62] text-[13px] font-normal mb-1">Quick Links</h3>
                              <a href="https://home.sohub.com.bd" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Smart Home</a>
                              <a href="#telephony" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Telephony</a>
                              <a href="#solutions" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Solutions</a>
                              <a href="#brochures" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Brochures</a>
                            </div>

                            {/* Column 2: Legal */}
                            <div className="flex flex-col gap-6">
                              <h3 className="text-[#5c5e62] text-[13px] font-normal mb-1">Legal</h3>
                              <a href="#terms" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Terms of Service</a>
                              <a href="#privacy" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Privacy Policy</a>
                              <a href="#sla" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Service Level Agreement</a>
                              <a href="#conduct" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Code of Conduct</a>
                            </div>

                            {/* Column 3: Company */}
                            <div className="flex flex-col gap-6">
                              <h3 className="text-[#5c5e62] text-[13px] font-normal mb-1">Company</h3>
                              <a href="/company-info" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">About Us</a>
                              <a href="/join-us" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Career</a>
                              <a href="/contact" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Contact Us</a>
                              <a href="https://home.sohub.com.bd" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-[#171a20] dark:text-white hover:text-[#5c5e62] transition-colors">Sohub Shop</a>
                            </div>
                          </div>
                        ) : (
                          <div className={`${item.label === 'Shop' ? 'flex items-center justify-center gap-4' : item.label === 'Initiatives' ? 'grid grid-cols-3 gap-x-4 gap-y-5 px-8 mt-4' : `grid ${item.submenu.length === 2 ? 'grid-cols-2' : item.submenu.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-x-8 gap-y-5`}`}>
                            {item.label === 'Shop' ? (
                              <div className="grid grid-cols-4 gap-4">
                                {item.submenu.map((subItem, idx) => (
                                  <a
                                    key={`${subItem.title}-${idx}`}
                                    href={subItem.href}
                                    target={subItem.href.startsWith('http') ? '_blank' : undefined}
                                    rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group flex flex-col items-center text-center w-56"
                                  >
                                    <div className="relative rounded-xl mb-1 overflow-hidden w-56 aspect-[4/3] flex items-center justify-center bg-transparent">
                                      <img
                                        src={subItem.image}
                                        alt={subItem.title}
                                        className="w-full h-full object-contain p-2 relative z-10 transition-transform duration-500 group-hover:scale-105"
                                      />
                                    </div>
                                    <h3 className="font-semibold text-[17px] text-[#171a20] dark:text-white text-center group-hover:text-primary transition-colors">
                                      {subItem.title}
                                    </h3>
                                  </a>
                                ))}
                              </div>
                            ) : (
                              item.submenu.map((subItem, index) => (
                                <motion.a
                                  key={`${subItem.href}-${index}`}
                                  href={subItem.href}
                                  target={subItem.href.startsWith('http') ? '_blank' : undefined}

                                  rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.04, duration: 0.4, ease: [0.5, 0, 0, 0.75] }}
                                  className="group flex flex-col items-center"
                                >
                                  <div className={`relative rounded-xl mb-3 ${item.label === 'Initiatives' ? 'h-[85px] w-full flex items-center justify-center bg-transparent' : 'overflow-hidden bg-background-subtle'}`}>
                                    <img
                                      src={subItem.image}
                                      alt={subItem.title}
                                      className={`${item.label === 'Initiatives' ? 'max-h-[65px] max-w-[100px] w-auto h-auto object-contain' : 'w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105'} relative z-10`}
                                    />
                                  </div>
                                  <h3 className="font-semibold text-[17px] text-[#171a20] dark:text-white text-center group-hover:text-primary transition-colors">
                                    {subItem.title}
                                  </h3>
                                  {item.label === 'Initiatives' ? (
                                    <span className="text-[14px] font-normal text-[#393c41] dark:text-white/70 mt-1.5 text-center hover:underline transition-all">
                                    </span>
                                  ) : (
                                    <p className="text-[14px] text-[#5c5e62] mt-1 text-center">
                                      {subItem.description}
                                    </p>
                                  )}
                                </motion.a>
                              ))
                            )}
                          </div>
                        )}
                      </div>

                      {/* Side Links */}
                      <div className={`${item.label === 'Discover' || item.label === 'Shop' ? 'hidden' : 'col-span-3 border-l-2 border-[#d2d2d2] dark:border-white/10 pl-8'}`}>
                        <div className="flex flex-col gap-4">
                          {item.links.map((link, index) => (
                            <motion.a
                              key={link.label}
                              href={link.href}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                              className="text-[14px] font-medium text-[#171a20] dark:text-white hover:underline transition-all"
                            >
                              {link.label}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop blur overlay — OUTSIDE nav so it can blur page content */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 bottom-0 top-14 backdrop-blur-md bg-black/10 hidden lg:block z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Tesla-style Mobile Menu — right-sliding panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sliding panel from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-[9999] lg:hidden bg-white dark:bg-zinc-900"
            >
              <div className="h-[100dvh] w-full overflow-y-auto overscroll-none" style={{ WebkitOverflowScrolling: 'touch' }}>
                <AnimatePresence mode="wait">
                  {mobileMenuView === 'main' ? (
                    /* MAIN MENU VIEW */
                    <motion.div
                      key="main"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col"
                    >
                      {/* Header: Close Button Only */}
                      <div className="flex justify-end p-5">
                        <button
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          aria-label="Close menu"
                        >
                          <X size={20} className="text-zinc-900 dark:text-zinc-100" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="px-5 overflow-y-auto flex-1">
                        <nav className="flex flex-col pb-10">
                          {menuItems.map((item, index) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.3 }}
                              className="py-1"
                            >
                              {item.submenu?.length > 0 ? (
                                <button
                                  onClick={() => setMobileMenuView(item.label)}
                                  className="w-full flex items-center justify-between py-3 px-3 -mx-3 rounded-md text-[17px] font-medium text-zinc-900 dark:text-zinc-100 active:bg-zinc-100 dark:active:bg-zinc-800 transition-colors text-left"
                                >
                                  {item.label}
                                  <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  className="block py-3 px-3 -mx-3 rounded-md text-[17px] font-medium text-zinc-900 dark:text-zinc-100 active:bg-zinc-100 dark:active:bg-zinc-800 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </a>
                              )}
                            </motion.div>
                          ))}

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: menuItems.length * 0.03, duration: 0.3 }}
                            className="py-1"
                          >
                            <Link
                              to="/company-info"
                              className="block py-3 px-3 -mx-3 rounded-md text-[17px] font-medium text-zinc-900 dark:text-zinc-100 active:bg-zinc-100 dark:active:bg-zinc-800 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Company Info
                            </Link>
                          </motion.div>


                        </nav>
                      </div>
                    </motion.div>
                  ) : (
                    /* SUBMENU VIEW */
                    <motion.div
                      key="submenu"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col"
                    >
                      {/* Submenu Header: Back + Title + Close */}
                      <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800/50">
                        <button
                          onClick={() => setMobileMenuView('main')}
                          className="flex items-center gap-1 text-[14px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                          <ChevronLeft size={18} />
                          Back
                        </button>
                        <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 absolute left-1/2 -translate-x-1/2">
                          {mobileMenuView}
                        </span>
                        <button
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      {/* Submenu Content */}
                      <div className="px-5 overflow-y-auto flex-1 py-4">
                        {/* Initiatives Logic (Grid) - Mobile View */}
                        {mobileMenuView === 'Initiatives' && (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              {menuItems.find((m) => m.label === 'Initiatives')?.submenu.map((subItem) => {
                                // Custom sizing for visual balance
                                let sizeClass = "max-h-12 max-w-[120px]"; // Default (Connect, EMP, Protect)
                                let extraClass = "";

                                if (subItem.description.includes('Hygienic')) { // O-Mama (INCREASED)
                                  sizeClass = "max-h-11 max-w-[110px]";
                                } else if (subItem.description.includes('superapp')) { // Tolpar (INCREASED)
                                  sizeClass = "max-h-11 max-w-[130px]";
                                } else if (subItem.description.includes('culture')) { // Filmic (REDUCED)
                                  sizeClass = "max-h-10 max-w-[110px]";
                                } else if (subItem.description.includes('experience')) { // Ximpul
                                  sizeClass = "max-h-10 max-w-[100px]";
                                } else if (subItem.description.includes('Intelligent')) { // Smart Home (REDUCED + RIGHT)
                                  sizeClass = "max-h-10 max-w-[100px]";
                                  extraClass = "ml-3";
                                } else if (subItem.description.includes('Automation')) { // AI (REDUCED + RIGHT)
                                  sizeClass = "max-h-9 max-w-[90px]";
                                  extraClass = "ml-3";
                                }

                                return (
                                  <div
                                    key={`${subItem.href}-${subItem.description}`}
                                    className="flex flex-col items-center gap-2 py-4 px-2 text-center"
                                    onClick={() => {
                                      window.location.href = subItem.href;
                                      setIsMobileMenuOpen(false);
                                    }}
                                  >
                                    <div className="h-16 flex items-center justify-center w-full">
                                      <img
                                        src={subItem.image}
                                        alt={subItem.title}
                                        className={`${sizeClass} ${extraClass} w-auto h-auto object-contain`}
                                      />
                                    </div>
                                  </div>
                                )
                              })}
                            </div>

                            <div className="pt-8 pb-4 space-y-4 px-2">
                              <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full mb-6" />
                              {menuItems.find((m) => m.label === 'Initiatives')?.links?.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  className="block text-[15px] font-medium text-zinc-900 dark:text-zinc-100 py-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Shop Logic (Tesla Style) - Mobile View */}
                        {mobileMenuView === 'Shop' && (
                          <div className="flex flex-col space-y-12 px-2 py-6">
                            {menuItems.find((m) => m.label === 'Shop')?.submenu.map((subItem, idx) => (
                              <div key={`${subItem.title}-${idx}`} className="flex items-center gap-6">
                                {/* Left: Image */}
                                <div className="w-[45%] flex justify-center">
                                  <a href={subItem.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                    <img
                                      src={subItem.image}
                                      alt={subItem.title}
                                      className="w-full h-auto object-contain max-h-[100px] drop-shadow-sm"
                                    />
                                  </a>
                                </div>

                                {/* Right: Content */}
                                <div className="w-[55%] flex flex-col items-start space-y-1.5">
                                  <a href={subItem.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                    <h3 className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                                      {subItem.title}
                                    </h3>
                                  </a>
                                  <div className="flex gap-4 text-[14px] text-zinc-500 dark:text-zinc-400 font-medium">
                                    <a
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      Learn
                                    </a>
                                    <a
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      Order
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* Bottom Links */}
                            <div className="pt-4 mt-4 space-y-6">
                              <a href="#" className="block text-[15px] font-medium text-zinc-900 dark:text-zinc-100" onClick={() => setIsMobileMenuOpen(false)}>
                                Schedule a Consultation
                              </a>
                              <a href="#" className="block text-[15px] font-medium text-zinc-900 dark:text-zinc-100" onClick={() => setIsMobileMenuOpen(false)}>
                                Why SOHUB
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Discover Logic - Mobile View */}
                        {mobileMenuView === 'Discover' && (
                          <div className="flex flex-col space-y-8 px-2 py-4">
                            {['Quick Links', 'Company', 'Legal'].map((category) => {
                              const categoryItems = menuItems
                                .find((m) => m.label === 'Discover')
                                ?.submenu.filter((item) => item.description === category);

                              if (!categoryItems || categoryItems.length === 0) return null;

                              return (
                                <div key={category} className="flex flex-col space-y-3">
                                  <h3 className="text-[12px] font-bold tracking-widest text-[#fb8a09] uppercase mb-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
                                    {category}
                                  </h3>
                                  <div className="flex flex-col space-y-4 pt-1">
                                    {categoryItems.map((item) => (
                                      <a
                                        key={item.title}
                                        href={item.href}
                                        className="text-[16px] font-medium text-zinc-800 dark:text-zinc-200 hover:text-[#fb8a09] dark:hover:text-[#fb8a09] transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {item.title}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Default List Logic (Other Menus) */}
                        {mobileMenuView !== 'Initiatives' && mobileMenuView !== 'Shop' && mobileMenuView !== 'Discover' && (
                          <div className="flex flex-col">
                            {menuItems.find((m) => m.label === mobileMenuView)?.submenu.map((subItem) => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                className="block py-3 px-3 -mx-3 rounded-md text-[15px] font-medium text-zinc-800 dark:text-zinc-200 active:bg-zinc-50 dark:active:bg-zinc-800/50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-center justify-between">
                                  {subItem.title}
                                  <ChevronRight className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600" />
                                </div>
                                {subItem.description && (
                                  <p className="text-[12px] font-normal text-zinc-400 dark:text-zinc-500 mt-0.5">{subItem.description}</p>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence >
    </>
  );
};
