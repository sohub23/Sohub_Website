import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

import nurseImg from '@/assets/projects/sohub-project-hub-25-nurse-calling-system.png';
import auditoriumImg from '@/assets/projects/sohub-project-hub-25-iot-auditorium.png';
import fireAlarmImg from '@/assets/projects/sohub-project-hub-25-smoke-fire-alarm.png';
import conferenceImg from '@/assets/projects/sohub-project-hub-25-conferance-room.png';
import pdlcImg from '@/assets/projects/sohub-project-hub-25-pdlc-flim.png';
import hondaImg from '@/assets/projects/sohub-project-hub-25-honda.png';

const projects = [
  {
    title: 'Nurse Calling System',
    description:
      "NurseCare is #1 world's fully comprehensive, smart, interactive IP nurse call system that combines nursing documentation and healthcare management. It is fully DIN VDE certified for the highest standards of safety. Combine your nurse call system with healthcare management and nursing documentation in one device.",
    image: nurseImg,
    link: '#',
  },
  {
    title: 'Smart IoT Base Auditorium',
    description:
      'In the era of rapid technological advancement, the integration of smart solutions has become imperative for optimizing various aspects of our daily lives. The project embodies this spirit of innovation and aims to transform the traditional auditorium into an intelligent and responsive space.',
    image: auditoriumImg,
    link: '#',
  },
  {
    title: 'Next Generation Smart Smoke Detector and Fire Alarm System',
    description:
      'Revolutionizing Safety: IoT-Enabled Smoke Detection System for Enhanced Organizational Security. Implementing an IoT-enabled smoke detection system not only enhances the safety of an organization but also reflects a commitment to leveraging technology for proactive risk management.',
    image: fireAlarmImg,
    link: '#',
  },
  {
    title: 'Smart Conference Room',
    description:
      'In an era marked by technological advancements and a growing reliance on intelligent systems, our team takes great pride in presenting the Smart Conference Room implemented at the Airforce MES Office. This innovative project leverages cutting-edge technologies to create a seamlessly integrated and efficient workspace.',
    image: conferenceImg,
    link: '#',
  },
  {
    title: 'Smart PDLC Film And Smart Roller Curtain',
    description:
      'Introducing the latest upgrade to the conference room at Honda Showroom, Rangs Babylonia, Tejgaon: Motorized Roller Curtains with PDLC Film. This cutting-edge technology enhances ambiance and functionality, marrying modern design with advanced features.',
    image: pdlcImg,
    link: '#',
  },
  {
    title: 'Honda Queue Management Software',
    description:
      'The Honda Queue Management Software is a comprehensive solution designed to streamline customer service processes and optimize staff efficiency at Honda service centers. It offers a centralized platform where staff members can manage customer queues, monitor service areas, and prioritize tasks effectively.',
    image: hondaImg,
    link: '#',
  },
];

export const SuccessfulProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const wheelCooldown = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Native wheel listener with { passive: false } to block page scroll
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handler = (e: WheelEvent) => {
      if (wheelCooldown.current) {
        e.preventDefault();
        return;
      }

      const threshold = 30;
      if (Math.abs(e.deltaY) < threshold) return;

      e.preventDefault();
      e.stopPropagation();
      wheelCooldown.current = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        wheelCooldown.current = false;
      }, 600);
    };

    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  // Autoplay — pauses when hovering
  useEffect(() => {
    if (isHovering) return;
    const autoplay = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(autoplay);
  }, [isHovering]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[48px] font-normal tracking-tight text-black dark:text-white mb-4">
            Our Successful Projects
          </h2>
        </motion.div>

        {/* Blog Slider Card — scroll-interactive */}
        <div
          ref={cardRef}
          className="relative mx-auto w-[95%] max-w-[1000px] bg-white dark:bg-zinc-900 rounded-[25px]"
          style={{
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '25px',
            minHeight: '400px',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Stacked slides — all rendered, only active is visible */}
          <div className="relative" style={{ minHeight: '350px' }}>
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-10"
                  style={{
                    position: index === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  {/* Image — warm beige padded frame */}
                  <div
                    className="w-[90%] md:w-[380px] flex-shrink-0 md:-ml-[55px] rounded-[25px] overflow-hidden max-md:mx-auto md:mt-0 p-4"
                    style={{
                      background: '#f0dcc8',
                      boxShadow:
                        '4px 13px 30px 1px rgba(170, 113, 38, 0.2)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain block rounded-[16px]"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out 0.3s',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pr-[25px] max-md:mt-4 max-md:text-center max-md:px-[30px]">
                    <div
                      className="text-[24px] font-bold text-[#0d0925] dark:text-white mb-[20px] leading-tight"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'translateY(0)'
                          : 'translateY(25px)',
                        transition:
                          'opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s',
                      }}
                    >
                      {project.title}
                    </div>

                    <p
                      className="text-[#4e4a67] dark:text-foreground/70 mb-[30px] leading-[1.5em] text-[15px]"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'translateY(0)'
                          : 'translateY(25px)',
                        transition:
                          'opacity 0.4s ease-out 0.4s, transform 0.4s ease-out 0.4s',
                      }}
                    >
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      className="inline-flex justify-center text-center px-[35px] py-[15px] rounded-[50px] text-white font-medium tracking-[1px] text-sm no-underline max-sm:w-full"
                      style={{
                        backgroundImage:
                          'linear-gradient(147deg, #fe8a39 0%, #fdab38 74%)',
                        boxShadow:
                          '0px 14px 80px rgba(252, 56, 56, 0.4)',
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'translateY(0)'
                          : 'translateY(25px)',
                        transition:
                          'opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s',
                      }}
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots — Vertical on desktop, Horizontal on mobile */}
          <div
            className="absolute z-20 
              md:right-[20px] md:top-1/2 md:-translate-y-1/2 md:w-[11px] md:flex md:flex-col md:items-center md:gap-[8px]
              max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-[10px] max-md:top-auto max-md:translate-y-0 max-md:flex max-md:flex-row max-md:justify-center max-md:items-center max-md:gap-[5px] max-md:w-full"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`block rounded-[10px] transition-all duration-300 ${activeIndex === index
                  ? 'md:w-[11px] md:h-[30px] max-md:w-[30px] max-md:h-[11px]'
                  : 'w-[11px] h-[11px]'
                  }`}
                style={
                  activeIndex === index
                    ? {
                      background:
                        'linear-gradient(147deg, #fe8a39 0%, #fdab38 74%)',
                      boxShadow:
                        '0px 0px 20px rgba(252, 56, 56, 0.3)',
                      opacity: 1,
                    }
                    : {
                      background: '#062744',
                      opacity: 0.2,
                    }
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
