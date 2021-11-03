import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination {...args}>
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);

export const PaginationStory = Template.bind({});
PaginationStory.storyName = 'Pagination';
PaginationStory.args = {
  'aria-label': 'Page navigation example',
  sm: false,
  lg: false,
};
