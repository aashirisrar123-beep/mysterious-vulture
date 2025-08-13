"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { MenuHighlightsSection } from "./components/MenuHighlightsSection";
import { ReservationsSection } from "./components/ReservationsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MenuHighlightsSection />
        <ReservationsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
