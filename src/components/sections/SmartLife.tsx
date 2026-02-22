import { InfiniteSlider } from "@/components/ui/infinite-slider";

const products = [
    { name: 'Smart Lock', src: '/src/assets/compressed/Smart_Lock.png' },
    { name: 'Lighting', src: '/src/assets/compressed/Lighting.png' },
    { name: 'Sensor', src: '/src/assets/compressed/Sensors.png' },
    { name: 'Major Appliance', src: '/src/assets/compressed/Major_appliance.png' },
    { name: 'Small Appliance', src: '/src/assets/compressed/Small_appliance.png' },
    { name: 'Kitchen Appliance', src: '/src/assets/compressed/kitchen_appliance.png' },
    { name: 'Pets', src: '/src/assets/compressed/For_pets.png' },
    { name: 'Electrical', src: '/src/assets/compressed/Electricals.png' },
];

const productsRow2 = [
    { name: 'Cleaning Robot', src: '/src/assets/compressed/Smart_cleaning_robots.png' },
    { name: 'Camera', src: '/src/assets/compressed/Smart_cameras.png' },
    { name: 'Smart Lock', src: '/src/assets/compressed/Smart_Lock.png' },
    { name: 'Gateway', src: '/src/assets/compressed/Smart_gateway.png' },
    { name: 'Energy-Saving', src: '/src/assets/compressed/Smart_savings.png' },
    { name: 'Entertainment', src: '/src/assets/compressed/Entartainments.png' },
];

export const SmartLife = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground text-center mb-16 px-6">
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
