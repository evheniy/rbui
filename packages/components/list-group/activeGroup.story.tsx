import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import ActiveGroup, { LinkItem } from './ActiveGroup';

export default {
  title: 'Components/ListGroup/ActiveGroup',
  component: ActiveGroup,
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
    horizontal: {
      description: 'Add ""horizontal" to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant {sm|md|lg|xl|xxl} to make a list group horizontal starting at that breakpoint’s min-width. Currently horizontal list groups cannot be combined with flush list groups.',
      control: { type: 'select', required: false },
      options: [false, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    flush: {
      description: 'Add "flush" to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof ActiveGroup>;

const Template: ComponentStory<typeof ActiveGroup> = args => (
  <ActiveGroup {...args}>
    <LinkItem href="#" active>An item</LinkItem>
    <LinkItem href="#">A second item</LinkItem>
    <LinkItem href="#">A third item</LinkItem>
    <LinkItem href="#">A fourth item</LinkItem>
    <LinkItem href="#" disabled>And a fifth one</LinkItem>
  </ActiveGroup>
);

export const ActiveGroupStory = Template.bind({});
ActiveGroupStory.storyName = 'ActiveGroup';
ActiveGroupStory.args = {
  // Base
  className: '',
  // Horizontal
  horizontal: false,
  // Flush
  flush: false,
};
