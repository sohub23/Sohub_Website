import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const experiments = [
    {
        id: 1,
        title: "Flow",
        description: "Create cinematic clips, scenes and stories with our AI filmmaking tool.",
        buttonText: "Check it out",
        buttonLink: "#",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1000&fit=crop"
    },
    {
        id: 2,
        title: "NotebookLM",
        description: "Your personalized AI research assistant, right at your fingertips.",
        buttonText: "Get started",
        buttonLink: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=1000&fit=crop"
    },
    {
        id: 3,
        title: "Google Labs",
        description: "Explore AI experiments from across the company.",
        buttonText: "Visit",
        buttonLink: "#",
        image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=800&h=1000&fit=crop"
    },
    {
        id: 4,
        title: "AI Studio",
        description: "Build and experiment with AI models.",
        buttonText: "Explore",
        buttonLink: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1000&fit=crop"
    }
];

export const AIExperiments = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : experiments.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < experiments.length - 1 ? prev + 1 : 0));
    };

    // Calculate which 3 cards to show based on active index
    const getVisibleCards = () => {
        if (activeIndex === 0) return [0, 1, 2];
        if (activeIndex === experiments.length - 1) return [experiments.length - 3, experiments.length - 2, experiments.length - 1];
        return [activeIndex - 1, activeIndex, activeIndex + 1];
    };

    const visibleIndices = getVisibleCards();

    // Calculate translateX based on active index to shift cards left
    const getTranslateX = () => {
        if (activeIndex === 0) return 0;
        if (activeIndex === 1) return -200;
        // For card 2 and beyond, shift more to the left
        return -400;
    };

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa] overflow-visible">
            <div className="max-w-full px-0">
                <h2
                    className="text-[48px] font-normal tracking-tight text-foreground text-center mb-16"
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                >
                    Try new AI products and experiments
                </h2>

                <div className="relative flex items-center justify-start gap-6 px-4">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all bg-white z-50 relative"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Cards Container - Only show 3 cards */}
                    <div className="overflow-hidden flex-1">
                        <div
                            className="flex items-stretch gap-6 h-[604px] transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${getTranslateX()}px)` }}
                        >
                            {visibleIndices.map((index) => {
                                const experiment = experiments[index];
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={experiment.id}
                                        onClick={() => setActiveIndex(index)}
                                        className="flex gap-0 transition-all duration-500 ease-out cursor-pointer"
                                    >
                                        {/* Image Card */}
                                        <div
                                            className={`relative overflow-hidden flex-shrink-0 transition-all duration-500 ${isActive ? 'w-[340px] rounded-l-3xl' : 'w-[338px] rounded-3xl'
                                                }`}
                                        >
                                            <img
                                                src={experiment.image}
                                                alt={experiment.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content Card - Attached to image, no gap */}
                                        {isActive && (
                                            <div className="w-[500px] bg-white rounded-r-3xl p-8 flex flex-col justify-center">
                                                <h3
                                                    className="text-[32px] font-normal text-foreground mb-3"
                                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                >
                                                    {experiment.title}
                                                </h3>
                                                <p
                                                    className="text-[15px] text-foreground/70 mb-6 leading-relaxed"
                                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                >
                                                    {experiment.description}
                                                </p>
                                                <a
                                                    href={experiment.buttonLink}
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a73e8] text-white rounded-full text-[15px] font-medium hover:bg-[#1557b0] transition-colors w-fit"
                                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                                >
                                                    {experiment.buttonText}
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all bg-white z-50 relative"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};
