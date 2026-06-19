import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });
    tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(textRef.current, { opacity: 0, duration: 0.3, delay: 0.4 })
      .to(containerRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" });
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-navy text-white">
      <div ref={textRef} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-brand-purple">
        Ovixy <span class="text-brand-blue">Digital.</span>
      </div>
    </div>
  );
}
