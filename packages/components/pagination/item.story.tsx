import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';

export default {
  title: 'Components/Pagination/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => (
  <Pagination>
    <Item {...args} />
  </Pagination>
);

export const ItemStory = Template.bind({});
ItemStory.storyName = 'Item';
ItemStory.args = {
  children: 'Text',
  active: false,
  disabled: false,
  href: '#',
  custom: false,
};
