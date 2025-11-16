import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm } from "@/components/forms/booking-form";
import { renderWithQueryClient } from "./utils";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true } as Response),
  ) as typeof fetch;
});

describe("BookingForm", () => {
  it("validates required fields", async () => {
    renderWithQueryClient(<BookingForm vehicleName="Toyota Prado" />);
    const submit = screen.getByRole("button", { name: /send booking/i });
    await userEvent.click(submit);
    await screen.findByText(/name is required/i);
  });

  it("submits valid payload", async () => {
    renderWithQueryClient(<BookingForm vehicleName="Toyota Prado" />);
    await userEvent.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/phone/i), "+254700000000");
    await userEvent.type(
      screen.getByLabelText(/travel dates/i),
      "12-14 March",
    );
    await userEvent.type(screen.getByLabelText(/message/i), "Need ASAP");
    await userEvent.click(
      screen.getByRole("button", { name: /send booking request/i }),
    );
    await waitFor(() =>
      expect(
        screen.getByText(/thank you! we will confirm shortly/i),
      ).toBeInTheDocument(),
    );
  });
});

