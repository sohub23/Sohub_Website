import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    ShieldCheck,
    AlertTriangle,
    Wrench,
    Headphones,
    Clock,
    Zap,
    Info,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const priorityLevels = [
    {
        level: 'Level 1',
        label: 'Business Critical',
        color: '#ef4444',
        bgColor: '#fef2f2',
        borderColor: '#fecaca',
        response: 'Response within 5–15 minutes to acknowledge report from Client.',
        resolution: 'Allowable deviation to resolve — 48 hours during working hours.',
        example:
            'Covers complete business failure for Services in production which requires SOHUB to immediately notify you of the failure.',
    },
    {
        level: 'Level 2',
        label: 'Degraded Service',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        borderColor: '#fde68a',
        response: 'Response within 15–30 minutes to acknowledge report from Client.',
        resolution: 'Allowable deviation to resolve — 7 Business Days.',
        example:
            'Required assistance here would for instance entail remote diagnosis and, where possible, correction of faults, more specifically to correct all errors, bugs or failure of SOHUB\'s API Platform.',
    },
    {
        level: 'Level 3',
        label: 'General',
        color: '#3b82f6',
        bgColor: '#eff6ff',
        borderColor: '#bfdbfe',
        response: 'Response within 15–30 minutes to acknowledge report from Client.',
        resolution: 'Allowable deviation to resolve — 1–12 hours during working hours.',
        example:
            'These are mostly issues you would encounter in connection with the API Platform and/or enquiries related to the Services provided. E.g. product questions, feature requests and development issues.',
    },
];

/* ──────────────────────────────────────────────
   PRIORITY CARD
   ────────────────────────────────────────────── */
interface PriorityCardProps {
    item: (typeof priorityLevels)[0];
    index: number;
    compact?: boolean;
}

const PriorityCard = ({ item, index, compact = false }: PriorityCardProps) => (
    <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeUp}
        className={`relative rounded-2xl border-2 ${compact ? 'p-5' : 'p-7'} transition-all duration-300 hover:shadow-lg`}
        style={{ borderColor: item.borderColor, backgroundColor: item.bgColor }}
    >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <div
                className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg flex items-center justify-center`}
                style={{ backgroundColor: item.color }}
            >
                {index === 0 ? (
                    <Zap className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-white`} />
                ) : index === 1 ? (
                    <AlertTriangle className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-white`} />
                ) : (
                    <Info className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-white`} />
                )}
            </div>
            <div>
                <span
                    className={`${compact ? 'text-[11px]' : 'text-xs'} font-bold tracking-wider uppercase`}
                    style={{ color: item.color }}
                >
                    {item.level}
                </span>
                <h3 className={`${compact ? 'text-[15px]' : 'text-[18px]'} font-semibold text-[#202124] -mt-0.5`}>
                    {item.label}
                </h3>
            </div>
        </div>

        {/* Details */}
        <div className={`space-y-3 ${compact ? 'text-[12px]' : 'text-[14px]'}`}>
            <div className="flex items-start gap-2">
                <Clock className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-[#5f6368] mt-0.5 flex-shrink-0`} />
                <div>
                    <span className="font-semibold text-[#202124]">Response: </span>
                    <span className="text-[#5f6368]">{item.response}</span>
                </div>
            </div>
            <div className="flex items-start gap-2">
                <Wrench className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-[#5f6368] mt-0.5 flex-shrink-0`} />
                <div>
                    <span className="font-semibold text-[#202124]">Resolution: </span>
                    <span className="text-[#5f6368]">{item.resolution}</span>
                </div>
            </div>
        </div>

        {/* Example */}
        <div
            className={`mt-4 ${compact ? 'p-3' : 'p-4'} rounded-xl bg-white/70 border border-black/5`}
        >
            <p className={`${compact ? 'text-[11px]' : 'text-[13px]'} text-[#5f6368] leading-relaxed`}>
                <span className="font-semibold text-[#202124]">Example: </span>
                {item.example}
            </p>
        </div>
    </motion.div>
);

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopSLAContent = () => {
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
                    <ShieldCheck className="w-4 h-4" />
                    Service Commitment
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] font-normal tracking-tight text-[#202124] mb-5"
                >
                    Service Level Agreement
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18px] text-[#5f6368] font-normal max-w-3xl mx-auto leading-relaxed"
                >
                    Our service level commitments ensure your operations run smoothly with minimal disruption. We hold ourselves accountable to the highest standards of uptime and support.
                </motion.p>
            </div>

            {/* Section 1: Delays & Service Interruptions */}
            <div className="max-w-[1280px] mx-auto px-6 mb-16">
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group relative bg-white rounded-2xl border border-[#e8eaed] p-8 hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300 mb-8"
                >
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fff7e6] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300">
                            <AlertTriangle className="w-6 h-6 text-[#fb8a09] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-[#fb8a09]/60 tracking-wide">01</span>
                                <h3 className="text-[18px] font-semibold text-[#202124]">
                                    Delays & Service Interruptions
                                </h3>
                            </div>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed mb-3">
                                We will use all commercially practicable endeavors to minimize delays or outages in the provision of the Services. We will inform you of any downtime on the API Platform as soon as possible and in any event within twenty-four (24) hours of such downtime.
                            </p>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed mb-3">
                                SOHUB shall credit the User Account with an amount equivalent to the cost of a particular service not delivered by SOHUB to the Network Provider's system provided that such failure is caused by a downtime on the API Platform.
                            </p>
                            <p className="text-[14px] text-[#5f6368]/80 leading-relaxed italic">
                                SOHUB shall not provide any repayment for delays or failures in relation to the Service where such failure or delay is a result of factors beyond SOHUB's control (including but not limited to Force Majeure Events or factors caused by the Network Providers).
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* SLA Priority Heading */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[16px] text-[#5f6368] text-center mb-8 max-w-2xl mx-auto"
                >
                    The following levels of service shall govern the response by SOHUB to ensure your operations are not adversely affected:
                </motion.p>

                {/* Priority Level Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {priorityLevels.map((item, i) => (
                        <PriorityCard key={item.level} item={item} index={i} />
                    ))}
                </div>
            </div>

            {/* Section 2: Maintenance */}
            <div className="max-w-[1280px] mx-auto px-6 mb-8">
                <motion.div
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group relative bg-white rounded-2xl border border-[#e8eaed] p-8 hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300"
                >
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fff7e6] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300">
                            <Wrench className="w-6 h-6 text-[#fb8a09] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-[#fb8a09]/60 tracking-wide">02</span>
                                <h3 className="text-[18px] font-semibold text-[#202124]">Maintenance</h3>
                            </div>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed mb-3">
                                We will inform you of all scheduled maintenance and we will endeavor to carry out our maintenance activities at times where the minimum effect will be felt by you.
                            </p>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                We will provide you with at least <span className="font-semibold text-[#202124]">five (5) days' notice</span> for scheduled maintenance. In case of emergency maintenance, we will provide you with reasonable reason for the same.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 3: Customer Support */}
            <div className="max-w-[1280px] mx-auto px-6 mb-20">
                <motion.div
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group relative bg-white rounded-2xl border border-[#e8eaed] p-8 hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300"
                >
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fff7e6] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300">
                            <Headphones className="w-6 h-6 text-[#fb8a09] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-[#fb8a09]/60 tracking-wide">03</span>
                                <h3 className="text-[18px] font-semibold text-[#202124]">Customer Support</h3>
                            </div>
                            <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                SOHUB shall provide you with customer support for the duration of this Agreement. Please contact us at{' '}
                                <a
                                    href="mailto:tech@sohub.com.bd"
                                    className="font-semibold text-[#fb8a09] hover:underline"
                                >
                                    tech@sohub.com.bd
                                </a>{' '}
                                for the purpose of customer engagement and account management.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileSLAContent = () => {
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
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Service Commitment
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[28px] font-normal tracking-tight text-[#202124] mb-3"
                >
                    Service Level Agreement
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-[14px] text-[#5f6368] leading-relaxed"
                >
                    Our service level commitments ensure your operations run smoothly with minimal disruption.
                </motion.p>
            </div>

            {/* Section 1: Delays */}
            <div className="px-4 mb-6">
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-xl border border-[#e8eaed] p-5"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fff7e6] flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-semibold text-[#fb8a09]/60 tracking-wide">01</span>
                                <h3 className="text-[15px] font-semibold text-[#202124]">Delays & Service Interruptions</h3>
                            </div>
                            <p className="text-[13px] text-[#5f6368] leading-relaxed mb-2">
                                We will use all commercially practicable endeavors to minimize delays or outages. We will inform you of any downtime within 24 hours.
                            </p>
                            <p className="text-[12px] text-[#5f6368]/80 leading-relaxed italic">
                                SOHUB shall not provide any repayment for delays caused by factors beyond SOHUB's control (including Force Majeure Events).
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Priority Level Cards */}
            <div className="px-4 mb-6 space-y-3">
                <p className="text-[13px] text-[#5f6368] text-center mb-2">
                    Service response priority levels:
                </p>
                {priorityLevels.map((item, i) => (
                    <PriorityCard key={item.level} item={item} index={i} compact />
                ))}
            </div>

            {/* Section 2: Maintenance */}
            <div className="px-4 mb-3">
                <motion.div
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-xl border border-[#e8eaed] p-5"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fff7e6] flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-semibold text-[#fb8a09]/60 tracking-wide">02</span>
                                <h3 className="text-[15px] font-semibold text-[#202124]">Maintenance</h3>
                            </div>
                            <p className="text-[13px] text-[#5f6368] leading-relaxed">
                                At least <span className="font-semibold text-[#202124]">5 days' notice</span> for scheduled maintenance. Emergency maintenance will be communicated with reasonable justification.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 3: Customer Support */}
            <div className="px-4 mb-10">
                <motion.div
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-xl border border-[#e8eaed] p-5"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fff7e6] flex items-center justify-center">
                            <Headphones className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-semibold text-[#fb8a09]/60 tracking-wide">03</span>
                                <h3 className="text-[15px] font-semibold text-[#202124]">Customer Support</h3>
                            </div>
                            <p className="text-[13px] text-[#5f6368] leading-relaxed">
                                Contact us at{' '}
                                <a href="mailto:tech@sohub.com.bd" className="font-semibold text-[#fb8a09] hover:underline">
                                    tech@sohub.com.bd
                                </a>{' '}
                                for customer engagement and account management.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const ServiceLevelAgreement = () => {
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
            {isMobile ? <MobileSLAContent /> : <DesktopSLAContent />}
            <Footer />
        </div>
    );
};

export default ServiceLevelAgreement;
