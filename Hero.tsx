"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, ChevronDown, Hammer } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#111111" }}
    >
      {/* Background video / fallback gradient */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25"
          poster="/images/hero-poster.jpg"
        >
          {/* User should replace with real demolition video */}
          <source src="/videos/demolition.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/40" />
      </div>

      {/* Diagonal stripe accent */}
      <div className="absolute inset-0 z-0 stripe-pattern opacity-30" />

      {/* Orange vertical line accent */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#f97316]/40 to-transparent z-10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-8 h-px bg-[#f97316]" />
            <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase font-medium">
              Leipzig & Umgebung
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display leading-none mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "200ms",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: "0.95",
            }}
          >
            <span className="block text-white">PROFESSIONELLE</span>
            <span className="block text-[#f97316] orange-glow-text">ABBRUCH- &</span>
            <span className="block text-white">ENTKERNUNGSARBEITEN</span>
            <span className="block text-[#3a3a3a] text-[0.6em]">IN LEIPZIG</span>
          </h1>

          {/* Subheadline */}
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="h-px flex-shrink-0 w-12 bg-[#f97316]" />
            <p className="text-[#888888] text-xl sm:text-2xl font-light tracking-wide">
              Schnell.{" "}
              <span className="text-white">Sauber.</span>{" "}
              <span className="text-[#f97316]">Zuverlässig.</span>
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="#kontakt"
              className="group relative bg-[#f97316] hover:bg-[#ea6c0a] text-white font-medium px-8 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Hammer size={16} />
                Kostenlose Besichtigung
              </span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>

            <a
              href="tel:015166762975"
              className="group flex items-center gap-3 border border-[#3a3a3a] hover:border-[#f97316] text-white px-8 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#f97316]/5"
            >
              <Phone size={16} className="group-hover:text-[#f97316] transition-colors" />
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/4915166762975"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-[#3a3a3a] hover:border-green-500 text-white px-8 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:bg-green-500/5"
            >
              <MessageCircle
                size={16}
                className="group-hover:text-green-400 transition-colors"
              />
              WhatsApp-Anfrage
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            {[
              { value: "200 km", label: "Einsatzradius" },
              { value: "100%", label: "Entsorgungsnachweis" },
              { value: "24h", label: "Schnelle Rückmeldung" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-1 h-10 bg-[#f97316]" />
                <div>
                  <div className="font-display text-2xl text-white leading-none">{badge.value}</div>
                  <div className="text-[#555555] text-xs tracking-wide uppercase mt-0.5">
                    {badge.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#555555] hover:text-[#f97316] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Mehr</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10"
        style={{
          background: "#111111",
          clipPath: "polygon(0 100%, 100% 40%, 100% 100%)",
        }}
      />
    </section>
  );
}
