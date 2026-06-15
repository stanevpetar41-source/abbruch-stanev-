"use client";

import { useEffect, useRef, useState } from "react";

type FilterType = "alle" | "abbruch" | "entkernung" | "kernbohrung" | "beräumung";

const projects = [
  {
    id: 1,
    title: "Altbau-Entkernung",
    location: "Leipzig-Gohlis",
    category: "entkernung" as FilterType,
    before: "Kernentkernung Vorher",
    after: "Kernentkernung Nachher",
    year: "2024",
  },
  {
    id: 2,
    title: "Industriegebäude Abriss",
    location: "Leipzig-Plagwitz",
    category: "abbruch" as FilterType,
    before: "Industrieabriss Vorher",
    after: "Industrieabriss Nachher",
    year: "2024",
  },
  {
    id: 3,
    title: "Wanddurchbrüche & Kernbohrungen",
    location: "Halle (Saale)",
    category: "kernbohrung" as FilterType,
    before: "Kernbohrung Vorher",
    after: "Kernbohrung Nachher",
    year: "2023",
  },
  {
    id: 4,
    title: "Komplette Hausberäumung",
    location: "Leipzig-Reudnitz",
    category: "beräumung" as FilterType,
    before: "Beräumung Vorher",
    after: "Beräumung Nachher",
    year: "2024",
  },
  {
    id: 5,
    title: "Dachgeschoss Entkernung",
    location: "Chemnitz",
    category: "entkernung" as FilterType,
    before: "DG Entkernung Vorher",
    after: "DG Entkernung Nachher",
    year: "2023",
  },
  {
    id: 6,
    title: "Schornstein-Abbruch",
    location: "Leipzig-Connewitz",
    category: "abbruch" as FilterType,
    before: "Schornstein Vorher",
    after: "Schornstein Nachher",
    year: "2024",
  },
];

const filters: { label: string; value: FilterType }[] = [
  { label: "Alle", value: "alle" },
  { label: "Abbruch", value: "abbruch" },
  { label: "Entkernung", value: "entkernung" },
  { label: "Kernbohrung", value: "kernbohrung" },
  { label: "Beräumung", value: "beräumung" },
];

function BeforeAfterCard({ project }: { project: (typeof projects)[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group relative bg-[#1a1a1a] border border-[#2d2d2d] overflow-hidden card-hover">
      {/* Visual placeholder (replace with real images) */}
      <div className="relative h-52 overflow-hidden">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            showAfter ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          style={{
            background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
          }}
        >
          {/* Real project images would go here as <img> tags */}
          <div className="text-center">
            <div className="w-16 h-16 border border-[#3a3a3a] mx-auto mb-3 flex items-center justify-center">
              <span className="text-[#3a3a3a] text-xs uppercase tracking-wider">Foto</span>
            </div>
            <span className="text-[#555555] text-xs uppercase tracking-wider">Vorher</span>
          </div>
          <div className="absolute top-3 left-3 bg-[#2d2d2d] text-[#888888] text-xs px-2 py-1 uppercase tracking-wider">
            Vorher
          </div>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            showAfter ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background: "linear-gradient(135deg, #f97316/10 0%, #2d2d2d 100%)",
          }}
        >
          <div className="text-center">
            <div className="w-16 h-16 border border-[#f97316]/30 mx-auto mb-3 flex items-center justify-center">
              <span className="text-[#f97316]/50 text-xs uppercase tracking-wider">Foto</span>
            </div>
            <span className="text-[#f97316]/70 text-xs uppercase tracking-wider">Nachher</span>
          </div>
          <div className="absolute top-3 left-3 bg-[#f97316] text-white text-xs px-2 py-1 uppercase tracking-wider">
            Nachher
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-3 right-3 bg-[#111111]/80 hover:bg-[#f97316] border border-[#3a3a3a] hover:border-[#f97316] text-white text-xs px-3 py-1.5 transition-all duration-300 uppercase tracking-wider"
        >
          {showAfter ? "Vorher" : "Nachher"}
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-medium text-sm">{project.title}</h3>
          <span className="text-[#555555] text-xs">{project.year}</span>
        </div>
        <p className="text-[#555555] text-xs flex items-center gap-1">
          <span className="w-1 h-1 bg-[#f97316] inline-block rounded-full" />
          {project.location}
        </p>
      </div>
    </div>
  );
}

export default function References() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("alle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "alle"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="referenzen" ref={ref} className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#f97316]" />
            <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase">Unsere Arbeit</span>
          </div>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            REFERENZEN &{" "}
            <span className="text-[#f97316]">PROJEKTE</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl">
            Überzeugen Sie sich selbst: Vorher-Nachher-Einblicke aus unseren
            abgeschlossenen Projekten in Leipzig und Umgebung.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? "bg-[#f97316] text-white"
                  : "border border-[#2d2d2d] text-[#888888] hover:border-[#f97316]/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <BeforeAfterCard project={project} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-[#3a3a3a] text-sm">
          * Fotos aus echten Projekten werden nach Fertigstellung eingefügt
        </p>
      </div>
    </section>
  );
}
