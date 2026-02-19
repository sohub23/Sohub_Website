import ximpulBottleImage from '@/assets/ximpl-flow.png';
import aloImage from '@/assets/Alo_transparent.png';
import pdlcImage from '@/assets/pdlc_transparent.png';
import switchImage from '@/assets/Switch_transparent.png';
import smartLightImage from '@/assets/light_transparent.png';
import sohubProtectImage from '@/assets/protect2_transparent_v3.png';

const shops = [
    {
        title: 'Ximpul',
        description: 'Experience the standard in hydration with premium quality bottles.',
        link: 'https://ximpul.com/',
        image: ximpulBottleImage
    },
    {
        title: 'ALO',
        description: 'Remove the Darkness, Embrace the Natural Light through Smart Curtain.',
        link: 'https://home.sohub.com.bd/alo',
        image: aloImage
    },
    {
        title: 'PDLC Film',
        description: 'Smart film technology for intelligent privacy control.',
        link: 'https://home.sohub.com.bd/pdlc-film',
        image: pdlcImage
    },
    {
        title: 'Smart Switch',
        description: 'Intelligent controls for your connected home.',
        link: 'https://home.sohub.com.bd/switch',
        image: switchImage
    },
    {
        title: 'Smart Light',
        description: 'Efficient lighting solutions for every space.',
        link: 'https://home.sohub.com.bd/smart-light',
        image: smartLightImage
    },
    {
        title: 'SOHUB Protect',
        description: 'Security solutions you can trust.',
        link: 'https://home.sohub.com.bd/sohub-protect',
        image: sohubProtectImage
    }
];

export const ShopShowcase = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            {/* Section Heading */}
            <h2
                className="text-[48px] font-medium tracking-tight text-foreground text-center mb-16"
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
            >
                Explore our products
            </h2>

            {/* Shop Grid - 3 columns */}
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shops.map((shop) => (
                        <div
                            key={shop.title}
                            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/12] bg-gray-50 dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                                <img
                                    src={shop.image}
                                    alt={shop.title}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3
                                    className="text-xl font-semibold text-foreground mb-2"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {shop.title}
                                </h3>
                                <p
                                    className="text-sm text-foreground/70 mb-3 leading-relaxed"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {shop.description}
                                </p>
                                <a
                                    href={shop.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[#fb8a09] hover:underline"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    Shop now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
