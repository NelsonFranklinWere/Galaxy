"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CarGalleryProps = {
  images: string[];
  name: string;
};

export const CarGallery = ({ images, name }: CarGalleryProps) => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const current = images[active];

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/10"
        aria-label="Open car image full screen"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image src={current} alt={name} fill className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </button>
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, idx) => (
          <button
            key={image}
            onClick={() => setActive(idx)}
            className={`relative h-20 w-28 overflow-hidden rounded-xl border transition ${
              idx === active ? "border-platinum" : "border-white/15"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <Image src={image} alt={`${name} preview`} fill className="object-cover" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative h-[80vh] w-[90vw] max-w-5xl">
              <Image
                src={current}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

