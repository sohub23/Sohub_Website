import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
    Download,
    ArrowRight,
    Video,
    Shield,
    Layers,
    Smartphone,
} from 'lucide-react';

import heroMockup from '@/assets/tolpar/hero-mockup.png';
import heroConnected from '@/assets/tolpar/hero-connected.png';
import appChaos from '@/assets/tolpar/app-chaos.png';
import solutionMerge from '@/assets/tolpar/solution-merge.png';
import videoCall from '@/assets/tolpar/video-call.png';
import superApp from '@/assets/tolpar/super-app.png';
import securityShield from '@/assets/tolpar/security-shield.png';

import tolparLogo from '@/assets/carousel/tolpar-navbar.png';

const PLAY_STORE_LINK = '#';
const APP_STORE_LINK = '#';

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
};



/* ─── Section Badge ─── */
const SectionBadge = ({
    icon: Icon,
    label,
    variant = 'orange',
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    variant?: 'orange' | 'red' | 'dark';
}) => {
    const styles = {
        orange: 'bg-[#fff7e6] text-[#fb8a09]',
        red: 'bg-red-50 text-red-500',
        dark: 'bg-[#fb8a09]/10 text-[#fb8a09]',
    };

    return (
        <motion.div
            variants={fadeUp}
            className={`inline-flex items-center gap-2 ${styles[variant]} text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-full mb-5 md:mb-6`}
        >
            <Icon className="w-3.5 h-3.5" />
            {label}
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════
   TOLPAR PAGE — 7-Act Story Structure
   ═══════════════════════════════════════════════ */
const Tolpar = () => {
    useEffect(() => {
        document.title = 'Tolpar — Super App for Bangladesh | SOHUB';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* ═══════════════════════════════════════
            ACT 1 — THE VISION (HERO)
            ═══════════════════════════════════════ */}
                <section className="pt-36 md:pt-44 pb-16 md:pb-28 relative overflow-hidden">
                    {/* Warm gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fff7e6]/50 via-white to-white pointer-events-none" />
                    {/* Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(#202124 1px, transparent 1px), linear-gradient(90deg, #202124 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />

                    <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            {/* Left: Text */}
                            <motion.div
                                className="flex-1 text-center md:text-left"
                                initial="hidden"
                                animate="visible"
                                variants={stagger}
                            >
                                <motion.div
                                    variants={fadeUp}
                                    className="flex items-center gap-3 mb-5 md:mb-6 justify-center md:justify-start"
                                >
                                    <img src={tolparLogo} alt="Tolpar" className="h-8 md:h-10 w-auto" />
                                    <span className="text-[12px] md:text-[14px] font-medium text-[#fb8a09] bg-[#fff7e6] px-3 py-1 rounded-full">
                                        Super App
                                    </span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-[32px] md:text-[52px] lg:text-[60px] leading-[1.1] font-normal tracking-tight text-[#202124] mb-4 md:mb-6"
                                >
                                    Beyond an App.{' '}
                                    <span className="text-[#fb8a09]">
                                        It's Your Everyday Companion.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[15px] md:text-[19px] text-[#5f6368] font-normal leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 md:mb-10"
                                >
                                    Why jump between ten different apps when you can have it all in one?
                                    Proudly built for Bangladesh, Tolpar brings messaging, high-definition
                                    calling, and essential daily services into a single, beautiful experience.
                                </motion.p>

                                <motion.div
                                    variants={fadeUp}
                                    className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start"
                                >
                                    <a
                                        href={PLAY_STORE_LINK}
                                        className="inline-flex items-center gap-3 bg-[#202124] hover:bg-[#3c4043] text-white px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                                    >
                                        <Download className="w-5 h-5" />
                                        Get Started for Free
                                    </a>
                                    <a
                                        href="#why-tolpar"
                                        className="inline-flex items-center gap-2 text-[#5f6368] hover:text-[#fb8a09] px-6 py-3.5 md:py-4 rounded-full text-[15px] md:text-[16px] font-medium transition-colors border border-gray-200 hover:border-[#fb8a09]/30 w-full sm:w-auto justify-center"
                                    >
                                        Why Tolpar?
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Right: Phone Mockup */}
                            <motion.div
                                className="flex-1 flex justify-center"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.9,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <img
                                    src={heroMockup}
                                    alt="Tolpar Super App"
                                    className="w-full max-w-[300px] md:max-w-[480px] h-auto drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>

                        {/* Connected people banner below hero */}
                        <motion.div
                            className="mt-12 md:mt-20 rounded-[20px] md:rounded-[28px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={heroConnected}
                                alt="Bangladeshi people connected through Tolpar"
                                className="w-full h-[200px] md:h-[360px] object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            ACT 2 — THE STRUGGLE
            ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28 bg-[#f8f9fa]">
                    <div className="max-w-[900px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <SectionBadge icon={Smartphone} label="The Problem" variant="red" />

                            <motion.h2
                                variants={fadeUp}
                                className="text-[28px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-4 md:mb-6 leading-[1.15]"
                            >
                                Stop the{' '}
                                <span className="text-[#fb8a09]">App-Hopping Fatigue.</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-[15px] md:text-[18px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
                            >
                                We know the struggle. One app to text your friends, another to call
                                your family abroad, and three more for your daily needs. It drains your
                                battery, eats your data, and complicates your life. Bangladesh deserves
                                a smarter, simpler way to stay connected.
                            </motion.p>

                            <motion.div variants={scaleUp}>
                                <img
                                    src={appChaos}
                                    alt="Too many apps cluttering your phone"
                                    className="w-full max-w-[500px] md:max-w-[600px] mx-auto rounded-[20px] md:rounded-[28px]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            ACT 3 — THE REVELATION
            ═══════════════════════════════════════ */}
                <section id="why-tolpar" className="py-16 md:py-28">
                    <div className="max-w-[1280px] mx-auto px-5 md:px-6">
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div
                                className="flex-1 order-2 md:order-1"
                                variants={scaleUp}
                            >
                                <img
                                    src={solutionMerge}
                                    alt="Everything unified in Tolpar"
                                    className="w-full max-w-[400px] md:max-w-[500px] mx-auto rounded-[20px] md:rounded-[28px]"
                                />
                            </motion.div>

                            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                                <SectionBadge icon={Layers} label="The Solution" />

                                <motion.h2
                                    variants={fadeUp}
                                    className="text-[28px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-4 md:mb-6 leading-[1.15]"
                                >
                                    One Screen.{' '}
                                    <span className="text-[#fb8a09]">Infinite Possibilities.</span>
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[15px] md:text-[18px] text-[#5f6368] leading-relaxed max-w-xl mx-auto md:mx-0"
                                >
                                    Tolpar isn't just another app on your phone; it's the only one you'll
                                    actually want to use. We've combined world-class communication with a
                                    growing ecosystem of services tailored specifically for the Bangladeshi
                                    lifestyle.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            ACT 4 — THE PILLARS (BENEFITS)
            ═══════════════════════════════════════ */}
                <section id="features" className="py-8 md:py-12">
                    <div className="max-w-[1280px] mx-auto px-5 md:px-6">
                        {/* Section Header */}
                        <motion.div
                            className="text-center mb-12 md:mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.p
                                variants={fadeUp}
                                className="text-[12px] md:text-[14px] font-medium text-[#fb8a09] mb-3 md:mb-4 tracking-wide uppercase"
                            >
                                What you gain
                            </motion.p>
                            <motion.h2
                                variants={fadeUp}
                                className="text-[28px] md:text-[44px] font-normal tracking-tight text-[#202124] leading-[1.15]"
                            >
                                Designed around your{' '}
                                <span className="text-[#fb8a09]">real life.</span>
                            </motion.h2>
                        </motion.div>

                        {/* Pillar 1: Stay Close */}
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-14 md:mb-28"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div className="flex-1" variants={scaleUp}>
                                <img
                                    src={videoCall}
                                    alt="Crystal-clear video calling"
                                    className="w-full rounded-[20px] md:rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                                />
                            </motion.div>
                            <div className="flex-1 text-center md:text-left">
                                <SectionBadge icon={Video} label="Communication" />
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-[24px] md:text-[36px] font-normal tracking-tight text-[#202124] mb-3 md:mb-4 leading-[1.2]"
                                >
                                    Stay Close, No Matter the Distance.
                                </motion.h3>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-[15px] md:text-[17px] text-[#5f6368] leading-relaxed"
                                >
                                    Experience crystal-clear voice and video calls that don't drop, even on
                                    slower connections. Our technology is optimized for Bangladesh's networks,
                                    ensuring you never miss a smile or a word from your loved ones.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Pillar 2: Your Life, Unified */}
                        <motion.div
                            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 mb-14 md:mb-28"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div className="flex-1" variants={scaleUp}>
                                <img
                                    src={superApp}
                                    alt="All services in one app"
                                    className="w-full rounded-[20px] md:rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                                />
                            </motion.div>
                            <div className="flex-1 text-center md:text-left">
                                <SectionBadge icon={Layers} label="Super App" />
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-[24px] md:text-[36px] font-normal tracking-tight text-[#202124] mb-3 md:mb-4 leading-[1.2]"
                                >
                                    Your Life, Unified.
                                </motion.h3>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-[15px] md:text-[17px] text-[#5f6368] leading-relaxed"
                                >
                                    Why waste time searching? From managing your digital profile to accessing
                                    a world of local services, Tolpar brings everything to your fingertips.
                                    It's the "Super App" that grows as you do.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Pillar 3: Privacy */}
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div className="flex-1" variants={scaleUp}>
                                <img
                                    src={securityShield}
                                    alt="Privacy protection"
                                    className="w-full max-w-[420px] mx-auto rounded-[20px] md:rounded-[28px]"
                                />
                            </motion.div>
                            <div className="flex-1 text-center md:text-left">
                                <SectionBadge icon={Shield} label="Privacy" />
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-[24px] md:text-[36px] font-normal tracking-tight text-[#202124] mb-3 md:mb-4 leading-[1.2]"
                                >
                                    Your Privacy is Our Priority.
                                </motion.h3>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-[15px] md:text-[17px] text-[#5f6368] leading-relaxed"
                                >
                                    In an era of data leaks, Tolpar is your safe haven. Your chats and calls
                                    are private, encrypted, and secure. We respect your data because we are
                                    part of the same community.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </section>



                {/* ═══════════════════════════════════════
            ACT 7 — THE FINAL STEP (CTA)
            ═══════════════════════════════════════ */}
                <section className="py-20 md:py-32">
                    <div className="max-w-[900px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            {/* Logo */}
                            <motion.div
                                variants={fadeUp}
                                className="flex justify-center mb-5 md:mb-6"
                            >
                                <img
                                    src={tolparLogo}
                                    alt="Tolpar"
                                    className="h-12 md:h-16 w-auto"
                                />
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className="text-[30px] md:text-[48px] font-normal tracking-tight text-[#202124] mb-4 md:mb-6 leading-[1.1]"
                            >
                                Ready to Experience the{' '}
                                <span className="text-[#fb8a09]">Change?</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-[15px] md:text-[18px] text-[#5f6368] font-normal leading-relaxed max-w-lg mx-auto mb-8 md:mb-10"
                            >
                                Download Tolpar today and join the movement toward a simpler, more
                                connected Bangladesh.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center"
                            >
                                <a
                                    href={PLAY_STORE_LINK}
                                    className="inline-flex items-center gap-3 bg-[#202124] hover:bg-[#3c4043] text-white px-8 py-4 md:py-5 rounded-full text-[15px] md:text-[17px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                                >
                                    <Download className="w-5 h-5" />
                                    Download for Android
                                </a>
                                <a
                                    href={APP_STORE_LINK}
                                    className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#202124] px-8 py-4 md:py-5 rounded-full text-[15px] md:text-[17px] font-medium transition-all duration-300 border border-gray-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                                >
                                    <Download className="w-5 h-5" />
                                    Download for iOS
                                </a>
                            </motion.div>

                            {/* Secondary Links */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] md:text-[14px] text-[#5f6368]"
                            >
                                <a href="#" className="hover:text-[#fb8a09] transition-colors">
                                    Help Center
                                </a>
                                <span className="text-gray-300">·</span>
                                <a href="#" className="hover:text-[#fb8a09] transition-colors">
                                    Privacy Policy
                                </a>
                                <span className="text-gray-300">·</span>
                                <a href="#" className="hover:text-[#fb8a09] transition-colors">
                                    Our Story
                                </a>
                                <span className="text-gray-300">·</span>
                                <a
                                    href="/contact"
                                    className="hover:text-[#fb8a09] transition-colors"
                                >
                                    Contact Us
                                </a>
                            </motion.div>

                            {/* Made with love */}
                            <motion.p
                                variants={fadeUp}
                                className="mt-8 md:mt-10 text-[13px] md:text-[14px] text-[#5f6368]"
                            >
                                Made with{' '}
                                <span className="text-red-500">❤️</span> in Bangladesh
                            </motion.p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Tolpar;
