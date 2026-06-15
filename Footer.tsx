import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* CTA band */}
      <div className="bg-[#f97316] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl text-white tracking-wide">
            BEREIT FÜR IHR PROJEKT?
          </p>
          <div className="flex gap-4">
            <a
              href="tel:015166762975"
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone size={14} />
              Anrufen
            </a>
            <a
              href="https://wa.me/4915166762975"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#2d2d2d] text-white px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="font-display text-3xl text-white tracking-widest">ABBRUCH</div>
              <div className="font-display text-3xl text-[#f97316] tracking-widest">STANEV</div>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed max-w-sm mb-6">
              Ihr zuverlässiger Partner für Abbruch- und Entkernungsarbeiten in
              Leipzig und Mitteldeutschland. Schnell, sauber, zuverlässig.
            </p>
            <div className="flex items-center gap-2 text-[#555555] text-sm">
              <MapPin size={14} className="text-[#f97316]" />
              Leipzig, Sachsen · Einsatz bis 200 km
            </div>
            <div className="flex items-center gap-2 text-[#555555] text-sm mt-2">
              <Phone size={14} className="text-[#f97316]" />
              <a href="tel:015166762975" className="hover:text-white transition-colors">
                0151 66762975
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-wider mb-4 font-medium">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {[
                "Abbrucharbeiten",
                "Abrissarbeiten",
                "Entkernung",
                "Kernbohrungen",
                "Wanddurchbrüche",
                "Beräumung",
                "Entsorgung",
                "Demontage",
                "Rückbauarbeiten",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#leistungen"
                    className="text-[#555555] text-sm hover:text-[#f97316] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-wider mb-4 font-medium">
              Schnellzugriff
            </h3>
            <ul className="space-y-2 mb-8">
              {[
                { label: "Startseite", href: "#" },
                { label: "Leistungen", href: "#leistungen" },
                { label: "Referenzen", href: "#referenzen" },
                { label: "Einsatzgebiet", href: "#einsatzgebiet" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#555555] text-sm hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-xs uppercase tracking-wider mb-3 font-medium">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#555555] text-sm hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#3a3a3a] text-xs">
            © {new Date().getFullYear()} Abbruch Stanev · Leipzig ·{" "}
            <span className="text-[#f97316]">Alle Rechte vorbehalten</span>
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[#3a3a3a] text-xs">
              Abbruch Leipzig · Abriss Leipzig · Entkernung Leipzig
            </p>
            <a
              href="#"
              className="w-8 h-8 border border-[#2d2d2d] hover:border-[#f97316] flex items-center justify-center text-[#555555] hover:text-[#f97316] transition-all"
              aria-label="Nach oben"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
