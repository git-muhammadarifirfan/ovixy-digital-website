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
    onNavClick(target);
  };

  return (
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
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-full border border-black hover:bg-neutral-100 transition-colors cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-black" />
        ) : (
          <Menu className="w-5 h-5 text-black" />
        )}
      </button>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleLinkClick(e, link.target)}
                className="font-sans text-base font-bold text-secondary hover:text-black py-2 border-b border-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={onConsultClick}
            className="w-full bg-black text-white text-sm font-bold py-3 px-5 rounded-xl border-2 border-black flex justify-center items-center gap-2 hover:bg-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            Mulai Konsultasi <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
