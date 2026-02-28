'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ArrowRight } from 'lucide-react';
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

import carouselConnect from '@/assets/carousel/connect-carousel.png';
import carouselOMama from '@/assets/carousel/omama-carousel.png';
import carouselEmp from '@/assets/carousel/emp-carousel.png';
import carouselFilmic from '@/assets/carousel/filmic-carousel.png';
import carouselTolpar from '@/assets/carousel/tolpar-carousel.png';
import carouselAI from '@/assets/carousel/ai-carousel.png';
import carouselProtect from '@/assets/carousel/protect-carousel.png';
import carouselControls from '@/assets/carousel/controls-carousel.png';
import carouselMachine from '@/assets/carousel/machine-carousel.png';
import carouselXimpul from '@/assets/carousel/ximpul-carousel.png';

const initiatives = [
    { name: 'CONNECT', src: carouselConnect },
    { name: 'O-MAMA', src: carouselOMama },
    { name: 'EMP', src: carouselEmp },
    { name: 'TOLPAR', src: carouselTolpar },
    { name: 'AI', src: carouselAI },
    { name: 'PROTECT', src: carouselProtect },
    { name: 'CONTROLS', src: carouselControls },
    { name: 'MACHINE', src: carouselMachine },
    { name: 'FILMIC STATION', src: carouselFilmic },
    { name: 'XIMPUL', src: carouselXimpul },
]

export const SocialProof = () => {
    const { theme } = useTheme();
    return (
        <section className="min-h-screen w-full overflow-hidden bg-background pt-24 md:pt-40 pb-0 relative flex flex-col justify-between">
            {/* Top Content Wrapper */}
            <div className="w-full relative z-30 flex flex-col items-center">

                {/* Text Block */}
                <div
                    className="text-center space-y-4 relative"
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full backdrop-blur-xl bg-white/70 border border-border/30 px-3 sm:px-4 py-2 shadow-sm">
                        <span className="rounded-full bg-primary px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-primary-foreground tracking-wide">
                            SOHUB
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-foreground-muted">Solution Hub Technologies</span>
                    </div>
                    <h2 className="text-[48px] font-medium tracking-tight text-foreground">
                        We build technology that helps <br className="hidden sm:block" />
                        Bangladesh work better.
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-xl mx-auto">
                        Technology, built with discipline, to solve real problems — reliably, at scale.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative mt-12 md:mt-24 h-[60px] w-full bg-transparent">
                    <InfiniteSlider
                        className='flex h-full w-full items-center'
                        duration={200}
                        gap={60}
                    >
                        {[...initiatives, ...initiatives, ...initiatives, ...initiatives].map((item, index) => (
                            <div
                                key={`${item.name}-${index}`}
                                className={`${['FILMIC STATION', 'AI', 'CONNECT', 'PROTECT', 'TOLPAR'].includes(item.name) ? 'w-24 h-6' : 'w-18 h-6'} flex-shrink-0 flex items-center justify-center transition-all duration-300 transform-gpu will-change-transform hover:scale-105 cursor-pointer mx-4 md:mx-6`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className={`h-full w-auto object-contain text-foreground/50 hover:text-foreground ${item.name === 'PROTECT' ? 'mix-blend-multiply dark:mix-blend-normal' : ''}`}
                                />
                            </div>
                        ))}
                    </InfiniteSlider>
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 left-0 h-full w-[60px] md:w-[200px]'
                        direction='left'
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 right-0 h-full w-[60px] md:w-[200px]'
                        direction='right'
                        blurIntensity={1}
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 px-8 sm:px-6 w-full sm:w-auto mt-10 mb-6">
                    <a
                        href="#initiatives"
                        className="group w-auto sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F97316] px-8 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#EA580C] hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Initiatives
                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <a
                            href="#why"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                        >
                            Why we exist
                        </a>

                    </div>
                </div>
            </div>

            {/* Bottom Visual Area with CTAs */}
            <div className="relative -mt-42 md:-mt-32 h-[500px] w-full overflow-hidden z-20 flex flex-col justify-end pb-44 md:pb-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">

                {/* Visuals (Background) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-20" />
                    <div className="absolute -left-1/2 top-[40%] aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/10 dark:border-white/10 bg-background" />
                    <Sparkles
                        density={1200}
                        className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_300%,white,transparent_85%)]"
                        color={theme === "dark" ? "#ffffff" : "#000000"}
                    />
                </div>

                {/* CTAs and Content (Foreground) */}
                <div className="relative z-30 w-full flex flex-col items-center gap-10">
                    <div className="text-center">
                        <p className="mb-3 sm:mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                            Our Focus
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                            {['Discipline', 'Transparency', 'Results'].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border/30 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-sm font-medium text-foreground transition-colors hover:bg-white hover:text-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
