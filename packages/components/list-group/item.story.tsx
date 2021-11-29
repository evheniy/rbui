import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import ListGroup, { Item } from '.';

export default {
  title: 'Components/ListGroup/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    className: {
      description: 'Default class',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    active: {
      description: 'Active item',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      description: 'Disabled item',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    primary: {
      description: 'Primary color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    secondary: {
      description: 'Secondary color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    success: {
      description: 'Success color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    danger: {
      description: 'Danger color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    warning: {
      description: 'Warning color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    info: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    light: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    dark: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => (
  <ListGroup>
    <Item>An item</Item>
    <Item {...args}>Item</Item>
    <Item>An item</Item>
  </ListGroup>
);

export const ItemStory = Template.bind({});
ItemStory.storyName = 'Item';
ItemStory.args = {
  // Base
  className: '',
  // Active
  active: false,
  // Disabled
  disabled: false,
  // Colors
  primary: false,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
};
