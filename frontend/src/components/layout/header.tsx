"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/lib/constants";
import { logEvent } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/utils";

const primaryWhatsapp = siteContact.whatsappNumbers[0] ?? "";

export const Header = () => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname?.startsWith(href);

  const navContent = (
    <nav className="flex flex-col gap-4 text-base md:flex-row md:items-center md:gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium uppercase tracking-[0.2em] transition ${
            isActive(item.href)
              ? "text-platinum"
              : "text-platinum/60 hover:text-platinum"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  const bookNowHref = buildWhatsappLink(
    primaryWhatsapp,
    "Hi Galaxy CarHire, I'd like to book a ride.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/90 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-platinum text-night font-display text-xl">
            G
          </div>
          <div>
            <p className="font-display text-lg leading-none text-ivory">
              Galaxy CarHire
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-platinum/70">
              Nairobi
            </p>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          {navContent}
          <Button
            size="pill"
            onClick={() =>
              logEvent({ name: "cta_click", data: { label: "Book Now" } })
            }
            asChild
          >
            <Link href={bookNowHref} target="_blank" rel="noreferrer noopener">
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="secondary" size="sm" className="gap-2">
                <Menu className="h-4 w-4" /> Menu
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-80 flex-col gap-6 bg-obsidian p-6 shadow-glow">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl">Navigate</p>
                  <Dialog.Close asChild>
                    <button className="rounded-full border border-white/20 p-2">
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
                {navContent}
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link
                      href={bookNowHref}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Book Now
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-platinum/70">
                  {siteContact.phones.map((phone) => (
                    <Fragment key={phone}>
                      <p>{phone}</p>
                    </Fragment>
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};

