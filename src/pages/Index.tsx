import { lazy, Suspense, useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { SocialProof } from '@/components/sections/SocialProof';
import { Footer } from '@/components/layout/Footer';

// Lazy load all below-the-fold sections to reduce initial bundle and TBT
const WhyWeExist       = lazy(() => import('@/components/sections/WhyWeExist').then(m => ({ default: m.WhyWeExist })));
const WhatSohubIs      = lazy(() => import('@/components/sections/WhatSohubIs').then(m => ({ default: m.WhatSohubIs })));
const Initiatives      = lazy(() => import('@/components/sections/Initiatives').then(m => ({ default: m.Initiatives })));
const FeatureShowcase  = lazy(() => import('@/components/sections/FeatureShowcase').then(m => ({ default: m.FeatureShowcase })));
const ShopShowcase     = lazy(() => import('@/components/sections/ShopShowcase').then(m => ({ default: m.ShopShowcase })));
const AIExperiments    = lazy(() => import('@/components/sections/AIExperiments').then(m => ({ default: m.AIExperiments })));
const OurCustomers     = lazy(() => import('@/components/sections/OurCustomers').then(m => ({ default: m.OurCustomers })));
const WhyWeAreUnique   = lazy(() => import('@/components/sections/WhyWeAreUnique').then(m => ({ default: m.WhyWeAreUnique })));
const People           = lazy(() => import('@/components/sections/People').then(m => ({ default: m.People })));
const OurInitiatives   = lazy(() => import('@/components/sections/OurInitiatives').then(m => ({ default: m.OurInitiatives })));

const Index = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Defer rendering non-critical sections to give CPU time to FCP/LCP
    const loadDeferred = () => setIsReady(true);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadDeferred, { timeout: 2000 });
    } else {
      setTimeout(loadDeferred, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SocialProof />
        {isReady && (
          <Suspense fallback={null}>
            <WhyWeExist />
            <WhatSohubIs />
            <Initiatives />
            <FeatureShowcase />
            <ShopShowcase />
            <AIExperiments />
            <OurCustomers />
            <WhyWeAreUnique />
            <People />
            <OurInitiatives />
          </Suspense>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

