"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: "+",
    label: "Abgeschlossene Projekte",
    description: "Erfolgreich abgewickelte Aufträge in Leipzig und Umgebung",
  },
  {
    value: 200,
    suffix: " km",
    label: "Einsatzradius",
    description: "Wir kommen schnell zu Ihnen – überall in Mitteldeutschland",
  },
  {
    value: 98,
    suffix: "%",
    label: "Kundenzufriedenheit",
    description: "Unsere Kunden empfehlen uns weiter – das ist unser Maßstab",
  },
  {
    value: 24,
    suffix: "h",
    label: "Reaktionszeit",
    description: "Schnelle Rückmeldung und zügiger Einsatz auch kurzfristig",
  },
];

function AnimatedCounter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#1a1a1a] py-20 border-y border-[#2d2d2d]"
    >
      {/* Top orange line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2d2d2d]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center lg:px-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-display text-5xl lg:text-6xl text-[#f97316] mb-2 leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} start={visible} />
              </div>
              <div className="text-white font-medium text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-[#555555] text-xs leading-relaxed hidden lg:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom orange line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />
    </section>
  );
}
