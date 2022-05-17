import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    'aria-label': {
      description: 'aria-label',
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
    sm: {
      description: 'Smaller pagination',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    lg: {
      description: 'Larger pagination',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination {...args}>
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);

export const PaginationStory = Template.bind({});
PaginationStory.storyName = 'Pagination';
PaginationStory.args = {
  // Base
  'aria-label': 'Page navigation example',
  className: '',
  // Sizes
  sm: false,
  lg: false,
};
