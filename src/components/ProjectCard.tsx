import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { gsap } from "gsap";

interface ProjectCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  dataAlt: string;
  features?: string[];
  detailOverview?: string;
}

export default function ProjectCard({
  name,
  category,
  description,
  image,
  dataAlt,
  features,
  detailOverview,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate in the backdrop
      gsap.fromTo(
        modalOverlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      // Animate in the neo-brutalist box with a bouncy scale-up pop
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.82, y: 40, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.5)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    // Smooth pop-out scale-down & fade-out using GSAP
    gsap.to(modalOverlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(modalContentRef.current, {
      scale: 0.88,
      y: 20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setIsOpen(false);
      }
    });
  };

  const featuresList = features || [
    "Desain UI/UX Khusus & Unik",
    "Kerangka Kerja Performa Tinggi",
    "Aksesibilitas Seluler Optimal",
    "Optimasi SEO & Kecepatan Akses"
  ];

  const infoOverview = detailOverview || description;

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        style={{ opacity: 0 }}
        className="group bg-white rounded-3xl border-3 border-black flex flex-col hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden cursor-pointer project-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Project Thumbnail Image wrapper */}
        <div className="w-full h-56 border-b-3 border-black bg-neutral-100 relative overflow-hidden">
          <img
            src={image}
            alt={dataAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* Info card text area */}
        <div className="p-6 flex flex-col gap-3 flex-grow bg-white">
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-sans text-xl font-black text-black tracking-tight uppercase">
              {name}
            </h3>
            <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase rounded-full border-1 border-black tracking-wider">
              {category}
            </span>
          </div>
          <p className="font-sans text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="mt-auto pt-2">
            <span className="font-sans text-xs font-black text-black flex items-center gap-1.5 group-hover:gap-3 transition-all cursor-pointer uppercase tracking-wider">
              Lihat Detail{" "}
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform stroke-[2.5px]" />
            </span>
          </div>
        </div>
      </article>

      {/* Modern Neo-Brutalist Project Detail Modal Popup */}
      {isOpen && (
        <div 
          ref={modalOverlayRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 select-none"
          onClick={handleClose}
        >
          <div
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-4 border-black w-full max-w-4xl rounded-3xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button on Top Right (desktop: floats on white right pane, mobile: floats over image) */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2.5 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer z-20 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              aria-label="Tutup Detail"
            >
              <X className="w-4 h-4 stroke-[2.5px]" />
            </button>

            {/* Left Column: Full-size Image Pane */}
            <div className="w-full md:w-1/2 h-52 sm:h-64 md:h-auto min-h-[220px] md:min-h-[440px] bg-neutral-100 border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden flex-shrink-0">
              <img
                src={image}
                alt={dataAlt}
                className="w-full h-full object-cover"
              />
              {/* Neo-brutalist sticker/badge overlay */}
              <div className="absolute bottom-4 left-4 bg-yellow-300 text-black border-2 border-black font-sans text-[10px] font-black uppercase px-3 py-1 rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] select-none">
                STUDI KASUS PROYEK ✓
              </div>
            </div>

            {/* Right Column: Detailed Contents */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white text-start">
              <div>
                {/* Meta details & badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  <span className="px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-wider border border-black">
                    {category}
                  </span>
                  <span className="px-3.5 py-1 bg-white text-black text-[10px] font-black border-2 border-black rounded-full uppercase tracking-wide">
                    OVIXY DIGITAL
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-sans text-2xl sm:text-3xl font-black text-black tracking-tight uppercase mb-4 leading-tight">
                  {name}
                </h2>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-neutral-700 font-bold leading-relaxed mb-6">
                  {infoOverview}
                </p>

                {/* Features & Integrations Tags */}
                <div className="mb-6">
                  <h4 className="font-sans text-[11px] font-black uppercase text-neutral-400 tracking-widest mb-3">
                    FITUR & TEKNOLOGI KUNCI
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {featuresList.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-neutral-50 border-2 border-black text-black text-xs font-bold rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase tracking-wide"
                      >
                        ✦ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t-2 border-black">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 bg-white text-black border-2 border-black rounded-xl font-sans text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-neutral-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer text-center"
                >
                  Kembali
                </button>
                <a
                  href={`https://api.whatsapp.com/send/?phone=6285136563792&text=${encodeURIComponent(
                    `Halo Ovixy Digital! 👋\n\nSaya sedang melihat portofolio Anda dan tertarik dengan proyek:\n\n📂 *${name}* (${category})\n\nSaya ingin membuat sistem/aplikasi serupa untuk kebutuhan bisnis saya. Boleh minta info:\n- Estimasi biaya & waktu pengerjaan\n- Fitur yang bisa disesuaikan\n- Cara memulai konsultasi\n\nTerima kasih! 🙏`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-black text-white border-2 border-black rounded-xl font-sans text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] hover:bg-neutral-800 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer text-center flex items-center justify-center gap-1"
                >
                  Hubungi Kami →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
