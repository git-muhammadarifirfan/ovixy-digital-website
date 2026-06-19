/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Heart } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "Instagram", url: "#" },
    { label: "Dribbble", url: "#" },
    { label: "LinkedIn", url: "#" },
  ];

  const helperLinks = [
    { label: "Privacy Policy", url: "#" },
    { label: "Terms of Service", url: "#" },
    { label: "Contact Us", url: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t-4 border-black relative mt-20 select-none">
      {/* Top Footer Banner Block */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <h2 className="font-sans text-3xl font-black text-black uppercase tracking-tighter">
            Ovixy Digital
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2 font-medium">
            Membawa Bisnis Lokal Stand Out di Era Digital.
          </p>
        </div>

        {/* Dynamic scroll to top button wrapper */}
        <button
          onClick={onScrollToTop}
          className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-1 transition-all cursor-pointer group"
          title="Scroll To Top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-black group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Primary Footer Links area */}
      <div className="border-t-2 border-black bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted font-bold">

          {/* Left copyright and design credit line */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-center">
            <span>&copy; {currentYear} Ovixy Digital. Built for Growth.</span>
            <span className="hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 font-semibold text-black">
              Built for the bold <Heart className="w-3.5 h-3.5 fill-black text-black" />
            </span>
          </div>

          {/* Center helper connections link list */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {helperLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right traditional social handle lists */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-all uppercase text-xs tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
