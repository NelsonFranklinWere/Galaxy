import type { Meta, StoryObj } from "@storybook/react";
import { ServicesGrid } from "./services-grid";

const meta: Meta<typeof ServicesGrid> = {
  title: "Services/ServicesGrid",
  component: ServicesGrid,
};

export default meta;

type Story = StoryObj<typeof ServicesGrid>;

export const Default: Story = {};

