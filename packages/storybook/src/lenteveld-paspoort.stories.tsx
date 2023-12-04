/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { ExampleProductPage } from './components/ExampleProductPage';

const meta = {
  title: 'Template/Productpagina',
  id: 'template-product-page',
  component: ExampleProductPage,
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
} satisfies Meta<typeof ExampleProductPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
