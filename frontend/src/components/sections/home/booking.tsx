import { BookingForm } from "@/components/forms/booking-form";

export const BookingSection = () => (
  <section id="booking" className="container grid gap-8 lg:grid-cols-2">
    <div className="space-y-4">
      <p className="chip">Instant Booking</p>
      <h2 className="section-title">
        Tell us when & where - dispatch confirms instantly.
      </h2>
      <p className="section-subtitle">
        Share your ideal vehicle or service, travel dates, and pickup point. Our
        concierge responds on WhatsApp and email with confirmation in minutes.
      </p>
    </div>
    <div className="glass-panel p-6">
      <BookingForm vehicleName="Preferred vehicle" />
    </div>
  </section>
);

