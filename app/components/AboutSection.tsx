
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-primary">
            [PLACEHOLDER: About Us Title - e.g., Our Story]
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            [PLACEHOLDER: Restaurant Description - A brief, engaging description of the restaurant's concept, culinary style, and philosophy. Mention key selling points like locally sourced ingredients, award-winning chef, or cozy ambiance.]
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">[PLACEHOLDER: Selling Point 1]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">[PLACEHOLDER: Description for Selling Point 1]</p>
            </div>
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">[PLACEHOLDER: Selling Point 2]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">[PLACEHOLDER: Description for Selling Point 2]</p>
            </div>
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">[PLACEHOLDER: Selling Point 3]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">[PLACEHOLDER: Description for Selling Point 3]</p>
            </div>
          </div>
          <Button variant="default" size="lg" className="w-fit mt-4">
            View Full Menu
          </Button>
        </div>
        <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
          {/* Placeholder for interior/staff image */}
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <Image
              src="/placeholder-interior.jpg" // Replace with actual image path or use emoji/icon
              alt="[PLACEHOLDER: Interior Image Description]"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <span className="absolute text-lg text-gray-500">[PLACEHOLDER: Interior Image]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
