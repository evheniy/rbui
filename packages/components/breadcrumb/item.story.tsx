import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Breadcrumb, { Item } from '.';

export default {
  title: 'Components/Breadcrumb/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      description: 'Children',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
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
      description: 'Active Item',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    href: {
      description: 'Item url',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => (
  <Breadcrumb>
    <Item href="#">Home</Item>
    <Item {...args} />
  </Breadcrumb>
);

export const Component = Template.bind({});
Component.storyName = 'Item';
Component.args = {
  // Base
  children: 'Library',
  className: '',
  // Item
  active: true,
  href: '',
};
