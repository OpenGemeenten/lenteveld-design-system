/* @license CC0-1.0 */

import { OmgButton } from '@opengemeenten/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtDocument,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';

const ProductPage = () => (
  <UtrechtDocument>
    <UtrechtArticle>
      <UtrechtHeading1>Paspoort aanvragen</UtrechtHeading1>
      <UtrechtParagraph lead>
        Wilt u een paspoort aanvragen? Maak een afspraak om langs te komen in ons dorpshuis. U betaalt de kosten bij de
        aanvraag. Na 5 werkdagen kunt u het paspoort of de identiteitskaart zelf ophalen in het gemeentehuis.
      </UtrechtParagraph>
      <UtrechtButtonGroup>
        <OmgButton>Maak een afspraak</OmgButton>
      </UtrechtButtonGroup>
      <UtrechtHeading2>Meenemen</UtrechtHeading2>
    </UtrechtArticle>
  </UtrechtDocument>
);

const meta = {
  title: 'Template/Productpagina',
  id: 'template-product-page',
  component: ProductPage,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'De productpagina is de hart en ziel van gemeentelijke dienstverlening.',
      },
    },
  },
} satisfies Meta<typeof ProductPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
