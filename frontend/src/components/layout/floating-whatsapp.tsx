"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteContact } from "@/lib/constants";
import { buildWhatsappLink } from "@/lib/utils";

const defaultMessage =
  "Hi Galaxy CarHire, I'm ready to reserve a luxury car. Please assist.";

const WhatsappIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    className="h-8 w-8 fill-current"
  >
    <path d="M380.9 97.1C339-1.9 227.9-33.3 138.8 8.6 55.6 47.2 18.2 136.2 43 219.2L1.4 351.1c-2.2 7.1 1.8 14.7 9 16.9 1.3.4 2.7.6 4 .6 1.9 0 3.8-.4 5.6-1.3l132-57.5c80.5 42.5 179.1 13.1 219.6-66.9 27.3-54.5 28.4-118.7 3.3-173.8zM222.2 338.6c-30.2 0-59.8-8.1-85.5-23.4l-6.1-3.6-78.3 34.1 16.7-79.5-3.9-6.5C44 229.6 36 199.8 36 169.1 36 103.5 89.5 50 155.1 50c31.9 0 61.9 12.4 84.5 35 22.6 22.6 35 52.6 35 84.5-.1 65.6-53.6 119.1-119.2 119.1zm68-88.4c-3.7-1.9-22-10.8-25.4-12-3.4-1.2-5.9-1.9-8.4 1.9-2.5 3.7-9.6 12-11.8 14.5-2.2 2.5-4.4 2.8-8.1.9-22.1-11.1-36.6-19.8-51.3-44.8-3.9-6.7 3.9-6.2 11.1-20.7 1.2-2.5.6-4.6-.3-6.5-.9-1.9-8.4-20.3-11.5-27.8-3-7.2-6.1-6.2-8.4-6.3-2.2-.1-4.6-.1-7.1-.1-2.5 0-6.5.9-9.8 4.6-3.4 3.7-12.9 12.6-12.9 30.8 0 18.2 13.2 35.9 15 38.3 1.9 2.5 26 39.7 63 55.6 8.8 3.8 15.6 6.1 20.9 7.8 8.8 2.8 16.8 2.4 23.1 1.5 7-1 21.7-8.9 24.7-17.5 3-8.6 3-16 2.1-17.5-.8-1.5-3.4-2.4-7.1-4.3z" />
  </svg>
);

export const FloatingWhatsapp = () => (
  <motion.div
    className="fixed bottom-6 right-6 z-40"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >
    <Link
      href={buildWhatsappLink(siteContact.whatsappNumbers[0], defaultMessage)}
      target="_blank"
      rel="noreferrer noopener"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-glow ring-2 ring-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-transform"
      aria-label="Chat with Galaxy CarHire on WhatsApp"
    >
      <WhatsappIcon />
    </Link>
  </motion.div>
);

