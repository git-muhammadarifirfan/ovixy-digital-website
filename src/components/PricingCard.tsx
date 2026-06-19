/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  key?: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  hasDottedBg?: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  name,
  description,
  price,
  isPopular = false,
  features,
  ctaText,
  hasDottedBg = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`opacity-0 bg-white rounded-3xl border-3 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative select-none pricing-card w-full ${
        isPopular ? "border-[#a3e635] shadow-[6px_6px_0px_0px_#a3e635] hover:shadow-[10px_10px_0px_0px_#a3e635]" : ""
      } ${
        hasDottedBg
          ? "bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:12px_12px]"
          : ""
      }`}
    >
      {/* Popular floating badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a3e635] text-black font-sans text-[10px] md:text-xs font-black px-5 py-1.5 rounded-full border-2 border-black uppercase tracking-widest whitespace-nowrap z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse">
          TERPOPULER
        </div>
      )}

      <div>
        {/* Summary Info */}
        <div className="mt-2 text-start">
          <h3 className="font-sans text-xl sm:text-2xl font-black text-black tracking-tight uppercase">
            {name}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-text-muted mt-2 min-h-[48px] leading-relaxed font-bold">
            {description}
          </p>
        </div>

        {/* Price tag */}
        <div className="my-5 text-start flex items-baseline gap-1">
          <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-black bg-[#FEF08A] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[-1deg]">
            {price}
          </span>
        </div>

        {/* Neo-brutalist dashed divider */}
        <div className="border-t-2 border-dashed border-black w-full mb-6 opacity-30" />

        {/* Features bullet checklist */}
        <ul className="flex flex-col gap-3.5 mb-8 text-start">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-black shrink-0 stroke-[3.5px] mt-0.5 bg-[#a3e635] border border-black p-0.5 rounded-sm" />
              <span className="font-sans text-xs sm:text-sm text-black font-bold">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <button
        onClick={onSelect}
        className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black transition-all active:translate-y-0 active:shadow-none cursor-pointer flex items-center justify-center gap-2 ${
          isPopular 
            ? "bg-[#a3e635] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5" 
            : "bg-black text-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}
