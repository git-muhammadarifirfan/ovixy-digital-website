import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, MessageSquare } from "lucide-react";
import lottie from "lottie-web";
import lottieAnimation from "./hero-lottie-v2.json";

interface HeroProps {
  onStartClick: () => void;
  onConsultClick: () => void;
  isReady: boolean;
}

export default function Hero({ onStartClick, onConsultClick, isReady }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const decorativeImageRef = useRef<HTMLDivElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  const [rotatorIndex, setRotatorIndex] = useState(0);
  const rotatingTexts = [
    "Bisnis UMKM",
    "Tugas Kuliah",
    "Penelitian Akhir",
    "Sistem Kasir",
    "Aplikasi Android",
    "Bisnis Menengah"
  ];

  const wordRef = useRef<HTMLSpanElement>(null);
  const rotatorContainerRef = useRef<HTMLSpanElement>(null);

  // Rotate text every 2.8 seconds with a vertical slide-up transition
  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      const nextIndex = (rotatorIndex + 1) % rotatingTexts.length;

      // Animate current word sliding up and out of view
      gsap.to(".rotating-word", {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          // Set state to new word
          setRotatorIndex(nextIndex);
          // Set new word position to below the viewport
          gsap.set(".rotating-word", { yPercent: 100 });
          // Slide the new word up to the center
          gsap.to(".rotating-word", {
            yPercent: 0,
            duration: 0.45,
            ease: "back.out(1.4)"
          });
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isReady, rotatorIndex]);

  // Smoothly transition the width of the rotator container as text changes
  useEffect(() => {
    if (wordRef.current && rotatorContainerRef.current) {
      const newWidth = wordRef.current.offsetWidth + 32; // text width + horizontal padding
      gsap.to(rotatorContainerRef.current, {
        width: newWidth,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  }, [rotatorIndex]);

  // Load Lottie Web Dev Loop Animation
  useEffect(() => {
    if (isReady && lottieContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lottieAnimation,
      });

      return () => anim.destroy();
    }
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;

    // Use GSAP context for clean garbage collection on component unmount
    const ctx = gsap.context(() => {
      // Reveal title static words with elastic pop
      const words = titleRef.current?.querySelectorAll(".word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            y: 50,
            scale: 0,
            opacity: 1,
            rotation: 5,
          },
          {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.8)",
          }
        );
      }

      // Smooth pop reveal for rotating text container
      gsap.fromTo(
        ".rotator-container",
        {
          scale: 0,
          rotation: -8,
        },
        {
          scale: 1,
          rotation: -2,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.4
        }
      );

      // Smooth bouncy reveal for description & CTA buttons
      gsap.fromTo(
        ".hero-fade",
        {
          y: 40,
          scale: 0,
          opacity: 1,
          rotation: -3,
        },
        {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.6)",
          delay: 0.45,
        }
      );

      // Animate decorative device mock image container scale & bounce
      if (decorativeImageRef.current) {
        gsap.fromTo(
          decorativeImageRef.current,
          {
            scale: 0,
            opacity: 1,
            y: 50,
            rotation: 4,
          },
          {
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.7,
            ease: "back.out(1.6)",
            delay: 0.65,
          }
        );
      }

      // Parallax smooth ScrollTrigger animations for background and images without layout shift
      gsap.to(".hero-parallax-bg", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-parallax-img", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isReady]);

  const prefixHeadline = "Solusi Digital Terbaik Untuk Membantu";
  const wordsArray = prefixHeadline.split(" ");

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-36 pb-16 max-w-5xl mx-auto relative overflow-hidden"
    >
      {/* Decorative Parallax Background shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-neutral-100 border-2 border-black rounded-lg -z-10 rotate-12 hero-parallax-bg hidden sm:block" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] rounded-full -z-10 hero-parallax-bg hidden sm:block" />

      {/* Main Headline with Rotating Word Container */}
      <h1
        ref={titleRef}
        className="font-sans text-[32px] sm:text-4xl md:text-5xl pb-4 lg:text-6xl font-extrabold text-black leading-[1.3] max-w-[950px] mb-6 sm:mb-8 flex flex-wrap justify-center items-center gap-x-2.5 gap-y-2.5 sm:gap-x-3.5 sm:gap-y-3.5 overflow-hidden"
      >
        {wordsArray.map((word, index) => (
          <span key={index} className="inline-block relative overflow-hidden py-0.5 sm:py-1">
            <span
              className="word inline-block"
              style={{ opacity: 0 }} // start hidden to prevent flashing glitch
            >
              {word}
            </span>
          </span>
        ))}
        <span
          ref={rotatorContainerRef}
          style={{ transform: "scale(0)" }} // Hide initially
          className="rotator-container inline-flex items-center justify-center bg-[#FEF08A] text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden h-[1.5em] sm:h-[1.7em] text-center rounded-xl align-middle w-auto"
        >
          <span
            ref={wordRef}
            className="rotating-word inline-block font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide leading-none whitespace-nowrap px-4 sm:px-5"
          >
            {rotatingTexts[rotatorIndex]}
          </span>
        </span>
      </h1>

      {/* Subtitle text wrapper with Copywriting update */}
      <p className="hero-fade opacity-0 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-3xl mb-8 sm:mb-10 leading-relaxed font-semibold px-2 sm:px-0">
        Kami menyediakan jasa pembuatan website profil bisnis, katalog produk digital, aplikasi kasir operasional, serta asistensi komputasi riset dan tugas akademik terstruktur.
      </p>

      {/* CTA primary & secondary buttons */}
      <div className="hero-fade opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-16 z-10">
        <button
          onClick={onStartClick}
          className="w-full sm:w-auto bg-black text-white text-sm font-black px-8 py-4.5 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[6px_6px_0px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          Mulai Sekarang <ArrowRight className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={onConsultClick}
          className="w-full sm:w-auto bg-white text-black text-sm font-black px-8 py-4.5 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          Konsultasi Gratis <MessageSquare className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Hero Big Mockup Device container with Lottie Animation */}
      <div
        ref={decorativeImageRef}
        className="w-full max-w-4xl rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-[280px] sm:h-[380px] lg:h-[440px] relative bg-neutral-50 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-0"
      >
        <div
          ref={lottieContainerRef}
          className="w-full h-full flex items-center justify-center p-4 sm:p-8 scale-100 hero-parallax-img"
        />
      </div>
    </section>
  );
}
