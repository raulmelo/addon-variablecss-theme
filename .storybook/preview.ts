import type { Preview } from "@storybook/react";
import Themes from './themes.json'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    designTokensCss: {
      label: "Themes",
      persistData: true,
      themes: Themes
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;
