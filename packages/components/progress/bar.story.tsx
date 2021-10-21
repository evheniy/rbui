import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Progress, { Bar } from '.';

export default {
  title: 'Components/Progress/Bar',
  component: Bar,
  parameters: { options: { showPanel: true } },
} as ComponentMeta<typeof Bar>;

const Template: ComponentStory<typeof Bar> = args => (
  <Progress>
    <Bar {...args} />
  </Progress>
);

export const BarStory = Template.bind({});
BarStory.storyName = 'Bar';
BarStory.args = {
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
