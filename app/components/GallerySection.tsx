
"use client";

import Image from "next/image";

// Placeholder image data
const galleryImages = [
  { src: "/placeholder-gallery1.jpg", alt: "[PLACEHOLDER: Gallery Image 1 Alt Text]" },
  { src: "/placeholder-gallery2.jpg", alt: "[PLACEHOLDER: Gallery Image 2 Alt Text]" },
  { src: "/placeholder-gallery3.jpg", alt: "[PLACEHOLDER: Gallery Image 3 Alt Text]" },
  { src: "/placeholder-gallery4.jpg", alt: "[PLACEHOLDER: Gallery Image 4 Alt Text]" },
  { src: "/placeholder-gallery5.jpg", alt: "[PLACEHOLDER: Gallery Image 5 Alt Text]" },
  { src: "/placeholder-gallery6.jpg", alt: "[PLACEHOLDER: Gallery Image 6 Alt Text]" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-gray-850 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          [PLACEHOLDER: Gallery Title - e.g., A Glimpse of Our Experience]
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
