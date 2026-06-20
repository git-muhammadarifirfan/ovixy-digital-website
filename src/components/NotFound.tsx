import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft, HelpCircle, ShieldAlert } from "lucide-react";

interface NotFoundProps {
  onGoHome: (path: string) => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Entrance animation
    const tl = gsap.timeline();

    tl.fromTo(
      cardRef.current,
      { scale: 0.8, rotation: -3, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.3"
    );

    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    // Floating animation for decorative elements
    gsap.to(".floating-shape", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      rotation: "random(-20, 20)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    // Eye tracking logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!leftEyeRef.current || !rightEyeRef.current) return;

      const getEyeMovement = (eye: SVGCircleElement) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        
        // Limit movement radius to 8px
        const distance = Math.min(8, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 30);
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance
        };
      };

      const leftMove = getEyeMovement(leftEyeRef.current);
      const rightMove = getEyeMovement(rightEyeRef.current);

      gsap.to(leftEyeRef.current, {
        x: leftMove.x,
        y: leftMove.y,
        duration: 0.2,
        overwrite: "auto"
      });

      gsap.to(rightEyeRef.current, {
        x: rightMove.x,
        y: rightMove.y,
        duration: 0.2,
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] pt-28 pb-16 flex flex-col items-center justify-center relative overflow-hidden select-none px-4"
    >
      {/* Decorative Neo-Brutalist Background Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-[#FF6B6B] border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] floating-shape hidden md:block flex items-center justify-center">
        <ShieldAlert className="w-8 h-8 text-black" />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#4ADE80] border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] floating-shape hidden md:block flex items-center justify-center">
        <HelpCircle className="w-10 h-10 text-black" />
      </div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-[#3B82F6] border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] floating-shape hidden md:block" />

      {/* Main Error Card */}
      <div
        ref={cardRef}
        className="w-full max-w-xl bg-white border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 text-center relative z-10"
      >
        {/* Animated Eyes graphic - highly engaging neo-brutalist interaction */}
        <div className="flex justify-center gap-6 mb-8">
          <svg width="100" height="100" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <circle cx="50" cy="50" r="45" fill="#FFE600" stroke="black" strokeWidth="4" />
            <circle cx="50" cy="50" r="25" fill="white" stroke="black" strokeWidth="4" />
            <circle ref={leftEyeRef} cx="50" cy="50" r="10" fill="black" />
          </svg>
          <svg width="100" height="100" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <circle cx="50" cy="50" r="45" fill="#FFE600" stroke="black" strokeWidth="4" />
            <circle cx="50" cy="50" r="25" fill="white" stroke="black" strokeWidth="4" />
            <circle ref={rightEyeRef} cx="50" cy="50" r="10" fill="black" />
          </svg>
        </div>

        {/* 404 Text */}
        <div ref={titleRef} className="mb-6">
          <h1 className="font-sans text-7xl md:text-9xl font-black uppercase text-black tracking-tighter relative inline-block">
            404
            <span className="absolute -top-3 -right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12">
              ERROR!
            </span>
          </h1>
        </div>

        {/* Message */}
        <div ref={textRef} className="flex flex-col gap-6">
          <h2 className="font-sans text-xl md:text-2xl font-black uppercase text-black">
            Waduh! Halaman Hilang Kontak
          </h2>
          <p className="font-sans text-sm md:text-base text-neutral-700 font-bold leading-relaxed max-w-sm mx-auto">
            Halaman yang Anda cari tidak ada di radar kami. Mungkin telah dipindahkan, dihapus, atau sedang berlibur.
          </p>

          {/* Action Button */}
          <button
            onClick={() => onGoHome("/")}
            className="mt-4 bg-[#FFE600] text-black text-sm font-black px-8 py-4 rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2.5 mx-auto w-full sm:w-fit uppercase tracking-wider cursor-pointer font-sans"
          >
            <ArrowLeft className="w-4 h-4 text-black stroke-[3]" /> Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
