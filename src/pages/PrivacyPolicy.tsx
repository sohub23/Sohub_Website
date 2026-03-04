import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    ShieldCheck,
    FileText,
    UserCheck,
    Database,
    Lock,
    Share2,
    Globe,
    Eye,
    Trash2,
    BellOff,
    Cookie,
    LogIn,
    Star,
    AlertCircle,
    Clock,
    RefreshCw,
    Mail,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const sections = [
    {
        id: 1,
        icon: FileText,
        title: 'Defined Terms',
        content: [
            'The following terms will have the meanings indicated below. Please refer to our Terms of Service for any capitalized terms that are not defined in this policy.',
        ],
        bullets: [
            '"Other Information/Data" is any information or Data that does not reveal your specific identity or does not directly relate to an individual, such as Services usage data.',
            '"Personal Data / Information" is information or Data that identifies you as an individual or relates to an identifiable person, such as name, ID, postal address, telephone number, email address, credit card number, social media account ID and any other information relating thereto. It does not include strings of code such as browser cookie IDs.',
        ],
    },
    {
        id: 2,
        icon: Database,
        title: 'How / When We Collect Your Personal Data',
        content: ['Most of the personal data we process is provided to us directly by you when you:'],
        bullets: [
            'Create an account on the API Platform',
            'Start using our services, visit our website, or register for more information on a specific service',
            'Register to attend or have attended an event organized by SOHUB, subscribe to our e-newsletter, blog or a webinar or participate in discussions on our social media platforms',
            'Participate in market studies, surveys or promotions',
        ],
        extra: [
            {
                heading: 'We also collect personal and device information when you:',
                items: [
                    'Make payments to us',
                    'Apply to us for employment or internship',
                    'Call or otherwise contact us including via SMS, USSD, website.',
                ],
            },
            {
                heading: 'We also receive Personal Data indirectly when:',
                items: [
                    'Our clients or suppliers provide us with contact details of their representatives and personnel who will be our business contact points',
                    'An employee or job applicant gives us contact details of their referees',
                    'Our background check services feed us with information when you apply for a job at SOHUB',
                ],
            },
        ],
        footer:
            'We also automatically collect certain information, such as your Internet protocol (IP) address, user settings, cookie identifiers, and other unique identifiers, browser or device information, and location information (including approximate location derived from IP address).',
    },
    {
        id: 3,
        icon: UserCheck,
        title: 'How We Process Personal Data',
        content: [
            'We may process your Personal data for legitimate business purposes or to comply with a legal obligation, including:',
        ],
        bullets: [
            'To enter into a contract with you. As part of our Know-Your Customer (KYC) process, it is mandatory that you provide us with Personal Data that will enable us to perform our contract with you. If you do not provide or enable us to collect the necessary information, we shall not be able to provide SOHUB Services to you.',
            'To create, and administer accounts, fulfil and record transactions, and provide you with related assistance (e.g., technical help, answer inquiries relating to Personal Information, etc.)',
            'To send administrative information to you, for example, information regarding our Services and changes to our terms, conditions, and policies.',
            'To send you marketing communications and offer other materials that we believe may be of interest to you, such as to send you newsletters or other direct communications.',
            'To facilitate social sharing functionality if you choose to do so.',
            'For trending and statistics, and to improve our products and services.',
            'For audits, to verify that our internal processes function as intended and are compliant with legal, regulatory or contractual requirements.',
            'For fraud and security monitoring purposes, for example, to detect and prevent cyberattacks or attempts to commit identity theft.',
            'For responding to legal duties, such as requests from public and government authorities.',
        ],
    },
    {
        id: 4,
        icon: Share2,
        title: 'How We Share Your Personal Data with Third Parties',
        content: [
            'We do not share personal data with third parties except when necessary, such as:',
        ],
        bullets: [
            'To our strategic partners and third-party service providers who provide services such as data analysis, payment processing services, order fulfillment, information technology and related infrastructure provision, customer service, email delivery, credit card processing, auditing, telecommunication service providers and other similar services.',
            'To business partners in the context of a corporate transaction. If SOHUB is involved in a sale or business transaction (e.g., merger or acquisition), SOHUB will retain a legitimate interest in disclosing or transferring your Personal Information to a third party in the event of any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock (including in connection with any bankruptcy or similar proceedings).',
            'To comply with legal or regulatory requirements or obligations in accordance with applicable law, a court order.',
        ],
    },
    {
        id: 5,
        icon: Globe,
        title: 'How We Carry Out International Transfers of Your Personal Data',
        content: [
            'We may share your personal data within the SOHUB Group of Companies to complete internal procedures, to perform certain processing activities across our subsidiaries or to support you in the use of our products and services.',
            'SOHUB employs appropriate safeguards for cross border transfers of personal data, as required by applicable data protection law. In addition, all international transfers are carried out ensuring the confidentiality and security of your personal data.',
        ],
    },
    {
        id: 6,
        icon: Lock,
        title: 'How We Secure Your Personal Data',
        content: [
            'We shall secure your personal data by taking adequate security measures that are commensurate with the sensitivity of the personal data processed. To this end, the SOHUB Group of companies maintain appropriate physical, technical and administrative security measures with a view to protecting personal data against theft, accidental loss, access, unauthorized alteration, unauthorized or accidental access, processing use, erasure or unlawful destruction. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure.',
            'We continuously train all our staff on Data security and privacy to ensure they handle all the information they receive with the utmost confidentiality. Further, before we engage any third-party processor vendor and service provider, we check their security practices and alignment with the Applicable Data Protection Law and regularly conduct our vendors\' and service providers\' security and privacy assessments.',
        ],
    },
    {
        id: 7,
        icon: Eye,
        title: 'What Are Your Rights in Respect of Your Personal Data',
        content: [
            'Subject to Applicable Data Protection Laws, you have the following rights:',
        ],
        bullets: [
            'To withdraw your consent to our processing of your personal data (to the extent that such processing is based on your consent and consent is the only permissible basis for processing), without affecting the lawfulness of processing based on consent before its withdrawal.',
            'To ask us to erase your personal data in certain circumstances.',
            'To ask us to restrict the processing of your personal data in certain circumstances.',
            'To confirm which of your personal data we possess and to request the identity of any third parties who have access to it.',
            'To request that any decision which significantly affects you is not based on automated decision making.',
        ],
    },
    {
        id: 8,
        icon: Trash2,
        title: 'How to Access, Correct, Delete or Exercise Other Rights Regarding Your Personal Information',
        content: [
            'If you would like to make a request to access, correct, object to the use, restrict or delete Personal Data that you have previously provided to us, or if you would like to request to receive an electronic copy of your Personal Data for purposes of transmitting it to another company (to the extent this right to data portability is provided to you by applicable law), you may contact us at hello@sohub.com.bd with the subject line "Data Subject Request." We will respond to your request consistent with applicable law.',
            'You have a right to lodge complaints pertaining to the processing of your personal data with the relevant data protection supervisory authority.',
            'For your protection, we may only implement requests with respect to the Personal Information associated with the particular email address that you use to send us your request, and we may need to verify your identity before implementing your request. We will try to comply with your request as soon as reasonably practicable.',
            'Please note that we may need to retain certain information for recordkeeping purposes and/or to complete any transactions that you began prior to requesting a change or deletion. There may also be residual information that will remain within our databases and other records, which will not be removed.',
        ],
    },
    {
        id: 9,
        icon: BellOff,
        title: 'Opt-Out',
        content: [
            'Information you provide may be used by SOHUB for marketing purposes such as one-off promotional emailing, mobile text messages, direct mail, and sales contacts. You may opt-out from receiving electronic communications from us if you no longer want to receive marketing-related emails or mobile text messages from us on a going-forward basis by sending a request for list removal to sales@sohub.com.bd or by clicking the unsubscribe link in any marketing-related email sent to you by us.',
            'We will try to comply with your request(s) as soon as reasonably practicable. Please also note that if you do opt-out of receiving marketing-related emails from us, we may still send you messages for administrative or other purposes directly relating to your use of the Services, and you cannot opt-out from receiving those messages.',
        ],
    },
    {
        id: 10,
        icon: Cookie,
        title: 'Tracking and Advertising',
        content: [
            'We and our third-party service providers may collect Other Information in a variety of ways. We and/or our third-party partners may employ various tracking technologies, such as cookies, web beacons and analytics software, that help us better manage content on the Services by informing us what content is effective.',
        ],
    },
    {
        id: 11,
        icon: LogIn,
        title: 'Sign-In Services',
        content: [
            'You can log in to some of the Services using sign-in services such as Facebook Login, Google OAuth, or an Open ID provider. These services will authenticate your identity and provide you the option to share certain Personal Information with us such as your name and email address.',
        ],
    },
    {
        id: 12,
        icon: Star,
        title: 'Testimonials, Ratings and Reviews',
        content: [
            'If you submit testimonials, ratings or reviews to the Services, any Personal Information you include may be displayed in the Service. If you want your testimonial removed, please contact us at tech@sohub.com.bd.',
            'We may also partner with third-party service providers to collect and display ratings and review content on our website.',
        ],
    },
    {
        id: 13,
        icon: AlertCircle,
        title: 'Limitation',
        content: [
            'Please note that we are not responsible for the collection, usage and disclosure policies and practices (including the data security practices) of other organizations, such as Facebook, Apple, Google, Microsoft or any other app developer, social media platform provider, operating system provider, wireless service provider or device manufacturer, including any Personal Information you disclose to other organizations through or in connection with the Services, including our social media pages.',
        ],
    },
    {
        id: 14,
        icon: Clock,
        title: 'How Long We Keep Your Personal Data',
        content: [
            'We will retain your Personal Information for as long as needed or permitted in light of the purpose(s) for which it was obtained and consistent with applicable law. The criteria used to determine our retention periods include:',
        ],
        bullets: [
            'The length of time we have an ongoing relationship with you and provide the Services to you (for example, for as long as you have an account with us or keep using the Services);',
            'Whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period of time before we can delete them); or',
            'Whether retention is advisable in light of our legal position (such as in regard to applicable statutes of limitations, litigation or regulatory investigations).',
        ],
    },
    {
        id: 15,
        icon: RefreshCw,
        title: 'Changes to This Privacy Policy',
        content: [
            'We may make changes to this Privacy Policy from time to time. Any changes we make will become effective when we post a modified version of the Privacy Policy to this page. If we make any material changes to the Privacy Notice, we may also notify you by posting notice within the applicable Services, or by sending you an email. If you continue using the Services after any notice of any such changes, it means you have accepted them. If you do not agree to any changes, you must stop using the Services, as applicable. It is your obligation to ensure that you read, understand and agree to the latest version of the Privacy Policy. The "Last Updated" legend at the top of the Privacy Policy indicates when it was last updated.',
        ],
    },
    {
        id: 16,
        icon: Mail,
        title: 'Contact Us',
        content: [
            'If you have any questions regarding this Privacy Policy you can contact us via email at hello@sohub.com.bd.',
        ],
    },
];

/* ──────────────────────────────────────────────
   SECTION CARD COMPONENT
   ────────────────────────────────────────────── */
interface SectionCardProps {
    section: (typeof sections)[0];
    index: number;
    compact?: boolean;
}

const SectionCard = ({ section, index, compact = false }: SectionCardProps) => {
    const Icon = section.icon;
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className={`group relative bg-white rounded-2xl border border-[#e8eaed] ${compact ? 'p-5' : 'p-8'} hover:border-[#fb8a09]/30 hover:shadow-[0_8px_30px_rgba(251,138,9,0.08)] transition-all duration-300`}
        >
            <div className="flex items-start gap-4 md:gap-5">
                <div className={`flex-shrink-0 ${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-xl bg-[#fff7e6] flex items-center justify-center group-hover:bg-[#fb8a09] transition-colors duration-300`}>
                    <Icon className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-[#fb8a09] group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`${compact ? 'text-[10px]' : 'text-xs'} font-semibold text-[#fb8a09]/60 tracking-wide`}>
                            {String(section.id).padStart(2, '0')}
                        </span>
                        <h3 className={`${compact ? 'text-[15px]' : 'text-[18px]'} font-semibold text-[#202124]`}>
                            {section.title}
                        </h3>
                    </div>

                    {section.content.map((paragraph, pi) => (
                        <p
                            key={pi}
                            className={`${compact ? 'text-[13px]' : 'text-[15px]'} text-[#5f6368] leading-relaxed ${pi > 0 ? 'mt-3' : ''}`}
                        >
                            {paragraph}
                        </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                        <ul className={`mt-3 space-y-2 ${compact ? 'ml-3' : 'ml-4'}`}>
                            {section.bullets.map((bullet, bi) => (
                                <li
                                    key={bi}
                                    className={`${compact ? 'text-[12px]' : 'text-[14px]'} text-[#5f6368] leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-[#fb8a09]/40 before:rounded-full`}
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}

                    {'extra' in section && section.extra && (section.extra as Array<{ heading: string; items: string[] }>).map((extraBlock, ei) => (
                        <div key={ei} className="mt-4">
                            <p className={`${compact ? 'text-[13px]' : 'text-[15px]'} text-[#5f6368] leading-relaxed font-medium mb-2`}>
                                {extraBlock.heading}
                            </p>
                            <ul className={`space-y-2 ${compact ? 'ml-3' : 'ml-4'}`}>
                                {extraBlock.items.map((item, ii) => (
                                    <li
                                        key={ii}
                                        className={`${compact ? 'text-[12px]' : 'text-[14px]'} text-[#5f6368] leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-[#fb8a09]/40 before:rounded-full`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {'footer' in section && section.footer && (
                        <p className={`mt-3 ${compact ? 'text-[12px]' : 'text-[14px]'} text-[#5f6368] leading-relaxed italic`}>
                            {section.footer}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopPrivacyContent = () => {
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
                    Your Privacy Matters
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] font-normal tracking-tight text-[#202124] mb-5"
                >
                    Privacy Policy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18px] text-[#5f6368] font-normal max-w-3xl mx-auto leading-relaxed"
                >
                    The Solution Hub Technologies (collectively "SOHUB", "we" and "us") respect your privacy and are committed to maintaining your trust. We adhere to all applicable data protection and privacy laws globally.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[16px] text-[#5f6368]/80 font-normal max-w-3xl mx-auto leading-relaxed mt-4"
                >
                    This Privacy Policy applies to all visitors to our website and anyone who accesses or uses our products and services in all the countries we operate in.
                </motion.p>
            </div>

            {/* Section Cards */}
            <div className="max-w-[1280px] mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 gap-5">
                    {sections.map((section, i) => (
                        <SectionCard key={section.id} section={section} index={i} />
                    ))}
                </div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobilePrivacyContent = () => {
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
                    Your Privacy Matters
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[28px] font-normal tracking-tight text-[#202124] mb-3"
                >
                    Privacy Policy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-[14px] text-[#5f6368] leading-relaxed"
                >
                    The Solution Hub Technologies respect your privacy and are committed to maintaining your trust. We adhere to all applicable data protection and privacy laws globally.
                </motion.p>
            </div>

            {/* Section Cards */}
            <div className="px-4 mb-10 space-y-3">
                {sections.map((section, i) => (
                    <SectionCard key={section.id} section={section} index={i} compact />
                ))}
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const PrivacyPolicy = () => {
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
            {isMobile ? <MobilePrivacyContent /> : <DesktopPrivacyContent />}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
