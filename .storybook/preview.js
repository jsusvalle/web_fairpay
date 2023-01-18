import { initialize, mswDecorator } from 'msw-storybook-addon';
import "tailwindcss/tailwind.css";

import { mainProviderDecorator } from "./decorators/main-provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

initialize();
// Provide the MSW addon decorator globally
export const decorators = [mswDecorator, mainProviderDecorator];