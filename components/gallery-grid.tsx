"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/lib/types";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="masonry-grid">
      {items.map((item) => (
        <motion.figure
          key={item.src}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="glass-card gold-ring relative mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem]"
        >
          <div className={`relative w-full ${item.heightClass}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-6 text-sm text-ink/85">
            {item.alt}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
