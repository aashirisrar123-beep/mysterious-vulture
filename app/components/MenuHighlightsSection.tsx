
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageSrc?: string; // Optional image for the menu item
}

const menuItems: MenuItem[] = [
  {
    name: "[PLACEHOLDER: Signature Dish 1 Name]",
    description: "[PLACEHOLDER: Description of Signature Dish 1. Highlight key ingredients and flavors.]",
    price: "£18.50",
    imageSrc: "/placeholder-dish1.jpg",
  },
  {
    name: "[PLACEHOLDER: Signature Dish 2 Name]",
    description: "[PLACEHOLDER: Description of Signature Dish 2. Focus on unique preparation or taste.]",
    price: "£22.00",
    imageSrc: "/placeholder-dish2.jpg",
  },
  {
    name: "[PLACEHOLDER: Signature Dish 3 Name]",
    description: "[PLACEHOLDER: Description of Signature Dish 3. Mention origin or special qualities.]",
    price: "£15.75",
    imageSrc: "/placeholder-dish3.jpg",
  },
];

export function MenuHighlightsSection() {
  return (
    <section id="menu" className="py-16 bg-white dark:bg-gray-850">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          [PLACEHOLDER: Menu Highlights Title - e.g., Taste of London]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
              {item.imageSrc && (
                <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xl font-bold text-primary mb-4">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="w-auto">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
