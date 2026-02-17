import { Navbar } from '@/components/layout/Navbar';

import { SocialProof } from '@/components/sections/SocialProof';
import { Initiatives } from '@/components/sections/Initiatives';
import { WhyWeExist } from '@/components/sections/WhyWeExist';
import { WhatSohubIs } from '@/components/sections/WhatSohubIs';
import { SohubStandard } from '@/components/sections/SohubStandard';
import { EcosystemExplorer } from '@/components/sections/EcosystemExplorer';
import { OurApproach } from '@/components/sections/OurApproach';
import { Audience } from '@/components/sections/Audience';
import { Transparency } from '@/components/sections/Transparency';
import { People } from '@/components/sections/People';
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
        <SohubStandard />
        <OurApproach />
        <Audience />
        <Transparency />
        <People />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
