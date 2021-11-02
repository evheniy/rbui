import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Spinner from '.';

export default {
  title: 'Components/Spinner/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const SpinnerStory = Template.bind({});
SpinnerStory.storyName = 'Spinner';
SpinnerStory.args = {
  grow: false,
  sm: false,
  primary: false,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
};
