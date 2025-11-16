import { NextResponse } from "next/server";
import { z } from "zod";
import { sendInquiryEmail } from "@/lib/notifications";

const inquirySchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  phone: z.string(),
  travelDates: z.string().optional(),
  message: z.string().optional(),
  vehicle: z.string().optional(),
  need: z.string().optional(),
});

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = inquirySchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await sendInquiryEmail({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    vehicle: parsed.data.vehicle ?? parsed.data.need ?? "General inquiry",
    message: parsed.data.message,
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}

