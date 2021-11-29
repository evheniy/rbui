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
  argTypes: {
    children: {
      description: 'Children',
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
    pill: {
      description: 'Modify a Badge and position it in the corner of a link or button.',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    circle: {
      description: 'Badge without a count for a more generic indicator',
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
      description: 'Light color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    dark: {
      description: 'Dark color',
      control: { type: 'boolean', required: false },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const BadgeStory = Template.bind({});
BadgeStory.storyName = 'Badge';
BadgeStory.args = {
  // Base
  children: 'Badge',
  className: '',
  // Pill
  pill: false,
  // Circle
  circle: false,
  // Colors
  primary: false,
  secondary: true,
  success: false,
  danger: false,
  warning: false,
  info: false,
  light: false,
  dark: false,
};
