import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteContact } from "@/lib/constants";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact | Galaxy CarHire",
  description:
    "Talk to Galaxy CarHire via phone, WhatsApp, or message form. Includes FAQ, map, and booking hotline.",
};

const ContactPage = () => (
  <div className="space-y-16 pb-24 pt-10">
    <section className="container space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="We are available 24/7 for bookings and inquiries"
        description="Call, WhatsApp, or send a message to secure your next ride."
      />
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="glass-panel p-6">
          <ContactForm />
        </div>
        <div className="space-y-4 rounded-2xl border border-white/10 p-6 text-sm text-platinum/80">
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Hotlines
          </p>
          {siteContact.phones.map((phone) => (
            <p key={phone} className="text-lg text-platinum">
              {phone}
            </p>
          ))}
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Email
          </p>
          <p>{siteContact.email}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Address
          </p>
          <p>{siteContact.address}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Hours
          </p>
          <p>{siteContact.businessHours}</p>
          <p>WhatsApp available 24/7.</p>
        </div>
      </div>
    </section>

    <section className="container grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book"
          description="Requirements, payments, deliveries, insurance, and age policies."
        />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="glass-panel space-y-2 p-4">
              <p className="font-semibold">{faq.question}</p>
              <p className="text-sm text-platinum/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
        <iframe
          title="Galaxy CarHire map"
          src={siteContact.googleMapEmbed}
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </div>
);

export default ContactPage;

