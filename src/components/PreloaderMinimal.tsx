/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function PreloaderMinimal({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null); // first accent curtain
  const panel2Ref = useRef<HTMLDivElement>(null); // second black curtain
  const centerBlockRef = useRef<HTMLDivElement>(null);
  const spinnerCubeRef = useRef<HTMLDivElement>(null);
  
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // High-speed load simulation (approx. 700ms total)
    const duration = 700;
    const intervalTime = 16;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const nextPercent = Math.min(Math.round((step / steps) * 100), 100);
      setPercent(nextPercent);

      if (nextPercent === 100) {
        clearInterval(timer);
        triggerExitAnimations();
      }
    }, intervalTime);

    // Continuous spring-like rotation of the center cube
    if (spinnerCubeRef.current) {
      gsap.to(spinnerCubeRef.current, {
        rotation: 360,
        duration: 1.2,
        repeat: -1,
        ease: "back.inOut(2.5)",
      });
    }

    return () => clearInterval(timer);
  }, []);

  const triggerExitAnimations = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onCompleteRef.current();
      }
    });

    // Snappy scale out of center elements
    tl.to(centerBlockRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.25,
      ease: "power2.in",
    });

    // Curtains slide-up
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.inOut"
    }, "-=0.05");

    tl.to(panel2Ref.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.inOut"
    }, "-=0.42");

    tl.to(panel1Ref.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.inOut"
    }, "-=0.44");
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden select-none pointer-events-auto flex flex-col justify-between">
      {/* 1st Curtain Layer: Neon Green Sheet */}
      <div
        ref={panel1Ref}
        className="absolute inset-0 bg-[#A3E635] z-20 border-b-6 border-black shadow-[inset_0_-10px_0_0_rgba(0,0,0,1)]"
      />

      {/* 2nd Curtain Layer: Midnight Black Sheet */}
      <div
        ref={panel2Ref}
        className="absolute inset-0 bg-black z-30 border-b-6 border-neutral-900 shadow-[inset_0_-10px_0_0_rgba(0,0,0,0.5)]"
      />

      {/* Main Loader Canvas */}
      <div
        ref={containerRef}
        className="absolute inset-0 bg-[#F5F5F5] text-black flex flex-col justify-between items-center z-40 border-b-6 border-black bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:20px_20px]"
      >
        {/* Top Marquee scrolling banner */}
        <div className="w-full bg-black text-white py-2.5 border-b-4 border-black overflow-hidden flex whitespace-nowrap font-mono text-xs font-black tracking-widest select-none">
          <div className="animate-infinite-scroll flex gap-8 shrink-0 min-w-full justify-around pr-8">
            <span>OVIXY DIGITAL ✦ LAUNCHING SYSTEM</span>
            <span>OVIXY DIGITAL ✦ LAUNCHING SYSTEM</span>
            <span>OVIXY DIGITAL ✦ LAUNCHING SYSTEM</span>
            <span>OVIXY DIGITAL ✦ LAUNCHING SYSTEM</span>
          </div>
        </div>

        {/* Center Minimalist Counter & Spinner */}
        <div 
          ref={centerBlockRef}
          className="flex flex-col items-center gap-6"
        >
          {/* Spring Rotating Cube */}
          <div 
            ref={spinnerCubeRef}
            className="w-14 h-14 bg-black border-4 border-black shadow-[6px_6px_0px_0px_#FFE600] flex items-center justify-center rotate-0"
          >
            <div className="w-4 h-4 bg-[#FFE600] border-2 border-black" />
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center font-mono">
            <span className="bg-[#FFE600] text-black px-3.5 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider">
              System Readying
            </span>
            <div className="text-3xl font-black text-black mt-1">
              [ {percent.toString().padStart(3, "0")}% ]
            </div>
          </div>
        </div>

        {/* Bottom Marquee scrolling banner (reverses direction) */}
        <div className="w-full bg-black text-white py-2.5 border-t-4 border-black overflow-hidden flex whitespace-nowrap font-mono text-xs font-black tracking-widest select-none">
          <div className="animate-infinite-scroll-reverse flex gap-8 shrink-0 min-w-full justify-around pr-8">
            <span>ESTETIKA RADIKAL ✦ CORE READY</span>
            <span>ESTETIKA RADIKAL ✦ CORE READY</span>
            <span>ESTETIKA RADIKAL ✦ CORE READY</span>
            <span>ESTETIKA RADIKAL ✦ CORE READY</span>
          </div>
        </div>
      </div>
      
      {/* Small Tailwind Animation helper for Marquee scrolling if not already configured */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes infinite-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 18s linear infinite;
        }
        .animate-infinite-scroll-reverse {
          animation: infinite-scroll-reverse 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
