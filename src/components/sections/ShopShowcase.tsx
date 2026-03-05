import { useEffect, useState } from 'react';
import ximpulBottleImage from '@/assets/ximpl-flow.png';
import aloImage from '@/assets/Alo_transparent.png';
import pdlcImage from '@/assets/pdlcmerged (1).png';
import switchImage from '@/assets/switch_1_transparent.png';
import smartLightImage from '@/assets/unwatermarked_lights_transparent.png';
import sohubProtectImage from '@/assets/protect2_transparent_v3.png';
import machineImage from '@/assets/power bank.png';
import sohubAiImage from '@/assets/sohub-vision-hero-C9kvSPJN.png';
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
    },
    {
        title: 'Machine By SOHUB',
        description: 'Industrial automation and smart machinery for modern enterprises.',
        link: 'https://shb-machine.netlify.app/',
        image: machineImage
    },
    {
        title: 'SOHUB AI',
        description: 'Intelligent AI automation solutions that scale your business.',
        link: 'https://sohub-vision-spark.lovable.app/',
        image: sohubAiImage
    }
];
type ShopItem = (typeof shops)[number];

/* ──────────────────────────────────────────────
   DESKTOP CARD — original design
   ────────────────────────────────────────────── */
const ShopCard = ({ shop }: { shop: ShopItem }) => (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col h-full">
        <div className="aspect-[16/12] bg-[#fdfbf7] dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
            <img
                src={shop.image}
                alt={shop.title}
                className={`w-full h-auto object-contain transition-transform duration-300 ${shop.title === 'PDLC Film' ? 'rounded-[16px]' : 'rounded-lg'} ${shop.title === 'Machine By SOHUB' ? 'scale-[1.3] group-hover:scale-[1.35]' : shop.title === 'Smart Switch' ? 'scale-[0.93]' : shop.title === 'PDLC Film' ? 'scale-[0.85]' : 'group-hover:scale-105'}`}
                loading="lazy"
            />
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <h3
                className="text-xl font-semibold text-foreground mb-2"
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
            >
                {shop.title}
            </h3>
            <p
                className="text-sm text-foreground/70 mb-3 leading-relaxed flex-grow"
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
);

/* ──────────────────────────────────────────────
   MOBILE VERSION — Google about.google style
   Full-width image cards, left-aligned text,
   vertically stacked, no carousel
   ────────────────────────────────────────────── */
const MobileShopShowcase = () => (
    <section className="py-12 bg-background">
        <h2
            className="px-5 text-[26px] font-medium tracking-tight text-foreground text-center mb-8"
            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
            Discover Our Shops
        </h2>

        <div className="px-4 space-y-4">
            {shops.map((shop) => (
                <a
                    key={shop.title}
                    href={shop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-[20px] overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                    {/* Full-width product image */}
                    <div className="w-full aspect-[16/11] bg-[#fdfbf7] dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                        <img
                            src={shop.image}
                            alt={shop.title}
                            className={`w-full h-full object-contain transition-transform duration-300 ${shop.title === 'PDLC Film' ? 'rounded-[16px]' : 'rounded-lg'} ${shop.title === 'Machine By SOHUB' ? 'scale-[1.3] group-hover:scale-[1.35]' : shop.title === 'Smart Switch' ? 'scale-[0.93]' : shop.title === 'PDLC Film' ? 'scale-[0.85]' : 'group-hover:scale-105'}`}
                            loading="lazy"
                        />
                    </div>

                    {/* Text content — left aligned like Google */}
                    <div className="px-5 pt-5 pb-6 bg-white dark:bg-zinc-900 rounded-b-[20px]">
                        <h3
                            className="text-[20px] font-semibold text-[#000] dark:text-white mb-2 leading-tight"
                            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                        >
                            {shop.title}
                        </h3>
                        <p
                            className="text-[15px] text-foreground/70 leading-[1.6] mb-3"
                            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                        >
                            {shop.description}
                        </p>
                        <span
                            className="text-[14px] font-semibold text-[#fb8a09]"
                            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                        >
                            Shop now
                        </span>
                    </div>
                </a>
            ))}
        </div>
    </section>
);

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopShopShowcase = () => (
    <section className="py-20 bg-background">
        <h2
            className="px-4 text-3xl sm:text-4xl md:text-[48px] font-medium tracking-tight text-foreground text-center mb-10 md:mb-16"
            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
            Discover Our Shops
        </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {shops.map((shop) => (
                    <ShopCard key={shop.title} shop={shop} />
                ))}
            </div>
        </div>
    </section>
);

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const ShopShowcase = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileShopShowcase />;
    }

    return <DesktopShopShowcase />;
};
