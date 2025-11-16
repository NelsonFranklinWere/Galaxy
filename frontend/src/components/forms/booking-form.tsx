"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink } from "@/lib/utils";
import { logEvent } from "@/lib/analytics";
import { siteContact } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(9, "Phone is required"),
  travelDates: z.string().min(3, "Let us know your dates"),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof schema>;

type BookingFormProps = {
  vehicleName: string;
};

export const BookingForm = ({ vehicleName }: BookingFormProps) => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      message: `Interested in booking the ${vehicleName}.`,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: BookingFormValues) => {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, vehicle: vehicleName }),
      });
      if (!response.ok) throw new Error("Failed to submit");
    },
    onSuccess: () => {
      setStatus("success");
      form.reset();
      logEvent({
        name: "booking_submit_success",
        data: { vehicle: vehicleName },
      });
    },
    onError: () => {
      setStatus("error");
      logEvent({
        name: "booking_submit_error",
        data: { vehicle: vehicleName },
      });
    },
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    setStatus("idle");
    await mutation.mutateAsync(values);
  });

  const whatsappLink = buildWhatsappLink(
    siteContact.whatsappNumbers[0],
    `Hi Galaxy CarHire, I'm booking the ${vehicleName}.`,
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Full Name" error={form.formState.errors.name?.message}>
          <input
            type="text"
            {...form.register("name")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </FormField>
        <FormField label="Email" error={form.formState.errors.email?.message}>
          <input
            type="email"
            {...form.register("email")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </FormField>
        <FormField label="Phone" error={form.formState.errors.phone?.message}>
          <input
            type="tel"
            {...form.register("phone")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </FormField>
        <FormField
          label="Travel dates"
          error={form.formState.errors.travelDates?.message}
        >
          <input
            type="text"
            placeholder="e.g. 20-24 December"
            {...form.register("travelDates")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </FormField>
      </div>
      <FormField label="Message" error={form.formState.errors.message?.message}>
        <textarea
          rows={4}
          {...form.register("message")}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
        />
      </FormField>
      <div className="flex flex-wrap gap-4">
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Sending..." : "Send booking request"}
        </Button>
        <Button variant="secondary" asChild>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp confirmation
          </a>
        </Button>
      </div>
      {status === "success" && (
        <p className="text-sm text-emerald">Thank you! We will confirm shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-danger">
          Something went wrong. Please WhatsApp us right away.
        </p>
      )}
    </form>
  );
};

const FormField = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="space-y-2 text-sm text-platinum/80">
    <span className="block text-xs uppercase tracking-[0.3em] text-platinum/60">
      {label}
    </span>
    {children}
    {error && <span className="text-xs text-danger">{error}</span>}
  </label>
);

