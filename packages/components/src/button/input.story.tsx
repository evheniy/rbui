import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import { Input } from '.';

export default {
  title: 'Components/Button/Input',
  component: Input,
  argTypes: {
    value: {
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.storyName = 'Input';
InputStory.args = {
  value: 'Test',
  disabled: false,
  toggle: false,
  active: false,
  primary: true,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
  link: false,
  outline: false,
  lg: false,
  sm: false,
  nowrap: false,
};
