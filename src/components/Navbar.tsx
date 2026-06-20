/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onNavClick: (selector: string) => void;
  onConsultClick?: () => void;
}

export default function Navbar({ onNavClick, onConsultClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", target: "#hero" },
    { label: "Layanan", target: "#layanan" },
    { label: "Proyek", target: "/project" },
    { label: "Harga", target: "#harga" },
    { label: "FAQ", target: "#faq" },
    { label: "Testimoni", target: "#testimoni" },
  ];

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    // Give a tiny delay for mobile drawer to slide out before smooth scrolling starts
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setTimeout(() => {
        onNavClick(target);
      }, 250);
    } else {
      onNavClick(target);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-40 bg-white border-2 border-black rounded-full px-5 md:px-7 py-3 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none"
      >
        {/* Brand logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="font-sans text-xl md:text-2xl font-black text-black tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Ovixy Digital
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              onClick={(e) => handleLinkClick(e, link.target)}
              className="font-sans text-sm font-bold text-secondary hover:text-black transition-colors hover:-translate-y-[2px] transition-transform duration-200 active:translate-y-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={onConsultClick}
          className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none hidden md:block cursor-pointer"
        >
          Konsultasi
        </button>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-full border border-black hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5 text-black" />
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[290px] sm:w-[330px] bg-[#EBEAE6] bg-[radial-gradient(#b5b5b0_1px,transparent_1px)] [background-size:16px_16px] border-l-4 border-black z-50 p-6 flex flex-col justify-between shadow-[-10px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"
        }`}
      >
        {/* Layered paper sheets effect under the cardboard */}
        <div className="absolute inset-y-0 -left-3 w-3 bg-[#FCFBF7] border-l-2 border-r-2 border-black -z-10" />
        <div className="absolute inset-y-0 -left-5 w-2 bg-[#FFFDF5] border-l-2 border-black -z-20 opacity-90" />

        {/* Decorative tape overlay at the top */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E2E0D8]/95 border border-dashed border-black/40 rotate-[-2deg] opacity-90 z-20 pointer-events-none" />

        <div className="flex flex-col gap-6 relative z-10">
          {/* Header in sidebar */}
          <div className="flex justify-between items-center pb-4 border-b-2 border-black">
            <span className="font-sans text-lg font-black tracking-tight text-black border-2 border-black bg-white px-3.5 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] uppercase">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-full border-2 border-black bg-white hover:bg-neutral-100 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Links list as colorful rotated sticky notes */}
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map((link, index) => {
              const stickyColors = [
                "bg-[#FEF08A]", // Yellow
                "bg-[#FF99C8]", // Pink
                "bg-[#A7F3D0]", // Green
                "bg-[#BAE6FD]", // Blue
                "bg-[#E9D5FF]", // Purple
                "bg-[#FED7AA]"  // Orange
              ];
              const stickyRotations = [
                "rotate-1",
                "-rotate-2",
                "rotate-2",
                "-rotate-1",
                "rotate-1",
                "-rotate-2"
              ];
              const color = stickyColors[index % stickyColors.length];
              const rotation = stickyRotations[index % stickyRotations.length];

              return (
                <a
                  key={link.target}
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className={`font-sans text-sm font-black text-black py-3 px-4 border-2 border-black ${color} ${rotation} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-center block uppercase tracking-wider`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer in sidebar */}
        <div className="mt-auto relative z-10">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onConsultClick?.();
            }}
            className="w-full bg-[#FF3333] hover:bg-[#E62E2E] text-white text-xs font-black py-4 px-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer uppercase tracking-widest flex justify-center items-center gap-2"
          >
            Konsultasi <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
