import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Badge from '.';

export default {
  title: 'Components/Badges/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const BadgeStory = Template.bind({});
BadgeStory.storyName = 'Badge';
BadgeStory.args = {
  children: 'Badge',
  pill: false,
  circle: false,
  primary: false,
  secondary: true,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
};
