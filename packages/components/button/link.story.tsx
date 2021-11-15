import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import { Link } from '.';

export default {
  title: 'Components/Button/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      // name: 'Test',
      description: 'Components content',
      control: { type: 'text' },
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
        defaultValue: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
      },
    },
    primary: { control: { type: 'boolean' } },
    secondary: { control: { type: 'boolean' } },
    success: { control: { type: 'boolean' } },
    danger: { control: { type: 'boolean' } },
    warning: { control: { type: 'boolean' } },
    info: { control: { type: 'boolean' } },
    light: { control: { type: 'boolean' } },
    dark: { control: { type: 'boolean' } },
    link: { control: { type: 'boolean' } },
    outline: { control: { type: 'boolean' } },
    lg: { control: { type: 'boolean' } },
    sm: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    nowrap: {
      description: 'If you don’t want the button text to wrap',
      control: { type: 'boolean' },
    },
    toggle: { control: { type: 'boolean' } },
    active: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const LinkStory = Template.bind({});
LinkStory.storyName = 'Link';
LinkStory.args = {
  // Base
  children: 'Test',
  className: '',
  // Link
  disabled: false,
  // Colors
  primary: true,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
  // Link
  link: false,
  // Outline
  outline: false,
  // Sizes
  lg: false,
  sm: false,
  // Nowrap
  nowrap: false,
  // Toggle
  toggle: false,
  active: false,
};
