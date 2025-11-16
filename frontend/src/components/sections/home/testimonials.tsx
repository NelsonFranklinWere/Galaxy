"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const goto = useCallback((offset: number) => {
    setIndex((prev) =>
      (prev + offset + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goto(1), 6000);
    return () => clearInterval(timer);
  }, [goto]);

  return (
    <section className="container space-y-10">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by travellers, corporates & planners"
        description="A slider of real words from Nairobi creatives, corporates, and concierge partners."
        align="center"
      />
      <div className="glass-panel relative overflow-hidden p-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <Quote className="mx-auto h-10 w-10 text-platinum/40" />
            <p className="text-2xl leading-relaxed text-platinum">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{active.name}</p>
                <p className="text-sm text-platinum/70">
                  {active.role}{" "}
                  {active.company ? `- ${active.company}` : ""}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 text-amber">
              {Array.from({ length: active.rating }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => setIndex(idx)}
              className={`h-3 w-12 rounded-full transition ${
                idx === index ? "bg-platinum" : "bg-white/20"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={() => goto(-1)}
            className="rounded-full border border-white/20 p-2 text-platinum/70"
            aria-label="Previous testimonial"
          >
            Prev
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => goto(1)}
            className="rounded-full border border-white/20 p-2 text-platinum/70"
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

