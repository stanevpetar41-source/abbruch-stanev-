"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Drill,
  Trash2,
  Package,
  Settings,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abbruch & Abriss",
    items: ["Gebäudeabbruch", "Teilabbruch", "Schornsteinabbruch", "Mauerwerk"],
    description:
      "Professioneller Rückbau von Gebäuden und Gebäudeteilen – sicher, schnell und nach Vorschrift.",
    color: "#f97316",
  },
  {
    icon: Layers,
    title: "Entkernung",
    items: ["Innenentkernung", "Deckenabhängung", "Bodenbeläge", "Trennwände"],
    description:
      "Komplette Entkernung Ihrer Immobilie – wir schaffen Platz für Ihren Neubau oder Umbau.",
    color: "#f97316",
  },
  {
    icon: Drill,
    title: "Kernbohrungen",
    items: ["Kernlochbohrungen", "Türöffnungen", "Wanddurchbrüche", "Deckenbohrungen"],
    description:
      "Präzise Kernbohrungen in Beton, Mauerwerk und Stahlbeton – mit modernster Technik.",
    color: "#f97316",
  },
  {
    icon: Package,
    title: "Beräumung",
    items: ["Hausberäumung", "Kellerberäumung", "Sperrmüll", "Gewerbeberäumung"],
    description:
      "Schnelle und vollständige Beräumung von Wohnungen, Häusern und Gewerbeobjekten.",
    color: "#f97316",
  },
  {
    icon: Trash2,
    title: "Entsorgung",
    items: ["Mit Nachweis", "Sortenreine Trennung", "Bauschutt", "Sonderabfall"],
    description:
      "Fachgerechte Entsorgung aller Materialien – immer mit offiziellem Entsorgungsnachweis.",
    color: "#f97316",
  },
  {
    icon: Settings,
    title: "Demontage",
    items: ["Anlagendemontage", "Stahlbau", "Fassaden", "Dachkonstruktionen"],
    description:
      "Systematische Demontage von Anlagen, Konstruktionen und Ausstattungen aller Art.",
    color: "#f97316",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" ref={ref} className="relative bg-[#111111] py-24 lg:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 stripe-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#f97316]" />
            <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase">Was wir tun</span>
          </div>
          <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
            UNSERE <span className="text-[#f97316]">LEISTUNGEN</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl">
            Von der Planung bis zur Entsorgung – Abbruch Stanev übernimmt alle
            Arbeiten aus einer Hand. Zuverlässig, termingerecht und sauber.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={service.title}
                className={`relative bg-[#111111] p-8 cursor-pointer transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isHovered ? "bg-[#1a1a1a]" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Orange accent corner */}
                <div
                  className={`absolute top-0 left-0 h-0.5 bg-[#f97316] transition-all duration-500 ${
                    isHovered ? "w-full" : "w-12"
                  }`}
                />

                {/* Icon */}
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 transition-all duration-300 ${isHovered ? "bg-[#f97316]" : "bg-[#2d2d2d]"}`}>
                  <Icon size={24} className={`transition-colors duration-300 ${isHovered ? "text-white" : "text-[#f97316]"}`} />
                </div>

                <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-[#555555] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Item list */}
                <ul className="space-y-1.5 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#888888]">
                      <div className="w-1 h-1 bg-[#f97316] flex-shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                    isHovered ? "text-[#f97316]" : "text-[#555555]"
                  }`}
                >
                  Anfragen
                  <ArrowRight size={14} className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[#555555] mb-6">
            Ihr Projekt ist dabei nicht? Sprechen Sie uns an – wir finden eine Lösung.
          </p>
          <a
            href="tel:015166762975"
            className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-medium px-10 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
          >
            Jetzt kostenlos beraten lassen
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
