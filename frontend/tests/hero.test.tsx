import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/home/hero";

describe("HeroSection", () => {
  it("renders CTA links", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /book a ride now/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view available cars/i }),
    ).toBeInTheDocument();
  });
});

