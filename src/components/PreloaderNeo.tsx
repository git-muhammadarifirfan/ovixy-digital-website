import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function PreloaderNeo({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const paperBlueRef = useRef<HTMLDivElement>(null);
  const paperGreenRef = useRef<HTMLDivElement>(null);
  const paperWhiteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A much faster, simpler, but punchy neo-brutalist preloader
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // 1. Text pop in
    tl.fromTo(
      textRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" }
    );

    // 2. Loading bar fills up rapidly
    tl.to(loadingBarRef.current, {
      width: "100%",
      duration: 0.6,
      ease: "power2.inOut"
    });

    // 3. Quick exit animation (slide left / collapse)
    tl.to(
      textRef.current,
      { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" },
      "+=0.1"
    );
    
    tl.to(
      bgRef.current,
      {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut"
      },
      "-=0.1"
    );

    tl.to(
      paperBlueRef.current,
      { yPercent: -100, duration: 0.6, ease: "power3.inOut" },
      "-=0.45"
    );

    tl.to(
      paperGreenRef.current,
      { yPercent: -100, duration: 0.6, ease: "power3.inOut" },
      "-=0.45"
    );

    tl.to(
      paperWhiteRef.current,
      { yPercent: -100, duration: 0.6, ease: "power3.inOut" },
      "-=0.45"
    );

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto select-none"
    >
      <div ref={paperWhiteRef} className="absolute inset-0 bg-white z-[6] border-b-8 border-black" />
      <div ref={paperGreenRef} className="absolute inset-0 bg-[#4ADE80] z-[7] border-b-8 border-black" />
      <div ref={paperBlueRef} className="absolute inset-0 bg-[#3B82F6] z-[8] border-b-8 border-black" />
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[#FFE600] z-10 flex flex-col items-center justify-center border-b-8 border-black shadow-[inset_0_-10px_0_0_rgba(0,0,0,1)]"
      >
        <div className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-4 w-64 max-w-[80vw]">
          <h1
            ref={textRef}
            className="font-sans text-3xl font-black uppercase tracking-tighter text-black"
          >
            OVIXY.
          </h1>
          
          <div className="w-full h-3 border-2 border-black rounded-full overflow-hidden bg-neutral-100 p-0.5">
            <div
              ref={loadingBarRef}
              className="h-full bg-black rounded-full w-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
