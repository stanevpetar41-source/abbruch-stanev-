"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Einsatzgebiet", href: "#einsatzgebiet" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2d2d2d] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center font-display text-lg text-white transform group-hover:scale-105 transition-transform">
              AS
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-10 h-10 border border-[#f97316]/30 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <div>
            <div className="font-display text-xl tracking-widest text-white leading-none">ABBRUCH</div>
            <div className="font-display text-xl tracking-widest text-[#f97316] leading-none">STANEV</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-sm tracking-wider text-[#888888] hover:text-white transition-colors uppercase font-body font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:015166762975"
            className="flex items-center gap-2 text-sm font-medium text-[#f97316] hover:text-white transition-colors"
          >
            <Phone size={16} />
            0151 66762975
          </a>
          <a
            href="#kontakt"
            className="bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-medium px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20 uppercase tracking-wider"
          >
            Anfrage
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111]/98 backdrop-blur-md border-t border-[#2d2d2d]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-[#888888] hover:text-white transition-colors py-2 border-b border-[#2d2d2d] uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:015166762975"
              className="flex items-center gap-3 mt-4 text-[#f97316] text-lg font-medium"
            >
              <Phone size={20} />
              0151 66762975
            </a>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block bg-[#f97316] text-white text-center py-3 font-medium uppercase tracking-wider mt-2"
            >
              Kostenlose Anfrage
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
