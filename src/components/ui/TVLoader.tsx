'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoOrange from '@/assets/logo-orange.svg';

interface TVLoaderProps {
  onComplete: () => void;
}

export const TVLoader = ({ onComplete }: TVLoaderProps) => {
  const [phase, setPhase] = useState<'black' | 'line' | 'on' | 'off' | 'done'>('black');

  useEffect(() => {
    // Simple TV timeline
    setTimeout(() => setPhase('line'), 400);
    setTimeout(() => setPhase('on'), 800);
    setTimeout(() => setPhase('off'), 4000);
    setTimeout(() => setPhase('done'), 4500);
    setTimeout(onComplete, 4600);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* TV Turn-On Line */}
          {phase === 'line' && (
            <motion.div
              className="absolute h-[2px] bg-white"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px 5px rgba(255,255,255,0.5)',
              }}
              initial={{ width: 0 }}
              animate={{ width: '100vw' }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Content - visible when ON */}
          {(phase === 'on' || phase === 'off') && (
            <motion.div
              className="flex flex-col items-center text-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'on' ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                Bangladesh
              </h1>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
                style={{ color: 'hsl(var(--primary))' }}
              >
                Deserves Better
              </h2>

              <div className="mt-10 flex flex-col items-center">
                <img src={logoOrange} alt="SOHUB" className="h-8 w-auto mb-2" />
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Solution Hub Technologies
                </p>
              </div>
            </motion.div>
          )}

          {/* TV Turn-Off */}
          {phase === 'off' && (
            <motion.div
              className="absolute h-[2px] bg-white"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 15px 3px rgba(255,255,255,0.6)',
              }}
              initial={{ width: '100vw' }}
              animate={{ width: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 1, 1] }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
