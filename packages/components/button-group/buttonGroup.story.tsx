import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@rb/components/button';

import ButtonGroup from '.';

export default {
  title: 'Components/ButtonGroup/ButtonGroup',
  component: ButtonGroup,
  parameters: { options: { showPanel: true } },
  argTypes: {
    'aria-label': {
      description: 'Text for screen readers',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'ButtonGroup',
        },
      },
    },
    vertical: { control: { type: 'boolean' } },
    lg: { control: { type: 'boolean' } },
    sm: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = args => (
  <ButtonGroup {...args}>
    <Button primary>Left</Button>
    <Button primary>Middle</Button>
    <Button primary>Right</Button>
  </ButtonGroup>
);

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'ButtonGroup';
CloseButtonStory.args = {
  'aria-label': 'ButtonGroup',
  vertical: false,
  lg: false,
  sm: false,
};
