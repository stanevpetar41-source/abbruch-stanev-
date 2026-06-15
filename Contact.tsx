"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    privacy: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API / email service
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="kontakt" ref={ref} className="relative bg-[#111111] py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent" />
      <div className="absolute inset-0 stripe-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#f97316]" />
            <span className="text-[#f97316] text-xs tracking-[0.4em] uppercase">Kontakt aufnehmen</span>
          </div>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            JETZT <span className="text-[#f97316]">ANFRAGEN</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl">
            Schildern Sie uns Ihr Projekt. Wir melden uns innerhalb von 24 Stunden
            und erstellen Ihnen ein kostenloses Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Phone */}
            <a
              href="tel:015166762975"
              className="group flex items-start gap-4 p-5 border border-[#2d2d2d] hover:border-[#f97316]/50 transition-all duration-300 bg-[#1a1a1a] hover:bg-[#1a1a1a]"
            >
              <div className="w-12 h-12 bg-[#f97316] flex-shrink-0 flex items-center justify-center group-hover:bg-[#ea6c0a] transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div className="text-[#555555] text-xs uppercase tracking-wider mb-1">Telefon</div>
                <div className="text-white font-medium text-lg">0151 66762975</div>
                <div className="text-[#555555] text-xs mt-1">Mo–Sa, 7:00–18:00 Uhr</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/4915166762975"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 border border-[#2d2d2d] hover:border-green-500/50 transition-all duration-300 bg-[#1a1a1a]"
            >
              <div className="w-12 h-12 bg-green-600 flex-shrink-0 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <div className="text-[#555555] text-xs uppercase tracking-wider mb-1">WhatsApp</div>
                <div className="text-white font-medium">Jetzt schreiben</div>
                <div className="text-[#555555] text-xs mt-1">Schnelle Antwort garantiert</div>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 border border-[#2d2d2d] bg-[#1a1a1a]">
              <div className="w-12 h-12 bg-[#2d2d2d] flex-shrink-0 flex items-center justify-center">
                <Mail size={20} className="text-[#f97316]" />
              </div>
              <div>
                <div className="text-[#555555] text-xs uppercase tracking-wider mb-1">E-Mail</div>
                <div className="text-white font-medium">info@abbruch-stanev.de</div>
                <div className="text-[#555555] text-xs mt-1">Antwort innerhalb 24h</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 border border-[#2d2d2d] bg-[#1a1a1a]">
              <div className="w-12 h-12 bg-[#2d2d2d] flex-shrink-0 flex items-center justify-center">
                <MapPin size={20} className="text-[#f97316]" />
              </div>
              <div>
                <div className="text-[#555555] text-xs uppercase tracking-wider mb-1">Standort</div>
                <div className="text-white font-medium">Leipzig, Sachsen</div>
                <div className="text-[#555555] text-xs mt-1">Einsatz bis 200 km</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#f97316]/30 bg-[#1a1a1a]">
                <CheckCircle size={48} className="text-[#f97316] mb-6" />
                <h3 className="font-display text-3xl text-white mb-3">ANFRAGE GESENDET!</h3>
                <p className="text-[#888888] max-w-sm">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24
                  Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#f97316] text-sm uppercase tracking-wider border-b border-[#f97316]/30 hover:border-[#f97316] transition-colors pb-0.5"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#2d2d2d] p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#555555] text-xs uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="w-full bg-[#111111] border border-[#2d2d2d] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#555555] text-xs uppercase tracking-wider mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer"
                      className="w-full bg-[#111111] border border-[#2d2d2d] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#555555] text-xs uppercase tracking-wider mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full bg-[#111111] border border-[#2d2d2d] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#555555] text-xs uppercase tracking-wider mb-2">
                    Leistung
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[#2d2d2d] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#1a1a1a]">Bitte wählen...</option>
                    <option value="abbruch" className="bg-[#1a1a1a]">Abbruch / Abriss</option>
                    <option value="entkernung" className="bg-[#1a1a1a]">Entkernung</option>
                    <option value="kernbohrung" className="bg-[#1a1a1a]">Kernbohrungen</option>
                    <option value="beraeumung" className="bg-[#1a1a1a]">Beräumung</option>
                    <option value="entsorgung" className="bg-[#1a1a1a]">Entsorgung</option>
                    <option value="demontage" className="bg-[#1a1a1a]">Demontage</option>
                    <option value="rueckbau" className="bg-[#1a1a1a]">Rückbauarbeiten</option>
                    <option value="sonstiges" className="bg-[#1a1a1a]">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#555555] text-xs uppercase tracking-wider mb-2">
                    Projektbeschreibung *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Projekt: Was soll abgebrochen werden? Wo? Ungefähre Größe/Umfang?"
                    className="w-full bg-[#111111] border border-[#2d2d2d] text-white placeholder-[#3a3a3a] px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors resize-none"
                  />
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    checked={form.privacy}
                    onChange={handleChange}
                    className="mt-1 accent-[#f97316] flex-shrink-0"
                  />
                  <label htmlFor="privacy" className="text-[#555555] text-xs leading-relaxed">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-[#f97316] hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zur
                    Bearbeitung meiner Anfrage zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-medium py-4 flex items-center justify-center gap-3 uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  <Send size={16} />
                  Kostenlose Anfrage senden
                </button>

                <p className="text-[#3a3a3a] text-xs text-center">
                  * Pflichtfelder. Ihre Daten werden nicht an Dritte weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
