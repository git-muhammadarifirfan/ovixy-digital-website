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
          className="max-w-md w-full bg-white border-4 border-black rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-4 border-black font-mono text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black" />
            </div>
            <span className="font-bold tracking-wider">OVIXY_STUDIO_CORE.EXE</span>
            <div className="w-4 h-4 flex items-center justify-center border border-white/30 text-[9px] font-bold">X</div>
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-5 text-start font-mono">
            {/* Header Title inside terminal */}
            <div className="border-b-2 border-dashed border-black pb-4">
              <div className="text-[10px] bg-black text-[#FFE600] px-2 py-1 w-fit mb-2 font-bold tracking-widest uppercase">
                SYSTEM PREPARATION
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-black tracking-tight leading-none uppercase">
                OVIXY DIGITAL
              </h1>
            </div>

            {/* Simulated compilation terminal logs */}
            <div className="bg-black text-[#27C93F] p-4 rounded-none border-2 border-black h-36 flex flex-col gap-1 text-[11px] overflow-hidden leading-relaxed shadow-[inner_3px_3px_0_0_rgba(0,0,0,0.5)]">
              <div className="text-white/40">-- COMPILER ACTIVE --</div>
              {percent >= 0 && <div>&gt; Loading core components... [OK]</div>}
              {percent >= 20 && <div>&gt; Generating layout grid & offsets... [OK]</div>}
              {percent >= 45 && <div>&gt; Injecting neo-brutalist paint rules... [OK]</div>}
              {percent >= 70 && <div>&gt; Compiling interactive physics... [OK]</div>}
              {percent >= 90 && <div>&gt; Finalizing pre-loader sequence... [OK]</div>}
              {percent >= 100 && <div className="text-white animate-pulse">&gt; Ready for pop-in!</div>}
            </div>

            {/* Brutalist Stripe Progress Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end font-bold text-xs">
                <span className="uppercase text-black">Progress</span>
                <span className="text-lg font-black">{percent}%</span>
              </div>

              <div className="w-full bg-white border-3 border-black h-7 rounded-none p-0.5 overflow-hidden">
                <div
                  className="h-full transition-all duration-75"
                  style={{
                    width: `${percent}%`,
                    background: `repeating-linear-gradient(45deg, #000000, #000000 12px, #FFE600 12px, #FFE600 24px)`
                  }}
                />
              </div>
            </div>

            {/* Bottom status text */}
            <div className="flex items-center justify-between text-[9px] text-neutral-500 font-bold uppercase pt-2 border-t border-gray-200">
              <span>ESTETIKA RADIKAL V1.0</span>
              <span className="animate-pulse">BUILDING GRIDS...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
