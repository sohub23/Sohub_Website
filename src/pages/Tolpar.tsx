import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Layers,
    Globe,
    Building2,
    Cpu,
    Users,
    MessageCircle,
    Cog,
} from 'lucide-react';

import heroMockup from '@/assets/tolpar/hero-mockup.png';
import tolparLogo from '@/assets/carousel/tolpar-navbar.png';
import imgSohubLogo from '@/assets/logo-orange.svg';
import tolparHero from '@/assets/tolpar_hero_transparent.png';
import androidImg from '@/assets/android_transparent.png';

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

/* ─── Connect Items ─── */
const connectItems = [
    { icon: Users, label: 'Customers and services' },
    { icon: Building2, label: 'Businesses and operations' },
    { icon: Cog, label: 'Machines and real-world infrastructure' },
];

/* ─── Unified Layer Items ─── */
const layerItems = [
    { text: 'Services become easier to discover' },
    { text: 'Businesses interact more efficiently' },
    { text: 'Machines connect to real workflows' },
];

/* ═══════════════════════════════════════════════
   TOLPAR PAGE — Redesigned
   ═══════════════════════════════════════════════ */
const Tolpar = () => {
    useEffect(() => {
        document.title = 'Tolpar — A New Communication Layer | SOHUB';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* ═══════════════════════════════════════
                    ACT 1 — HERO
                ═══════════════════════════════════════ */}
                <section className="pt-36 md:pt-44 pb-16 md:pb-28 relative overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-white pointer-events-none" />
                    <div
                        className="absolute inset-0 opacity-[0.025] pointer-events-none"
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
                                    <img src={tolparLogo} alt="Tolpar" className="h-12 md:h-14 w-auto" />
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-[28px] md:text-[48px] lg:text-[56px] leading-[1.12] font-normal tracking-tight text-[#202124] mb-4 md:mb-6"
                                >
                                    A new communication layer for{' '}
                                    <span className="text-[#fb8a09]">businesses and services.</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[14px] md:text-[18px] text-[#5f6368] font-normal leading-relaxed max-w-xl mx-auto md:mx-0 mb-4 md:mb-6"
                                >
                                    Connecting people, businesses, machines, and real-world systems in one intelligent platform.
                                </motion.p>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[12px] md:text-[14px] text-[#9aa0a6] font-normal mb-6 md:mb-8"
                                >
                                    Built by Solution Hub Technologies.
                                </motion.p>

                                <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center md:justify-start">
                                    <span className="inline-flex items-center gap-2 bg-[#202124] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-medium">
                                        Coming Soon
                                    </span>
                                    <span className="text-[13px] md:text-[14px] text-[#9aa0a6] italic">
                                        Built quietly. Designed carefully.
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Right: Dashboard mockup */}
                            <motion.div
                                className="flex-1 flex justify-center"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="bg-[#fdf8f3] rounded-[28px] w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center shadow-[0_6px_32px_rgba(0,0,0,0.07)] overflow-hidden">
                                    <img
                                        src={tolparHero}
                                        alt="Tolpar Dashboard"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 2 — THE PROBLEM
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28 bg-[#f8f9fa]">
                    <div className="max-w-[900px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="text-[26px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-5 md:mb-8 leading-[1.15]"
                            >
                                A new way to connect{' '}
                                <span className="text-[#fb8a09]">businesses and people</span>
                            </motion.h2>

                            <motion.div variants={fadeUp} className="space-y-5 md:space-y-6 text-left md:text-center max-w-[700px] mx-auto">
                                <p className="text-[14px] md:text-[17px] text-[#3c4043] leading-[1.7]">
                                    Digital communication has focused on people talking to people.
                                </p>
                                <p className="text-[14px] md:text-[17px] text-[#5f6368] leading-[1.7]">
                                    But real services still operate across scattered channels — phone calls, websites, social media, and manual processes. Finding a business, requesting a service, or managing operations is often fragmented and inefficient.
                                </p>
                                <p className="text-[15px] md:text-[18px] text-[#202124] font-medium leading-[1.6]">
                                    Tolpar is being built to rethink this interaction.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 3 — PEER-TO-BUSINESS
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28">
                    <div className="max-w-[1280px] mx-auto px-5 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                            className="max-w-[900px] mx-auto"
                        >
                            <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
                                <div className="inline-flex items-center gap-2 bg-[#fff7e6] text-[#fb8a09] text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-full mb-5">
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    Communication
                                </div>
                                <h2 className="text-[26px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-5 md:mb-6 leading-[1.15]">
                                    Peer-to-business{' '}
                                    <span className="text-[#fb8a09]">communication</span>
                                </h2>
                                <p className="text-[14px] md:text-[17px] text-[#5f6368] leading-[1.7] max-w-[700px] mx-auto mb-4">
                                    Messaging platforms enabled peer-to-peer communication. Tolpar focuses on <strong className="text-[#202124]">peer-to-business communication</strong>.
                                </p>
                                <p className="text-[14px] md:text-[16px] text-[#5f6368] leading-[1.7] max-w-[600px] mx-auto">
                                    A platform designed to connect:
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {connectItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center text-center p-6 md:p-8 rounded-[20px] bg-[#f8f9fa] border border-gray-100"
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#fff7e6] flex items-center justify-center mb-4">
                                            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#fb8a09]" />
                                        </div>
                                        <p className="text-[14px] md:text-[16px] font-medium text-[#202124]">{item.label}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="text-[13px] md:text-[15px] text-[#9aa0a6] text-center mt-6 md:mt-8"
                            >
                                within a single connected environment.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 4 — ONE INTELLIGENT LAYER
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28 bg-[#202124]">
                    <div className="max-w-[900px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 text-[#FBBC05] text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-full mb-5 md:mb-6">
                                <Layers className="w-3.5 h-3.5" />
                                Unified Layer
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className="text-[26px] md:text-[44px] font-normal tracking-tight text-white mb-6 md:mb-10 leading-[1.15]"
                            >
                                One intelligent layer
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-[14px] md:text-[17px] text-[#e8eaed] leading-[1.7] max-w-[650px] mx-auto mb-8 md:mb-12"
                            >
                                Tolpar introduces a unified digital layer where:
                            </motion.p>

                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                                {layerItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 md:p-6 rounded-[16px] bg-white/5 border border-white/10"
                                    >
                                        <p className="text-[14px] md:text-[16px] text-[#e8eaed] font-medium leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="text-[15px] md:text-[18px] text-[#FBBC05] font-medium italic"
                            >
                                creating a more connected operational ecosystem.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 5 — BUILT FOR THE REAL WORLD
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28">
                    <div className="max-w-[1280px] mx-auto px-5 md:px-6">
                        <motion.div
                            className="max-w-[800px] mx-auto text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <div className="text-center">
                                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#fff7e6] text-[#fb8a09] text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-full mb-5">
                                    <Globe className="w-3.5 h-3.5" />
                                    Local Innovation
                                </motion.div>

                                <motion.h2
                                    variants={fadeUp}
                                    className="text-[26px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-5 md:mb-6 leading-[1.15]"
                                >
                                    Built for the{' '}
                                    <span className="text-[#fb8a09]">real world</span>
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[14px] md:text-[17px] text-[#5f6368] leading-[1.7] max-w-xl mx-auto mb-4"
                                >
                                    Many platforms are built far from the environments where they are used.
                                </motion.p>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[14px] md:text-[17px] text-[#3c4043] leading-[1.7] max-w-xl mx-auto mb-4"
                                >
                                    Tolpar is engineered by SOHUB with a deep understanding of local infrastructure, workflows, and operational realities.
                                </motion.p>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-[14px] md:text-[16px] text-[#5f6368] italic leading-[1.7] max-w-xl mx-auto"
                                >
                                    Designed to grow with businesses, systems, and cities.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 6 — EARLY LOOK
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28 bg-[#f8f9fa]">
                    <div className="max-w-[1000px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="text-[26px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-5 md:mb-8 leading-[1.15]"
                            >
                                Early look
                            </motion.h2>

                            <motion.div variants={scaleUp} className="mb-6 md:mb-8">
                                <div className="relative bg-[#fdf8f3] rounded-[32px] px-8 md:px-14 py-0 flex items-end justify-center shadow-[0_6px_32px_rgba(0,0,0,0.07)] max-w-[420px] mx-auto overflow-hidden">
                                    <img
                                        src={androidImg}
                                        alt="Tolpar Android App Early Look"
                                        className="w-full max-w-[240px] md:max-w-[290px] h-auto block drop-shadow-xl"
                                    />
                                </div>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="text-[13px] md:text-[16px] text-[#5f6368] leading-[1.7] max-w-[600px] mx-auto"
                            >
                                A preview of the Tolpar interface currently under development. The platform will continue evolving as new capabilities are introduced.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    ACT 7 — THE JOURNEY
                ═══════════════════════════════════════ */}
                <section className="py-16 md:py-28">
                    <div className="max-w-[800px] mx-auto px-5 md:px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                        >
                            <motion.div variants={fadeUp} className="flex justify-center mb-5 md:mb-6">
                                <img src={tolparLogo} alt="Tolpar" className="h-16 md:h-20 w-auto" />
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className="text-[26px] md:text-[44px] font-normal tracking-tight text-[#202124] mb-5 md:mb-8 leading-[1.15]"
                            >
                                The journey has{' '}
                                <span className="text-[#fb8a09]">begun</span>
                            </motion.h2>

                            <motion.div variants={fadeUp} className="space-y-4 md:space-y-5 max-w-[600px] mx-auto mb-8 md:mb-10">
                                <p className="text-[14px] md:text-[17px] text-[#5f6368] leading-[1.7]">
                                    Tolpar is currently under active development.
                                </p>
                                <p className="text-[14px] md:text-[17px] text-[#5f6368] leading-[1.7]">
                                    More details will be revealed as the platform evolves.
                                </p>
                                <p className="text-[15px] md:text-[18px] text-[#202124] font-medium">
                                    For now, this is just the beginning.
                                </p>
                            </motion.div>

                            {/* SOHUB badge */}
                            <motion.div
                                variants={fadeUp}
                                className="inline-flex items-center gap-3 bg-[#f8f9fa] border border-gray-200 rounded-full px-5 md:px-6 py-2.5 md:py-3"
                            >
                                <span className="text-[12px] md:text-[14px] text-[#5f6368] font-medium">An initiative by</span>
                                <img src={imgSohubLogo} alt="SOHUB" className="h-5 md:h-6 w-auto" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Tolpar;
