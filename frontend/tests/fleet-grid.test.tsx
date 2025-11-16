import { fireEvent, render, screen } from "@testing-library/react";
import { FleetGrid } from "@/components/fleet/fleet-grid";

describe("FleetGrid", () => {
  it("filters SUVs", () => {
    render(<FleetGrid />);
    const initialText = screen.getByText(/showing/i);
    expect(initialText).toBeInTheDocument();

    const suvButton = screen.getByRole("button", { name: /suv/i });
    fireEvent.click(suvButton);

    const cards = screen.getAllByText(/Daily/i);
    expect(cards.length).toBeGreaterThan(0);
  });
});

