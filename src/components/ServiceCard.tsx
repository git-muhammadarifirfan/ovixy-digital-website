/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Monitor, Palette } from "lucide-react";

// Lucide icon helper mapping
const getIcon = (title: string, className: string) => {
  if (title.toLowerCase().includes("web")) {
    return <Monitor className={className} />;
  }
  return <Palette className={className} />;
};

interface ServiceCardProps {
  key?: string;
  title: string;
  description: string;
  type: "large" | "small-dark" | "small-light";
  badges?: string[];
}

export default function ServiceCard({
  title,
  description,
  type,
  badges,
}: ServiceCardProps) {
  if (type === "large") {
    return (
      <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl border-2 border-black p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group overflow-hidden relative service-card">
        <div>
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
            {getIcon(title, "w-6 h-6 text-white")}
          </div>
          <h3 className="font-sans text-2xl md:text-3xl font-black mb-3 tracking-tighter text-black uppercase">
            {title}
          </h3>
          <p className="font-sans text-sm md:text-base text-text-muted max-w-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className="self-end mt-8">
          <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300">
            <span className="font-bold text-black group-hover:text-white transition-colors duration-300">→</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "small-dark") {
    return (
      <div className="bg-black text-white rounded-2xl border-2 border-black p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group service-card">
        <div>
          <h3 className="font-sans text-lg md:text-xl font-bold mb-2 tracking-tight text-white uppercase">
            {title}
          </h3>
          <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-8 flex justify-end">
          <Palette className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    );
  }

  // small-light card
  return (
    <div className="opacity-0 bg-white text-black rounded-2xl border-2 border-black p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group service-card">
      <div>
        <h3 className="font-sans text-lg md:text-xl font-bold mb-2 tracking-tight text-black uppercase">
          {title}
        </h3>
        <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
      {badges && badges.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 border border-black text-[10px] font-black uppercase rounded bg-neutral-100 text-black tracking-wider"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
