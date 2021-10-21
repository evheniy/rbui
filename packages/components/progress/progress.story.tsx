import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Progress from '.';

export default {
  title: 'Components/Progress/Progress',
  component: Progress,
  parameters: { options: { showPanel: true } },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />;

export const ProgressStory = Template.bind({});
ProgressStory.storyName = 'Progress';
ProgressStory.args = {
  min: 0,
  max: 100,
  now: 25,
  label: true,
  success: false,
  info: false,
  warning: false,
  danger: false,
  striped: true,
  animated: true,
};
