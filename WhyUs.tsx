"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Clock, FileCheck, Users, Truck, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Sicherheit zuerst",
    text: "Alle Arbeiten werden nach aktuellen Sicherheits- und Umweltstandards durchgeführt. Vollversicherter Betrieb.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    text: "Kurzfristige Einsätze möglich. Wir reagieren schnell und halten unsere Zeitpläne zuverlässig ein.",
  },
  {
    icon: FileCheck,
    title: "Entsorgungsnachweis",
    text: "Alle Materialien werden fachgerecht entsorgt – Sie erhalten immer einen offiziellen Entsorgungsnachweis.",
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    text: "Unser Team bringt langjährige Erfahrung im Abbruch- und Rückbaubereich mit. Qualität ist unser Anspruch.",
  },
  {
    icon: Truck,
    title: "Eigene Technik",
    text: "Moderner Maschinenpark für alle Abbrucharbeiten. Keine Wartezeiten durch externe Dienstleister.",
  },
  {
    icon: Award,
    title: "Faire Preise",
    text: "Transparente Angebote ohne versteckte Kosten. Kostenlose Besichtigung und Beratung vor Ort.",
  },
];

export default function WhyUs() {
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
    <section
      ref={ref}
      className="relative bg-[#1a1a1a] py-24 lg:py-32 overflow-hidden"
    >
      {/* Left decorative column */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#f97316]" />
              <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase">Warum Stanev</span>
            </div>
            <h2
              className="font-display text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
            >
              IHR PARTNER FÜR{" "}
              <span className="text-[#f97316]">JEDEN</span>{" "}
              ABBRUCH
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">
              Ob kleiner Wanddurchbruch oder kompletter Gebäudeabriss – Abbruch
              Stanev steht für professionelle Ausführung, Termintreue und faire
              Preise. Wir sind Ihr verlässlicher Partner in Leipzig und einem
              Umkreis von 200 km.
            </p>
            <div className="bg-[#111111] border border-[#2d2d2d] p-6">
              <p className="text-[#f97316] font-display text-xl mb-2">
                KOSTENLOSE BESICHTIGUNG
              </p>
              <p className="text-[#888888] text-sm">
                Wir kommen zu Ihnen und erstellen ein unverbindliches Angebot
                direkt vor Ort. Rufen Sie uns an oder schreiben Sie uns.
              </p>
              <a
                href="#kontakt"
                className="inline-block mt-4 bg-[#f97316] text-white text-sm font-medium px-6 py-3 uppercase tracking-wider hover:bg-[#ea6c0a] transition-colors"
              >
                Termin vereinbaren
              </a>
            </div>

            {/* Client types */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {["Privat­kunden", "Haus­verwaltungen", "Bau­unternehmen"].map((type) => (
                <div key={type} className="text-center">
                  <div className="w-2 h-2 bg-[#f97316] mx-auto mb-2" />
                  <div className="text-[#888888] text-xs text-center leading-tight">{type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group bg-[#111111] border border-[#2d2d2d] p-5 hover:border-[#f97316]/40 transition-all duration-500 card-hover ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <Icon
                    size={22}
                    className="text-[#f97316] mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-white font-medium text-sm mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-[#555555] text-xs leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
