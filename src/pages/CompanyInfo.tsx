import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Globe, Mail, ArrowRight, ShieldCheck, Users, ExternalLink } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// SOHUB actual assets for Collage
import img1 from '@/assets/company/Hero.png';
import img2 from '@/assets/company/bb4f7329-6e04-437c-b4c8-b96a09551e0d.png';
import img3 from '@/assets/company/roller_curtain.jpg';
import img4 from '@/assets/company/touch1.png';
import img5 from '@/assets/company/feature-voice.jpg';
import img6 from '@/assets/company/PDLC off3.png';

// SOHUB actual assets for content cards
import imgSmartHome from '@/assets/Home_cropped.png';
import imgOmama from '@/assets/O-mama-initiatives.png';
import imgXimpul from '@/assets/ximpl-flow.png';
import imgOurStory from '@/assets/Asset 11.svg';
import imgEMP from '@/assets/emp.png';
import imgConnect from '@/assets/sohub-connect.png';
import imgProtect from '@/assets/protect.png';
import imgTolpar from '@/assets/carousel/tolpar-navbar.png';

// Video Assets
import vidCurtain from '@/assets/Curtain-Hero.mp4';
import vidSmartSwitch from '@/assets/Smart_Switch_AI_Video.mp4';

export default function CompanyInfo() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoSources = [vidCurtain, vidSmartSwitch];
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleVideoEnded = () => {
        const nextIndex = (currentVideoIndex + 1) % videoSources.length;
        setCurrentVideoIndex(nextIndex);
        if (videoRefs.current[nextIndex]) {
            videoRefs.current[nextIndex]!.currentTime = 0;
            videoRefs.current[nextIndex]!.play();
        }
    };

    return (
        <div className="min-h-screen bg-white font-inter">
            <Navbar />

            <main className="pt-24 lg:pt-32 pb-32">
                {/* Top Image Collage (Spanning full width edge-to-edge) */}
                <div className="w-full px-2 sm:px-3 md:px-4 mb-16 md:mb-24 overflow-hidden pt-4 md:pt-6">
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full">
                        {/* Row 1 */}
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

                        {/* Row 2 */}
                        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 h-[100px] sm:h-[140px] md:h-[200px] lg:h-[260px]">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-[32%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100 flex items-center justify-center group">
                                <img src={img4} className="h-full w-full object-cover" alt="SOHUB Experience" />
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-[40%] rounded-[12px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden bg-gray-100 flex items-center justify-center group">
                                <img src={img5} className="h-full w-full object-cover" alt="SOHUB Voice Control" />
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

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-16">
                        <a href="#" className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                                <Briefcase className="w-7 h-7 text-[#5f6368]" />
                            </div>
                            <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Careers</span>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                                <MapPin className="w-7 h-7 text-[#5f6368]" />
                            </div>
                            <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Locations</span>
                        </a>

                        <a href="#" className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-[#f1f3f4] flex items-center justify-center group-hover:bg-[#e8eaed] transition-colors">
                                <Mail className="w-7 h-7 text-[#5f6368]" />
                            </div>
                            <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09]">Contact us</span>
                        </a>
                    </div>
                </div>

                {/* Section 1: Technology & Platforms */}
                <div className="max-w-[1280px] mx-auto px-6 mb-24">
                    <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-12 text-center">
                        Technology & Platforms
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Glue Card 1 */}
                        <a href="https://connect.sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-[28px] overflow-hidden bg-[#f8f9fa] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                            <div className="aspect-[16/10] overflow-hidden bg-[#FDFBF7] flex items-center justify-center p-8 border-b border-gray-100">
                                <img src={imgConnect} alt="SOHUB Connect" className="w-[65%] h-auto object-contain" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 group-hover:underline decoration-2 underline-offset-4">SOHUB Connect</h3>
                                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-8 flex-grow">Communication without barriers. Redefining how teams collaborate seamlessly across the world.</p>
                                <div className="mt-auto">
                                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors">
                                        <ArrowRight className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Glue Card 2 */}
                        <a href="https://emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-[28px] overflow-hidden bg-[#f8f9fa] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                            <div className="aspect-[16/10] overflow-hidden bg-[#FDFBF7] flex items-center justify-center p-12 border-b border-gray-100">
                                <img src={imgEMP} alt="EMP" className="w-[60%] h-auto object-contain" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 group-hover:underline decoration-2 underline-offset-4">SOHUB EMP</h3>
                                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-8 flex-grow">Employee Max Portal: A discipline and accountability system built for modern businesses.</p>
                                <div className="mt-auto">
                                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors">
                                        <ArrowRight className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Glue Card 3 */}
                        <a href="#" className="group flex flex-col rounded-[28px] overflow-hidden bg-[#f8f9fa] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                            <div className="aspect-[16/10] overflow-hidden bg-[#FDFBF7] flex items-center justify-center p-8 border-b border-gray-100">
                                <img src={imgTolpar} alt="Tolpar" className="w-[50%] h-auto object-contain" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-3 group-hover:underline decoration-2 underline-offset-4">Tolpar Superapp</h3>
                                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-8 flex-grow">The ultimate platform combining daily utilities, services, and connectivity into a single experience.</p>
                                <div className="mt-auto">
                                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors">
                                        <ArrowRight className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Quote Block */}
                    <div className="mt-6 bg-[#f1f3f4] rounded-[32px] p-10 md:p-16 relative overflow-hidden group">
                        <p className="text-[28px] md:text-[36px] leading-[1.3] font-normal text-[#202124] mb-8 max-w-[900px]">
                            "We believe technology is only as good as the problems it solves. We build standards, not just features."
                        </p>
                        <a href="#about" className="inline-flex items-center gap-2 text-[16px] font-medium text-[#fb8a09] group-hover:underline underline-offset-4">
                            Learn about The SOHUB Standard
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Section 2: Why we do what we do (Masonry Grid mimicking Google precisely) */}
                <div className="max-w-[1280px] mx-auto px-6 mb-24">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-[48px] font-normal tracking-[-0.01em] text-[#202124] mb-4">
                            Why we do what we do
                        </h2>
                        <p className="text-[16px] text-[#5f6368] font-normal max-w-2xl mx-auto">
                            From the beginning, our passion for building technology for everyone has guided our work.
                        </p>
                    </div>

                    {/* Grid Layout mimicking masonry using flex columns */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Column 1 */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Card 1: Blue, Tall */}
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
                                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentVideoIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Smart Living</span>
                                <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                    Building intelligent living spaces with SOHUB Smart Home solutions.
                                </h3>
                                <div className="mt-auto pb-2">
                                    <ExternalLink className="w-5 h-5 text-[#1967D2]" />
                                </div>
                            </a>

                            {/* Card 3: Pink/Red, Short */}
                            <a href="https://home.sohub.com.bd/sohub-protect" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#FCE8E6] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                                <div className="mb-6 mt-6">
                                    <ShieldCheck className="w-10 h-10 text-[#C5221F]" strokeWidth={1.5} />
                                </div>
                                <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Security & Trust</span>
                                <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                    We're committed to working with businesses, companies and communities to create a safe digital future.
                                </h3>
                                <div className="mt-auto pb-2">
                                    <ExternalLink className="w-5 h-5 text-[#C5221F]" />
                                </div>
                            </a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Card 2: Green, Short */}
                            <a href="#" className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#E6F4EA] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                                <div className="mb-6 mt-6">
                                    <Users className="w-10 h-10 text-[#137333]" strokeWidth={1.5} />
                                </div>
                                <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Social Impact</span>
                                <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                    Discover how we're using technology to help solve society's biggest challenges through O-Mama Initiatives.
                                </h3>
                                <div className="mt-auto pb-2">
                                    <ExternalLink className="w-5 h-5 text-[#137333]" />
                                </div>
                            </a>

                            {/* Card 4: Yellow, Tall */}
                            <a href="https://ximpul.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-8 rounded-[16px] bg-[#FEF7E0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                                <div className="w-[85%] aspect-[16/10] rounded-[16px] overflow-hidden mt-4 mb-8 bg-white border border-white/40 flex items-center justify-center p-4">
                                    <img src={imgOurStory} alt="Our Story" className="w-[60%] h-[80%] object-contain" />
                                </div>
                                <span className="text-[11px] font-bold tracking-widest text-[#5f6368] mb-4 uppercase">Our Story</span>
                                <h3 className="text-[16px] md:text-[18px] font-normal text-[#202124] mb-6 leading-[1.5] max-w-[95%]">
                                    From creating products to expanding opportunity, learn more about our values and standards.
                                </h3>
                                <div className="mt-auto pb-2">
                                    <ExternalLink className="w-5 h-5 text-[#E37400]" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
