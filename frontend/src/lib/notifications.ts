import { Resend } from "resend";
import { siteContact } from "@/lib/constants";

type InquiryPayload = {
  name: string;
  email?: string;
  phone: string;
  vehicle: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;

export const sendInquiryEmail = async (payload: InquiryPayload) => {
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY missing. Skipping transactional email.");
    return;
  }

  const resend = new Resend(resendApiKey);
  await resend.emails.send({
    from: "Galaxy CarHire <hello@galaxycarhire.com>",
    to: [siteContact.email],
    subject: `New booking request: ${payload.vehicle}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email ?? "Not provided"}`,
      `Phone: ${payload.phone}`,
      `Vehicle: ${payload.vehicle}`,
      `Message: ${payload.message ?? "N/A"}`,
    ].join("\n"),
  });
};

