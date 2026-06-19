import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaqItem } from "../types";
import { faqData } from "../data/siteData";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  useGSAP(() => {
    gsap.to(".faq-card-item", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  // Group FAQ items by category
  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  return (
    <section ref={containerRef} id="faq" className="pt-24 pb-16 text-start">
      {/* Neo-brutalist Section Title */}
      <div className="mb-12 max-w-xl">
        <h2 className="font-sans text-3xl md:text-5xl font-black text-black uppercase tracking-tight relative inline-block p-1 border-b-6 border-black">
          Tanya Jawab (FAQ)
        </h2>
        <p className="font-sans text-sm md:text-base text-black mt-5 font-bold leading-relaxed">
          Temukan jawaban atas pertanyaan umum mengenai layanan pembuatan website, biaya, alur kerja, dan integrasi teknis Ovixy Digital.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((category) => {
          const items = faqData.filter((item) => item.category === category);

          return (
            <div key={category} className="flex flex-col gap-5">
              {/* Category Header Badge */}
              <div className="bg-[#a3e635] text-black border-3 border-black px-5 py-2.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-fit font-black text-sm uppercase tracking-wider mb-2">
                {category}
              </div>

              {/* Accordion Questions List */}
              <div className="flex flex-col gap-4">
                {items.map((item) => {
                  const isOpen = activeFaq === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`faq-card-item bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden opacity-0 translate-y-8 ${
                        isOpen ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5" : ""
                      }`}
                    >
                      {/* Accordion Header Trigger */}
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-start font-sans font-black text-base md:text-lg text-black hover:bg-neutral-50 transition-colors cursor-pointer select-none gap-4"
                      >
                        <span className="flex items-center gap-3">
                          <span className="bg-black text-white text-[11px] font-black px-2.5 py-1 border border-black rounded-md shrink-0 uppercase tracking-widest">
                            Q
                          </span>
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 shrink-0 stroke-[3px]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 shrink-0 stroke-[3px]" />
                        )}
                      </button>

                      {/* Accordion Body Answer */}
                      <div
                        className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6 pt-3 border-t-2 border-black/10 font-sans text-xs md:text-sm font-semibold text-neutral-800 leading-relaxed whitespace-pre-line flex gap-3">
                          <span className="bg-[#a3e635] text-black text-[11px] font-black px-2.5 py-1 border border-black rounded-md shrink-0 uppercase tracking-widest self-start mt-0.5">
                            A
                          </span>
                          <span className="flex-1 pt-0.5">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
