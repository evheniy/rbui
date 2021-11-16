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
      description: 'Active Item',
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
      description: 'Item url',
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
  children: 'Library',
  className: '',
  active: true,
  href: '',
};
