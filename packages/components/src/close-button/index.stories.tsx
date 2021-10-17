import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import CloseButton from '.';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
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
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => <CloseButton {...args} />;

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'CloseButton';
CloseButtonStory.args = {
  'aria-label': 'Close',
  disabled: false,
};
