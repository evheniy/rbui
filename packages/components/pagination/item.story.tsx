import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';

export default {
  title: 'Components/Pagination/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      description: 'Children',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    className: {
      description: 'Default class',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    active: {
      description: 'Active state',
      control: { type: 'boolean' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: { type: 'boolean' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    href: {
      description: 'Item href',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    custom: {
      description: 'Use Link/Text components',
      control: { type: 'boolean' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => (
  <Pagination>
    <Item {...args} />
  </Pagination>
);

export const ItemStory = Template.bind({});
ItemStory.storyName = 'Item';
ItemStory.args = {
  // Base
  children: 'Text',
  className: '',
  // Item
  active: false,
  disabled: false,
  href: '#',
  custom: false,
};
