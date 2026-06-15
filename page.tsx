"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import References from "@/components/sections/References";
import ServiceArea from "@/components/sections/ServiceArea";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <References />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}
