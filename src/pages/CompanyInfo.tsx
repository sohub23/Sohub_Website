import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, ArrowRight, ShieldCheck, Users, Cpu, Rocket } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// SOHUB actual assets for Collage
import img1 from '@/assets/company/Hero.png';
import img2 from '@/assets/company/bb4f7329-6e04-437c-b4c8-b96a09551e0d.png';
import img3 from '@/assets/company/roller_curtain.jpg';
import img4 from '@/assets/switch_1_transparent.webp';
import img5 from '@/assets/unwatermarked_lights_transparent.webp';
import img6 from '@/assets/company/PDLC off3.png';

// SOHUB actual assets for content
import imgOurStory from '@/assets/Asset 11.svg';
import imgConnect from '@/assets/sohub-connect.png';
import imgEMP from '@/assets/emp.png';
import imgMachine from '@/assets/carousel/machine-navbar.png';
import imgSmartHome from '@/assets/Home_cropped.png';
import imgAI from '@/assets/sohub-ai-navbar.png';
import imgOmama from '@/assets/carousel/omama-navbar.png';
import imgXimpul from '@/assets/carousel/ximpul.png';
import imgProtect from '@/assets/protect.png';
import imgFilmic from '@/assets/carousel/filmic-navbar.png';
import imgTolpar from '@/assets/carousel/tolpar-navbar.png';
import imgClowee from '@/assets/carousel/clowee-navbar.png';
import imgControls from '@/assets/carousel/controls-navbar.png';
// Video Assets
import vidCurtain from '@/assets/Curtain-Hero.mp4';
import vidSmartSwitch from '@/assets/Smart_Switch_AI_Video.mp4';


const ecosystemItems = [
    { name: 'O-Mama', desc: 'Hygienic food access for communities.', logo: imgOmama, href: 'https://omama.sohub.com.bd/', logoScale: 'w-[60%]' },
    { name: 'Smart Home', desc: 'Intelligent living spaces with automation and control.', logo: imgSmartHome, href: 'https://home.sohub.com.bd/', logoScale: 'w-[50%]' },
    { name: 'SOHUB Controls', desc: 'Integrated automation for monitoring and controlling buildings.', logo: imgControls, href: 'https://controls.sohub.com.bd/', logoScale: 'w-[55%]' },
    { name: 'SOHUB Protect', desc: 'Security systems built for real safety needs.', logo: imgProtect, href: 'https://protect.sohub.com.bd/', logoScale: 'w-[55%]' },
    { name: 'SOHUB AI', desc: 'Vision intelligence. Your cameras now understand.', logo: imgAI, href: 'https://ai.sohub.com.bd/', logoScale: 'w-[50%]' },
    { name: 'Machine By SOHUB', desc: 'Industrial automation and smart machinery.', logo: imgMachine, href: 'https://machines.sohub.com.bd/', logoScale: 'w-[50%]' },
    { name: 'SOHUB Connect', desc: 'Communication without barriers.', logo: imgConnect, href: 'https://connect.sohub.com.bd/', logoScale: 'w-[65%]' },
    { name: 'SOHUB EMP', desc: 'Execution and accountability system for teams.', logo: imgEMP, href: 'https://emp.sohub.com.bd/', logoScale: 'w-[60%]' },
    { name: 'Ximpul', desc: 'Global-quality products at TruePrice.', logo: imgXimpul, href: 'https://ximpul.com/', logoScale: 'w-[55%]' },
    { name: 'Filmic Station', desc: 'Storytelling and collaborative media production.', logo: imgFilmic, href: 'https://filmicstation.com', logoScale: 'w-[55%]' },
    { name: 'Clowee', desc: 'Smart laundry solutions.', logo: imgClowee, href: 'https://clowee.sohub.com.bd/', logoScale: 'w-[55%]' },
    { name: 'Tolpar', desc: 'The SOHUB superapp.', logo: imgTolpar, href: '/tolpar', logoScale: 'w-[55%]' },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopCompanyInfo = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoSources = [vidCurtain, vidSmartSwitch];
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleVideoEnded = () => {
        const nextIndex = (currentVideoIndex + 1) % videoSources.length;
        setCurrentVideoIndex(nextIndex);
        if (videoRefs.current[nextIndex]) {
            videoRefs.current[nextIndex]!.currentTime = 0;
            videoRefs.current[nextIndex]!.play();
        }
    };

    return (
        <main className="pt-24 lg:pt-32 pb-32">
            {/* Top Image Collage */}
            <div className="w-full px-2 sm:px-3 md:px-4 mb-16 md:mb-24 overflow-hidden pt-4 md:pt-6">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full">
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 h-[100px] sm:h-[140px] md:h-[200px] lg:h-[260px]">
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="w-[35%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100 flex items-center justify-center group">
                            <img src={img1} className="h-full w-full object-cover" alt="SOHUB Innovation" />
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-[28%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100">
                            <img src={img2} className="h-full w-full object-cover" alt="SOHUB Team" />
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-[37%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100">
                            <img src={img3} className="h-full w-full object-cover" alt="SOHUB Smart Features" />
                        </motion.div>
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 h-[100px] sm:h-[140px] md:h-[200px] lg:h-[260px]">
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-[32%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100 flex items-center justify-center group">
                            <img src={img4} className="h-full w-full object-cover" alt="SOHUB Experience" />
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-[40%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100 flex items-center justify-center group">
                            <img src={img5} className="h-full w-full object-contain scale-[1.5]" alt="SOHUB Power Bank" />
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="w-[28%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100">
                            <img src={img6} className="h-full w-full object-cover" alt="SOHUB Future" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hero Mission Statement */}
            <div className="max-w-[1200px] mx-auto px-6 mb-24 text-center flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[40px] md:text-[60px] lg:text-[60px] leading-[1.2] font-normal tracking-[-0.01em] text-[#202124]"
                >
                    Our vision is to <span className="text-[#4285F4]">innovate</span> everyday life and build a <span className="text-[#EA4335]">smarter</span>, more <span className="text-[#34A853]">connected</span>, and <span className="text-[#FBBC05]">secure</span> future for everyone.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[24px] md:text-[36px] font-medium tracking-tight text-[#202124] uppercase leading-[1.15] mt-10 md:mt-12"
                >
                    Begin Different.<br className="hidden md:block" /> Win Different.
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-16">
                    <a href="/join-us" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                            <Briefcase className="w-7 h-7 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Join Us</span>
                    </a>
                    <a href="/contact" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                            <MapPin className="w-7 h-7 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Locations</span>
                    </a>
                    <a href="/contact" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                            <Mail className="w-7 h-7 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Contact us</span>
                    </a>
                </div>
            </div>

            {/* Section: Our Ecosystem */}
            <div className="max-w-[1280px] mx-auto px-6 mb-24">
                <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-4 text-center">
                    Our Ecosystem
                </h2>
                <p className="text-[18px] text-[#5f6368] font-normal max-w-2xl mx-auto mb-2 text-center">
                    Independent systems. One ecosystem.
                </p>
                <p className="text-[16px] text-[#5f6368] font-normal max-w-3xl mx-auto mt-6 mb-12 text-center">
                    SOHUB develops focused technology initiatives designed to solve real-world problems. Each system addresses a specific challenge — together forming a connected ecosystem of solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {ecosystemItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group flex flex-col rounded-[20px] overflow-hidden bg-[#f8f9fa] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-[#FDFBF7] flex items-center justify-center p-6 border-b border-gray-100">
                                <img src={item.logo} alt={item.name} className={`${item.logoScale} h-auto object-contain`} />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-[17px] font-normal tracking-tight text-[#202124] mb-2 group-hover:underline decoration-2 underline-offset-4">{item.name}</h3>
                                <p className="text-[13px] text-[#3c4043] leading-relaxed mb-5 flex-grow">{item.desc}</p>
                                <div className="mt-auto">
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors">
                                        <ArrowRight className="w-4 h-4 text-[#fb8a09]" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Section: What We Focus On */}
            <div className="hidden max-w-[1280px] mx-auto px-6 mb-24">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-4">
                        What We Focus On
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Smart Living */}
                        <a href="https://home.sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#E8F0FE] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                            <div className="w-[85%] aspect-[16/10] rounded-[16px] overflow-hidden mt-4 mb-8 relative shadow-sm">
                                {videoSources.map((src, index) => (
                                    <video
                                        key={src}
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={src}
                                        autoPlay={index === 0}
                                        muted
                                        playsInline
                                        onEnded={index === currentVideoIndex ? handleVideoEnded : undefined}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentVideoIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Smart Living</span>
                            <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                Automation and intelligent systems for modern homes and buildings.
                            </h3>
                            <div className="mt-auto pb-2">
                                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors">
                                    <ArrowRight className="w-5 h-5 text-[#fb8a09]" />
                                </div>
                            </div>
                        </a>

                        {/* Security & Trust */}
                        <div className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#FCE8E6]">
                            <div className="mb-6 mt-6">
                                <ShieldCheck className="w-10 h-10 text-[#C5221F]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Security & Trust</span>
                            <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                Technologies designed to improve safety and operational reliability.
                            </h3>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        {/* Automation & AI */}
                        <div className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#E6F4EA]">
                            <div className="mb-6 mt-6">
                                <Cpu className="w-10 h-10 text-[#137333]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Automation & AI</span>
                            <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                Systems that increase speed, efficiency, and operational intelligence.
                            </h3>
                        </div>

                        {/* Social Impact */}
                        <div className="flex flex-col items-center text-center justify-center p-8 rounded-[16px] bg-[#FEF7E0] flex-grow">
                            <div className="mb-6 mt-6">
                                <Users className="w-10 h-10 text-[#E37400]" strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Social Impact</span>
                            <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                Using technology to improve access to services like food and infrastructure.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Our Philosophy */}
            <div className="max-w-[1280px] mx-auto px-6 mb-24">
                <div className="bg-[#f1f3f4] rounded-[32px] p-10 md:p-16 relative overflow-hidden">
                    <h2 className="text-[36px] md:text-[42px] font-normal tracking-[-0.01em] text-[#202124] mb-6 leading-[1.2]">
                        Our Philosophy
                    </h2>
                    <p className="text-[20px] md:text-[24px] leading-[1.5] font-normal text-[#202124] mb-6 max-w-[900px]">
                        Global inspiration. Local innovation.
                    </p>
                    <p className="text-[16px] text-[#3c4043] leading-[1.7] max-w-[800px] mb-4">
                        We study the best technologies around the world and build solutions designed for Bangladesh.
                    </p>
                    <p className="text-[16px] text-[#5f6368] leading-[1.7] max-w-[800px] italic">
                        Because technology only works when it understands the environment it serves.
                    </p>
                </div>
            </div>

            {/* Section: Our Story */}
            <div className="max-w-[1280px] mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text Content */}
                    <div className="text-left max-w-[550px]">
                        <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-8">
                            Our Story
                        </h2>
                        <p className="text-[18px] text-[#3c4043] leading-[1.7] mb-6">
                            From building early communication systems to developing intelligent infrastructure, SOHUB has grown into a technology ecosystem focused on solving real-world challenges.
                        </p>
                        <p className="text-[18px] text-[#5f6368] leading-[1.7] mb-5">
                            Our goal has remained the same:
                        </p>
                        <p className="text-[28px] font-medium text-[#202124] tracking-tight border-l-[4px] border-[#fb8a09] pl-5 py-1">
                            Build technology that works.
                        </p>
                    </div>
                    {/* Right: Logo */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="bg-[#f1f3f4] rounded-[40px] p-12 w-full flex justify-center items-center aspect-[4/3] max-h-[400px]">
                            <img src={imgOurStory} alt="SOHUB Our Story" className="w-[300px] hover:scale-105 transition-transform duration-500 h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: The Future */}
            <div className="max-w-[1280px] mx-auto px-6 mb-24">
                <div className="bg-[#202124] rounded-[32px] p-10 md:p-16 relative overflow-hidden text-center">
                    <Rocket className="w-10 h-10 text-[#FBBC05] mx-auto mb-6" strokeWidth={1.5} />
                    <h2 className="text-[36px] md:text-[42px] font-normal tracking-[-0.01em] text-white mb-8 leading-[1.2]">
                        The Future
                    </h2>
                    <p className="text-[18px] text-[#e8eaed] leading-[1.7] max-w-[700px] mx-auto mb-6">
                        SOHUB continues to develop systems across automation, communication, machines, and digital infrastructure.
                    </p>
                    <p className="text-[16px] text-[#9aa0a6] leading-[1.7] max-w-[700px] mx-auto mb-6">
                        We believe the future belongs to technology ecosystems that integrate the physical and digital world.
                    </p>
                    <p className="text-[20px] text-[#FBBC05] font-medium italic mt-4">
                        And this is only the beginning.
                    </p>
                </div>
            </div>

            {/* Section: Join the SOHUB Ecosystem */}
            <div className="max-w-[1280px] mx-auto px-6 mb-8">
                <div className="text-center">
                    <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-6">
                        Join the SOHUB Ecosystem
                    </h2>
                    <p className="text-[16px] text-[#5f6368] font-normal max-w-2xl mx-auto mb-10">
                        Explore our initiatives, collaborate with us, or learn how our technologies can support your organization.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#fb8a09] hover:bg-[#e07d08] text-white font-medium text-[16px] px-8 py-4 rounded-full transition-colors duration-200"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileCompanyInfo = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoSources = [vidCurtain, vidSmartSwitch];
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleVideoEnded = () => {
        const nextIndex = (currentVideoIndex + 1) % videoSources.length;
        setCurrentVideoIndex(nextIndex);
        if (videoRefs.current[nextIndex]) {
            videoRefs.current[nextIndex]!.currentTime = 0;
            videoRefs.current[nextIndex]!.play();
        }
    };

    return (
        <main className="pt-24 pb-16">
            {/* Top Image Collage */}
            <div className="w-full px-2 mb-12 overflow-hidden pt-2">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-center gap-2 h-[100px]">
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="w-[35%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img1} className="h-full w-full object-cover" alt="SOHUB Innovation" />
                        </motion.div>
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-[28%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img2} className="h-full w-full object-cover" alt="SOHUB Team" />
                        </motion.div>
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-[37%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img3} className="h-full w-full object-cover" alt="SOHUB Smart Features" />
                        </motion.div>
                    </div>
                    <div className="flex justify-center gap-2 h-[100px]">
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-[32%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img4} className="h-full w-full object-cover" alt="SOHUB Experience" />
                        </motion.div>
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-[40%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img5} className="h-full w-full object-contain scale-[1.5]" alt="SOHUB Power Bank" />
                        </motion.div>
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="w-[28%] rounded-[12px] overflow-hidden bg-gray-100">
                            <img src={img6} className="h-full w-full object-cover" alt="SOHUB Future" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hero Mission Statement */}
            <div className="px-5 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[26px] leading-[1.3] font-normal tracking-[-0.01em] text-[#202124]"
                >
                    Our vision is to <span className="text-[#4285F4]">innovate</span> everyday life and build a <span className="text-[#EA4335]">smarter</span>, more <span className="text-[#34A853]">connected</span>, and <span className="text-[#FBBC05]">secure</span> future for everyone.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[22px] font-medium tracking-tight text-[#202124] uppercase mt-6 leading-[1.15]"
                >
                    Begin Different.<br /> Win Different.
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    <a href="/join-us" className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 rounded-full bg-[#f1f3f4] flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[13px]">Join Us</span>
                    </a>
                    <a href="/contact" className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 rounded-full bg-[#f1f3f4] flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[13px]">Locations</span>
                    </a>
                    <a href="/contact" className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 rounded-full bg-[#f1f3f4] flex items-center justify-center">
                            <Mail className="w-6 h-6 text-[#5f6368]" />
                        </div>
                        <span className="text-[#3c4043] font-medium text-[13px]">Contact</span>
                    </a>
                </div>
            </div>

            {/* Section: Our Ecosystem */}
            <div className="px-5 mb-16">
                <h2 className="text-[28px] font-normal tracking-[-0.01em] text-[#202124] mb-3 text-center">
                    Our Ecosystem
                </h2>
                <p className="text-[15px] text-[#5f6368] text-center mb-2">
                    Independent systems. One ecosystem.
                </p>
                <p className="text-[14px] text-[#5f6368] text-center mb-8 px-2 leading-relaxed">
                    SOHUB develops focused technology initiatives designed to solve real-world problems. Each system addresses a specific challenge — together forming a connected ecosystem of solutions.
                </p>

                <div className="grid grid-cols-3 gap-2.5">
                    {ecosystemItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex flex-col rounded-[14px] overflow-hidden bg-[#f8f9fa] border border-gray-100"
                        >
                            <div className="aspect-[4/3] bg-[#FDFBF7] flex items-center justify-center p-3 border-b border-gray-100">
                                <img src={item.logo} alt={item.name} className="w-[70%] h-auto object-contain" />
                            </div>
                            <div className="p-2.5 flex flex-col flex-grow">
                                <h3 className="text-[11px] font-medium tracking-tight text-[#202124] mb-1 leading-snug">{item.name}</h3>
                                <p className="text-[9px] text-[#3c4043] leading-[1.4] flex-grow">{item.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Section: What We Focus On */}
            <div className="hidden px-5 mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-[28px] font-normal tracking-[-0.01em] text-[#202124] mb-3">
                        What We Focus On
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Smart Living */}
                    <a href="https://home.sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E8F0FE]">
                        <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden mt-2 mb-6 relative shadow-sm">
                            {videoSources.map((src, index) => (
                                <video
                                    key={src}
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={src}
                                    autoPlay={index === 0}
                                    muted
                                    playsInline
                                    onEnded={index === currentVideoIndex ? handleVideoEnded : undefined}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentVideoIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-[#5f6368] mb-3 uppercase">Smart Living</span>
                        <h3 className="text-[16px] font-normal text-[#202124] mb-5 leading-[1.5]">
                            Automation and intelligent systems for modern homes and buildings.
                        </h3>
                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mt-auto">
                            <ArrowRight className="w-4 h-4 text-[#fb8a09]" />
                        </div>
                    </a>

                    {/* Security & Trust */}
                    <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#FCE8E6]">
                        <div className="mb-4 mt-2">
                            <ShieldCheck className="w-8 h-8 text-[#C5221F]" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-[#5f6368] mb-3 uppercase">Security & Trust</span>
                        <h3 className="text-[16px] font-normal text-[#202124] mb-5 leading-[1.5]">
                            Technologies designed to improve safety and operational reliability.
                        </h3>
                    </div>

                    {/* Automation & AI */}
                    <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E6F4EA]">
                        <div className="mb-4 mt-2">
                            <Cpu className="w-8 h-8 text-[#137333]" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-[#5f6368] mb-3 uppercase">Automation & AI</span>
                        <h3 className="text-[16px] font-normal text-[#202124] mb-5 leading-[1.5]">
                            Systems that increase speed, efficiency, and operational intelligence.
                        </h3>
                    </div>

                    {/* Social Impact */}
                    <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#FEF7E0]">
                        <div className="mb-4 mt-2">
                            <Users className="w-8 h-8 text-[#E37400]" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-[#5f6368] mb-3 uppercase">Social Impact</span>
                        <h3 className="text-[16px] font-normal text-[#202124] mb-5 leading-[1.5]">
                            Using technology to improve access to services like food and infrastructure.
                        </h3>
                    </div>
                </div>
            </div>

            {/* Section: Our Philosophy */}
            <div className="px-5 mb-16">
                <div className="bg-[#f1f3f4] rounded-[24px] p-6 text-center">
                    <h2 className="text-[24px] font-normal tracking-[-0.01em] text-[#202124] mb-4 leading-[1.2]">
                        Our Philosophy
                    </h2>
                    <p className="text-[18px] leading-[1.4] font-normal text-[#202124] mb-4">
                        Global inspiration. Local innovation.
                    </p>
                    <p className="text-[14px] text-[#3c4043] leading-[1.6] mb-3">
                        We study the best technologies around the world and build solutions designed for Bangladesh.
                    </p>
                    <p className="text-[13px] text-[#5f6368] leading-[1.6] italic">
                        Because technology only works when it understands the environment it serves.
                    </p>
                </div>
            </div>

            {/* Section: Our Story */}
            <div className="px-5 mb-24">
                <div className="flex flex-col gap-8">
                    {/* Text Content */}
                    <div className="text-left">
                        <h2 className="text-[32px] font-normal tracking-[-0.01em] text-[#202124] mb-6">
                            Our Story
                        </h2>
                        <p className="text-[16px] text-[#3c4043] leading-[1.7] mb-5">
                            From building early communication systems to developing intelligent infrastructure, SOHUB has grown into a technology ecosystem focused on solving real-world challenges.
                        </p>
                        <p className="text-[15px] text-[#5f6368] leading-[1.7] mb-4">
                            Our goal has remained the same:
                        </p>
                        <p className="text-[22px] font-medium text-[#202124] tracking-tight border-l-[3px] border-[#fb8a09] pl-4 py-0.5">
                            Build technology that works.
                        </p>
                    </div>
                    {/* Logo Block */}
                    <div className="flex items-center justify-center bg-[#f1f3f4] rounded-[32px] p-10 aspect-video">
                        <img src={imgOurStory} alt="SOHUB Our Story" className="w-[200px] h-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* Section: The Future */}
            <div className="px-5 mb-16">
                <div className="bg-[#202124] rounded-[24px] p-6 text-center">
                    <Rocket className="w-8 h-8 text-[#FBBC05] mx-auto mb-4" strokeWidth={1.5} />
                    <h2 className="text-[24px] font-normal tracking-[-0.01em] text-white mb-5 leading-[1.2]">
                        The Future
                    </h2>
                    <p className="text-[14px] text-[#e8eaed] leading-[1.7] mb-4">
                        SOHUB continues to develop systems across automation, communication, machines, and digital infrastructure.
                    </p>
                    <p className="text-[13px] text-[#9aa0a6] leading-[1.7] mb-4">
                        We believe the future belongs to technology ecosystems that integrate the physical and digital world.
                    </p>
                    <p className="text-[16px] text-[#FBBC05] font-medium italic mt-2">
                        And this is only the beginning.
                    </p>
                </div>
            </div>

            {/* Section: Join the SOHUB Ecosystem */}
            <div className="px-5 mb-8">
                <div className="text-center">
                    <h2 className="text-[28px] font-normal tracking-[-0.01em] text-[#202124] mb-4">
                        Join the SOHUB Ecosystem
                    </h2>
                    <p className="text-[14px] text-[#5f6368] font-normal mb-8 px-4">
                        Explore our initiatives, collaborate with us, or learn how our technologies can support your organization.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#fb8a09] hover:bg-[#e07d08] text-white font-medium text-[15px] px-7 py-3.5 rounded-full transition-colors duration-200"
                    >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export default function CompanyInfo() {
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
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            {isMobile ? <MobileCompanyInfo /> : <DesktopCompanyInfo />}
            <Footer />
        </div>
    );
}
