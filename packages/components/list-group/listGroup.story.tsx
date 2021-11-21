import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import ListGroup, { Item } from '.';

export default {
  title: 'Components/ListGroup/ListGroup',
  component: ListGroup,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
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
    horizontal: {
      description: 'Add ""horizontal" to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant {sm|md|lg|xl|xxl} to make a list group horizontal starting at that breakpoint’s min-width. Currently horizontal list groups cannot be combined with flush list groups.',
      control: { type: 'select' },
      options: [false, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    flush: {
      description: 'Add "flush" to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).',
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
} as ComponentMeta<typeof ListGroup>;

const Template: ComponentStory<typeof ListGroup> = args => (
  <ListGroup {...args}>
    <Item active>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item disabled>And a fifth one</Item>
  </ListGroup>
);

export const ListGroupStory = Template.bind({});
ListGroupStory.storyName = 'ListGroup';
ListGroupStory.args = {
  // Base
  className: '',
  // Horizontal
  horizontal: false,
  // Flush
  flush: false,
};
