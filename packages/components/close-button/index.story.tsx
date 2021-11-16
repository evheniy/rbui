import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import CloseButton from '.';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
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
    onClick: {
      description: 'Button action',
      action: 'clicked',
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
      control: { type: null },
    },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => <CloseButton {...args} />;

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'CloseButton';
CloseButtonStory.args = {
  // Base
  'aria-label': 'Close',
  className: '',
  disabled: false,
  // White
  white: false,
};
