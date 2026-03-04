import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Clock,
    Zap,
    Users,
    Wifi,
    MapPin,
    AlertTriangle,
    Settings,
    MessageSquare,
    Heart,
    TrendingUp,
    FileText,
    Shield,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const policies = [
    {
        icon: Clock,
        title: 'Round-the-clock Support',
        description:
            'Our customer support team is available 24 hours a day, 7 days a week, to assist with any inquiries, technical support, or concerns you may have regarding our IoT solutions.',
    },
    {
        icon: Zap,
        title: 'Fast Response Times',
        description:
            'We understand the critical nature of IoT solutions in homes and offices. Therefore, we pledge to respond to all customer inquiries and support requests within a maximum of 2 hours, regardless of the time of day.',
    },
    {
        icon: Users,
        title: 'Expert Technicians',
        description:
            'Our team consists of skilled and knowledgeable professionals who are well-versed in IoT technology. They are trained to handle any technical issues and provide reliable solutions promptly.',
    },
    {
        icon: Wifi,
        title: 'Remote Assistance',
        description:
            'In many cases, our technicians and engineers can troubleshoot and resolve issues remotely, ensuring swift problem-solving without the need for on-site visits.',
    },
    {
        icon: MapPin,
        title: 'On-Site Support',
        description:
            'If an issue requires on-site attention, we will dispatch our team to your location as quickly as possible to resolve the matter efficiently.',
    },
    {
        icon: AlertTriangle,
        title: 'Emergency Support',
        description:
            'For critical situations that require immediate attention, such as system failures or security breaches, our emergency support hotline will be available 24/7 to provide swift assistance.',
    },
    {
        icon: Settings,
        title: 'Regular Maintenance and Updates',
        description:
            'To ensure the continued efficiency and reliability of our IoT solutions, we conduct regular maintenance checks and offer timely updates to our software and hardware.',
    },
    {
        icon: MessageSquare,
        title: 'Transparent Communication',
        description:
            'Throughout the service process, we maintain open and transparent communication with our customers, providing regular updates on the progress of issue resolution.',
    },
    {
        icon: Heart,
        title: 'Client Satisfaction',
        description:
            'Our ultimate goal is your satisfaction. We will work tirelessly to meet your needs and exceed your expectations, striving for excellence in every aspect of our service.',
    },
    {
        icon: TrendingUp,
        title: 'Continuous Improvement',
        description:
            'We are committed to continuously improving our service and offerings based on customer feedback and industry advancements.',
    },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopTermsContent = () => {
    return (
        <main className="pt-32 pb-24">
            {/* Hero */}
            <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-[#fff7e6] text-[#fb8a09] px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                    <Shield className="w-4 h-4" />
                    24/7 Service Policy
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] font-normal tracking-tight text-[#202124] mb-5"
                >
                    Terms of Service
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18px] text-[#5f6368] font-normal max-w-3xl mx-auto leading-relaxed"
                >
                    At Solution Hub Technologies, we are dedicated to providing innovative IT solutions that enhance the quality of life and efficiency in machines, software, smart homes, smart solutions, and telephony. Our team of experienced professionals, coupled with cutting-edge technology, ensures that we deliver reliable and efficient services at all times.
                </motion.p>
            </div>

            {/* Policy Cards Grid */}
            <div className="max-w-[1280px] mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {policies.map((policy, i) => {
                        const Icon = policy.icon;
                        return (
                            <motion.div
                                key={policy.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={fadeUp}
                                className="group relative bg-white rounded-2xl border border-[#e8eaed] p-8 hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fff7e6] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-[#fb8a09] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-semibold text-[#fb8a09]/60 tracking-wide">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-[18px] font-semibold text-[#202124]">
                                                {policy.title}
                                            </h3>
                                        </div>
                                        <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                            {policy.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Note Section */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1280px] mx-auto px-6 mb-20"
            >
                <div className="bg-gradient-to-br from-[#fffbf0] to-[#fff7e6] rounded-2xl border border-[#fb8a09]/15 p-10">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fb8a09]/10 flex items-center justify-center mt-0.5">
                            <FileText className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div>
                            <h3 className="text-[18px] font-semibold text-[#202124] mb-3">
                                Important Note
                            </h3>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                Our product and solution fees and charges vary based on each product or solution. Some products and solutions come with different types of service policies, while others may have applicable charges. Clear details will be provided during the consultation and agreement. Transparent and competitive pricing is our commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1280px] mx-auto px-6 text-center"
            >
                <p className="text-[16px] text-[#5f6368] leading-relaxed max-w-3xl mx-auto">
                    With our 24/7 service policy, we endeavor to be your trusted partner, providing unwavering support and efficient solutions for all your IT needs. Thank you for choosing{' '}
                    <span className="font-semibold text-[#202124]">Solution Hub Technologies</span>{' '}
                    as your preferred IT solutions provider.
                </p>
            </motion.div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileTermsContent = () => {
    return (
        <main className="pt-20 pb-16">
            {/* Hero */}
            <div className="px-5 text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#fff7e6] text-[#fb8a09] px-3.5 py-1.5 rounded-full text-xs font-medium mb-5"
                >
                    <Shield className="w-3.5 h-3.5" />
                    24/7 Service Policy
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[28px] font-normal tracking-tight text-[#202124] mb-3"
                >
                    Terms of Service
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-[14px] text-[#5f6368] leading-relaxed"
                >
                    At Solution Hub Technologies, we are dedicated to providing innovative IT solutions that enhance the quality of life and efficiency in machines, software, smart homes, smart solutions, and telephony.
                </motion.p>
            </div>

            {/* Policy Cards */}
            <div className="px-4 mb-10 space-y-3">
                {policies.map((policy, i) => {
                    const Icon = policy.icon;
                    return (
                        <motion.div
                            key={policy.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-20px' }}
                            variants={fadeUp}
                            className="bg-white rounded-xl border border-[#e8eaed] p-5"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fff7e6] flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-[10px] font-semibold text-[#fb8a09]/60 tracking-wide">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-[15px] font-semibold text-[#202124]">
                                            {policy.title}
                                        </h3>
                                    </div>
                                    <p className="text-[13px] text-[#5f6368] leading-relaxed">
                                        {policy.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Note Section */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-4 mb-10"
            >
                <div className="bg-gradient-to-br from-[#fffbf0] to-[#fff7e6] rounded-xl border border-[#fb8a09]/15 p-6">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#fb8a09]/10 flex items-center justify-center mt-0.5">
                            <FileText className="w-4 h-4 text-[#fb8a09]" />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-[#202124] mb-2">
                                Important Note
                            </h3>
                            <p className="text-[13px] text-[#5f6368] leading-relaxed">
                                Our product and solution fees and charges vary based on each product or solution. Some products and solutions come with different types of service policies, while others may have applicable charges. Clear details will be provided during the consultation and agreement.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-5 text-center"
            >
                <p className="text-[13px] text-[#5f6368] leading-relaxed">
                    With our 24/7 service policy, we endeavor to be your trusted partner. Thank you for choosing{' '}
                    <span className="font-semibold text-[#202124]">Solution Hub Technologies</span>{' '}
                    as your preferred IT solutions provider.
                </p>
            </motion.div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const TermsOfService = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
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
            {isMobile ? <MobileTermsContent /> : <DesktopTermsContent />}
            <Footer />
        </div>
    );
};

export default TermsOfService;
