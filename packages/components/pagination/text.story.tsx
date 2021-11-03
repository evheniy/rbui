import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item, Text } from '.';

export default {
  title: 'Components/Pagination/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
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
  children: 'Text',
};
