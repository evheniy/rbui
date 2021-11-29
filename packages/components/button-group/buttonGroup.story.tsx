import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@rbui/components/button';

import ButtonGroup from '.';

export default {
  title: 'Components/ButtonGroup/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    className: {
      description: 'Default class',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    'aria-label': {
      description: 'Text for screen readers',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: 'ButtonGroup',
        },
      },
    },
    vertical: {
      description: 'Vertical variation',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    lg: {
      description: 'Large size',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    sm: {
      description: 'Small size',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
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
  // Base
  className: '',
  'aria-label': 'ButtonGroup',
  // ButtonGroup
  vertical: false,
  // Sizes
  lg: false,
  sm: false,
};
