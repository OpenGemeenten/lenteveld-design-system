import { defineCustomElements } from '@opengemeenten/web-components-stencil/loader/index.js';
import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { Document } from '@utrecht/component-library-react/dist/css-module';
import { defineCustomElements as defineCustomElementsUtrecht } from '@utrecht/web-component-library-stencil/loader/index.js';
import '@opengemeenten/barneveld-design-tokens/dist/index.css';
import '@opengemeenten/barneveld-font/src/index.scss';
import '@opengemeenten/lenteveld-design-tokens/dist/index.css';
import '@opengemeenten/lenteveld-font/src/index.scss';
import '@opengemeenten/nieuwegein-design-tokens/dist/index.css';
import '@opengemeenten/nieuwegein-font/src/index.scss';

defineCustomElements();
defineCustomElementsUtrecht();

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Barneveld: 'barneveld-theme',
        Lenteveld: 'lenteveld-theme',
        Nieuwegein: 'nieuwegein-theme',
      },
      defaultTheme: 'Lenteveld',
    }),
    (Story: any) => <Document>{Story()}</Document>,
  ],
  parameters: {
    controls: { expanded: false },
    status: {
      statuses: {
        PRODUCTION: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        BETA: {
          background: '#3065ee',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        ALPHA: {
          background: '#e0bc2e',
          color: '#000000',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
      },
    },
    options: {
      panelPosition: 'right',
    },
  },
};

export default preview;
