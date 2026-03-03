import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import smart home images
import doorLock from '@/assets/smart_home/door_lock.png';
import controlHub from '@/assets/smart_home/control_hub.png';
import smartCamera from '@/assets/smart_home/smart_camera.png';
import robotVacuum from '@/assets/smart_home/robot_vaccum.png';
import gasSensor from '@/assets/smart_home/gas_sensor.png';
import smartCabinet from '@/assets/smart_home/smart_cabinet.png';
import curtain from '@/assets/smart_home/curtain.png';
import threeGang from '@/assets/smart_home/3gang.png';
import smartBulb from '@/assets/smart_home/smart_bulb.png';
import securityCamera from '@/assets/smart_home/security_camera.png';
import waterSensor from '@/assets/smart_home/water.png';

// Import protect products
import sp05Panel from '@/assets/product/H700 Alarm panel.png';
import sosBand from '@/assets/product/B020-SOS-SOS-Band.png';
import doorSensor from '@/assets/product/door_Sensor_DS200.png';
import pMotionSensor from '@/assets/product/Motion_pr200.png';
import ptzCamera from '@/assets/product/camera-c11.png';
import wirelessSiren from '@/assets/product/WSR101-Wireless_siren.png';

// Import solution scene images
import studioScene from '@/assets/smart_solution/studio_optimized.jpg';
import apartmentScene from '@/assets/smart_solution/smart-home_optimized.jpg';
import multiplexScene from '@/assets/smart_solution/multiplex_optimized.jpg';
import protectScene from '@/assets/smart_solution/protect2.jpg';

type TabType = 'studio' | 'apartment' | 'multiplex' | 'protect';

const tabData = {
  studio: {
    image: studioScene,
    products: [
      { name: 'Door Lock', image: doorLock },
      { name: 'Control Hub', image: controlHub },
      { name: 'Security Camera', image: smartCamera },
      { name: 'Robot Vaccum', image: robotVacuum },
      { name: 'Gas Detector', image: gasSensor },
      { name: 'Smart Cabinet', image: smartCabinet },
    ]
  },
  apartment: {
    image: apartmentScene,
    products: [
      { name: 'Curtain Motor', image: curtain },
      { name: 'Door Lock', image: doorLock },
      { name: 'Control Hub', image: controlHub },
      { name: 'Robot Vacuum', image: robotVacuum },
      { name: 'Security Camera', image: smartCamera },
      { name: 'Smart Cabinet', image: smartCabinet },
    ]
  },
  multiplex: {
    image: multiplexScene,
    products: [
      { name: 'Control Hub', image: controlHub },
      { name: '3-Gang Switch', image: threeGang },
      { name: 'Smart Bulb', image: smartBulb },
      { name: 'Robot Vacuum', image: robotVacuum },
      { name: 'Security Camera', image: securityCamera },
      { name: 'Water Sensor', image: waterSensor },
    ]
  },
  protect: {
    image: protectScene,
    products: [
      { name: 'SP-05 Panel', image: sp05Panel },
      { name: 'SOS Band', image: sosBand },
      { name: 'Door Sensor', image: doorSensor },
      { name: 'Motion Sensor', image: pMotionSensor },
      { name: 'Indoor PTZ Camera', image: ptzCamera },
      { name: 'Wireless Siren', image: wirelessSiren },
    ]
  }
};

const tabs: TabType[] = ['studio', 'apartment', 'multiplex', 'protect'];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopSmartHomeSolutions = () => {
  const [activeTab, setActiveTab] = useState<TabType>('studio');

  return (
    <section className="pt-0 pb-12 md:pb-16 bg-background">
      <div className="container-main max-w-6xl">
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-xs md:text-sm font-medium transition-all ${activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-foreground/70 hover:bg-secondary'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Scene Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={tabData[activeTab].image}
                  alt={`${activeTab} scene`}
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                {tabData[activeTab].products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-full aspect-square mb-2 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[60%] max-h-[60%] object-contain"
                      />
                    </div>
                    <h5 className="text-[10px] md:text-xs font-medium text-foreground/80">
                      {product.name}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — compact tabs, smaller scene,
   tighter product grid, optimized spacing
   ────────────────────────────────────────────── */
const MobileSmartHomeSolutions = () => {
  const [activeTab, setActiveTab] = useState<TabType>('studio');

  return (
    <section className="pt-0 pb-10 bg-background">
      <div className="px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-zinc-800 overflow-hidden">
          {/* Pill tabs — horizontal scroll */}
          <div className="flex gap-0 border-b border-gray-100 dark:border-zinc-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 text-[12px] font-semibold transition-all ${activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-foreground/60'
                  }`}
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {/* Scene Image */}
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={tabData[activeTab].image}
                  alt={`${activeTab} scene`}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Products Grid — 3 columns, compact */}
              <div className="grid grid-cols-3 gap-3">
                {tabData[activeTab].products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                    className="flex flex-col items-center text-center py-2"
                  >
                    <div className="w-full aspect-square mb-1.5 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[55%] max-h-[55%] object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h5
                      className="text-[10px] font-medium text-foreground/70 leading-tight"
                      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                    >
                      {product.name}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const SmartHomeSolutions = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return <MobileSmartHomeSolutions />;
  }

  return <DesktopSmartHomeSolutions />;
};
