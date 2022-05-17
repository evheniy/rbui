import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import { Link } from './Item';

import Pagination, { Item } from '.';

export default {
  title: 'Components/Pagination/Link',
  component: Link,
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
    href: {
      description: 'Link href',
      control: { type: 'text', required: false },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <Pagination>
    <Item custom>
      <Link {...args} />
    </Item>
  </Pagination>
);

export const LinkStory = Template.bind({});
LinkStory.storyName = 'Link';
LinkStory.args = {
  // Base
  children: 'Text',
  className: '',
  href: '#',
};
