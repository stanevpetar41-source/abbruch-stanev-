import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abbruch Stanev Leipzig | Professionelle Abbruch- & Entkernungsarbeiten",
  description:
    "Abbruch Stanev – Ihr Spezialist für Abbrucharbeiten, Entkernung, Kernbohrungen und Beräumung in Leipzig und Umgebung bis 200 km. Kostenlose Besichtigung anfragen.",
  keywords: [
    "Abbruch Leipzig",
    "Abriss Leipzig",
    "Entkernung Leipzig",
    "Kernbohrungen Leipzig",
    "Demontage Leipzig",
    "Beräumung Leipzig",
    "Rückbau Leipzig",
    "Wanddurchbruch Leipzig",
    "Schornsteinabbruch Leipzig",
  ],
  openGraph: {
    title: "Abbruch Stanev Leipzig",
    description: "Professionelle Abbruch- und Entkernungsarbeiten. Schnell. Sauber. Zuverlässig.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-body bg-brand-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
