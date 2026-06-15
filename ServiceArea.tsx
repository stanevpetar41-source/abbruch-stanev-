"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

const cities = [
  { city: "Leipzig", km: "Standort", active: true },
  { city: "Halle (Saale)", km: "35 km" },
  { city: "Chemnitz", km: "85 km" },
  { city: "Dresden", km: "110 km" },
  { city: "Erfurt", km: "120 km" },
  { city: "Magdeburg", km: "125 km" },
  { city: "Dessau-Roßlau", km: "75 km" },
  { city: "Jena", km: "95 km" },
  { city: "Zwickau", km: "80 km" },
  { city: "Gera", km: "65 km" },
  { city: "Merseburg", km: "30 km" },
  { city: "Bitterfeld-Wolfen", km: "55 km" },
];

export default function ServiceArea() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="einsatzgebiet" ref={ref} className="bg-[#1a1a1a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#f97316]" />
            <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase">Wo wir aktiv sind</span>
          </div>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            EINSATZ­GEBIET{" "}
            <span className="text-[#f97316]">200 KM</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl">
            Mit Standort in Leipzig sind wir in ganz Mitteldeutschland für Sie im
            Einsatz. Bis zu 200 km Radius – schnell, zuverlässig, termingerecht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* City list */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {cities.map((item, i) => (
                <div
                  key={item.city}
                  className={`flex items-center gap-3 p-3 border transition-all duration-300 ${
                    item.active
                      ? "border-[#f97316] bg-[#f97316]/5"
                      : "border-[#2d2d2d] hover:border-[#f97316]/30"
                  }`}
                  style={{
                    transitionDelay: `${i * 40 + 200}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  <MapPin
                    size={14}
                    className={item.active ? "text-[#f97316]" : "text-[#3a3a3a]"}
                  />
                  <div>
                    <div
                      className={`text-sm font-medium ${
                        item.active ? "text-[#f97316]" : "text-[#888888]"
                      }`}
                    >
                      {item.city}
                    </div>
                    <div className="text-[#3a3a3a] text-xs">{item.km}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 border border-[#f97316]/20 bg-[#f97316]/5">
              <p className="text-sm text-[#888888]">
                <span className="text-[#f97316] font-medium">Nicht dabei?</span> Kein
                Problem – rufen Sie uns an. Für größere Projekte kommen wir auch weiter.
              </p>
            </div>
          </div>

          {/* Map embed / placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Google Maps embed - replace with real API key or iframe */}
              <div className="relative h-80 lg:h-96 bg-[#111111] border border-[#2d2d2d] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81165.39764565374!2d12.274053!3d51.3406321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f93a3b2d43c3%3A0x1d84fc45a2c8af7f!2sLeipzig!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abbruch Stanev Standort Leipzig"
                />
                {/* Overlay pin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#f97316] text-white text-xs font-medium px-3 py-2 flex items-center gap-2 shadow-lg shadow-orange-500/30">
                    <Navigation size={12} />
                    Leipzig – Abbruch Stanev
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-[#111111] border border-[#2d2d2d] p-4 text-center">
                  <div className="font-display text-3xl text-[#f97316] mb-1">200</div>
                  <div className="text-[#555555] text-xs uppercase tracking-wider">km Radius</div>
                </div>
                <div className="bg-[#111111] border border-[#2d2d2d] p-4 text-center">
                  <div className="font-display text-3xl text-[#f97316] mb-1">24h</div>
                  <div className="text-[#555555] text-xs uppercase tracking-wider">Reaktionszeit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
