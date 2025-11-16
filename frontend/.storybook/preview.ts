import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "night",
      values: [
        { name: "night", value: "#050505" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;

