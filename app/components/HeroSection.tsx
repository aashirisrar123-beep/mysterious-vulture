
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full h-[80vh] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-80"></div>
      </div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          [PLACEHOLDER: Restaurant Name - e.g., The London Eatery]
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8">
          [PLACEHOLDER: Tagline - e.g., Authentic British Cuisine with a Modern Twist]
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-300"
            onClick={() => alert("Booking functionality not implemented yet.")}
          >
            Book a Table
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
            onClick={() => alert("Menu view functionality not implemented yet.")}
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
