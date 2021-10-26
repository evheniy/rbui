import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Breadcrumb, { Item } from '.';

export default {
  title: 'Components/Breadcrumb/Item',
  component: Item,
  parameters: { options: { showPanel: true } },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => (
  <Breadcrumb>
    <Item href="#">Home</Item>
    <Item {...args} />
  </Breadcrumb>
);

export const Component = Template.bind({});
Component.storyName = 'Item';
Component.args = {
  active: true,
  href: '',
  children: 'Library',
};
