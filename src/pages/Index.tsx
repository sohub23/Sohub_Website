import { Navbar } from '@/components/layout/Navbar';

import { SocialProof } from '@/components/sections/SocialProof';
import { Initiatives } from '@/components/sections/Initiatives';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { ShopShowcase } from '@/components/sections/ShopShowcase';
import { AIExperiments } from '@/components/sections/AIExperiments';
import { SmartLife } from '@/components/sections/SmartLife';
import { SmartHomeSolutions } from '@/components/sections/SmartHomeSolutions';
import { SuccessfulProjects } from '@/components/sections/SuccessfulProjects';
import { WhyWeAreUnique } from '@/components/sections/WhyWeAreUnique';
import { IoTEcosystems } from '@/components/sections/IoTEcosystems';
import { WhyWeExist } from '@/components/sections/WhyWeExist';
import { OurCustomers } from '@/components/sections/OurCustomers';
import { WhatSohubIs } from '@/components/sections/WhatSohubIs';
import { SohubStandard } from '@/components/sections/SohubStandard';
import { EcosystemExplorer } from '@/components/sections/EcosystemExplorer';
import { OurApproach } from '@/components/sections/OurApproach';
import { Audience } from '@/components/sections/Audience';
import { Transparency } from '@/components/sections/Transparency';
import { People } from '@/components/sections/People';
import { OurInitiatives } from '@/components/sections/OurInitiatives';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SocialProof />
        <WhyWeExist />
        <WhatSohubIs />
        <Initiatives />
        <FeatureShowcase />
        <ShopShowcase />
        <AIExperiments />
        {/* <SmartLife /> */}
        {/* <SmartHomeSolutions /> */}
        {/* <SuccessfulProjects /> */}
        <OurCustomers />
        <WhyWeAreUnique />
        {/* <IoTEcosystems /> */}
        {/* <SohubStandard /> */}
        {/* <OurApproach /> */}
        {/* <Audience /> */}
        {/* <Transparency /> */}
        <People />
        <OurInitiatives />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
