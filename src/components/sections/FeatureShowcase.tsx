import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ximpulVideo from '@/assets/XIMPUL TVC 01.mp4';

const features = [
    {
        title: "Ximpul",
        description: "Stop buying plastic bottles — choose freedom with Ximpul Flow. It's safer than plastic bottles — for your health and the planet.",
        buttonText: "Explore Ximpul",
        buttonLink: "https://ximpul.com",
        youtubeId: "vDaA02pMqII",
        video: undefined as string | undefined,
        image: undefined as string | undefined,
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
        video: undefined as string | undefined,
        image: undefined as string | undefined,
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
        image: undefined as string | undefined,
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
        video: undefined as string | undefined,
        image: undefined as string | undefined,
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com/groups/sohubconnect', icon: 'facebook' },
            { name: 'YouTube', url: 'https://youtube.com/playlist?list=PL5gB5kNB2iq2HMRj0LSCB6J6EwyyQ8Zld', icon: 'youtube' }
        ]
    }
];

export const FeatureShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <>
            {/* Section Heading - Outside background div */}
            <h2 
                className="text-[48px] font-medium tracking-tight text-foreground text-center py-16 md:py-20"
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
            >
                Explore the initiatives
            </h2>

            <section className="h-[625px] bg-[#fff8e1] relative overflow-hidden flex items-center">
            {/* Left Arrow - positioned relative to section */}
            <button
                onClick={prevSlide}
                className="absolute left-40 md:left-48 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                aria-label="Previous"
            >
                <ChevronLeft className="w-7 h-7 text-foreground" />
            </button>

            {/* Right Arrow - positioned relative to section */}
            <button
                onClick={nextSlide}
                className="absolute right-32 md:right-40 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                aria-label="Next"
            >
                <ChevronRight className="w-7 h-7 text-foreground" />
            </button>

            <div className="w-full -mt-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="min-w-full flex-shrink-0 grid lg:grid-cols-2 gap-12 items-center"
                            >
                            {/* Left Content */}
                            <div className="space-y-6 ml-16">
                                <h2 
                                    className="text-4xl md:text-5xl font-medium tracking-tight text-foreground"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {feature.title}
                                </h2>
                                <p 
                                    className="text-[16px] text-foreground/70 max-w-md"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {feature.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={feature.buttonLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 bg-[#fb8a09] text-white rounded-full font-medium hover:bg-[#e07a00] transition-colors"
                                        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                    >
                                        {feature.buttonText}
                                    </a>
                                    {feature.socialMedia && (
                                        <div className="flex items-center gap-3">
                                            {feature.socialMedia.map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#fb8a09] hover:text-[#e07a00] transition-colors"
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
                            <div className="relative -ml-12">
                                <div className="relative w-[616px] h-[346px] rounded-2xl overflow-hidden bg-black">
                                    {feature.video ? (
                                        <video 
                                            src={feature.video}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : feature.youtubeId ? (
                                        <iframe
                                            key={`youtube-${index}`}
                                            src={`https://www.youtube.com/embed/${feature.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${feature.youtubeId}&controls=0&modestbranding=1&rel=0`}
                                            className="w-full h-full"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                            frameBorder="0"
                                        />
                                    ) : (
                                        <img 
                                            src={feature.image} 
                                            alt={feature.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Dots - Positioned at bottom center */}
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
                <div className="flex gap-2">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'bg-foreground' 
                                    : 'bg-transparent border border-foreground/40'
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
