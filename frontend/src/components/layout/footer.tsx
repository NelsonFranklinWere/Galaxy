import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Music4 } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteContact } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink } from "@/lib/utils";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/galaxycarhire",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/galaxycarhire",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@galaxycarhire",
    icon: Music4,
  },
  {
    label: "WhatsApp",
    href: buildWhatsappLink(
      siteContact.whatsappNumbers[0],
      "Hi Galaxy CarHire, reaching out from the site footer.",
    ),
    icon: MessageCircle,
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-graphite">
    <div className="container grid gap-12 py-12 md:grid-cols-3">
      <div className="space-y-4">
        <p className="font-display text-2xl text-platinum">Galaxy CarHire</p>
        <p className="text-sm text-platinum/70">
          Premium self-drive & chauffeur car hire services in Nairobi. Reliable
          support, spotless vehicles, and fast booking every day of the week.
        </p>
        <div className="flex gap-3">
          {siteContact.whatsappNumbers.map((whatsapp) => (
            <Button
              key={whatsapp}
              asChild
              size="sm"
              variant="secondary"
              className="uppercase tracking-[0.2em]"
            >
              <Link
                href={buildWhatsappLink(
                  whatsapp,
                  "Hello Galaxy CarHire, can we talk?",
                )}
                target="_blank"
                rel="noreferrer noopener"
              >
                WhatsApp {whatsapp.slice(-3)}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-12">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-platinum/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-platinum" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-platinum" href="/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 space-y-3 text-sm text-platinum/80">
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Contact
          </p>
          <p>{siteContact.address}</p>
          <p>{siteContact.email}</p>
          {siteContact.phones.map((phone) => (
            <p key={phone}>{phone}</p>
          ))}
          <div className="flex gap-3 pt-2">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="rounded-full border border-white/15 p-2 text-platinum/70 hover:text-platinum"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-platinum/60">
        © {new Date().getFullYear()} Galaxy CarHire. All rights reserved.
      </div>
    </div>
  </footer>
);

