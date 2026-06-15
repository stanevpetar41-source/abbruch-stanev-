# Abbruch Stanev – Webseite

Professionelle Website für Abbruch Stanev Leipzig.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **TypeScript**

## Setup & Entwicklung

```bash
npm install
npm run dev
```

## Deployment auf Vercel

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) importieren
3. Framework: **Next.js** (auto-erkannt)
4. Deploy!

## Anpassungen

### Video im Hero-Bereich
Legen Sie ein Abbruch-Video unter `/public/videos/demolition.mp4` ab.
Poster-Bild: `/public/images/hero-poster.jpg`

### Referenz-Fotos
Echte Projektfotos in `/public/images/` ablegen und in `References.tsx` als `<img>` Tags einfügen.

### Kontaktformular
Das Formular sendet aktuell keine E-Mail. Integration über:
- [Resend](https://resend.com) + Next.js API Route
- [Formspree](https://formspree.io)
- [EmailJS](https://emailjs.com)

### E-Mail-Adresse
In `Footer.tsx` und `Contact.tsx` die echte E-Mail-Adresse eintragen.

### Google Maps
Der Maps-Iframe zeigt Leipzig. Für DSGVO-Konformität: Consent-Banner vor dem Laden einblenden.

## SEO

Optimiert auf folgende Keywords:
- Abbruch Leipzig
- Abriss Leipzig  
- Entkernung Leipzig
- Kernbohrungen Leipzig
- Demontage Leipzig
- Beräumung Leipzig
