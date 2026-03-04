import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Scale,
    ShieldAlert,
    Ban,
    MessageSquareOff,
    UserX,
    EyeOff,
    AlertOctagon,
    Skull,
    Users,
    Megaphone,
    ThumbsDown,
    HeartCrack,
    MailWarning,
    Fingerprint,
    SearchX,
    Copyright,
    UserMinus,
    Bug,
    Wifi,
    KeyRound,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const conducts = [
    {
        icon: ShieldAlert,
        text: 'Contain anything which is in breach of the law, or omit anything which the law requires. Furthermore, services and promotional material must not facilitate or encourage anything which is in any way harmful.',
    },
    {
        icon: Skull,
        text: 'Contain material indicating violence, sadism or cruelty or be of repulsive or horrible nature.',
    },
    {
        icon: MessageSquareOff,
        text: 'Involve the use of foul language.',
    },
    {
        icon: Ban,
        text: 'Be of a kind that is likely to be used to promote or facilitate immoral act including prostitution.',
    },
    {
        icon: EyeOff,
        text: 'Be of a kind that is likely to mislead through inaccuracy, ambiguity, exaggeration, omission or otherwise and it should be clear to the consumers when time sensitive information was last updated.',
    },
    {
        icon: UserX,
        text: 'Result in any unreasonable invasion of privacy.',
    },
    {
        icon: AlertOctagon,
        text: 'Induce an unacceptable sense of fear or anxiety.',
    },
    {
        icon: ShieldAlert,
        text: 'Encourage or illicit any person to engage in dangerous practices or to use harmful substances.',
    },
    {
        icon: Users,
        text: 'Induce or promote tribal and/or racial disharmony.',
    },
    {
        icon: Megaphone,
        text: 'Cause grave or widespread offence.',
    },
    {
        icon: ThumbsDown,
        text: 'Debase, degrade or demean.',
    },
    {
        icon: HeartCrack,
        text: 'Seek to take unfair advantage of any characteristic or circumstances which make consumers vulnerable.',
    },
    {
        icon: MailWarning,
        text: 'Send unsolicited advertising material, illegal content, unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene or otherwise objectionable material of any kind or nature.',
    },
    {
        icon: Fingerprint,
        text: 'Create a false identity or forged phone number, or otherwise attempt to mislead others as to the identity of the sender or the origin of any message sent through SOHUB.',
    },
    {
        icon: SearchX,
        text: 'Harvest or otherwise collect information about any person, without their consent.',
    },
    {
        icon: Copyright,
        text: 'Transmit any material that may infringe the intellectual property rights or other rights of third parties, including trademark, copyright or right of publicity.',
    },
    {
        icon: UserMinus,
        text: 'Defame or slander any person, or infringe upon any person\'s privacy rights.',
    },
    {
        icon: Bug,
        text: 'Transmit any material that contains viruses, trojan horses, worms, time bombs, cancelbots, or any other harmful or deleterious programs.',
    },
    {
        icon: Wifi,
        text: 'Interfere with or disrupt networks connected to the Service or violate the regulations, policies or procedures of such networks.',
    },
    {
        icon: KeyRound,
        text: 'Attempt to gain unauthorized access to SOHUB\'s API Platform, other accounts, computer systems or networks connected to SOHUB\'s API Platform, through password mining or any other means.',
    },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopCodeOfConductContent = () => {
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
                    <Scale className="w-4 h-4" />
                    Platform Guidelines
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] font-normal tracking-tight text-[#202124] mb-5"
                >
                    Code of Conduct
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18px] text-[#5f6368] font-normal max-w-3xl mx-auto leading-relaxed"
                >
                    You shall adhere to the following code of conduct and shall ensure that the content sent through SOHUB's API Platform does not include, but is not limited to, the following:
                </motion.p>
            </div>

            {/* Conduct Cards Grid */}
            <div className="max-w-[1280px] mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conducts.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-30px' }}
                                variants={fadeUp}
                                className="group relative bg-white rounded-2xl border border-[#e8eaed] p-6 hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#fef2f2] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xs font-bold text-[#fb8a09]/50 tracking-wide mt-0.5 flex-shrink-0 w-6">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileCodeOfConductContent = () => {
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
                    <Scale className="w-3.5 h-3.5" />
                    Platform Guidelines
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[28px] font-normal tracking-tight text-[#202124] mb-3"
                >
                    Code of Conduct
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-[14px] text-[#5f6368] leading-relaxed"
                >
                    You shall adhere to the following code of conduct and ensure that content sent through SOHUB's API Platform does not include the following:
                </motion.p>
            </div>

            {/* Conduct Cards */}
            <div className="px-4 mb-10 space-y-2.5">
                {conducts.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-20px' }}
                            variants={fadeUp}
                            className="bg-white rounded-xl border border-[#e8eaed] p-4"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#fef2f2] flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-red-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[10px] font-bold text-[#fb8a09]/50 tracking-wide mt-0.5 flex-shrink-0">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <p className="text-[13px] text-[#5f6368] leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const CodeOfConduct = () => {
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
            {isMobile ? <MobileCodeOfConductContent /> : <DesktopCodeOfConductContent />}
            <Footer />
        </div>
    );
};

export default CodeOfConduct;
