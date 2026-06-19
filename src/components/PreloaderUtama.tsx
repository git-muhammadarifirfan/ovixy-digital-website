/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null); // first orange accent curtain
  const panel2Ref = useRef<HTMLDivElement>(null); // second black curtain
  const contentCardRef = useRef<HTMLDivElement>(null);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Simulated fast loading loop
    const duration = 1400; // 1.4s total load
    const intervalTime = 16;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const nextPercent = Math.min(Math.round((step / steps) * 100), 100);
      setPercent(nextPercent);

      if (nextPercent === 100) {
        clearInterval(timer);
        // Snappy Neo-Brutalist Paper Shuffle sliding escape animation
        triggerExitAnimations();
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const triggerExitAnimations = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onCompleteRef.current();
      }
    });

    // Snappy shrink of the upper content card
    tl.to(contentCardRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.95,
      duration: 0.35,
      ease: "power2.in",
    });

    // Staggered slide-up of folders/curtains (Paper sweep sensation)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.1");

    tl.to(panel2Ref.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.5");

    tl.to(panel1Ref.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.52");
  };

  // Neo-brutalist progress block characters (■■■■■□□□□□)
  const filledBlocksCount = Math.round(percent / 10);
  const blockProgressString = "◼".repeat(filledBlocksCount) + "◻".repeat(10 - filledBlocksCount);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden select-none pointer-events-auto">
      {/* 1st Layer: Yellow Accent Board Sheet */}
      <div
        ref={panel1Ref}
        className="absolute inset-0 bg-[#FFE600] z-20 border-b-6 border-black shadow-[inset_0_-10px_0_0_rgba(0,0,0,1)]"
      />

      {/* 2nd Layer: Midnight Black Board Sheet */}
      <div
        ref={panel2Ref}
        className="absolute inset-0 bg-black z-30 border-b-6 border-neutral-900 shadow-[inset_0_-10px_0_0_rgba(0,0,0,0.5)]"
      />

      {/* 3rd Layer: Main Slate White Card Panel */}
      <div
        ref={containerRef}
        className="absolute inset-0 bg-[#F5F5F5] text-black flex flex-col justify-center items-center z-40 px-6 border-b-6 border-black"
      >
        <div
          ref={contentCardRef}
          className="max-w-sm w-full bg-white border-4 border-black p-7 md:p-9 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center flex flex-col gap-6 items-center"
        >
          {/* Badge Label */}
          <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-black animate-pulse">
            SISTEM MEMUAT
          </span>

          <div className="flex flex-col gap-1.5">
            <h1 className="font-sans text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
              OVIXY DIGITAL
            </h1>
            <p className="font-sans text-[11px] text-text-muted font-black tracking-widest uppercase mt-1">
              Digitalisasi Bisnis & UMKM
            </p>
          </div>

          {/* Brutalist status monitor */}
          <div className="w-full flex flex-col gap-3 items-center mt-1">
            <div className="font-mono text-2xl font-black text-black">
              [ {percent.toString().padStart(3, "0")}% ]
            </div>

            {/* Brutalist Progress String blocks */}
            <div className="font-mono text-base tracking-widest text-black select-none font-bold">
              {blockProgressString}
            </div>

            <div className="w-full bg-neutral-100 border-2 border-black h-4 rounded-full overflow-hidden p-0.5 mt-1 relative">
              <div
                className="bg-black h-full rounded-full transition-all duration-75"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase mt-1">
            Membangun Estetika Radikal
          </span>
        </div>
      </div>
    </div>
  );
}
