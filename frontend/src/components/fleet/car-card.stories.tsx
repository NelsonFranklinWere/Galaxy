import type { Meta, StoryObj } from "@storybook/react";
import { CarCard } from "./car-card";
import { cars } from "@/data/cars";

const meta: Meta<typeof CarCard> = {
  title: "Fleet/CarCard",
  component: CarCard,
  args: {
    car: cars[0],
  },
};

export default meta;

type Story = StoryObj<typeof CarCard>;

export const Default: Story = {};

