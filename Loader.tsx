"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111]">
      {/* Logo area */}
      <div className="mb-12 text-center">
        <div className="font-display text-5xl tracking-widest text-white mb-2">
          ABBRUCH
        </div>
        <div className="font-display text-5xl tracking-widest text-[#f97316]">
          STANEV
        </div>
        <div className="mt-3 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
      </div>

      {/* Progress bar */}
      <div className="w-64 h-0.5 bg-[#2d2d2d] relative overflow-hidden rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-[#f97316] transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 text-[#555555] text-xs tracking-[0.3em] uppercase font-body">
        Leipzig
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-[#f97316] opacity-40" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-[#f97316] opacity-40" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-[#f97316] opacity-40" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#f97316] opacity-40" />
    </div>
  );
}
