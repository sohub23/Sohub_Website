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

export const SmartLife = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="w-full">
                <h2 className="text-[48px] font-normal tracking-tight text-foreground text-center mb-16 px-6">
                    Make Your Life Smart
                </h2>

                <div className="space-y-12 mb-16 overflow-hidden">
                    <InfiniteSlider duration={300} gap={48} reverse={false}>
                        {[...products, ...products, ...products].map((product, index) => (
                            <div key={`row1-${index}`} className="flex flex-col items-center gap-4 w-[180px]">
                                <div className="w-full h-[180px] flex items-center justify-center">
                                    <img src={product.src} alt={product.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-medium text-foreground/70 text-center">{product.name}</h3>
                            </div>
                        ))}
                    </InfiniteSlider>

                    <InfiniteSlider duration={300} gap={48} reverse={true}>
                        {[...productsRow2, ...productsRow2, ...productsRow2, ...productsRow2].map((product, index) => (
                            <div key={`row2-${index}`} className="flex flex-col items-center gap-4 w-[180px]">
                                <div className="w-full h-[180px] flex items-center justify-center">
                                    <img src={product.src} alt={product.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-medium text-foreground/70 text-center">{product.name}</h3>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>

                <div className="text-center px-6">
                    <a href="https://home.sohub.com.bd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                        SEE ALL PRODUCTS & SOLUTIONS
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
