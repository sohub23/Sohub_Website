import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ximpulVideo from '@/assets/Ximpul3.mp4';
import omamaVideo from '@/assets/omama.mp4';
import connectVideo from '@/assets/click to connect.mp4';
import ximpulPoster from '@/assets/carousel/ximpul-carousel.png';
import omamaPoster from '@/assets/carousel/omama-navbar.png';
import protectPoster from '@/assets/protect2.png';
import connectPoster from '@/assets/click to connect.png';
import powerbankPoster from '@/assets/powerbank-poster.jpg';
import snackVendingPoster from '@/assets/snack-vending-poster.jpg';

const features = [
    {
        title: "Ximpul",
        description: "Stop buying plastic bottles — choose freedom with Ximpul Flow. It's safer than plastic bottles — for your health and the planet.",
        buttonText: "Explore Ximpul",
        buttonLink: "https://ximpul.com",
        youtubeId: "vDaA02pMqII",
        video: ximpulVideo,
        image: ximpulPoster,
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/itsximpul', icon: 'facebook' },
            { name: 'Instagram', url: 'https://www.instagram.com/itsximpul/', icon: 'instagram' },
            { name: 'YouTube', url: 'https://www.youtube.com/@ximpul_flow', icon: 'youtube' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@itsximpul', icon: 'tiktok' }
        ]
    },
    {
        title: "O-MAMA",
        description: "To make Bangladesh a place where fresh and hygienic food is as easy as grabbing a bottle of water.",
        buttonText: "Explore O-MAMA",
        buttonLink: "https://omama.sohub.com.bd",
        youtubeId: "h5ylw8PR3_s",
        video: omamaVideo,
        image: omamaPoster,
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/omamabangladesh', icon: 'facebook' },
            { name: 'Instagram', url: 'https://www.instagram.com/omama_bd', icon: 'instagram' },
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq0yDtqzhuoh-abVT4kB9J11', icon: 'youtube' }
        ]
    },
    {
        title: "SOHUB Protect",
        description: "Safety and trust built into everything we create.",
        buttonText: "Explore Protect",
        buttonLink: "https://home.sohub.com.bd/sohub-protect",
        youtubeId: "KihfqNckf8g",
        video: undefined as string | undefined,
        image: protectPoster,
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/share/18MZgP8RoS/', icon: 'facebook' },
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq1PpBiJrGay6MOPyTT1grQ0', icon: 'youtube' }
        ]
    },
    {
        title: "SOHUB Connect",
        description: "Have a conversation about anything around you or on your screen.",
        buttonText: "Explore Connect",
        buttonLink: "https://connect.sohub.com.bd",
        youtubeId: "BwROeBq-tRA",
        video: connectVideo,
        image: connectPoster,
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/groups/sohubconnect', icon: 'facebook' },
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq2HMRj0LSCB6J6EwyyQ8Zld', icon: 'youtube' }
        ]
    },
    {
        title: "Powerbank Vending Machine",
        description: "Never run out of charge again. Rent a powerbank instantly from our smart vending stations — scan, grab, and go.",
        buttonText: "Explore Machines",
        buttonLink: "https://shb-machine.netlify.app/",
        youtubeId: "Y08VPoImhoA",
        video: undefined as string | undefined,
        image: powerbankPoster,
        socialMedia: [
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq31_cOhI2j6I1uXXSnRLmUE&si=N_K6BAdCsEBJBKTV', icon: 'youtube' }
        ]
    },
    {
        title: "Snack Vending Machine",
        description: "Grab your favorite snacks anytime, anywhere. Our smart vending machines bring convenience to your fingertips — cashless, fast, and always stocked.",
        buttonText: "Explore Machines",
        buttonLink: "https://shb-machine.netlify.app/",
        youtubeId: "4835onrVx34",
        video: undefined as string | undefined,
        image: snackVendingPoster,
        socialMedia: [
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq31_cOhI2j6I1uXXSnRLmUE&si=N_K6BAdCsEBJBKTV', icon: 'youtube' }
        ]
    }
];

export const FeatureShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedYoutubeSlides, setLoadedYoutubeSlides] = useState<Record<number, boolean>>({});
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const [dragOffsetX, setDragOffsetX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselViewportRef = useRef<HTMLDivElement | null>(null);
    const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
    const touchStartX = useRef<number | null>(null);
    const touchCurrentX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const touchStartTime = useRef<number | null>(null);

    const goToSlide = (nextIndex: number) => {
        setCurrentIndex(((nextIndex % features.length) + features.length) % features.length);
        setDragOffsetX(0);
        setIsDragging(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
        setDragOffsetX(0);
        setIsDragging(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
        setDragOffsetX(0);
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        touchStartX.current = touch?.clientX ?? null;
        touchCurrentX.current = touchStartX.current;
        touchStartY.current = touch?.clientY ?? null;
        touchStartTime.current = performance.now();
        setIsDragging(false);
        setDragOffsetX(0);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return;
        const touch = e.touches[0];
        const currentX = touch?.clientX ?? touchCurrentX.current;
        const currentY = touch?.clientY ?? touchStartY.current;

        if (currentX === null || currentY === null) return;

        touchCurrentX.current = currentX;

        const deltaX = currentX - touchStartX.current;
        const deltaY = touchStartY.current === null ? 0 : currentY - touchStartY.current;
        const horizontalIntent = Math.abs(deltaX) > Math.abs(deltaY);

        if (!horizontalIntent) return;

        setIsDragging(true);
        setDragOffsetX(deltaX);
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchCurrentX.current === null) {
            touchStartX.current = null;
            touchCurrentX.current = null;
            touchStartY.current = null;
            touchStartTime.current = null;
            setIsDragging(false);
            setDragOffsetX(0);
            return;
        }

        const deltaX = touchCurrentX.current - touchStartX.current;
        const elapsed = Math.max((touchStartTime.current ? performance.now() - touchStartTime.current : 0), 1);
        const velocity = Math.abs(deltaX) / elapsed;
        const containerWidth = carouselViewportRef.current?.offsetWidth ?? 320;
        const swipeThreshold = Math.max(42, containerWidth * 0.14);
        const shouldSwipe = Math.abs(deltaX) > swipeThreshold || velocity > 0.45;

        setIsDragging(false);
        setDragOffsetX(0);

        if (shouldSwipe) {
            if (deltaX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        touchStartX.current = null;
        touchCurrentX.current = null;
        touchStartY.current = null;
        touchStartTime.current = null;
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);

        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    useEffect(() => {
        if (!isMobileViewport) return;

        const timers: number[] = [];
        const activeVideo = videoRefs.current[currentIndex];

        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            if (index !== currentIndex && !video.paused) {
                video.pause();
            }
        });

        if (!activeVideo) return;

        activeVideo.muted = true;
        activeVideo.defaultMuted = true;
        activeVideo.playsInline = true;
        activeVideo.preload = 'auto';

        const tryPlay = () => {
            const playPromise = activeVideo.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => { });
            }
        };

        tryPlay();
        timers.push(window.setTimeout(tryPlay, 80));
        timers.push(window.setTimeout(tryPlay, 220));

        return () => {
            timers.forEach((timerId) => window.clearTimeout(timerId));
        };
    }, [currentIndex, isMobileViewport]);

    return (
        <>
            <section className="py-20 bg-[#fff8e1] relative overflow-hidden flex items-start md:items-center">
                <div className="w-full mt-0 md:-mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative">
                        {/* Left Arrow — desktop only */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex absolute -left-2 lg:-left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-7 h-7 text-foreground" />
                        </button>

                        {/* Right Arrow — desktop only */}
                        <button
                            onClick={nextSlide}
                            className="hidden md:flex absolute -right-2 lg:-right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-7 h-7 text-foreground" />
                        </button>

                        <div
                            ref={carouselViewportRef}
                            className="overflow-hidden touch-pan-y select-none"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className={`flex transform-gpu will-change-transform ${isDragging
                                    ? 'transition-none'
                                    : 'transition-transform duration-[820ms] md:duration-500 motion-reduce:transition-none'
                                    }`}
                                style={{
                                    transform: `translate3d(calc(-${currentIndex * 100}% + ${dragOffsetX}px), 0, 0)`,
                                    transitionTimingFunction: isDragging ? 'linear' : 'cubic-bezier(0.22, 1, 0.36, 1)',
                                }}
                            >
                                {features.map((feature, index) => {
                                    const useInlineVideo = false;
                                    const shouldMountYoutubeIframe = true;

                                    return (
                                        <div
                                            key={index}
                                            className="grid min-w-full w-full flex-shrink-0 items-start gap-6 p-5 md:items-center md:gap-12 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:grid-cols-2"
                                        >
                                            {/* Left Content */}
                                            <div className="order-2 md:order-none lg:order-1 min-w-0 space-y-5 ml-0 md:space-y-6 md:ml-16">
                                                <h2
                                                    className="text-[32px] leading-[1.02] md:text-[48px] font-medium tracking-tight text-foreground"
                                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                >
                                                    {feature.title}
                                                </h2>
                                                <p
                                                    className="text-[15px] leading-7 text-foreground/70 max-w-none md:max-w-md md:text-[16px] md:leading-normal"
                                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                >
                                                    {feature.description}
                                                </p>
                                                <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4">
                                                    <a
                                                        href={feature.buttonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex w-full items-center justify-center px-5 py-3.5 md:inline-block md:w-auto md:px-6 md:py-3 bg-[#fb8a09] text-white rounded-full text-base font-semibold hover:bg-[#e07a00] transition-colors shadow-[0_10px_24px_rgba(251,138,9,0.25)] md:shadow-none"
                                                        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                    >
                                                        {feature.buttonText}
                                                    </a>
                                                    {feature.socialMedia && (
                                                        <div className="flex items-center justify-center gap-2 md:justify-start md:gap-3">
                                                            {feature.socialMedia.map((social) => (
                                                                <a
                                                                    key={social.name}
                                                                    href={social.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff8e1] text-[#fb8a09] shadow-[0_6px_14px_rgba(0,0,0,0.06)] hover:text-[#e07a00] transition-colors md:h-auto md:w-auto md:bg-transparent md:p-0 md:shadow-none"
                                                                    aria-label={social.name}
                                                                >
                                                                    {social.icon === 'facebook' && (
                                                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                                        </svg>
                                                                    )}
                                                                    {social.icon === 'instagram' && (
                                                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                                        </svg>
                                                                    )}
                                                                    {social.icon === 'youtube' && (
                                                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                                                        </svg>
                                                                    )}
                                                                    {social.icon === 'tiktok' && (
                                                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                                                        </svg>
                                                                    )}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Right Image/Visual */}
                                            <div className="order-1 md:order-none lg:order-2 relative ml-0 md:-ml-12 flex justify-center md:block min-w-0">
                                                <div className="relative w-full h-[220px] sm:h-[260px] rounded-[24px] overflow-hidden bg-black shadow-[0_18px_36px_rgba(0,0,0,0.16)] ring-1 ring-black/5 md:w-[616px] md:h-[346px] md:rounded-2xl md:shadow-none md:ring-0">
                                                    {useInlineVideo ? (
                                                        <video
                                                            ref={(node) => {
                                                                videoRefs.current[index] = node;
                                                            }}
                                                            src={feature.video!}
                                                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                                                            preload="auto"
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            onLoadedData={(event) => {
                                                                if (!isMobileViewport || index !== currentIndex) return;
                                                                const playPromise = event.currentTarget.play();
                                                                if (playPromise && typeof playPromise.catch === 'function') {
                                                                    playPromise.catch(() => { });
                                                                }
                                                            }}
                                                        />
                                                    ) : feature.youtubeId ? (
                                                        <>
                                                            {feature.image && (
                                                                <img
                                                                    src={feature.image}
                                                                    alt={`${feature.title} preview`}
                                                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loadedYoutubeSlides[index]
                                                                        ? 'opacity-0'
                                                                        : 'opacity-100'
                                                                        }`}
                                                                />
                                                            )}
                                                            <div
                                                                className={`absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-black/20 transition-opacity duration-300 ${loadedYoutubeSlides[index]
                                                                    ? 'opacity-0'
                                                                    : 'opacity-100'
                                                                    }`}
                                                                aria-hidden="true"
                                                            />
                                                            {!loadedYoutubeSlides[index] && shouldMountYoutubeIframe && (
                                                                <div
                                                                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                                                                    aria-hidden="true"
                                                                >
                                                                    <div className="h-10 w-10 rounded-full border-2 border-white/70 border-t-white animate-spin" />
                                                                </div>
                                                            )}
                                                            {shouldMountYoutubeIframe && (
                                                                <iframe
                                                                    key={`youtube-${index}`}
                                                                    src={`https://www.youtube.com/embed/${feature.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${feature.youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                                                                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-auto ${loadedYoutubeSlides[index] ? 'opacity-100' : 'opacity-0'}`}
                                                                    allow="autoplay; encrypted-media"
                                                                    allowFullScreen
                                                                    frameBorder="0"
                                                                    title={`${feature.title} video`}
                                                                    onLoad={() =>
                                                                        setLoadedYoutubeSlides((prev) =>
                                                                            prev[index] ? prev : { ...prev, [index]: true }
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </>
                                                    ) : (
                                                        <img
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                                        />
                                                    )}

                                                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 via-black/10 to-transparent md:hidden" aria-hidden="true" />

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="mt-6 md:mt-0 md:absolute md:bottom-8 md:left-0 md:right-0 flex items-center justify-center">
                        <div className="flex gap-2 rounded-full bg-white/80 px-3.5 py-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.07)] backdrop-blur-sm md:rounded-none md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-5 bg-foreground'
                                        : 'w-2.5 bg-transparent border border-foreground/40'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
