import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    Video,
    LayoutGrid,
    Shield,
    Download,
    ArrowDown,
    Sparkles,
} from 'lucide-react';

import heroMockup from '@/assets/tolpar/hero-mockup.png';
import appChaos from '@/assets/tolpar/app-chaos.png';
import solutionMerge from '@/assets/tolpar/solution-merge.png';
import chatFeature from '@/assets/tolpar/chat-feature.png';
import videoCall from '@/assets/tolpar/video-call.png';
import superApp from '@/assets/tolpar/super-app.png';
import securityShield from '@/assets/tolpar/security-shield.png';
import tolparLogo from '@/assets/carousel/tolpar-navbar.png';

const PLAY_STORE_LINK = '#';

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
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopTolpar = () => {
    return (
        <main>
            {/* ─── Section 1: Hero ─── */}
            <section className="pt-36 pb-28 relative overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fff7e6]/40 via-white to-white pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-16">
                        {/* Left: Text */}
                        <motion.div
                            className="flex-1"
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                        >
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                                <img src={tolparLogo} alt="Tolpar" className="h-10 w-auto" />
                                <span className="text-[14px] font-medium text-[#fb8a09] bg-[#fff7e6] px-3 py-1 rounded-full">
                                    Super App
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-[56px] leading-[1.1] font-normal tracking-tight text-[#202124] mb-6"
                            >
                                Your entire world,{' '}
                                <span className="text-[#fb8a09]">now in one app.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-[20px] text-[#5f6368] font-normal leading-relaxed max-w-xl mb-10"
                            >
                                Meet Tolpar. From chatting with loved ones to managing your daily
                                needs—finally, a single super app that does it all.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex items-center gap-4">
                                <a
                                    href={PLAY_STORE_LINK}
                                    className="inline-flex items-center gap-3 bg-[#202124] hover:bg-[#3c4043] text-white px-8 py-4 rounded-full text-[16px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <Download className="w-5 h-5" />
                                    Get it on Google Play
                                </a>
                                <a
                                    href="#features"
                                    className="inline-flex items-center gap-2 text-[#5f6368] hover:text-[#fb8a09] px-6 py-4 rounded-full text-[16px] font-medium transition-colors border border-gray-200 hover:border-[#fb8a09]/30"
                                >
                                    Learn more
                                    <ArrowDown className="w-4 h-4" />
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right: Phone Mockup */}
                        <motion.div
                            className="flex-1 flex justify-center"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={heroMockup}
                                alt="Tolpar App Dashboard"
                                className="w-full max-w-[480px] h-auto drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Section 2: The Problem ─── */}
            <section className="py-28 bg-[#f8f9fa]">
                <div className="max-w-[900px] mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.p variants={fadeUp} className="text-[14px] font-medium text-[#fb8a09] mb-4 tracking-wide uppercase">
                            The problem
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[44px] font-normal tracking-tight text-[#202124] mb-6 leading-[1.15]"
                        >
                            How many apps do you juggle{' '}
                            <span className="text-[#fb8a09]">every single day?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[18px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto mb-12"
                        >
                            One app to text your family, another to video call your colleagues, and half a
                            dozen more for your everyday tasks. Your smartphone has turned into a chaotic
                            maze, hasn't it? We realized there had to be a better way to escape this
                            digital clutter.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <img
                                src={appChaos}
                                alt="App overload"
                                className="w-full max-w-[600px] mx-auto rounded-[28px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 3: The Solution ─── */}
            <section className="py-28">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        className="flex items-center gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <div className="flex-1">
                            <motion.p variants={fadeUp} className="text-[14px] font-medium text-[#fb8a09] mb-4 tracking-wide uppercase">
                                The solution
                            </motion.p>
                            <motion.h2
                                variants={fadeUp}
                                className="text-[44px] font-normal tracking-tight text-[#202124] mb-6 leading-[1.15]"
                            >
                                Say hello to the solution.
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-[18px] text-[#5f6368] leading-relaxed max-w-xl"
                            >
                                What if you could find everything you actually need inside just one app?
                                Tolpar isn't just another application; it's the new remote control for your
                                digital life. Save time, reduce the hassle, and stay connected—all from one
                                beautiful place.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex-1 flex justify-center"
                            variants={fadeUp}
                        >
                            <img
                                src={solutionMerge}
                                alt="Apps merging into Tolpar"
                                className="w-full max-w-[500px] rounded-[28px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 4: Feature Spotlights ─── */}
            <section id="features" className="py-12">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.p variants={fadeUp} className="text-[14px] font-medium text-[#fb8a09] mb-4 tracking-wide uppercase">
                            Features
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[44px] font-normal tracking-tight text-[#202124] leading-[1.15]"
                        >
                            Designed around how you <span className="text-[#fb8a09]">feel</span>
                        </motion.h2>
                    </motion.div>

                    {/* Feature 1: Messaging */}
                    <motion.div
                        className="flex items-center gap-16 mb-28"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.div className="flex-1" variants={fadeUp}>
                            <img
                                src={chatFeature}
                                alt="Chat conversation"
                                className="w-full rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            />
                        </motion.div>
                        <div className="flex-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                                <span className="text-[13px] font-medium text-[#fb8a09] uppercase tracking-wide">Messaging</span>
                            </motion.div>
                            <motion.h3
                                variants={fadeUp}
                                className="text-[36px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.2]"
                            >
                                Conversations that flow naturally.
                            </motion.h3>
                            <motion.p
                                variants={fadeUp}
                                className="text-[17px] text-[#5f6368] leading-relaxed"
                            >
                                Lose track of time while chatting with your favorite people. Share your daily
                                moments, photos, videos, and voice notes instantly—without any frustrating
                                lags or interruptions. It just works, beautifully.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Feature 2: Audio & Video Calls */}
                    <motion.div
                        className="flex items-center gap-16 mb-28"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <div className="flex-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                    <Video className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                                <span className="text-[13px] font-medium text-[#fb8a09] uppercase tracking-wide">Audio & Video Calls</span>
                            </motion.div>
                            <motion.h3
                                variants={fadeUp}
                                className="text-[36px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.2]"
                            >
                                Like they're sitting right next to you.
                            </motion.h3>
                            <motion.p
                                variants={fadeUp}
                                className="text-[17px] text-[#5f6368] leading-relaxed"
                            >
                                With our crystal-clear audio and video calls, distance is just a word.
                                Whether they are across the street or across the globe, talk freely without
                                the annoyance of dropped calls or frozen screens.
                            </motion.p>
                        </div>
                        <motion.div className="flex-1" variants={fadeUp}>
                            <img
                                src={videoCall}
                                alt="Video calling"
                                className="w-full rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Feature 3: Super App Vision */}
                    <motion.div
                        className="flex items-center gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.div className="flex-1" variants={fadeUp}>
                            <img
                                src={superApp}
                                alt="Super app services"
                                className="w-full rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            />
                        </motion.div>
                        <div className="flex-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                    <LayoutGrid className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                                <span className="text-[13px] font-medium text-[#fb8a09] uppercase tracking-wide">Super App</span>
                            </motion.div>
                            <motion.h3
                                variants={fadeUp}
                                className="text-[36px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.2]"
                            >
                                So much more than just chatting.
                            </motion.h3>
                            <motion.p
                                variants={fadeUp}
                                className="text-[17px] text-[#5f6368] leading-relaxed"
                            >
                                We are constantly adding the everyday services you rely on. From
                                communication to your essential lifestyle needs, Tolpar is evolving to keep
                                your entire world right at your fingertips.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 5: Trust & Security ─── */}
            <section className="py-28 mt-16 bg-[#1a1a2e] relative overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fb8a09]/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        className="flex items-center gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <div className="flex-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#fb8a09]/15 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                                <span className="text-[13px] font-medium text-[#fb8a09] uppercase tracking-wide">Security</span>
                            </motion.div>
                            <motion.h2
                                variants={fadeUp}
                                className="text-[44px] font-normal tracking-tight text-white mb-6 leading-[1.15]"
                            >
                                Your privacy,{' '}
                                <span className="text-[#fb8a09]">fiercely protected.</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-[18px] text-gray-400 leading-relaxed max-w-xl"
                            >
                                We believe your personal conversations belong to you alone. On Tolpar, your
                                messages and calls are highly secure. Speak your mind freely, share your
                                moments safely—we've got your security covered.
                            </motion.p>
                        </div>
                        <motion.div className="flex-1 flex justify-center" variants={fadeUp}>
                            <img
                                src={securityShield}
                                alt="Security shield"
                                className="w-full max-w-[420px] rounded-[28px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 6: Final CTA ─── */}
            <section className="py-32">
                <div className="max-w-[900px] mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} className="flex justify-center mb-6">
                            <div className="w-14 h-14 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                <Sparkles className="w-7 h-7 text-[#fb8a09]" />
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[48px] font-normal tracking-tight text-[#202124] mb-6 leading-[1.1]"
                        >
                            Ready to simplify your{' '}
                            <span className="text-[#fb8a09]">digital life?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[20px] text-[#5f6368] font-normal leading-relaxed max-w-2xl mx-auto mb-10"
                        >
                            Join the community and experience the magic of a true super app today.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <a
                                href={PLAY_STORE_LINK}
                                className="inline-flex items-center gap-3 bg-[#fb8a09] hover:bg-[#e07a00] text-white px-10 py-5 rounded-full text-[18px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Download className="w-6 h-6" />
                                Download for Android
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileTolpar = () => {
    return (
        <main>
            {/* ─── Section 1: Hero ─── */}
            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#fff7e6]/40 via-white to-white pointer-events-none" />

                <div className="px-5 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
                            <img src={tolparLogo} alt="Tolpar" className="h-8 w-auto" />
                            <span className="text-[12px] font-medium text-[#fb8a09] bg-[#fff7e6] px-2.5 py-1 rounded-full">
                                Super App
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-[36px] leading-[1.15] font-normal tracking-tight text-[#202124] mb-4"
                        >
                            Your entire world,{' '}
                            <span className="text-[#fb8a09]">now in one app.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[16px] text-[#5f6368] font-normal leading-relaxed mb-8"
                        >
                            Meet Tolpar. From chatting with loved ones to managing your daily
                            needs—finally, a single super app that does it all.
                        </motion.p>

                        <motion.div variants={fadeUp}>
                            <a
                                href={PLAY_STORE_LINK}
                                className="inline-flex items-center gap-3 bg-[#202124] hover:bg-[#3c4043] text-white px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Get it on Google Play
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-10">
                            <img
                                src={heroMockup}
                                alt="Tolpar App"
                                className="w-full max-w-[320px] mx-auto drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 2: The Problem ─── */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="px-5 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.p variants={fadeUp} className="text-[12px] font-medium text-[#fb8a09] mb-3 tracking-wide uppercase">
                            The problem
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[28px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.2]"
                        >
                            How many apps do you juggle{' '}
                            <span className="text-[#fb8a09]">every single day?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] text-[#5f6368] leading-relaxed mb-8"
                        >
                            One app to text your family, another to video call your colleagues, and
                            half a dozen more for your everyday tasks. We realized there had to be
                            a better way.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <img
                                src={appChaos}
                                alt="App overload"
                                className="w-full rounded-[20px] max-w-[340px] mx-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 3: The Solution ─── */}
            <section className="py-16">
                <div className="px-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.p variants={fadeUp} className="text-[12px] font-medium text-[#fb8a09] mb-3 tracking-wide uppercase">
                            The solution
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[28px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.2]"
                        >
                            Say hello to the solution.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] text-[#5f6368] leading-relaxed mb-8"
                        >
                            Tolpar isn't just another application; it's the new remote control for your
                            digital life. Save time, reduce the hassle, and stay connected—all from one
                            beautiful place.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <img
                                src={solutionMerge}
                                alt="Apps merging into Tolpar"
                                className="w-full rounded-[20px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 4: Features ─── */}
            <section id="features" className="py-8">
                <div className="px-5">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[12px] font-medium text-[#fb8a09] mb-3 tracking-wide uppercase text-center"
                    >
                        Features
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[28px] font-normal tracking-tight text-[#202124] mb-12 leading-[1.2] text-center"
                    >
                        Designed around how you <span className="text-[#fb8a09]">feel</span>
                    </motion.h2>

                    {/* Feature 1 */}
                    <motion.div
                        className="mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <img
                                src={chatFeature}
                                alt="Chat"
                                className="w-full rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-5"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                <MessageSquare className="w-4 h-4 text-[#fb8a09]" />
                            </div>
                            <span className="text-[12px] font-medium text-[#fb8a09] uppercase tracking-wide">Messaging</span>
                        </motion.div>
                        <motion.h3 variants={fadeUp} className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 leading-[1.2]">
                            Conversations that flow naturally.
                        </motion.h3>
                        <motion.p variants={fadeUp} className="text-[15px] text-[#5f6368] leading-relaxed">
                            Share photos, videos, voice notes instantly—without any frustrating lags. It
                            just works, beautifully.
                        </motion.p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <img
                                src={videoCall}
                                alt="Video Call"
                                className="w-full rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-5"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                <Video className="w-4 h-4 text-[#fb8a09]" />
                            </div>
                            <span className="text-[12px] font-medium text-[#fb8a09] uppercase tracking-wide">Audio & Video Calls</span>
                        </motion.div>
                        <motion.h3 variants={fadeUp} className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 leading-[1.2]">
                            Like they're sitting right next to you.
                        </motion.h3>
                        <motion.p variants={fadeUp} className="text-[15px] text-[#5f6368] leading-relaxed">
                            Crystal-clear audio and video calls. Whether across the street or across the
                            globe, talk freely without dropped calls.
                        </motion.p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <img
                                src={superApp}
                                alt="Super App"
                                className="w-full rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-5"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                <LayoutGrid className="w-4 h-4 text-[#fb8a09]" />
                            </div>
                            <span className="text-[12px] font-medium text-[#fb8a09] uppercase tracking-wide">Super App</span>
                        </motion.div>
                        <motion.h3 variants={fadeUp} className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 leading-[1.2]">
                            So much more than just chatting.
                        </motion.h3>
                        <motion.p variants={fadeUp} className="text-[15px] text-[#5f6368] leading-relaxed">
                            From communication to everyday lifestyle needs, Tolpar is evolving to keep
                            your entire world at your fingertips.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 5: Security ─── */}
            <section className="py-16 mt-4 bg-[#1a1a2e] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#fb8a09]/5 via-transparent to-transparent pointer-events-none" />

                <div className="px-5 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-[#fb8a09]/15 flex items-center justify-center">
                                <Shield className="w-4 h-4 text-[#fb8a09]" />
                            </div>
                            <span className="text-[12px] font-medium text-[#fb8a09] uppercase tracking-wide">Security</span>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[28px] font-normal tracking-tight text-white mb-4 leading-[1.2]"
                        >
                            Your privacy, <span className="text-[#fb8a09]">fiercely protected.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] text-gray-400 leading-relaxed mb-8"
                        >
                            Your personal conversations belong to you alone. On Tolpar, your messages and
                            calls are highly secure. We've got your security covered.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex justify-center">
                            <img
                                src={securityShield}
                                alt="Security"
                                className="w-full max-w-[280px] rounded-[20px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Section 6: Final CTA ─── */}
            <section className="py-20">
                <div className="px-5 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} className="flex justify-center mb-5">
                            <div className="w-12 h-12 rounded-full bg-[#fff7e6] flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-[#fb8a09]" />
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[30px] font-normal tracking-tight text-[#202124] mb-4 leading-[1.15]"
                        >
                            Ready to simplify your{' '}
                            <span className="text-[#fb8a09]">digital life?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-[16px] text-[#5f6368] font-normal leading-relaxed mb-8"
                        >
                            Join the community and experience the magic of a true super app today.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <a
                                href={PLAY_STORE_LINK}
                                className="inline-flex items-center gap-3 bg-[#fb8a09] hover:bg-[#e07a00] text-white px-8 py-4 rounded-full text-[16px] font-medium transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download for Android
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const Tolpar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        document.title = 'Tolpar - Your Super App | SOHUB';
        window.scrollTo(0, 0);
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            {isMobile ? <MobileTolpar /> : <DesktopTolpar />}
            <Footer />
        </div>
    );
};

export default Tolpar;
