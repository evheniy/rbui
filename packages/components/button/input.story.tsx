import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import { Input } from '.';

export default {
  title: 'Components/Button/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    value: {
      description: 'Input value',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    className: {
      description: 'Default class',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    disabled: {
      description: 'Disabled button',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    primary: {
      description: 'Primary color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    secondary: {
      description: 'Secondary color',
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
    danger: {
      description: 'Danger color',
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
    info: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    light: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    dark: {
      description: 'Info color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    link: {
      description: 'Link style',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    outline: {
      description: 'Outline style',
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
    nowrap: {
      description: 'Disable button text wrap',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    toggle: {
      description: 'Toggle button',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    active: {
      description: 'Toggle a button’s active state',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.storyName = 'Input';
InputStory.args = {
  // Input
  value: 'Test',
  // Base
  className: '',
  disabled: false,
  // colors
  primary: true,
  secondary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
  // Link
  link: false,
  // Outline
  outline: false,
  // Sizes
  lg: false,
  sm: false,
  // Nowrap
  nowrap: false,
  // Toggle
  toggle: false,
  active: false,
};
