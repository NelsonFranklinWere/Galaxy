"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  car: z.string().min(2, "Car selection is required"),
  hireDates: z.string().min(2, "Share your hire dates"),
  message: z.string().min(5),
});

type ContactValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      car: "",
      hireDates: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ContactValues) => {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          vehicle: values.car,
          travelDates: values.hireDates,
        }),
      });
      if (!res.ok) throw new Error("Failed");
    },
    onSuccess: () => {
      setStatus("success");
      form.reset();
    },
    onError: () => setStatus("error"),
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    setStatus("idle");
    await mutation.mutateAsync(values);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message}>
          <input
            {...form.register("name")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </Field>
        <Field label="Phone" error={form.formState.errors.phone?.message}>
          <input
            type="tel"
            {...form.register("phone")}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </Field>
        <Field label="Car you want to hire" error={form.formState.errors.car?.message}>
          <input
            {...form.register("car")}
            placeholder="e.g. Toyota Prado TX"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </Field>
        <Field label="Hire dates" error={form.formState.errors.hireDates?.message}>
          <input
            {...form.register("hireDates")}
            placeholder="e.g. 12 - 15 March"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
          />
        </Field>
      </div>
      <Field label="Message" error={form.formState.errors.message?.message}>
        <textarea
          rows={4}
          {...form.register("message")}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3"
        />
      </Field>
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Sending..." : "Send message"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-emerald">Thanks! We will call you shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-danger">
          Something went wrong. WhatsApp us immediately.
        </p>
      )}
    </form>
  );
};

const Field = ({
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

