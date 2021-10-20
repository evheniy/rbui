import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import CloseButton from '.';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
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
          summary: 'Close',
        },
      },
    },
    disabled: {
      description: 'Disabled close buttons change their opacity',
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
    white: {
      description: 'Change the default dark color to white',
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
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => <CloseButton {...args} />;

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'CloseButton';
CloseButtonStory.args = {
  'aria-label': 'Close',
  disabled: false,
  white: false,
};
