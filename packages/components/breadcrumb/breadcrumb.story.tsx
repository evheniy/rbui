import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Breadcrumb, { Item } from '.';

export default {
  title: 'Components/Breadcrumb/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    divider: {
      description: 'Custom divider',
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
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = args => (
  <Breadcrumb {...args}>
    <Item href="#">Home</Item>
    <Item active>Library</Item>
  </Breadcrumb>
);

export const Component = Template.bind({});
Component.storyName = 'Breadcrumb';
Component.args = {
  divider: '',
  className: '',
};
