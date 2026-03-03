import { useEffect, useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

import smartLockImg from '@/assets/compressed/Smart_Lock.png';
import lightingImg from '@/assets/compressed/Lighting.png';
import sensorsImg from '@/assets/compressed/Sensors.png';
import majorApplianceImg from '@/assets/compressed/Major_appliance.png';
import smallApplianceImg from '@/assets/compressed/Small_appliance.png';
import kitchenApplianceImg from '@/assets/compressed/kitchen_appliance.png';
import petsImg from '@/assets/compressed/For_pets.png';
import electricalsImg from '@/assets/compressed/Electricals.png';
import cleaningRobotsImg from '@/assets/compressed/Smart_cleaning_robots.png';
import camerasImg from '@/assets/compressed/Smart_cameras.png';
import gatewayImg from '@/assets/compressed/Smart_gateway.png';
import savingsImg from '@/assets/compressed/Smart_savings.png';
import entertainmentImg from '@/assets/compressed/Entartainments.png';

const products = [
    { name: 'Smart Lock', src: smartLockImg },
    { name: 'Lighting', src: lightingImg },
    { name: 'Sensor', src: sensorsImg },
    { name: 'Major Appliance', src: majorApplianceImg },
    { name: 'Small Appliance', src: smallApplianceImg },
    { name: 'Kitchen Appliance', src: kitchenApplianceImg },
    { name: 'Pets', src: petsImg },
    { name: 'Electrical', src: electricalsImg },
];

const productsRow2 = [
    { name: 'Cleaning Robot', src: cleaningRobotsImg },
    { name: 'Camera', src: camerasImg },
    { name: 'Smart Lock', src: smartLockImg },
    { name: 'Gateway', src: gatewayImg },
    { name: 'Energy-Saving', src: savingsImg },
    { name: 'Entertainment', src: entertainmentImg },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopSmartLife = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="w-full">
                <h2 className="text-[48px] font-normal tracking-tight text-foreground text-center mb-16 px-6">
                    Our Smart Home Solutions & Products
                </h2>

                <div className="space-y-6 mb-16 overflow-hidden">
                    <InfiniteSlider duration={300} gap={48} reverse={false}>
                        {[...products, ...products, ...products].map((product, index) => (
                            <div key={`row1-${index}`} className="flex flex-col items-center gap-4 w-[140px]">
                                <div className="w-full h-[140px] flex items-center justify-center">
                                    <img src={product.src} alt={product.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-medium text-foreground/70 text-center">{product.name}</h3>
                            </div>
                        ))}
                    </InfiniteSlider>

                    <InfiniteSlider duration={300} gap={48} reverse={true}>
                        {[...productsRow2, ...productsRow2, ...productsRow2, ...productsRow2].map((product, index) => (
                            <div key={`row2-${index}`} className="flex flex-col items-center gap-4 w-[140px]">
                                <div className="w-full h-[140px] flex items-center justify-center">
                                    <img src={product.src} alt={product.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-medium text-foreground/70 text-center">{product.name}</h3>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — compact, smaller items,
   tighter spacing, smaller heading
   ────────────────────────────────────────────── */
const MobileSmartLife = () => {
    return (
        <section className="py-10 bg-background">
            <div className="w-full">
                <h2
                    className="text-[24px] font-medium tracking-tight text-foreground text-center mb-8 px-5"
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                >
                    Our Smart Home Solutions & Products
                </h2>

                <div className="space-y-4 mb-10 overflow-hidden">
                    <InfiniteSlider duration={200} gap={24} reverse={false}>
                        {[...products, ...products, ...products].map((product, index) => (
                            <div key={`row1-m-${index}`} className="flex flex-col items-center gap-2.5 w-[90px]">
                                <div className="w-full h-[90px] flex items-center justify-center">
                                    <img
                                        src={product.src}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h3
                                    className="text-[12px] font-medium text-foreground/60 text-center leading-tight"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {product.name}
                                </h3>
                            </div>
                        ))}
                    </InfiniteSlider>

                    <InfiniteSlider duration={200} gap={24} reverse={true}>
                        {[...productsRow2, ...productsRow2, ...productsRow2, ...productsRow2].map((product, index) => (
                            <div key={`row2-m-${index}`} className="flex flex-col items-center gap-2.5 w-[90px]">
                                <div className="w-full h-[90px] flex items-center justify-center">
                                    <img
                                        src={product.src}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h3
                                    className="text-[12px] font-medium text-foreground/60 text-center leading-tight"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                >
                                    {product.name}
                                </h3>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const SmartLife = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileSmartLife />;
    }

    return <DesktopSmartLife />;
};
