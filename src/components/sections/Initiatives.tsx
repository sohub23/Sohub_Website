'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import OMamaImage from '../../assets/O-mama-initiatives.webp';
import OMamaVideo from '../../assets/omama 1.mp4';
import ConnectImage from '../../assets/connect ini.webp';
import ControlsImage from '../../assets/controls ini.webp';
import EmpImage from '../../assets/emp ini.webp';
import ProtectImage from '../../assets/protect ini.webp';
import SmartImage from '../../assets/smart ini.webp';
import AIImage from '../../assets/AI ini.webp';
import MachineImage from '../../assets/machine ini.webp';

const initiativesData = [
    {
        id: 'omama',
        label: 'O-MAMA',
        title: 'Hygienic food access',
        description: 'Reliable, quality food where people work and study.',
        bgColor: 'bg-[#FFF4E6]',
        media: { type: 'video' as const, src: OMamaVideo },
        size: 'large',
    },
    {
        id: 'smart-home',
        label: 'SMART HOME',
        title: 'Intelligent living spaces',
        description: 'Automation and control systems for modern homes.',
        bgColor: 'bg-[#ECEFF1]',
        media: { type: 'image' as const, src: SmartImage },
        size: 'medium',
    },
    {
        id: 'controls',
        label: 'CONTROLS',
        title: 'Building intelligence systems',
        description: 'Integrated automation for monitoring and controlling modern & safer buildings.',
        bgColor: 'bg-[#F3E5F5]',
        media: { type: 'image' as const, src: ControlsImage },
        size: 'medium',
    },
    {
        id: 'protect',
        label: 'PROTECT',
        title: 'Security systems that work',
        description: 'Inspired by global leaders , built for real security needs in Bangladesh.',
        bgColor: 'bg-[#FFEBEE]',
        media: { type: 'image' as const, src: ProtectImage },
        size: 'small',
    },
    {
        id: 'sohub-ai',
        label: 'AI',
        title: 'Vision that understands',
        description: 'Your cameras already see. Now they can understand.',
        bgColor: 'bg-[#E8EAF6]',
        media: { type: 'image' as const, src: AIImage },
        size: 'small',
    },
    {
        id: 'machine',
        label: 'MACHINES',
        title: 'Machines that work in Bangladesh',
        description: 'A complete ecosystem — hardware, backend, payments, monitoring, and support — designed for reliable operation at scale.',
        bgColor: 'bg-[#E8F5E9]',
        media: { type: 'image' as const, src: MachineImage },
        size: 'medium',
    },
    {
        id: 'sohub-connect',
        label: 'CONNECT',
        title: 'Communication without boundaries',
        description: 'A cloud-native PBX designed for real customer conversations.\nInstant connection. No numbers.',
        bgColor: 'bg-[#E3F2FD]',
        media: { type: 'image' as const, src: ConnectImage },
        size: 'small',
    },
    {
        id: 'emp',
        label: 'EMP',
        title: 'Execution and accountability system',
        description: 'A discipline framework for teams to track commitments, measure progress, and deliver results.',
        bgColor: 'bg-[#F3E5F5]',
        media: { type: 'image' as const, src: EmpImage },
        size: 'medium',
    },
    {
        id: 'ximpul',
        label: 'XIMPUL',
        title: 'Product experience standards',
        description: 'Global-quality products at TruePrice — transparent, fair, and built around respect for quality.',
        bgColor: 'bg-[#E0F7FA]',
        media: { type: 'youtube' as const, youtubeId: 'gEHt-GEZYY0' },
        size: 'large',
    },
    {
        id: 'filmic',
        label: 'FILMIC STATION',
        title: 'Creative production platform',
        description: 'Storytelling, and collaborative media production.',
        bgColor: 'bg-[#FFF8E1]',
        media: { type: 'youtube' as const, youtubeId: '279Y6nPslH8' },
        size: 'medium',
    },
];

const getInitiativeLink = (id: string, apiData: any) => {
    const apiItem = apiData?.initiatives?.find((item: any) => item.id === id);
    return apiItem?.href || '#initiatives';
};

const easeOutExpo = "easeOut";

// Video Card Component
const VideoCard = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!src) {
        return (
            <div className="w-full h-full min-h-[140px] rounded-2xl bg-black/5 flex items-center justify-center border border-black/5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Play className="w-5 h-5 text-foreground/40 ml-0.5" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full min-h-[140px] rounded-2xl overflow-hidden bg-black border border-black/5">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
                preload="none"
            />
            <div
                role="button"
                onClick={togglePlay}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-20 cursor-pointer"
            >
                {isPlaying ? (
                    <Pause className="w-4 h-4 text-foreground" />
                ) : (
                    <Play className="w-4 h-4 text-foreground ml-0.5" />
                )}
            </div>
        </div>
    );
};

// Image Card Component
const ImageCard = ({ src, alt }: { src: string; alt: string }) => {
    if (!src) return null;

    return (
        <div className="aspect-[16/10] mx-auto h-full rounded-2xl overflow-hidden border border-black/5 shadow-sm">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VIDEO CARD — smaller play button
   ────────────────────────────────────────────── */
const MobileVideoCard = ({ src, aspect = 'aspect-[16/10]' }: { src: string; aspect?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    if (!src) return null;

    return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-black ${aspect}`}>
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-fill"
                loop muted playsInline autoPlay
                preload="none"
            />
            <div
                role="button"
                onClick={togglePlay}
                className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm z-20 cursor-pointer"
            >
                {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-foreground" />
                ) : (
                    <Play className="w-3.5 h-3.5 text-foreground ml-0.5" />
                )}
            </div>
        </div>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — Google-style boxy vertical cards
   ────────────────────────────────────────────── */
const MobileInitiatives = () => {
    const [apiData, setApiData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/initiatives.json?v=1.1')
            .then(res => res.json())
            .then(data => setApiData(data))
            .catch(() => { });
    }, []);

    const initiatives = initiativesData.map(init => ({
        ...init,
        link: getInitiativeLink(init.id, apiData)
    }));

    return (
        <section id="initiatives" className="pt-6 pb-16 bg-background">
            <div className="px-5">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        One connected ecosystem
                    </p>
                    <h2 className="text-[26px] font-normal tracking-tight text-foreground mb-2.5 leading-[1.2]">
                        Each system solves a real problem.
                    </h2>
                    <p className="text-sm text-foreground-muted max-w-xs mx-auto font-normal leading-relaxed">
                        Explore the initiatives shaping communication, commerce, and everyday life
                    </p>
                </div>

                {/* Cards — Google-style boxy stacked */}
                <div className="space-y-4">
                    {initiatives.map((init) => {
                        const hasVideo = init.media?.type === 'video' && (init.media as any).src;
                        const hasYoutube = init.media?.type === 'youtube';
                        const hasImage = init.media?.type === 'image' && (init.media as any).src;
                        const hasMedia = hasVideo || hasImage || hasYoutube;

                        return (
                            <motion.a
                                key={init.id}
                                href={init.link}
                                target={init.link?.startsWith('http') ? '_blank' : undefined}
                                rel={init.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, ease: easeOutExpo }}
                                className={`flex flex-col ${init.bgColor} rounded-[24px] ${hasMedia ? 'p-5 pb-6' : 'px-6 py-8 min-h-[180px] justify-center'} text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]`}
                            >
                                {/* Media if exists */}
                                {hasMedia && (
                                    <div className="mb-5">
                                        {hasYoutube ? (
                                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-black/5">
                                                <iframe loading="lazy"
                                                    src={`https://www.youtube.com/embed/${(init.media as any).youtubeId}?autoplay=1&mute=1&loop=1&playlist=${(init.media as any).youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1&vq=medium`}
                                                    className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2"
                                                    style={{ pointerEvents: 'none' }}
                                                    allow="autoplay; encrypted-media"
                                                    allowFullScreen
                                                    frameBorder="0"
                                                    title={`${init.label} video`}
                                                />
                                            </div>
                                        ) : hasVideo ? (
                                            <MobileVideoCard src={(init.media as any).src} aspect={init.id === 'omama' ? 'aspect-[3/4]' : 'aspect-video'} />
                                        ) : (
                                            <div className="aspect-[16/10] mx-auto h-[160px] rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                                                <img src={(init.media as any).src} alt={init.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Label */}
                                <p className="text-[11px] font-bold tracking-[0.15em] text-[#000] uppercase mb-2.5">
                                    {init.label}
                                </p>

                                {/* Description */}
                                {init.description && (
                                    <p className="text-[16px] text-foreground/80 leading-[1.6] font-normal mb-3 mx-auto">
                                        {init.description}
                                    </p>
                                )}

                                {/* Arrow link */}
                                <div className="inline-flex items-center justify-center">
                                    <ArrowUpRight className="w-[18px] h-[18px] text-primary/50" />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopInitiatives = () => {
    const [apiData, setApiData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/initiatives.json?v=1.1')
            .then(res => res.json())
            .then(data => setApiData(data))
            .catch(() => { });
    }, []);

    const initiatives = initiativesData.map(init => ({
        ...init,
        link: getInitiativeLink(init.id, apiData)
    }));

    return (
        <section id="initiatives" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easeOutExpo }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                        One connected ecosystem
                    </p>
                    <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-4">
                        Each system solves a real problem.
                    </h2>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto font-normal">
                        Explore the initiatives shaping communication, commerce, and everyday life
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {/* Card 1 - O-MAMA (Large with Video - Constrained Height) */}
                    <motion.a
                        href={initiatives[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
                        className={`${initiatives[0].bgColor} rounded-[32px] p-8 flex flex-col lg:row-span-2 group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-6">
                            {initiatives[0].label}
                        </span>

                        {/* Video placeholder - Constrained Height */}
                        <div className="w-full h-[400px] mb-8">
                            <VideoCard src={initiatives[0].media?.src || ''} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-foreground mb-3">
                                {initiatives[0].title}
                            </h3>
                            <p className="text-base text-foreground/70 mb-6 leading-relaxed font-normal">
                                {initiatives[0].description}
                            </p>
                            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-white/50">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 2 - SMART HOME (Video) */}
                    <motion.a
                        href={initiatives[1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 }}
                        className={`${initiatives[1].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[1].label}
                        </span>

                        {initiatives[1].media && (
                            initiatives[1].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[1].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[1].media.src} alt={initiatives[1].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[1].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[1].description}
                            </p>
                        </div>

                        <div className="mt-3 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 3 - CONTROLS (Video container, no src) */}
                    <motion.a
                        href={initiatives[2].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
                        className={`${initiatives[2].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[2].label}
                        </span>

                        {initiatives[2].media && (
                            initiatives[2].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[2].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[2].media.src} alt={initiatives[2].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[2].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[2].description}
                            </p>
                        </div>

                        <div className="mt-3 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 4 - PROTECT (Small) */}
                    <motion.a
                        href={initiatives[3].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.25 }}
                        className={`${initiatives[3].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[3].label}
                        </span>

                        {initiatives[3].media && (
                            initiatives[3].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[3].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[3].media.src} alt={initiatives[3].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[3].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[3].description}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.a>

                    {/* Card 5 - AI (Small) */}
                    <motion.a
                        href={initiatives[4].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
                        className={`${initiatives[4].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[4].label}
                        </span>

                        {initiatives[4].media && (
                            initiatives[4].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[4].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[4].media.src} alt={initiatives[4].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[4].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[4].description}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.a>

                    {/* Card 6 - MACHINE (Video container, no src) */}
                    <motion.a
                        href={initiatives[5].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.35 }}
                        className={`${initiatives[5].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[5].label}
                        </span>

                        {initiatives[5].media && (
                            initiatives[5].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[5].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[5].media.src} alt={initiatives[5].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[5].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[5].description}
                            </p>
                        </div>

                        <div className="mt-3 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 7 - CONNECT (Small text card) */}
                    <motion.a
                        href={initiatives[6].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
                        className={`${initiatives[6].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[6].label}
                        </span>

                        {initiatives[6].media && (
                            initiatives[6].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[6].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[6].media.src} alt={initiatives[6].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[6].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[6].description}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.a>

                    {/* Card 8 - EMP (No media) */}
                    <motion.a
                        href={initiatives[7].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.42 }}
                        className={`${initiatives[7].bgColor} rounded-[32px] p-7 flex flex-col h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-5">
                            {initiatives[7].label}
                        </span>

                        {initiatives[7].media && (
                            initiatives[7].media.type === 'video' ? (
                                <div className="w-full aspect-[16/10] mb-5">
                                    <VideoCard src={initiatives[7].media.src} />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center h-[180px] mb-5">
                                    <ImageCard src={initiatives[7].media.src} alt={initiatives[7].title} />
                                </div>
                            )
                        )}

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[7].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[7].description}
                            </p>
                        </div>

                        <div className="mt-3 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 9 - XIMPUL (Video - Single Column) */}
                    <motion.a
                        href={initiatives[8].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.45 }}
                        className={`${initiatives[8].bgColor} rounded-[32px] p-8 flex flex-col min-h-[300px] lg:col-span-2 group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-4">
                            {initiatives[8].label}
                        </span>

                        {/* Original layout: left video, right text, vertically centered */}
                        <div className="flex flex-col md:flex-row gap-8 h-full items-center">
                            <div className="w-full md:flex-1">
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-black/5">
                                    <iframe loading="lazy"
                                        src="https://www.youtube.com/embed/gEHt-GEZYY0?autoplay=1&mute=1&loop=1&playlist=gEHt-GEZYY0&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&vq=medium"
                                        className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2"
                                        style={{ pointerEvents: 'none' }}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        frameBorder="0"
                                        title="Ximpul video"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                    {initiatives[8].title}
                                </h3>
                                <p className="text-base text-foreground/70 mb-6 leading-relaxed font-normal">
                                    {initiatives[8].description}
                                </p>
                                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-white/50">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 10 - FILMIC STATION (Video card) */}
                    <motion.a
                        href={initiatives[9].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
                        className={`${initiatives[9].bgColor} rounded-[32px] p-7 flex flex-col h-fit group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-5">
                            {initiatives[9].label}
                        </span>

                        <div className="relative w-full aspect-video mb-5 rounded-2xl overflow-hidden bg-black border border-black/5">
                            <iframe loading="lazy"
                                src="https://www.youtube.com/embed/279Y6nPslH8?autoplay=1&mute=1&loop=1&playlist=279Y6nPslH8&controls=0&modestbranding=1&rel=0&playsinline=1&vq=medium"
                                className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2"
                                style={{ pointerEvents: 'none' }}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                frameBorder="0"
                                title="Filmic Station video"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[9].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[9].description}
                            </p>
                        </div>

                        <div className="mt-3 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const Initiatives = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileInitiatives />;
    }

    return <DesktopInitiatives />;
};
