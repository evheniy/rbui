import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';
import { Text } from './Item';

export default {
  title: 'Components/Pagination/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      description: 'Children',
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
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Pagination>
    <Item custom>
      <Text {...args} />
    </Item>
  </Pagination>
);

export const TextStory = Template.bind({});
TextStory.storyName = 'Text';
TextStory.args = {
  // Base
  children: 'Text',
  className: '',
};
