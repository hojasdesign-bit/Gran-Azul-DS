import React from 'react';
import '../src/tokens.css';
import '../src/base.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: { Claro: 'claro', Oscuro: 'oscuro' },
      defaultTheme: 'Claro',
      attributeName: 'data-theme',
    }),
    (Story) => React.createElement('div', { style: { padding: 24, minHeight: '100%' } }, React.createElement(Story)),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { toc: true },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
};
export default preview;
