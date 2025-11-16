"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";
import { buildWhatsappLink } from "@/lib/utils";
import { siteContact } from "@/lib/constants";

const heroSlides = cars.slice(0, 4).map((car) => ({
  title: car.name,
  description: car.heroTagline,
  image: car.heroImage,
  slug: `/fleet/${car.slug}`,
  whatsapp: buildWhatsappLink(
    siteContact.whatsappNumbers[0],
    car.whatsappMessage,
  ),
}));

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const activeSlide = heroSlides[index];

  return (
    <section className="relative overflow-hidden rounded-2xl bg-hero-gradient pt-10 text-ivory md:pt-16">
      <div className="container grid items-center gap-10 pb-16 pt-10 md:grid-cols-2">
        <div className="space-y-6">
          <span className="chip">Premium Nairobi Car Hire</span>
          <h1 className="hero-text text-4xl leading-tight md:text-5xl lg:text-6xl">
            Drive Luxury. Drive Freedom. Drive Galaxy.
          </h1>
          <p className="text-lg text-platinum/80">
            Premium car hire in Nairobi - self-drive & chauffeur services for
            comfort, safety, and class.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#booking">BOOK A RIDE NOW</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/fleet">VIEW AVAILABLE CARS</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-platinum/70">
            <p>Reliable. Flexible. Affordable.</p>
            <p>Premium SUVs & sedans, always clean.</p>
            <p>WhatsApp available 24/7.</p>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full">
          <AnimatePresence>
            <motion.div
              key={activeSlide.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Featured Ride
                </p>
                <h3 className="text-2xl font-semibold">{activeSlide.title}</h3>
                <p className="text-sm text-white/80">{activeSlide.description}</p>
                <Button size="sm" variant="secondary" asChild>
                  <Link
                    href={activeSlide.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book This Car
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute right-4 top-4 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={_.slug}
                onClick={() => setIndex(idx)}
                className={`h-2 w-8 rounded-full transition ${
                  idx === index ? "bg-platinum" : "bg-white/30"
                }`}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

