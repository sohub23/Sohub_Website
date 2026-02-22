import { useState } from 'react';
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
      { name: 'SP-05 Panel', image: controlHub },
      { name: 'SOS Band', image: smartCamera },
      { name: 'Door Sensor', image: gasSensor },
      { name: 'Motion Sensor', image: waterSensor },
      { name: 'Indoor PTZ Camera', image: smartCamera },
      { name: 'Wireless Siren', image: securityCamera },
    ]
  }
};

export const SmartHomeSolutions = () => {
  const [activeTab, setActiveTab] = useState<TabType>('studio');

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-[48px] font-normal tracking-tight text-black dark:text-white mb-4">
            Our Smart Home Solutions & Products
          </h2>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {(['studio', 'apartment', 'multiplex', 'protect'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-xs md:text-sm font-medium transition-all ${
                  activeTab === tab
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
