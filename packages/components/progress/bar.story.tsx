import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Progress, { Bar } from '.';

export default {
  title: 'Components/Progress/Bar',
  component: Bar,
  parameters: {
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
    min: {
      description: 'Min value',
      control: { type: 'number', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    max: {
      description: 'Max value',
      control: { type: 'number', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    now: {
      description: 'Current value',
      control: { type: 'number', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    label: {
      description: 'Add labels to progress bar',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    striped: {
      description: 'Add striped to any progress bar to apply a stripe via CSS gradient over the progress bar’s background color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    animated: {
      description: 'The striped gradient can also be animated',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    success: {
      description: 'Success color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    info: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    warning: {
      description: 'Warning color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    danger: {
      description: 'Danger color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Bar>;

const Template: ComponentStory<typeof Bar> = args => (
  <Progress>
    <Bar {...args} />
  </Progress>
);

export const BarStory = Template.bind({});
BarStory.storyName = 'Bar';
BarStory.args = {
  // Base
  className: '',
  // Progress
  min: 0,
  max: 100,
  now: 25,
  label: true,
  striped: true,
  animated: true,
  // Colors
  success: false,
  info: false,
  warning: false,
  danger: false,
};
