import { useState, useEffect } from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

import mes00 from '@/assets/new/mes00.png';
import huawei_customer from '@/assets/new/huawei_customer.png';
import rangs_customer from '@/assets/new/rangs_customer.png';
import shell_customer from '@/assets/new/shell_customer.png';
import DHS1 from '@/assets/new/DHS-1.png';
import brain_station_logo from '@/assets/new/brain_station_logo.png';
import continen from '@/assets/new/continen.png';
import sslr from '@/assets/new/sslr.png';
import braincraft0 from '@/assets/new/braincraft0.png';
import sujon0 from '@/assets/new/sujon0.png';
import savro_customer from '@/assets/new/savro_customer.png';

import zanala0 from '@/assets/new/zanala0.png';
import ayana0 from '@/assets/new/ayana0.png';
import basecamp from '@/assets/new/basecamp.png';
import unified0 from '@/assets/new/unified0.png';
import kyamch77 from '@/assets/new/kyamch77.png';
import dream1 from '@/assets/new/dream1.png';
import national0 from '@/assets/new/national0.png';
import arms from '@/assets/new/arms.png';
import spoon00 from '@/assets/new/99spoon00.png';
import autoo from '@/assets/new/autoo.png';
import mowrey887 from '@/assets/new/mowrey887.png';

const row1 = [
    { name: 'Airforce MES', src: mes00 },
    { name: 'Huawei', src: huawei_customer },
    { name: 'Rangs Properties', src: rangs_customer },
    { name: 'Shell', src: shell_customer },
    { name: 'DHS Motors', src: DHS1, scale: 1.5 },
    { name: 'Brain Station', src: brain_station_logo, scale: 1.5 },
    { name: 'Continental Garments', src: continen, scale: 2 },
    { name: 'SSL Wireless', src: sslr, scale: 1.3 },
    { name: 'BrainCraft', src: braincraft0, scale: 1.5 },
    { name: 'Sujon Holdings Ltd', src: sujon0, scale: 0.85 },
    { name: 'Savor', src: savro_customer }
];

const row2 = [
    { name: 'Zanala Bangladesh LTD', src: zanala0 },
    { name: 'Ayna Decor', src: ayana0 },
    { name: 'BASECAMP', src: basecamp },
    { name: 'Unified IT', src: unified0 },
    { name: 'KYAMCH', src: kyamch77 },
    { name: 'Dream Cast', src: dream1 },
    { name: 'National Health.TV', src: national0 },
    { name: 'Ahmed Hossain Arms Co.', src: arms },
    { name: '99 Innovations', src: spoon00, scale: 1.3 },
    { name: 'Minilease', src: autoo, scale: 1.3 },
    { name: 'Mowrey Elevator', src: mowrey887, scale: 1.3 }
];

const DesktopOurCustomers = () => {
    return (
        <section className="py-24 bg-background overflow-hidden flex flex-col items-center">
            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-[48px] font-normal tracking-tight text-[#0d0925] dark:text-white leading-[1.15]">
                        Our <span className="font-semibold text-primary">Customers</span>
                    </h2>
                </div>
            </div>

            <div className="w-full space-y-12 relative">
                {/* Row 1 */}
                <div className="relative h-[80px] w-full mt-4">
                    <InfiniteSlider duration={500} gap={32} className="flex h-full w-full items-center">
                        {[...row1, ...row1, ...row1, ...row1].map((item: any, idx) => (
                            <div key={`r1-${item.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center group mx-2 w-32 h-16">
                                <div style={{ transform: item.scale ? `scale(${item.scale})` : undefined }} className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain transition-all duration-300 transform group-hover:scale-[1.15]"
                                    />
                                </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 left-0 h-full w-[150px]'
                        direction='left'
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 right-0 h-full w-[150px]'
                        direction='right'
                        blurIntensity={1}
                    />
                </div>

                {/* Row 2 */}
                <div className="relative h-[80px] w-full">
                    <InfiniteSlider duration={500} gap={32} reverse className="flex h-full w-full items-center">
                        {[...row2, ...row2, ...row2, ...row2].map((item: any, idx) => (
                            <div key={`r2-${item.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center group mx-2 w-32 h-16">
                                <div style={{ transform: item.scale ? `scale(${item.scale})` : undefined }} className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain transition-all duration-300 transform group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 left-0 h-full w-[150px]'
                        direction='left'
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className='pointer-events-none absolute top-0 right-0 h-full w-[150px]'
                        direction='right'
                        blurIntensity={1}
                    />
                </div>
            </div>
        </section>
    );
};

const MobileOurCustomers = () => {
    return (
        <section className="py-10 bg-background overflow-hidden flex flex-col items-center">
            <div className="px-4 text-center mb-6">
                <h2
                    className="text-[22px] font-medium tracking-tight text-[#0d0925] dark:text-white leading-[1.2] mb-3"
                    style={{
                        fontFamily:
                            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                >
                    Our <span className="font-semibold text-primary">Customers</span>
                </h2>
            </div>

            <div className="w-full space-y-6 relative">
                {/* Row 1 */}
                <div className="relative h-[60px] w-full mt-2">
                    <InfiniteSlider duration={500} gap={12} className="flex h-full w-full items-center">
                        {[...row1, ...row1, ...row1, ...row1].map((item: any, idx) => (
                            <div key={`r1-mob-${item.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center group mx-1 w-24 h-12">
                                <div style={{ transform: item.scale ? `scale(${item.scale})` : undefined }} className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>

                {/* Row 2 */}
                <div className="relative h-[60px] w-full">
                    <InfiniteSlider duration={500} gap={12} reverse className="flex h-full w-full items-center">
                        {[...row2, ...row2, ...row2, ...row2].map((item: any, idx) => (
                            <div key={`r2-mob-${item.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center group mx-1 w-24 h-12">
                                <div style={{ transform: item.scale ? `scale(${item.scale})` : undefined }} className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

export const OurCustomers = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileOurCustomers />;
    }

    return <DesktopOurCustomers />;
};
