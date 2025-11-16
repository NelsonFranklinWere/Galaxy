type EventName =
  | "page_view"
  | "cta_click"
  | "booking_submit_success"
  | "booking_submit_error";

type AnalyticsPayload = {
  name: EventName;
  data?: Record<string, string | number | boolean>;
};

export const logEvent = ({ name, data }: AnalyticsPayload) => {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", name, data);
    return;
  }

  // Replace with actual analytics provider such as GA4 or PostHog.
  window.dispatchEvent(
    new CustomEvent("galaxy-analytics", {
      detail: { name, data, timestamp: Date.now() },
    }),
  );
};

